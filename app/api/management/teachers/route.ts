import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import { Teacher } from '@/models/Teacher';
import { CloudinaryService } from '@/services/CloudinaryService';
import mongoose from 'mongoose';

// GET - Fetch all teachers
export async function GET(request: NextRequest) {
  try {
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const teachers = await Teacher.find({})
      .sort({ order: 1, createdAt: -1 });

    return NextResponse.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new teacher
export async function POST(request: NextRequest) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to manage content
    if (user?.role !== 'super_admin' && !user?.permissions.includes('content')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const body = await request.json();
    const { 
      name, 
      designation, 
      subjects, 
      experience, 
      specialization, 
      qualifications,
      bio,
      phone,
      email,
      achievements,
      photo // base64 image data
    } = body;

    if (!name || !designation || !subjects || !experience || !specialization || !qualifications) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    let photoUrl = '/dummyuser.jpeg';
    let photoPublicId = '';

    // Upload image to Cloudinary if provided
    if (photo && photo.startsWith('data:image/')) {
      try {
        const uploadResult = await CloudinaryService.uploadImage(photo, {
          folder: 'teachers',
          tags: ['teacher', 'jps-website']
        });
        photoUrl = uploadResult.secure_url;
        photoPublicId = uploadResult.public_id;
      } catch (error) {
        console.error('Image upload error:', error);
        // Continue without image if upload fails
      }
    }

    const teacher = new Teacher({
      name,
      designation,
      subjects: Array.isArray(subjects) ? subjects : [subjects],
      experience,
      specialization,
      qualifications: Array.isArray(qualifications) ? qualifications : [qualifications],
      bio,
      phone,
      email,
      achievements: Array.isArray(achievements) ? achievements : [],
      photo: photoUrl,
      photoPublicId,
      isActive: true
    });

    await teacher.save();
    return NextResponse.json(teacher);
  } catch (error) {
    console.error('Error creating teacher:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
