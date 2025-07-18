import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  type: { 
    type: String, 
    enum: ['page', 'announcement', 'notice', 'policy', 'faq', 'about', 'hero'], 
    required: true 
  },
  section: { 
    type: String, 
    trim: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  tags: [{ 
    type: String, 
    trim: true 
  }],
  isPublished: { 
    type: Boolean, 
    default: false 
  },
  updatedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Admin' 
  }
}, { 
  timestamps: true 
});

// Index for efficient queries
contentSchema.index({ type: 1 });
contentSchema.index({ isPublished: 1 });
contentSchema.index({ section: 1 });

export const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);
