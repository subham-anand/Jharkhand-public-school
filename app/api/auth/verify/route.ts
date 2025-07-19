import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { Admin } from '@/models/Admin';
import connectDB from '@/lib/mongodb';

const JWT_SECRET = process.env.JWT_SECRET!;

interface AuthUser {
  id: string;
  email: string;
  role: string;
  permissions: string[];
}

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'No token provided' },
        { status: 401 }
      );
    }

    // Verify JWT token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    
    await connectDB();
    
    // Get user from database
    const admin = await Admin.findById(decoded.userId).select('-password');
    
    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    const user: AuthUser = {
      id: admin._id.toString(),
      email: admin.email,
      role: admin.role,
      permissions: admin.permissions || []
    };

    return NextResponse.json({
      success: true,
      user
    });

  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid token' },
      { status: 401 }
    );
  }
}
