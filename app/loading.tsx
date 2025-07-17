"use client"
import React from 'react'
import { IconSchool, IconBook, IconUsers, IconStar, IconHeart } from '@tabler/icons-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Animated Background Waves */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z"
              fill="url(#wave-gradient)"
              className="animate-wave"
            />
            <path
              d="M0,300 Q300,200 600,300 T1200,300 L1200,800 L0,800 Z"
              fill="url(#wave-gradient)"
              className="animate-wave-reverse"
            />
          </svg>
        </div>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* Animated School Logo with Complex Animation */}
        <div className="mb-8 relative">
          <div className="relative inline-block">
            {/* Multiple rotating rings */}
            <div className="absolute inset-0 w-40 h-40 border-4 border-blue-200 rounded-full animate-spin-slow opacity-60"></div>
            <div className="absolute inset-2 w-36 h-36 border-4 border-teal-200 rounded-full animate-spin-reverse opacity-60"></div>
            <div className="absolute inset-4 w-32 h-32 border-2 border-orange-200 rounded-full animate-spin-slow opacity-60"></div>
            
            {/* Pulsing outer glow */}
            <div className="absolute inset-0 w-40 h-40 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-pulse opacity-20"></div>
            
            {/* School icon container with 3D effect */}
            <div className="relative w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center animate-bounce-gentle transform hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-50"></div>
              <IconSchool size={48} className="text-blue-600 relative z-10 animate-pulse" />
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 w-40 h-40 animate-orbit">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <div className="absolute inset-0 w-40 h-40 animate-orbit-reverse">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
            </div>
            <div className="absolute inset-0 w-40 h-40 animate-orbit-slow">
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Animated School Name with Gradient Text */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 mb-2 animate-gradient-text">
            Jharkhand Public School
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-up">
            Barharwa, Sahibganj, Jharkhand
          </p>
        </div>

        {/* Advanced Progress Bar with Segments */}
        <div className="mb-8">
          <div className="w-96 h-3 bg-gray-200 rounded-full mx-auto overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-full animate-loading-bar-advanced shadow-lg"></div>
          </div>
          <p className="text-sm text-gray-500 mt-3 animate-pulse">
            <span className="animate-typing">Loading amazing content</span>
            <span className="animate-dots">...</span>
          </p>
        </div>

        {/* Floating Icons with Complex Animation */}
        <div className="relative h-24 mb-8">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
            <div className="flex space-x-12 animate-float-complex">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full animate-bounce-gentle shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <IconBook size={28} className="text-blue-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-full animate-bounce-gentle shadow-lg transform hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                  <IconUsers size={28} className="text-teal-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full animate-bounce-gentle shadow-lg transform hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
                  <IconStar size={28} className="text-orange-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-3 gap-8 mb-8 max-w-lg mx-auto">
          <div className="text-center animate-scale-up">
            <div className="text-2xl font-bold text-blue-600 animate-count-up">2009</div>
            <div className="text-xs text-gray-500">Established</div>
          </div>
          <div className="text-center animate-scale-up" style={{animationDelay: '0.2s'}}>
            <div className="text-2xl font-bold text-teal-600 animate-count-up">100%</div>
            <div className="text-xs text-gray-500">Success Rate</div>
          </div>
          <div className="text-center animate-scale-up" style={{animationDelay: '0.4s'}}>
            <div className="text-2xl font-bold text-orange-600 animate-count-up">8</div>
            <div className="text-xs text-gray-500">Classes</div>
          </div>
        </div>

        {/* Animated Text with Typewriter Effect */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 mb-2 animate-pulse">
            Nurturing Young Minds Since 2009
          </p>
          <p className="text-sm text-gray-600 animate-fade-in-up">
            JAC Board • Hindi Medium • Nursery to Class 8
          </p>
        </div>

        {/* Advanced Loading Dots */}
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-bounce-sequence"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>

        {/* Floating Hearts for Extra Charm */}
        <div className="absolute top-1/4 left-1/4 animate-float-heart">
          <IconHeart size={20} className="text-red-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-heart" style={{animationDelay: '1s'}}>
          <IconHeart size={16} className="text-pink-400 opacity-60" />
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes loading-bar-advanced {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% {
            width: 100%;
            transform: translateX(100%);
          }
        }
        
        @keyframes float-complex {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          75% {
            transform: translateY(-5px) rotate(-5deg);
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes scale-up {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes orbit-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        
        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes wave-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        
        @keyframes float-heart {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.2);
          }
        }
        
        @keyframes bounce-sequence {
          0%, 80%, 100% {
            transform: scale(0.8);
          }
          40% {
            transform: scale(1.2);
          }
        }
        
        @keyframes typing {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes dots {
          0%, 20% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          80%, 100% {
            opacity: 0;
          }
        }
        
        .animate-loading-bar-advanced {
          animation: loading-bar-advanced 3s ease-in-out infinite;
        }
        
        .animate-float-complex {
          animation: float-complex 4s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 2s ease-out forwards;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-scale-up {
          animation: scale-up 1s ease-out forwards;
        }
        
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 6s linear infinite;
        }
        
        .animate-orbit-slow {
          animation: orbit 12s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
        
        .animate-wave {
          animation: wave 6s ease-in-out infinite;
        }
        
        .animate-wave-reverse {
          animation: wave-reverse 8s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 5s ease-in-out infinite;
        }
        
        .animate-float-heart {
          animation: float-heart 3s ease-in-out infinite;
        }
        
        .animate-bounce-sequence {
          animation: bounce-sequence 1.4s ease-in-out infinite;
        }
        
        .animate-typing {
          animation: typing 2s ease-in-out infinite;
        }
        
        .animate-dots {
          animation: dots 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
