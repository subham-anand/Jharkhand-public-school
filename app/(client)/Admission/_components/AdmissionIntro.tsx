import React from 'react';
import Link from 'next/link';
import { 
  IconSchool, 
  IconStar, 
  IconHeart, 
  IconSparkles, 
  IconUsers,
  IconArrowRight,
  IconBook,
  IconHome,
  IconCalendar
} from '@tabler/icons-react';

export default function AdmissionIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-24 h-24 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-green-200 to-teal-200 rounded-full opacity-20 animate-bounce animation-delay-4000"></div>
      </div>

      {/* Floating Academic Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/6 transform rotate-12">
          <IconBook size={60} className="text-blue-400" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 transform -rotate-12">
          <IconSchool size={80} className="text-teal-400" />
        </div>
        <div className="absolute top-1/2 left-1/12 transform rotate-45">
          <IconStar size={40} className="text-yellow-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-lg border border-blue-200">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full">
                <IconSchool size={20} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Admissions Open</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">🎓 Admission</span>
                <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
                  Introduction
                </span>
              </h1>
            </div>

            {/* Content Description */}
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg flex-shrink-0">
                    <IconCalendar size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Session 2025-26</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We&apos;re now accepting admissions for the <span className="font-semibold text-blue-600">2025–26 academic session</span>. Start your child&apos;s journey with Jharkhand Public School — where <span className="font-semibold text-teal-600">learning feels like home</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <IconHeart size={20} className="text-blue-600" />
                  <span className="font-medium text-blue-800">Nurturing Environment</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl border border-teal-200">
                  <IconUsers size={20} className="text-teal-600" />
                  <span className="font-medium text-teal-800">Experienced Teachers</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <IconBook size={20} className="text-orange-600" />
                  <span className="font-medium text-orange-800">JAC Board Curriculum</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <IconHome size={20} className="text-purple-600" />
                  <span className="font-medium text-purple-800">Home-like Atmosphere</span>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="space-y-4">
              <Link 
                href="/admission-process"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                <IconSchool size={24} />
                <span>Apply For Admission</span>
                <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <IconSparkles size={16} className="text-yellow-500" />
                <span>Secure your child&apos;s future with just one click!</span>
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Parent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-blue-100 via-teal-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              {/* School Illustration */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-8xl mb-6">🏫</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Jharkhand Public School</h3>
                <p className="text-gray-600 mb-6">Your child&apos;s second home for learning and growth</p>
                
                {/* Admission Status */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>🎓 Admissions Open Now!</span>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <div className="text-2xl mb-1">📚</div>
                    <div className="text-xs font-semibold text-blue-800">Nursery to Class 8</div>
                  </div>
                  <div className="p-3 bg-teal-50 rounded-lg text-center">
                    <div className="text-2xl mb-1">🏆</div>
                    <div className="text-xs font-semibold text-teal-800">Quality Education</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg text-center">
                    <div className="text-2xl mb-1">🌟</div>
                    <div className="text-xs font-semibold text-orange-800">Individual Care</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg text-center">
                    <div className="text-2xl mb-1">❤️</div>
                    <div className="text-xs font-semibold text-purple-800">Loving Environment</div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 p-3 rounded-full shadow-lg animate-bounce">
                <IconStar size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 p-3 rounded-full shadow-lg animate-pulse">
                <IconHeart size={24} />
              </div>
            </div>

            {/* Decorative Elements Around Image */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <IconSparkles size={16} className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Start Your Journey</span>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <IconHome size={16} className="text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Feel at Home</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-2xl p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    🚀 Limited Seats Available!
                  </h3>
                  <p className="text-gray-600">
                    Don&apos;t miss this opportunity to secure your child&apos;s bright future.
                  </p>
                </div>
                <Link 
                  href="/admission-process"
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  <span>View Information</span>
                  <IconArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
