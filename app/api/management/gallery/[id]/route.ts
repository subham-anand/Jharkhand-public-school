import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import { Gallery } from '@/models/Gallery';
import { CloudinaryService } from '@/services/CloudinaryService';
import mongoose from 'mongoose';

// GET - Fetch single gallery image
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
    const image = await Gallery.findById(id);
    
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json(image);
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Update gallery image
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to manage gallery
    if (user?.role !== 'super_admin' && !user?.permissions.includes('gallery')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;
    const body = await request.json();
    
    await mongoose.connect(process.env.MONGODB_URI!);
    
    // Handle image update if provided
    if (body.imageData && body.imageData.startsWith('data:image/')) {
      try {
        // Find existing image to get old public_id
        const existingImage = await Gallery.findById(id);
        
        // Upload new image
        const uploadResult = await CloudinaryService.uploadImage(body.imageData, {
          folder: 'gallery',
          tags: ['gallery', 'jps-website']
        });
        
        // Delete old image if exists
        if (existingImage?.publicId) {
          await CloudinaryService.deleteImage(existingImage.publicId);
        }
        
        body.imageUrl = uploadResult.secure_url;
        body.publicId = uploadResult.public_id;
        delete body.imageData;
      } catch (error) {
        console.error('Image upload error:', error);
        // Continue without updating image if upload fails
        delete body.imageData;
      }
    }

    const image = await Gallery.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );
    
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json(image);
  } catch (error) {
    console.error('Error updating gallery image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete gallery image
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, user, isAdminUser } = await authAndCheckAdmin(request);
    
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to manage gallery
    if (user?.role !== 'super_admin' && !user?.permissions.includes('gallery')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;
    
    await mongoose.connect(process.env.MONGODB_URI!);
    
    const image = await Gallery.findById(id);
    
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    // Delete image from Cloudinary if exists
    if (image.publicId) {
      await CloudinaryService.deleteImage(image.publicId);
    }

    await Gallery.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
