import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Content } from '@/models/Content';

export async function GET() {
  try {
    await connectDB();
    
    const contents = await Content.find({})
      .sort({ createdAt: -1 })
      .lean();
    
    return NextResponse.json(contents);
  } catch (error) {
    console.error('Error fetching contents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contents' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const content = new Content({
      title: body.title,
      type: body.type,
      section: body.section,
      content: body.content,
      isPublished: body.isPublished || false,
      tags: body.tags || [],
    });

    await content.save();

    return NextResponse.json(content, { status: 201 });
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    );
  }
}
