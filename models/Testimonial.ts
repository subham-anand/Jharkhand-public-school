import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  email: { 
    type: String, 
    trim: true 
  },
  relationship: { 
    type: String, 
    enum: ['parent', 'student', 'alumni', 'teacher', 'staff'],
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
  isApproved: { 
    type: Boolean, 
    default: false 
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
testimonialSchema.index({ isApproved: 1, isFeatured: 1 });
testimonialSchema.index({ rating: -1 });

export const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
