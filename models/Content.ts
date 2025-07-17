import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  key: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true 
  },
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  type: { 
    type: String, 
    enum: ['text', 'image', 'list', 'json'], 
    required: true 
  },
  value: { 
    type: mongoose.Schema.Types.Mixed, 
    required: true 
  },
  description: { 
    type: String, 
    trim: true 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  updatedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Admin' 
  }
}, { 
  timestamps: true 
});

// Index for efficient queries
contentSchema.index({ key: 1 });
contentSchema.index({ type: 1 });
contentSchema.index({ isActive: 1 });

export const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);
