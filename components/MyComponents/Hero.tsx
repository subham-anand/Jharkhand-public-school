import React, { useEffect, useState } from 'react'
import CtaBtns from './CtaBtns';
import {  IconMail, IconSchool } from '@tabler/icons-react';
import Image from 'next/image';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [carouselImages, setCarouselImages] = useState([
    {
      _id: 'default-1',
      src: "/hero_img.png",
      alt: "Students learning at Jharkhand Public School",
      emoji: "🎓"
    },
    {
      _id: 'default-2',
      src: "/hero_img.jpg", 
      alt: "School building and facilities",
      emoji: "🏫"
    },
    {
      _id: 'default-3',
      src: "/hero-img-pn.png",
      alt: "Students in classroom activities",
      emoji: "📚"
    },
    {
      _id: 'default-4',
      src: "/jps_principal.jpg",
      alt: "School principal and leadership",
      emoji: "👨‍🏫"
    },
    {
      _id: 'default-5',
      src: "/placeholder_img.jpg",
      alt: "School campus and environment",
      emoji: "🌟"
    }
  ]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch carousel images from API
  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const response = await fetch('/api/hero-carousel');
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          const formattedImages = data.data.map((image: {
            _id: string;
            imageUrl: string;
            altText: string;
            emoji: string;
          }) => ({
            _id: image._id,
            src: image.imageUrl,
            alt: image.altText,
            emoji: image.emoji
          }));
          setCarouselImages(formattedImages);
        }
      } catch (error) {
        console.error('Error fetching carousel images:', error);
        // Keep default images if API fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarouselImages();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === carouselImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1
    );
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <header className="hero relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      
      <div className="hero-content flex flex-col lg:flex-row items-center justify-between w-full min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20 max-w-7xl mx-auto relative z-10 gap-8 lg:gap-12">
        
        {/* Text Content */}
        <div className='text-div lg:w-1/2 xl:w-3/5 space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1'>
          
          {/* Badge */}
          <div className="inline-flex items-center">
            <div className='inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border-2 border-blue-200 bg-blue-50/80 backdrop-blur-sm rounded-full text-sm sm:text-base font-medium text-blue-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105'>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Your kids deserve the best education.
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900'>
              <span className="block">Putting Your</span>
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600">
                  Child&apos;s Future
                </span>
              </span>
              <span className="block">in Motion</span>
            </h1>
          </div>

          {/* Description */}
          <p className='text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0'>
            At <span className="font-semibold text-blue-600">Jharkhand Public School</span>, we don&apos;t just teach — we spark curiosity, build confidence, and shape values that last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center lg:justify-start">
            <CtaBtns 
              value='Contact Us' 
              color='blue' 
              icon={<IconMail size={20}/>}  
              href='/contact'
            />
            <CtaBtns 
              value='Apply for Admission' 
              color='orange' 
              icon={<IconSchool size={20}/>}  
              href='/admission-process'
            />
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Students</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-teal-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center lg:text-left col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div className='image-div w-full lg:w-1/2 xl:w-2/5 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0 px-4'>
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg group">
            
            {/* Main carousel container */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl bg-white">
              
              {/* Image container */}
              <div 
                className="relative aspect-[3/4] sm:aspect-[4/5] w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {isLoading ? (
                  // Loading skeleton
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                  </div>
                ) : (
                  carouselImages.map((image, index) => (
                    <div
                      key={image._id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 transform translate-x-0' 
                          : index < currentImageIndex 
                            ? 'opacity-0 transform -translate-x-full'
                            : 'opacity-0 transform translate-x-full'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))
                )}
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                
                {/* Clean navigation arrows - always visible */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10 border border-gray-200"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10 border border-gray-200"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Bottom section with indicators and counter */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm p-3 sm:p-4">
                
                {/* Carousel indicators */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-blue-600 w-6 sm:w-8' 
                          : 'bg-gray-300 w-1.5 sm:w-2 hover:bg-gray-400 active:bg-gray-500'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Image counter and title */}
                <div className="text-center">
                  <div className="text-xs text-gray-500 font-medium">
                    {currentImageIndex + 1} of {carouselImages.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium mt-1 truncate px-2">
                    {carouselImages[currentImageIndex].alt.split(' at ')[0]}
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-teal-500 rounded-full opacity-20"></div>
            
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 lg:h-20">
          <path d="M0 120L48 110C96 100 192 80 288 85C384 90 480 120 576 120C672 120 768 90 864 75C960 60 1056 60 1152 70C1248 80 1344 100 1392 110L1440 120V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="url(#gradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#3B82F6"/>
              <stop offset="0.5" stopColor="#14B8A6"/>
              <stop offset="1" stopColor="#F97316"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  )
}
