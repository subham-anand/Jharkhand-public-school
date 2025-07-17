import React from 'react'
import CtaBtns from './CtaBtns';
import {  IconMail, IconSchool } from '@tabler/icons-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="hero relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      
      <div className="hero-content flex flex-col lg:flex-row items-center justify-between w-full min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 max-w-7xl mx-auto relative z-10">
        
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

        {/* Image Section */}
        <div className='image-div lg:w-1/2 xl:w-2/5 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0'>
          <div className="relative group">
            {/* Decorative background for image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
            
            {/* Main image container */}
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <Image
                src="/hero_img.png"
                alt="Students learning at Jharkhand Public School"
                width={640}
                height={720}
                className='hero-image rounded-xl w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl'
                priority
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-xl">📚</span>
              </div>
              <div className="absolute top-1/4 -left-6 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <span className="text-sm">⭐</span>
              </div>
            </div>
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
