import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  relation: { 
    type: String, 
    enum: ['Parent', 'Student', 'Alumni', 'Teacher', 'Staff'],
    required: true 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
  },
  message: { 
    type: String, 
    required: true,
    trim: true,
    maxlength: 1000 
  },
  photo: { 
    type: String, 
    trim: true 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  isFeatured: { 
    type: Boolean, 
    default: false 
  },
  approvedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Admin' 
  },
  approvedAt: { 
    type: Date 
  }
}, { 
  timestamps: true 
});

// Index for efficient queries
testimonialSchema.index({ isActive: 1, isFeatured: 1 });
testimonialSchema.index({ rating: -1 });

export const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
