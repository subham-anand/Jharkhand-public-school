import React from 'react'
import { IconHeart, IconUsers, IconStar, IconAward, IconBook, IconPalette } from '@tabler/icons-react'

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-40 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-orange-100 rounded-full opacity-60 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium text-sm mb-4">
            <IconHeart size={16} className="text-blue-500" />
            About Our School
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Where Learning Feels Like{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Family
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Since <span className="font-bold text-blue-600">2009</span>, Jharkhand Public School has been a trusted partner for parents who want more than just a classroom for their child.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We offer a <span className="font-semibold text-teal-600">caring, creative, and value-based</span> learning environment for children from <span className="font-semibold">Nursery to Class 8</span>.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border-l-4 border-blue-400">
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed italic">
                  &quot;Here, every day is a chance to <span className="font-semibold text-blue-600">discover</span>, <span className="font-semibold text-teal-600">express</span>, and <span className="font-semibold text-orange-600">grow</span> — with guidance that feels like family.&quot;
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <IconUsers size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Family Environment</h4>
                  <p className="text-sm text-gray-600">Caring & supportive</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <IconPalette size={20} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Creative Learning</h4>
                  <p className="text-sm text-gray-600">Express & discover</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <IconBook size={20} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Nursery to Class 8</h4>
                  <p className="text-sm text-gray-600">Complete foundation</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <IconAward size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Value-Based</h4>
                  <p className="text-sm text-gray-600">Character building</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {/* Placeholder for school images */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40">
                    <IconUsers size={32} className="text-blue-600 mb-2" />
                    <h4 className="font-semibold text-blue-800">Happy Students</h4>
                    <p className="text-2xl font-bold text-blue-600">500+</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40">
                    <IconStar size={32} className="text-teal-600 mb-2" />
                    <h4 className="font-semibold text-teal-800">Years of Trust</h4>
                    <p className="text-2xl font-bold text-teal-600">15+</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40">
                    <IconAward size={32} className="text-orange-600 mb-2" />
                    <h4 className="font-semibold text-orange-800">Success Rate</h4>
                    <p className="text-2xl font-bold text-orange-600">100%</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40">
                    <IconHeart size={32} className="text-green-600 mb-2" />
                    <h4 className="font-semibold text-green-800">Family Care</h4>
                    <p className="text-2xl font-bold text-green-600">100%</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-xl">🏫</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-lg">📖</span>
              </div>
              <div className="absolute top-1/4 -left-6 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <span className="text-sm">🌟</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline or Journey Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500"></div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Journey Since 2009
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over 15 years of dedication to nurturing young minds and building strong foundations for the future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <IconBook size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Founded</h4>
              <p className="text-sm text-gray-600">Established in 2009 with a vision for quality education</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <IconUsers size={24} className="text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-sm text-gray-600">Building strong relationships with families</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <IconPalette size={24} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Creative teaching methods and modern approach</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <IconAward size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">Consistent results and happy families</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12">
          <path d="M0 120L60 110C120 100 240 80 360 85C480 90 600 120 720 120C840 120 960 90 1080 75C1200 60 1320 60 1380 60L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="url(#aboutGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="aboutGradient" x1="0" y1="0" x2="1440" y2="0">
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
