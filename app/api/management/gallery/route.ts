import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import { Gallery } from '@/models/Gallery';
import { CloudinaryService } from '@/services/CloudinaryService';
import mongoose from 'mongoose';

// GET - Fetch all gallery images
export async function GET(request: NextRequest) {
  try {
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const activeOnly = url.searchParams.get('active') === 'true';
    
    const query: Record<string, unknown> = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (activeOnly) {
      query.isActive = true;
    }

    const images = await Gallery.find(query)
      .sort({ createdAt: -1 })
      .limit(100);

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new gallery image
export async function POST(request: NextRequest) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to manage gallery
    if (user?.role !== 'super_admin' && !user?.permissions.includes('gallery')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const body = await request.json();
    const { title, description, imageData, category, isActive } = body;

    if (!title || !imageData || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    // Upload image to Cloudinary
    let imageUrl = '';
    let publicId = '';

    try {
      const uploadResult = await CloudinaryService.uploadImage(imageData, {
        folder: 'gallery',
        tags: ['gallery', 'jps-website']
      });
      imageUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;
    } catch (error) {
      console.error('Image upload error:', error);
      return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
    }

    const image = new Gallery({
      title,
      description: description || '',
      imageUrl,
      publicId,
      category,
      isActive: isActive ?? true,
      uploadedBy: userId
    });

    await image.save();
    return NextResponse.json(image);
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
