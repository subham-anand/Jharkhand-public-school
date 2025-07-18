import { NextResponse } from 'next/server';
import { Teacher } from '@/models/Teacher';
import mongoose from 'mongoose';

// GET - Fetch all active teachers for public display
export async function GET() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    
    const teachers = await Teacher.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 })
      .select('-photoPublicId -email -phone -createdAt -updatedAt -__v');

    return NextResponse.json(teachers);
  } catch (error) {
    console.error('Error fetching public teachers:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
