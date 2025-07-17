import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import mongoose from 'mongoose';

// Gallery Schema
const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  imageUrl: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Events', 'Sports', 'Academics', 'Infrastructure', 'Cultural', 'Other']
  },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);

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
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, imageUrl, category, isActive } = body;

    if (!title || !imageUrl || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const image = new Gallery({
      title,
      description: description || '',
      imageUrl,
      category,
      isActive: isActive ?? true
    });

    await image.save();
    return NextResponse.json(image);
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
