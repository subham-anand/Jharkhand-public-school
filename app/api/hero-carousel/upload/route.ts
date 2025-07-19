import { NextRequest, NextResponse } from 'next/server';
import HeroCarousel from '@/models/HeroCarousel';
import { CloudinaryService } from '@/services/CloudinaryService';
import connectDB from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const altText = formData.get('altText') as string;
    const emoji = formData.get('emoji') as string;
    const order = parseInt(formData.get('order') as string);

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await CloudinaryService.uploadImage(buffer, {
      folder: 'hero-carousel'
    });

    // Save to database
    const heroImage = new HeroCarousel({
      title,
      description,
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      altText,
      emoji,
      order,
      isActive: true
    });

    await heroImage.save();

    return NextResponse.json({
      success: true,
      data: heroImage
    });

  } catch (error) {
    console.error('Hero carousel upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
