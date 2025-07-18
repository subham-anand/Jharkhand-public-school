import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import { Admin } from '@/models/Admin';
import mongoose from 'mongoose';

// GET - Fetch all users
export async function GET(request: NextRequest) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only super admin can view all users
    if (user?.role !== 'super_admin') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const users = await Admin.find({})
      .select('-otp') // Exclude OTP field
      .sort({ createdAt: -1 });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
