import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  description: { 
    type: String, 
    trim: true 
  },
  imageUrl: { 
    type: String, 
    required: true,
    trim: true 
  },
  category: { 
    type: String, 
    enum: ['Events', 'Sports', 'Academics', 'Infrastructure', 'Cultural', 'Other'],
    required: true 
  },
  tags: [{ 
    type: String, 
    trim: true 
  }],
  isActive: { 
    type: Boolean, 
    default: true 
  },
  isFeatured: { 
    type: Boolean, 
    default: false 
  },
  uploadedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Admin' 
  }
}, { 
  timestamps: true 
});

// Index for efficient queries
gallerySchema.index({ category: 1, isActive: 1 });
gallerySchema.index({ isFeatured: 1, isActive: 1 });

export const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);
