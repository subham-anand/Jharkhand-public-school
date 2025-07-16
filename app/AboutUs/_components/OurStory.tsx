import React from 'react';
import { IconStar, IconHeart, IconUsers, IconAward, IconSparkles, IconBook2, IconTarget, IconSchool } from '@tabler/icons-react';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Our Story Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-200 rounded-full opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-orange-200 rounded-full opacity-40 animate-bounce animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header with Icon */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg">
                    <IconSchool size={32} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <IconSparkles size={24} className="text-yellow-500" />
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Since 2010</span>
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="block">🏫 Our</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
                    Story
                  </span>
                </h1>
              </div>

              {/* Story Content */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl font-medium text-gray-800">
                  Established in <span className="font-bold text-blue-600">2010</span>, Jharkhand Public School began with a simple dream—to make early education joyful, safe, and meaningful for every child.
                </p>
                
                <p>
                  Over the years, we&apos;ve grown into a <span className="font-semibold text-teal-600">trusted name in Jharkhand</span>, known for our strong academic focus blended with creative exploration and moral development.
                </p>
                
                <p>
                  With a team of <span className="font-semibold text-orange-600">passionate educators</span> and a child-first environment, we believe in helping each child shine in their own way.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl font-bold text-orange-600">30+</div>
                  <div className="text-sm text-gray-600">Dedicated Teachers</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Parent Satisfaction</div>
                </div>
              </div>

              {/* Values Pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <IconHeart size={16} />
                  <span>Child-First Approach</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  <IconTarget size={16} />
                  <span>Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  <IconUsers size={16} />
                  <span>Community Focus</span>
                </div>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-8 shadow-2xl">
                {/* School Building Illustration */}
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-8xl mb-4">🏫</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Jharkhand Public School</h3>
                  <p className="text-gray-600 mb-4">Nurturing Young Minds Since 2010</p>
                  
                  {/* Journey Timeline */}
                  <div className="space-y-4 mt-6">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2010
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">Foundation</div>
                        <div className="text-sm text-gray-600">Started with a dream</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2025
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">Today</div>
                        <div className="text-sm text-gray-600">Trusted educational hub</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 p-3 rounded-full shadow-lg animate-bounce">
                  <IconAward size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 p-3 rounded-full shadow-lg animate-pulse">
                  <IconStar size={24} />
                </div>
              </div>

              {/* Decorative Elements Around Image */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                  <IconBook2 size={16} className="text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Quality Education</span>
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                  <IconHeart size={16} className="text-red-500" />
                  <span className="text-sm font-medium text-gray-700">With Love & Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote Section */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 italic leading-relaxed">
                &ldquo;Every child is a unique star, waiting to shine bright. Our mission is to provide the nurturing environment where their light can illuminate the world.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                <IconSparkles size={24} className="text-yellow-500" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-orange-500"></div>
              </div>
              <cite className="block mt-4 text-lg font-semibold text-gray-800">
                Jharkhand Public School Family
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
