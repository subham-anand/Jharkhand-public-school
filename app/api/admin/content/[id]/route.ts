import { NextRequest, NextResponse } from 'next/server';
import { authAndCheckAdmin } from '@/middleware/auth';
import mongoose from 'mongoose';

// Same schema as route.ts
const contentSchema = new mongoose.Schema({
  section: { type: String, required: true },
  type: { type: String, enum: ['text', 'image', 'list'], required: true },
  key: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  description: String,
}, { timestamps: true });

const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);

// GET - Fetch single content item
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
    const content = await Content.findById(id);
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('GET Content Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update content item
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { section, type, key, value, description } = body;

    if (!section || !type || !key || value === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const { id } = await params;
    const content = await Content.findByIdAndUpdate(
      id,
      { section, type, key, value, description },
      { new: true, runValidators: true }
    );
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('PUT Content Error:', error);
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({ error: 'Validation error', details: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Update content value only
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId, isAdminUser } = await authAndCheckAdmin(request);
    if (!userId || !isAdminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { value } = body;

    if (value === undefined) {
      return NextResponse.json({ error: 'Value is required' }, { status: 400 });
    }

    await mongoose.connect(process.env.MONGODB_URI!);
    
    const { id } = await params;
    const content = await Content.findByIdAndUpdate(
      id,
      { value },
      { new: true }
    );
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('PATCH Content Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Remove content item
export async function DELETE(
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
    const content = await Content.findByIdAndDelete(id);
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Content deleted successfully' });
  } catch (error) {
    console.error('DELETE Content Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
