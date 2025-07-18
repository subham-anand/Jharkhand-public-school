import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import { Teacher } from '@/models/Teacher';
import { CloudinaryService } from '@/services/CloudinaryService';
import mongoose from 'mongoose';

// GET - Fetch single teacher
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const { id } = await params;
    const teacher = await Teacher.findById(id);
    
    if (!teacher) {
      return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
    }

    return NextResponse.json(teacher);
  } catch (error) {
    console.error('Error fetching teacher:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Update teacher
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to manage content
    if (user?.role !== 'super_admin' && !user?.permissions.includes('content')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;
    const body = await request.json();
    
    await mongoose.connect(process.env.MONGODB_URI!);
    
    // Handle photo update if provided
    if (body.photo && body.photo.startsWith('data:image/')) {
      try {
        // Find existing teacher to get old photo public_id
        const existingTeacher = await Teacher.findById(id);
        
        // Upload new image
        const uploadResult = await CloudinaryService.uploadImage(body.photo, {
          folder: 'teachers',
          tags: ['teacher', 'jps-website']
        });
        
        // Delete old image if exists
        if (existingTeacher?.photoPublicId) {
          await CloudinaryService.deleteImage(existingTeacher.photoPublicId);
        }
        
        body.photo = uploadResult.secure_url;
        body.photoPublicId = uploadResult.public_id;
      } catch (error) {
        console.error('Image upload error:', error);
        // Continue without updating image if upload fails
        delete body.photo;
      }
    }

    const teacher = await Teacher.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );
    
    if (!teacher) {
      return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
    }

    return NextResponse.json(teacher);
  } catch (error) {
    console.error('Error updating teacher:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete teacher
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to manage content
    if (user?.role !== 'super_admin' && !user?.permissions.includes('content')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;
    
    await mongoose.connect(process.env.MONGODB_URI!);
    
    const teacher = await Teacher.findById(id);
    
    if (!teacher) {
      return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
    }

    // Delete image from Cloudinary if exists
    if (teacher.photoPublicId) {
      await CloudinaryService.deleteImage(teacher.photoPublicId);
    }

    await Teacher.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
