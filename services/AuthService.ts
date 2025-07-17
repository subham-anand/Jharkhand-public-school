import jwt from 'jsonwebtoken';
import { Admin } from '@/models/Admin';
import connectDB from '@/lib/mongodb';
import { EmailService } from './EmailService';
// import { EmailService } from '@/services/EmailService';

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  permissions: string[];
}

interface AdminDocument {
  _id: string;
  email: string;
  role: string;
  comparePassword: (password: string) => Promise<boolean>;
  getPermissions: () => string[];
  lastLogin?: Date;
  save: () => Promise<void>;
  isActive: boolean;
}

export class AuthService {
  // Generate JWT token
  static generateToken(admin: AdminDocument): string {
    const payload = {
      id: admin._id,
      email: admin.email,
      role: admin.role
    };
    
    // Use synchronous sign without expiresIn option to avoid type issues
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  }

  // Verify JWT token
  static verifyToken(token: string): jwt.JwtPayload | null {
    try {
      return jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    } catch {
      return null;
    }
  }

  // Send OTP to email
  static async sendOTP(email: string): Promise<{ success: boolean; message: string }> {
    try {
      await connectDB();
      
      const admin = await Admin.findOne({ email, isActive: true });
      if (!admin) {
        return { success: false, message: 'Admin not found' };
      }

      // Generate random 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      
  
      // Use updateOne to force the database update instead of save()
      const updateResult = await Admin.updateOne(
        { email, isActive: true },
        {
          $set: {
            otp: {
              code: otp,
              expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
              attempts: 0
            }
          }
        }
      );
      
      if (updateResult.matchedCount === 0) {
        return { success: false, message: 'Admin not found' };
      }

      // Send OTP via email
      await EmailService.sendOTP(email, otp);

      return { success: true, message: 'OTP sent to your email' };
    } catch (error) {
      console.error('Send OTP error:', error);
      return { success: false, message: 'Failed to send OTP' };
    }
  }

  // Verify OTP and login
  static async verifyOTPAndLogin(email: string, otp: string): Promise<{ admin: AdminDocument; token: string } | null> {
    try {
      await connectDB();
      
      // Use aggregation to get the raw document including the OTP field
      const adminData = await Admin.aggregate([
        { $match: { email, isActive: true } }
      ]);
      
      if (!adminData || adminData.length === 0) {
        return null;
      }
      
      const admin = adminData[0];

      // Manual OTP verification
      if (!admin.otp || !admin.otp.code) {
        return null;
      }
      
      if (new Date() > new Date(admin.otp.expiresAt)) {
        return null;
      }
      
      if (admin.otp.attempts >= 3) {
        return null;
      }
      
      if (admin.otp.code !== otp) {
        // Increment attempts
        await Admin.updateOne(
          { email, isActive: true },
          { $inc: { 'otp.attempts': 1 } }
        );
        return null;
      }
      
      // Clear OTP and update last login
      await Admin.updateOne(
        { email, isActive: true },
        {
          $unset: { otp: 1 },
          $set: { lastLogin: new Date() }
        }
      );

      // Get the admin document for token generation
      const adminDoc = await Admin.findOne({ email, isActive: true });
      if (!adminDoc) {
        return null;
      }

      const token = this.generateToken(adminDoc);
      
      return { admin: adminDoc, token };
    } catch (error) {
      console.error('OTP verification error:', error);
      return null;
    }
  }

  // Get current user from token
  static async getCurrentUser(token: string): Promise<AuthUser | null> {
    try {
      const decoded = this.verifyToken(token);
      if (!decoded) {
        return null;
      }

      await connectDB();
      const admin = await Admin.findById(decoded.id);
      if (!admin || !admin.isActive) {
        return null;
      }

      return {
        id: admin._id.toString(),
        email: admin.email,
        role: admin.role,
        permissions: admin.getPermissions()
      };
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  // Create new admin (only by existing admin)
  static async createAdmin(
    adminData: {
      email: string;
      role?: string;
      permissions?: string[];
    },
    createdBy: string
  ): Promise<AdminDocument> {
    try {
      await connectDB();

      // Check if creator is admin
      const creator = await Admin.findById(createdBy);
      if (!creator || !creator.isActive) {
        throw new Error('Unauthorized to create admin');
      }

      // Check if email already exists
      const existingAdmin = await Admin.findOne({ email: adminData.email });
      if (existingAdmin) {
        throw new Error('Email already exists');
      }

      const newAdmin = new Admin({
        ...adminData,
        createdBy: createdBy
      });

      await newAdmin.save();
      return newAdmin;
    } catch (error) {
      console.error('Create admin error:', error);
      throw error;
    }
  }

  // Initialize first admin
  static async initializeFirstAdmin(): Promise<void> {
    try {
      await connectDB();
      
      const adminCount = await Admin.countDocuments();
      console.log('Current admin count:', adminCount);
      
      if (adminCount === 0) {
        console.log('Creating first admin...');
        const firstAdmin = new Admin({
          email: 'ad1123itya@gmail.com',
          role: 'super_admin',
          permissions: ['admissions', 'content', 'testimonials', 'gallery', 'users', 'settings']
        });

        await firstAdmin.save();
        console.log('First admin created successfully with email:', firstAdmin.email);
        
        // Send welcome email
        await EmailService.sendWelcomeEmail(firstAdmin.email, firstAdmin.role);
      } else {
        console.log('Admin already exists, skipping creation');
      }
    } catch (error) {
      console.error('Initialize first admin error:', error);
    }
  }
}
