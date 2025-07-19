import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import HeroCarousel from '@/models/HeroCarousel';
import { CloudinaryService } from '@/services/CloudinaryService';

// GET - Fetch all active hero carousel images
export async function GET() {
  try {
    await connectDB();
    
    const carouselImages = await HeroCarousel.find({ isActive: true })
      .sort({ order: 1 })
      .select('title description imageUrl altText emoji order')
      .lean();

    return NextResponse.json({
      success: true,
      data: carouselImages
    });
  } catch (error) {
    console.error('Error fetching hero carousel images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch carousel images' },
      { status: 500 }
    );
  }
}

// POST - Add new hero carousel image (Admin only)
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, description, imageUrl, publicId, altText, emoji, order, uploadedBy } = body;

    // Validate required fields
    if (!title || !imageUrl || !publicId || !altText) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newCarouselImage = new HeroCarousel({
      title,
      description,
      imageUrl,
      publicId,
      altText,
      emoji: emoji || '🎓',
      order: order || 0,
      uploadedBy
    });

    await newCarouselImage.save();

    return NextResponse.json({
      success: true,
      data: newCarouselImage,
      message: 'Hero carousel image added successfully'
    });
  } catch (error) {
    console.error('Error adding hero carousel image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add carousel image' },
      { status: 500 }
    );
  }
}

// PUT - Update hero carousel image
export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, title, description, altText, emoji, order, isActive } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Image ID is required' },
        { status: 400 }
      );
    }

    const updatedImage = await HeroCarousel.findByIdAndUpdate(
      id,
      {
        ...(title && { title }),
        ...(description && { description }),
        ...(altText && { altText }),
        ...(emoji && { emoji }),
        ...(order !== undefined && { order }),
        ...(isActive !== undefined && { isActive })
      },
      { new: true }
    );

    if (!updatedImage) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedImage,
      message: 'Hero carousel image updated successfully'
    });
  } catch (error) {
    console.error('Error updating hero carousel image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update carousel image' },
      { status: 500 }
    );
  }
}

// DELETE - Delete hero carousel image
export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Image ID is required' },
        { status: 400 }
      );
    }

    const imageToDelete = await HeroCarousel.findById(id);
    if (!imageToDelete) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }

    // Delete from Cloudinary
    if (imageToDelete.publicId) {
      try {
        await CloudinaryService.deleteImage(imageToDelete.publicId);
      } catch (cloudinaryError) {
        console.error('Error deleting from Cloudinary:', cloudinaryError);
        // Continue with database deletion even if Cloudinary fails
      }
    }

    // Delete from database
    await HeroCarousel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: 'Hero carousel image deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting hero carousel image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete carousel image' },
      { status: 500 }
    );
  }
}
