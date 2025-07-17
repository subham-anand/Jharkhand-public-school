import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/services/AuthService';

export class AuthController {
  // Send OTP
  static async sendOTP(request: NextRequest) {
    try {
      const { email } = await request.json();

      if (!email) {
        return NextResponse.json(
          { error: 'Email is required' },
          { status: 400 }
        );
      }

      const result = await AuthService.sendOTP(email);
      return NextResponse.json(result, { status: result.success ? 200 : 400 });
    } catch (error) {
      console.error('Send OTP error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }

  // Verify OTP and Login
  static async verifyOTP(request: NextRequest) {
    try {
      const { email, otp } = await request.json();

      if (!email || !otp) {
        return NextResponse.json(
          { error: 'Email and OTP are required' },
          { status: 400 }
        );
      }

      const result = await AuthService.verifyOTPAndLogin(email, otp);
      if (!result) {
        return NextResponse.json(
          { error: 'Invalid or expired OTP' },
          { status: 401 }
        );
      }

      const { admin, token } = result;

      // Set HTTP-only cookie
      const response = NextResponse.json({
        success: true,
        admin: {
          id: admin._id,
          email: admin.email,
          role: admin.role,
          permissions: admin.getPermissions()
        }
      });

      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      return response;
    } catch (error) {
      console.error('Login error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }

  // Logout
  static async logout() {
    const response = NextResponse.json({ success: true });
    response.cookies.delete('auth-token');
    return response;
  }

  // Get current user
  static async getCurrentUser(request: NextRequest) {
    try {
      const token = request.cookies.get('auth-token')?.value;
      
      if (!token) {
        return NextResponse.json(
          { error: 'Not authenticated' },
          { status: 401 }
        );
      }

      const user = await AuthService.getCurrentUser(token);
      if (!user) {
        return NextResponse.json(
          { error: 'Invalid token' },
          { status: 401 }
        );
      }

      return NextResponse.json({ user });
    } catch (error) {
      console.error('Get current user error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }

  // Create new admin (only by existing admin)
  static async createAdmin(request: NextRequest) {
    try {
      const token = request.cookies.get('auth-token')?.value;
      
      if (!token) {
        return NextResponse.json(
          { error: 'Not authenticated' },
          { status: 401 }
        );
      }

      const currentUser = await AuthService.getCurrentUser(token);
      if (!currentUser || !['super_admin', 'admin'].includes(currentUser.role)) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 403 }
        );
      }

      const adminData = await request.json();
      const newAdmin = await AuthService.createAdmin(adminData, currentUser.id);

      return NextResponse.json({
        success: true,
        admin: {
          id: newAdmin._id,
          email: newAdmin.email,
          role: newAdmin.role,
          permissions: newAdmin.getPermissions()
        }
      });
    } catch (error) {
      console.error('Create admin error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Internal server error';
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }
  }

  // Initialize first admin (development only)
  static async initializeFirstAdmin() {
    try {
      if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json(
          { error: 'Only available in development' },
          { status: 403 }
        );
      }

      await AuthService.initializeFirstAdmin();
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Initialize first admin error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }
}
