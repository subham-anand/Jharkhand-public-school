"use client"
import React from 'react'
import { IconBulb, IconPlant, IconPalette, IconShield, IconWorld, IconBrain, IconHeart } from '@tabler/icons-react'

// Reusable Button Component
const CTAButton = ({ 
  children, 
  variant = 'primary', 
  onClick 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
  onClick?: () => void;
}) => {
  const baseClasses = "px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30";
  
  const variants = {
    primary: "bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Background Pattern Component
const BackgroundPattern = () => (
  <>
    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
    <div className="absolute inset-0">
      {/* Animated circles */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full animate-pulse [animation-delay:2s]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full animate-pulse [animation-delay:4s]"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/15 rounded-full animate-ping [animation-delay:1s]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-white/15 rounded-full animate-ping [animation-delay:3s]"></div>
    </div>
  </>
);

// Main CTA Section Component
const CTASection = () => {
  const handleScheduleVisit = () => {
    // Add your scheduling logic here
    console.log('Schedule visit clicked');
  };

  const handleDownloadBrochure = () => {
    // Add your download logic here
    console.log('Download brochure clicked');
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">
      <BackgroundPattern />
      
      <div className="relative z-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Ready to Give Your Child{' '}
            <span className="block sm:inline">
              the <span className="text-yellow-200">Best Start?</span>
            </span>
          </h3>
          
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4 lg:px-0">
            Join our family of happy parents and students. Schedule a visit to see our caring environment in action.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-lg mx-auto">
          <CTAButton variant="primary" onClick={handleScheduleVisit}>
            📅 Schedule a Visit
          </CTAButton>
          <CTAButton variant="secondary" onClick={handleDownloadBrochure}>
            📄 Download Brochure
          </CTAButton>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-4 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span className="text-lg">🔒</span>
            <span>Safe Environment</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span className="text-lg">⭐</span>
            <span>5-Star Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span className="text-lg">🎓</span>
            <span>Expert Teachers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: <IconPlant size={32} className="text-green-600" />,
      emoji: "🌱",
      title: "We nurture the whole child",
      description: "Learning here isn't just academic — we build character, confidence, and curiosity.",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100"
    },
    {
      icon: <IconHeart size={32} className="text-pink-600" />,
      emoji: "👩‍🏫",
      title: "Teachers who care deeply",
      description: "Our trained, loving educators guide every child with patience and personal attention.",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100"
    },
    {
      icon: <IconPalette size={32} className="text-purple-600" />,
      emoji: "🎨",
      title: "Learning that's playful & purposeful",
      description: "From stories to science experiments — we blend fun with foundational skills.",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100"
    },
    {
      icon: <IconShield size={32} className="text-blue-600" />,
      emoji: "🏫",
      title: "Safe, secure, and happy spaces",
      description: "A child-first campus where every student feels seen, safe, and supported.",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100"
    },
    {
      icon: <IconWorld size={32} className="text-teal-600" />,
      emoji: "🌍",
      title: "Strong roots, open minds",
      description: "We balance moral values with modern learning for well-rounded growth.",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-100"
    },
    {
      icon: <IconBrain size={32} className="text-orange-600" />,
      emoji: "🧠",
      title: "Small class sizes, big attention",
      description: "More space to speak, explore, and grow — at a pace that suits your child.",
      bgColor: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100"
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-100 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-green-100 rounded-full opacity-50 animate-pulse animation-delay-4000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-100 rounded-full opacity-60 animate-pulse animation-delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-700 font-medium text-sm mb-6">
            <IconBulb size={16} className="text-yellow-600" />
            💡 Why Choose Us
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose{' '}
            <span className="block lg:inline">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600">
                Jharkhand Public School?
              </span>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes our school a special place where children don&apos;t just learn — they thrive, grow, and become their best selves.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.bgColor} border-2 ${feature.borderColor} rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Floating emoji */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl group-hover:animate-bounce">
                {feature.emoji}
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative gradient line */}
              <div className="w-12 h-1 bg-gradient-to-r from-current to-transparent rounded-full mt-4 opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative group">
          <CTASection />
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">500+</div>
            <div className="text-gray-600 font-medium">Happy Families</div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🏆</span>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">15+</div>
            <div className="text-gray-600 font-medium">Years Excellence</div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">👩‍🏫</span>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">25+</div>
            <div className="text-gray-600 font-medium">Caring Teachers</div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎓</span>
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12">
          <path d="M0 60L48 65C96 70 192 80 288 75C384 70 480 50 576 45C672 40 768 50 864 65C960 80 1056 100 1152 95C1248 90 1344 70 1392 60L1440 50V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="url(#whyChooseGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="whyChooseGradient" x1="0" y1="0" x2="1440" y2="0">
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
