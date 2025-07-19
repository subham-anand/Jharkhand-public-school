import mongoose from 'mongoose';

const heroCarouselSchema = new mongoose.Schema({
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
  publicId: { 
    type: String, 
    required: true,
    trim: true 
  },
  altText: { 
    type: String, 
    required: true,
    trim: true 
  },
  order: { 
    type: Number, 
    required: true,
    default: 0 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  emoji: { 
    type: String, 
    default: '🎓' 
  },
  uploadedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Admin' 
  }
}, { 
  timestamps: true 
});

// Index for efficient queries
heroCarouselSchema.index({ order: 1, isActive: 1 });
heroCarouselSchema.index({ isActive: 1 });

const HeroCarousel = mongoose.models.HeroCarousel || mongoose.model('HeroCarousel', heroCarouselSchema);

export default HeroCarousel;
