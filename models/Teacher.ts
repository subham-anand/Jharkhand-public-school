import mongoose from 'mongoose';

interface ITeacher {
  name: string;
  designation: string;
  subjects: string[];
  experience: string;
  photo?: string;
  photoPublicId?: string; // For Cloudinary
  specialization: string;
  qualifications: string[];
  isActive: boolean;
  bio?: string;
  phone?: string;
  email?: string;
  joinedDate?: Date;
  achievements?: string[];
  order?: number; // For sorting
}

const teacherSchema = new mongoose.Schema<ITeacher>({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  designation: { 
    type: String, 
    required: true,
    enum: ['Principal', 'Headmaster', 'Teacher', 'Assistant Teacher', 'Sports Teacher', 'Music Teacher']
  },
  subjects: [{ 
    type: String, 
    required: true,
    trim: true
  }],
  experience: { 
    type: String, 
    required: true,
    trim: true
  },
  photo: { 
    type: String,
    default: '/dummyuser.jpeg'
  },
  photoPublicId: { 
    type: String // Cloudinary public ID
  },
  specialization: { 
    type: String, 
    required: true,
    trim: true
  },
  qualifications: [{ 
    type: String, 
    required: true,
    trim: true
  }],
  isActive: { 
    type: Boolean, 
    default: true 
  },
  bio: { 
    type: String,
    trim: true
  },
  phone: { 
    type: String,
    trim: true
  },
  email: { 
    type: String,
    trim: true,
    lowercase: true
  },
  joinedDate: { 
    type: Date,
    default: Date.now
  },
  achievements: [{ 
    type: String,
    trim: true
  }],
  order: { 
    type: Number, 
    default: 0 
  }
}, { 
  timestamps: true 
});

// Index for efficient queries
teacherSchema.index({ designation: 1, isActive: 1 });
teacherSchema.index({ order: 1 });

export const Teacher = mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', teacherSchema);
export type TeacherDocument = mongoose.Document<unknown, Record<string, never>, ITeacher> & ITeacher;
