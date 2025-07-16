"use client"
import React from 'react'
import { IconCalendarEvent, IconUserPlus, IconPhone, IconDownload, IconSparkles } from '@tabler/icons-react'

// Reusable Action Button Component
const ActionButton = ({ 
  children, 
  variant = 'primary', 
  icon,
  onClick,
  className = ""
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const baseClasses = "group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 focus:ring-blue-300",
    secondary: "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 focus:ring-orange-300",
    outline: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
      {children}
    </button>
  );
};

// Background Animations Component
const BackgroundAnimations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating graduation caps */}
    <div className="absolute top-10 left-10 text-4xl animate-bounce [animation-delay:0s]">🎓</div>
    <div className="absolute top-20 right-16 text-3xl animate-bounce [animation-delay:2s]">📚</div>
    <div className="absolute bottom-32 left-20 text-3xl animate-bounce [animation-delay:4s]">✏️</div>
    <div className="absolute bottom-20 right-10 text-4xl animate-bounce [animation-delay:1s]">🎒</div>
    <div className="absolute top-1/2 left-1/4 text-2xl animate-bounce [animation-delay:3s]">⭐</div>
    <div className="absolute top-1/3 right-1/3 text-2xl animate-bounce [animation-delay:5s]">🌟</div>
    
    {/* Floating geometric shapes */}
    <div className="absolute top-24 right-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-pulse [animation-delay:1s]"></div>
    <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-orange-200 rounded-full opacity-25 animate-pulse [animation-delay:3s]"></div>
    <div className="absolute top-1/2 right-20 w-12 h-12 bg-teal-200 rounded-full opacity-35 animate-pulse [animation-delay:2s]"></div>
    <div className="absolute bottom-1/4 left-16 w-14 h-14 bg-purple-200 rounded-full opacity-30 animate-pulse [animation-delay:4s]"></div>
  </div>
);

// Academic Year Badge Component
const AcademicYearBadge = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  
  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-full text-blue-700 font-bold text-sm sm:text-base mb-6 shadow-md hover:shadow-lg transition-shadow">
      <IconCalendarEvent size={20} className="text-blue-600" />
      <span>🎓 Admissions Open {currentYear}–{nextYear}</span>
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    </div>
  );
};

// Statistics Component
const AdmissionStats = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12">
    <div className="text-center group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
        <span className="text-2xl sm:text-3xl">📝</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-blue-600">Easy</div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium">Application</div>
    </div>
    
    <div className="text-center group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
        <span className="text-2xl sm:text-3xl">⚡</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-green-600">Fast</div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium">Processing</div>
    </div>
    
    <div className="text-center group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
        <span className="text-2xl sm:text-3xl">🤝</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-purple-600">Support</div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium">Contact Support</div>
    </div>
    
    <div className="text-center group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
        <span className="text-2xl sm:text-3xl">🎯</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-orange-600">Quality</div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium">Education</div>
    </div>
  </div>
);

export default function AdmissionOpen() {
  const handleApplyNow = () => {
    console.log('Apply Now clicked');
    // Add application logic here
  };

  const handleGetDetails = () => {
    console.log('Get Admission Details clicked');
    // Add details download logic here
  };

  const handleTalkToAdvisor = () => {
    console.log('Talk to Advisor clicked');
    // Add advisor contact logic here
  };

  return (
    <section id="admissions" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-teal-50/30 overflow-hidden">
      <BackgroundAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <AcademicYearBadge />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl sm:text-5xl">🎒</span>
              <span>Let Their</span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600">
              Learning Journey
            </span>
            <span className="block">Begin Here</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
              Admissions are now open for{' '}
              <span className="font-bold text-blue-600">Nursery to Class 8</span>.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Join a school that{' '}
              <span className="font-semibold text-teal-600">feels like home</span>{' '}
              and{' '}
              <span className="font-semibold text-orange-600">teaches like a dream</span>.
            </p>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left: CTA Buttons */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center lg:text-left">
                Ready to Start? Choose Your Next Step:
              </h3>
              
              <div className="space-y-4">
                <ActionButton 
                  variant="primary" 
                  icon={<IconUserPlus size={20} />}
                  onClick={handleApplyNow}
                  className="w-full"
                >
                  Apply Now
                </ActionButton>
                
                <ActionButton 
                  variant="secondary" 
                  icon={<IconDownload size={20} />}
                  onClick={handleGetDetails}
                  className="w-full"
                >
                  Get Admission Details
                </ActionButton>
                
                <ActionButton 
                  variant="outline" 
                  icon={<IconPhone size={20} />}
                  onClick={handleTalkToAdvisor}
                  className="w-full"
                >
                  Talk to an Admission Advisor
                </ActionButton>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <IconSparkles size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Limited Seats Available!</h4>
                  <p className="text-green-700 text-sm">
                    Don&apos;t miss out on securing your child&apos;s spot in our nurturing learning environment. 
                    Early applications get priority consideration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Content */}
          <div className="relative">
            <div className="relative group">
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl p-8 lg:p-12 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                
                {/* School building illustration */}
                <div className="text-center space-y-6">
                  <div className="text-8xl sm:text-9xl">🏫</div>
                  <div className="space-y-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Welcome to Your Future!
                    </h4>
                    <p className="text-gray-600">
                      Join 500+ happy students in our family
                    </p>
                  </div>
                  
                  {/* Admission process steps */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">1️⃣</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700">Apply Online</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">2️⃣</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700">Visit School</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">3️⃣</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700">Start Learning</p>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🎊</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <AdmissionStats />

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Questions About Admissions?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Our admission team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <ActionButton 
                variant="primary" 
                icon={<IconPhone size={20} />}
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Call Us Now
              </ActionButton>
              <ActionButton 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-gray-900"
              >
                Live Chat
              </ActionButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12">
          <path d="M0 120L60 110C120 100 240 80 360 85C480 90 600 120 720 120C840 120 960 90 1080 75C1200 60 1320 60 1380 60L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="url(#admissionGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="admissionGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#3B82F6"/>
              <stop offset="0.5" stopColor="#14B8A6"/>
              <stop offset="1" stopColor="#F97316"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
