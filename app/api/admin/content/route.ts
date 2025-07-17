import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { AuthService } from '@/services/AuthService';
import mongoose from 'mongoose';

// Content Schema
const contentSchema = new mongoose.Schema({
  section: { type: String, required: true }, // hero, about, testimonials, etc.
  type: { type: String, enum: ['text', 'image', 'list'], required: true },
  key: { type: String, required: true }, // unique identifier
  value: { type: mongoose.Schema.Types.Mixed, required: true }, // string or array
  description: String, // human-readable description
}, { timestamps: true });

// Create compound index for section and key
contentSchema.index({ section: 1, key: 1 }, { unique: true });

const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);

// Initialize default content if not exists
async function initializeDefaultContent() {
  const defaultContent = [
    // Hero Section
    {
      section: 'hero',
      type: 'text',
      key: 'title',
      value: 'Welcome to Jharkhand Public School',
      description: 'Main hero title'
    },
    {
      section: 'hero',
      type: 'text',
      key: 'subtitle',
      value: 'Nurturing Young Minds with Excellence in Education',
      description: 'Hero subtitle/tagline'
    },
    {
      section: 'hero',
      type: 'image',
      key: 'background_image',
      value: '/hero_img.jpg',
      description: 'Hero background image'
    },
    
    // About Section
    {
      section: 'about',
      type: 'text',
      key: 'title',
      value: 'About Our School',
      description: 'About section title'
    },
    {
      section: 'about',
      type: 'text',
      key: 'description',
      value: 'Since 2009, Jharkhand Public School has been committed to providing quality education...',
      description: 'About section description'
    },
    {
      section: 'about',
      type: 'list',
      key: 'highlights',
      value: [
        '100% Success Rate',
        'Experienced Teachers',
        'Modern Infrastructure',
        'Individual Attention'
      ],
      description: 'School highlights list'
    },

    // Why Choose Us
    {
      section: 'why_choose_us',
      type: 'text',
      key: 'title',
      value: 'Why Choose Jharkhand Public School?',
      description: 'Why choose us section title'
    },
    {
      section: 'why_choose_us',
      type: 'list',
      key: 'reasons',
      value: [
        'Qualified and experienced teaching staff',
        'Small class sizes for personalized attention',
        'Modern teaching methodologies',
        'Strong moral and ethical foundation'
      ],
      description: 'Reasons to choose our school'
    },

    // Contact
    {
      section: 'contact',
      type: 'text',
      key: 'phone',
      value: '+91 8541061847',
      description: 'School contact phone number'
    },
    {
      section: 'contact',
      type: 'text',
      key: 'email',
      value: 'contact@jpsbarharwa.in',
      description: 'School email address'
    },
    {
      section: 'contact',
      type: 'text',
      key: 'address',
      value: 'Thana road, Barharwa, Sahibganj, Jharkhand, 816101',
      description: 'School physical address'
    }
  ];

  for (const item of defaultContent) {
    try {
      await Content.findOneAndUpdate(
        { section: item.section, key: item.key },
        item,
        { upsert: true, new: true }
      );
    } catch {
      // Skip if already exists
      console.log(`Content ${item.section}.${item.key} already exists`);
    }
  }
}

// GET - Fetch all content
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('authToken')?.value;
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const currentUser = await AuthService.getCurrentUser(token);
    if (!currentUser || !currentUser.permissions.includes('manageContent')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    // Initialize default content
    await initializeDefaultContent();
    
    const url = new URL(request.url);
    const section = url.searchParams.get('section');
    
    const query = section ? { section } : {};
    const content = await Content.find(query).sort({ section: 1, key: 1 });

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new content
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('authToken')?.value;
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const currentUser = await AuthService.getCurrentUser(token);
    if (!currentUser || !currentUser.permissions.includes('manageContent')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { section, type, key, value, description } = body;

    if (!section || !type || !key || value === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const content = new Content({
      section,
      type,
      key,
      value,
      description
    });

    await content.save();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error creating content:', error);
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json({ error: 'Content with this key already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
