import { authAndCheckAdmin } from '@/middleware/auth';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relation: { 
    type: String, 
    required: true,
    enum: ['Parent', 'Student', 'Alumni', 'Teacher']
  },
  content: { type: String, required: true },
  rating: { 
    type: Number, 
    required: true,
    min: 1,
    max: 5
  },
  photo: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);

// GET - Fetch all testimonials
export async function GET(request: NextRequest) {
  try {
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const url = new URL(request.url);
    const activeOnly = url.searchParams.get('active') === 'true';
    
    const query = activeOnly ? { isActive: true } : {};
    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .limit(50);

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new testimonial
export async function POST(request: NextRequest) {
  try {
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, relation, content, rating, photo, isActive } = body;

    if (!name || !relation || !content || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const testimonial = new Testimonial({
      name,
      relation,
      content,
      rating,
      photo,
      isActive: isActive ?? true
    });

    await testimonial.save();
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
