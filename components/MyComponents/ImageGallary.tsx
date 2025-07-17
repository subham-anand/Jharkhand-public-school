"use client"
import React, { useState } from 'react'
import { IconCamera, IconEye, IconHeart, IconShare, IconZoomIn, IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react'

// Types
type GalleryImage = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};

// Gallery Item Component
const GalleryItem = ({ 
  title, 
  description, 
  category,
  onClick 
}: {
  title: string;
  description: string;
  category: string;
  onClick: () => void;
}) => {
  const categoryColors = {
    'Nature': 'from-green-500 to-emerald-500',
    'Events': 'from-purple-500 to-pink-500',
    'Activities': 'from-orange-500 to-red-500',
    'Learning': 'from-blue-500 to-teal-500'
  };

  const categoryEmojis = {
    'Nature': '🍃',
    'Events': '✨', 
    'Activities': '🎨',
    'Learning': '📚'
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-teal-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">📸</div>
            <p className="text-sm text-gray-600 font-medium">{title}</p>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <IconZoomIn size={32} className="text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Category Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1`}>
          <span>{categoryEmojis[category as keyof typeof categoryEmojis]}</span>
          {category}
        </div>

        {/* Interaction Icons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all">
            <IconHeart size={16} className="text-red-500" />
          </button>
          <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all">
            <IconShare size={16} className="text-blue-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

// Lightbox Modal Component
const LightboxModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onPrevious, 
  onNext 
}: {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
        >
          <IconX size={24} />
        </button>

        {/* Navigation Buttons */}
        <button 
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
        >
          <IconChevronLeft size={24} />
        </button>
        
        <button 
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
        >
          <IconChevronRight size={24} />
        </button>

        {/* Image */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="aspect-video bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-xl flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="text-8xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-800">{currentImage.title}</h3>
            </div>
          </div>
          <p className="text-gray-600 text-lg">{currentImage.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: "Nature Day: Learning with leaves and laughter",
      description: "Students exploring the natural world, collecting leaves, and learning about different plant species in our beautiful school garden. A day filled with discovery and joy! 🍃",
      category: "Nature",
      image: "/gallery/nature-day.jpg" // Placeholder path
    },
    {
      id: 2,
      title: "Annual Day Highlights: Lights, stage & little stars",
      description: "Our talented students shining bright on stage during the annual day celebration. From dance performances to drama presentations, every child was a star! ✨",
      category: "Events",
      image: "/gallery/annual-day.jpg" // Placeholder path
    },
    {
      id: 3,
      title: "Art Hour: When tiny hands create magic",
      description: "Creative minds at work during our daily art sessions. Students expressing themselves through colors, shapes, and imagination, creating beautiful masterpieces! 🎨",
      category: "Activities",
      image: "/gallery/art-hour.jpg" // Placeholder path
    },
    {
      id: 4,
      title: "Science Experiment Day",
      description: "Young scientists conducting exciting experiments and making amazing discoveries in our well-equipped science lab.",
      category: "Learning",
      image: "/gallery/science-day.jpg" // Placeholder path
    },
    {
      id: 5,
      title: "Sports Day Champions",
      description: "Athletic achievements and team spirit on full display during our annual sports day celebration.",
      category: "Events", 
      image: "/gallery/sports-day.jpg" // Placeholder path
    },
    {
      id: 6,
      title: "Reading Corner Moments",
      description: "Quiet moments of learning and imagination in our cozy reading corner where stories come to life.",
      category: "Learning",
      image: "/gallery/reading-corner.jpg" // Placeholder path
    }
  ];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleExploreGallery = () => {
    window.location.href = '/gallery';
  };

  return (
    <section id="gallery" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-pink-200 rounded-full opacity-25 animate-pulse [animation-delay:2s]"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-35 animate-pulse [animation-delay:4s]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-teal-200 rounded-full opacity-40 animate-pulse [animation-delay:1s]"></div>

      {/* Floating camera icons */}
      <div className="absolute top-16 right-1/4 text-3xl animate-bounce [animation-delay:0s]">📸</div>
      <div className="absolute bottom-40 left-1/3 text-2xl animate-bounce [animation-delay:3s]">🎭</div>
      <div className="absolute top-1/2 left-16 text-2xl animate-bounce [animation-delay:5s]">🎨</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-800 font-medium text-sm mb-6 shadow-sm">
            <IconCamera size={16} className="text-purple-700" />
            📸 Gallery Sneak Peek
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl sm:text-5xl">📸</span>
              <span>Learning in</span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
              Every Moment
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the joy, creativity, and wonder that fills every day at Jharkhand Public School through our vibrant photo gallery.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Featured Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              title={image.title}
              description={image.description}
              category={image.category}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">📷</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-purple-600">500+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Photos</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">🎭</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-pink-600">50+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Events</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">🎨</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-blue-600">100+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Activities</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">😊</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-green-600">1000+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Smiles</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Want to See More Amazing Moments?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore our complete gallery filled with hundreds of precious memories, special events, and daily learning adventures.
            </p>
            
            <button
              onClick={handleExploreGallery}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <IconEye size={20} className="group-hover:scale-110 transition-transform" />
              Explore the Full Gallery
              <IconChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-white/80 text-sm mt-4">
              Over 500 photos capturing every special moment
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={currentImageIndex}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12">
          <path d="M0 120L60 110C120 100 240 80 360 85C480 90 600 120 720 120C840 120 960 90 1080 75C1200 60 1320 60 1380 60L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="url(#galleryGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="galleryGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#9333EA"/>
              <stop offset="0.5" stopColor="#EC4899"/>
              <stop offset="1" stopColor="#F97316"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
