"use client"
import React, { useState, useEffect } from 'react'
import { IconMessage, IconStar, IconQuote, IconChevronLeft, IconChevronRight, IconUser, IconHeart } from '@tabler/icons-react'

// Types
type Testimonial = {
  id: number;
  name: string;
  role: string;
  studentClass: string;
  quote: string;
  rating: number;
  avatar: string;
  location: string;
};

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <IconStar
          key={star}
          size={16}
          className={`${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          } transition-colors`}
        />
      ))}
    </div>
  );
};

// Individual Testimonial Card
const TestimonialCard = ({ 
  testimonial, 
  isActive = false 
}: { 
  testimonial: Testimonial; 
  isActive?: boolean;
}) => {
  return (
    <div className={`relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
      isActive ? 'border-blue-200 scale-105' : 'border-gray-100 hover:border-blue-100'
    } group`}>
      
      {/* Quote Icon */}
      <div className="absolute -top-4 left-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <IconQuote size={16} className="text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={testimonial.rating} />
        <div className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
          {testimonial.location}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center border-2 border-white shadow-md group-hover:scale-110 transition-transform">
            <IconUser size={20} className="text-blue-600" />
          </div>
          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs sm:text-sm text-gray-600">
            {testimonial.role}
          </p>
          <p className="text-xs text-blue-600 font-medium">
            Parent of {testimonial.studentClass} student
          </p>
        </div>

        {/* Heart Icon */}
        <div className="flex-shrink-0">
          <IconHeart size={20} className="text-red-400 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative">
      {/* Main Testimonial Display */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <TestimonialCard testimonial={testimonials[currentIndex]} isActive={true} />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all hover:scale-110"
        >
          <IconChevronLeft size={20} className="text-gray-700" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all hover:scale-110"
        >
          <IconChevronRight size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1 mx-auto transition-colors"
        >
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
          {isAutoPlaying ? 'Auto-playing' : 'Paused'}
        </button>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sahu",
      role: "Software Engineer",
      studentClass: "Class 1",
      quote: "The school has completely changed the way my daughter looks at learning. She comes home excited every day, eager to share what she's discovered. The teachers here don't just teach—they inspire curiosity and confidence.",
      rating: 5,
      avatar: "/avatars/priya-sahu.jpg",
      location: "Ranchi"
    },
    {
      id: 2,
      name: "Rahul Mishra",
      role: "Business Owner",
      studentClass: "Nursery",
      quote: "We felt safe, supported, and confident from the very first visit. The teachers are truly wonderful, and the environment feels like a second home for our little one. Best decision we made for our child's education.",
      rating: 5,
      avatar: "/avatars/rahul-mishra.jpg",
      location: "Jamshedpur"
    },
    {
      id: 3,
      name: "Anita Kumari",
      role: "Doctor",
      studentClass: "Class 3",
      quote: "The individual attention each child receives is remarkable. My son has grown not just academically but also developed strong values and social skills. The holistic approach here is exactly what we were looking for.",
      rating: 5,
      avatar: "/avatars/anita-kumari.jpg",
      location: "Dhanbad"
    },
    {
      id: 4,
      name: "Suresh Verma",
      role: "Government Employee",
      studentClass: "Class 2",
      quote: "The communication between school and parents is excellent. We're always informed about our daughter's progress, and the teachers are approachable and caring. It truly feels like we're partners in our child's education.",
      rating: 5,
      avatar: "/avatars/suresh-verma.jpg",
      location: "Bokaro"
    },
    {
      id: 5,
      name: "Meera Gupta",
      role: "Teacher",
      studentClass: "Class 4",
      quote: "As an educator myself, I appreciate the innovative teaching methods and the focus on character building. My son loves going to school every day, which speaks volumes about the positive environment they've created.",
      rating: 5,
      avatar: "/avatars/meera-gupta.jpg",
      location: "Hazaribagh"
    }
  ];

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-blue-50/30 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-teal-200 rounded-full opacity-15 animate-pulse [animation-delay:2s]"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-purple-200 rounded-full opacity-25 animate-pulse [animation-delay:4s]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse [animation-delay:1s]"></div>

      {/* Floating quote bubbles */}
      <div className="absolute top-16 right-1/4 text-3xl animate-bounce [animation-delay:0s]">💬</div>
      <div className="absolute bottom-40 left-1/3 text-2xl animate-bounce [animation-delay:3s]">⭐</div>
      <div className="absolute top-1/2 left-16 text-2xl animate-bounce [animation-delay:5s]">💙</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-800 font-medium text-sm mb-6 shadow-sm">
            <IconMessage size={16} className="text-blue-700" />
            💬 Testimonials
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl sm:text-5xl">💬</span>
              <span>What Parents</span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600">
              Say About Us
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the families who trust us with their children&apos;s education and development. Their words speak to our commitment to excellence.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="mb-16">
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            More Happy Parents
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(1, 4).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">👨‍👩‍👧‍👦</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-blue-600">500+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Happy Families</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">⭐</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-green-600">4.9/5</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Parent Rating</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">🏆</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-purple-600">15+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Trusted</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl sm:text-3xl">💙</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-orange-600">100%</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Join Our Happy Parent Community?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference that caring education makes. Schedule a visit and see why parents choose JPS for their children.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button onClick={()=>{
                    window.open(
      "https://wa.me/918541061847?text=I%20want%20to%20visit%20Jharkhand%20Public%20School",
      "_blank"
    );
              }} className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Schedule a Visit
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12">
          <path d="M0 120L60 110C120 100 240 80 360 85C480 90 600 120 720 120C840 120 960 90 1080 75C1200 60 1320 60 1380 60L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="url(#testimonialGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="testimonialGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#3B82F6"/>
              <stop offset="0.5" stopColor="#14B8A6"/>
              <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
