import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import { Admin } from '@/models/Admin';
import mongoose from 'mongoose';

// PATCH - Update user
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only super admin can update other users
    if (user?.role !== 'super_admin') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;
    const body = await request.json();
    
    await mongoose.connect(process.env.MONGODB_URI!);
    
    const updatedUser = await Admin.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    ).select('-otp');

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only super admin can delete other users
    if (user?.role !== 'super_admin') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;
    
    // Prevent self-deletion
    if (id === userId) {
      return NextResponse.json({ error: 'Cannot delete your own account' }, { status: 400 });
    }
    
    await mongoose.connect(process.env.MONGODB_URI!);
    
    const deletedUser = await Admin.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'User deleted successfully',
      deletedUser: {
        id: deletedUser._id,
        email: deletedUser.email,
        role: deletedUser.role
      }
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
