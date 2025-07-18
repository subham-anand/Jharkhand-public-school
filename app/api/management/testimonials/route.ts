import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Testimonial } from '@/models/Testimonial';
import { CloudinaryService } from '@/services/CloudinaryService';

export async function GET() {
  try {
    await connectDB();
    
    const testimonials = await Testimonial.find({})
      .sort({ createdAt: -1 })
      .lean();
    
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const relationship = formData.get('relationship') as string;
    const rating = parseInt(formData.get('rating') as string);
    const message = formData.get('message') as string;
    const isApproved = formData.get('isApproved') === 'true';
    const photo = formData.get('photo') as File;

    let photoUrl = '';
    if (photo && photo.size > 0) {
      const buffer = await photo.arrayBuffer();
      const uploadResult = await CloudinaryService.uploadImage(
        Buffer.from(buffer),
        {
          folder: 'jps-testimonials',
          tags: ['testimonial', 'profile']
        }
      );
      photoUrl = uploadResult.secure_url;
    }

    const testimonial = new Testimonial({
      name,
      email,
      relationship,
      rating,
      message,
      photo: photoUrl,
      isApproved,
    });

    await testimonial.save();

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
