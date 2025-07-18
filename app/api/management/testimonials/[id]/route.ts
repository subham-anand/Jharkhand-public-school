import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Testimonial } from '@/models/Testimonial';
import { CloudinaryService } from '@/services/CloudinaryService';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    
    const testimonial = await Testimonial.findById(id).lean();
    
    if (!testimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonial' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    
    const body = await request.json();
    
    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );
    
    if (!testimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    
    const testimonial = await Testimonial.findById(id);
    
    if (!testimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    // Delete photo from Cloudinary if exists
    if (testimonial.photo) {
      try {
        // Extract public_id from URL
        const publicId = testimonial.photo.split('/').pop()?.split('.')[0];
        if (publicId) {
          await CloudinaryService.deleteImage(`jps-testimonials/${publicId}`);
        }
      } catch (error) {
        console.error('Error deleting photo from Cloudinary:', error);
        // Continue with deletion even if photo deletion fails
      }
    }
    
    await Testimonial.findByIdAndDelete(id);
    
    return NextResponse.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}
