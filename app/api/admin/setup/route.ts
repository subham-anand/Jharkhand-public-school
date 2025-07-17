import { authAndCheckAdmin } from '@/middleware/auth';
import { NextRequest, NextResponse } from 'next/server';
import { Admin } from '@/models/Admin';
import mongoose from 'mongoose';

// POST - Create first admin user (only works if no admins exist)
export async function POST(request: NextRequest) {
  try {
    const { userId } = await authAndCheckAdmin(request);
    if (!userId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    // Check if any admins already exist
    const existingAdminCount = await Admin.countDocuments();
    
    if (existingAdminCount > 0) {
      return NextResponse.json({ 
        error: 'Admin users already exist. Contact existing admin for access.' 
      }, { status: 403 });
    }

    // Create first admin user
    const admin = new Admin({
      clerkUserId: userId,
      email,
      role: 'super_admin',
      isActive: true,
      permissions: ['admissions', 'content', 'testimonials', 'gallery', 'users', 'settings']
    });

    await admin.save();

    return NextResponse.json({ 
      success: true, 
      message: 'First admin user created successfully',
      admin: {
        email: admin.email,
        role: admin.role,
        permissions: admin.permissions
      }
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET - Check if any admins exist and current user status
export async function GET(request: NextRequest) {
  try {
    const { userId } = await authAndCheckAdmin(request);
    
    await mongoose.connect(process.env.MONGODB_URI!);
    
    const adminCount = await Admin.countDocuments();
    
    let isCurrentUserAdmin = false;
    let currentAdminInfo = null;
    
    if (userId) {
      const currentAdmin = await Admin.findOne({ clerkUserId: userId, isActive: true });
      isCurrentUserAdmin = !!currentAdmin;
      if (currentAdmin) {
        currentAdminInfo = {
          email: currentAdmin.email,
          role: currentAdmin.role,
          permissions: currentAdmin.permissions
        };
      }
    }

    return NextResponse.json({
      adminExists: adminCount > 0,
      totalAdmins: adminCount,
      isCurrentUserAdmin,
      currentAdmin: currentAdminInfo,
      needsSetup: adminCount === 0
    });
  } catch (error) {
    console.error('Error checking admin status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
