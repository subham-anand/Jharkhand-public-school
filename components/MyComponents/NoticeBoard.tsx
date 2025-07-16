"use client"
import React from 'react'
import { IconSpeakerphone, IconCalendar, IconBus, IconFlask, IconEye, IconPin, IconChevronRight } from '@tabler/icons-react'

// Individual Notice Component
const NoticeCard = ({ 
  icon, 
  emoji, 
  title, 
  description, 
  date, 
  priority = 'normal',
  index = 0 
}: {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
  date?: string;
  priority?: 'high' | 'normal' | 'low';
  index?: number;
}) => {
  const priorityStyles = {
    high: 'border-red-300 bg-red-50 shadow-red-100',
    normal: 'border-blue-300 bg-blue-50 shadow-blue-100',
    low: 'border-green-300 bg-green-50 shadow-green-100'
  };

  const pinColors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-purple-500', 'text-orange-500'];
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];

  return (
    <div className={`relative group ${rotations[index % rotations.length]} hover:rotate-0 hover:scale-105 transition-all duration-300`}>
      {/* Pin */}
      <div className={`absolute -top-2 right-4 z-20 ${pinColors[index % pinColors.length]}`}>
        <IconPin size={24} className="drop-shadow-sm" />
      </div>
      
      {/* Notice Paper */}
      <div className={`relative bg-white border-2 ${priorityStyles[priority]} rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
        {/* Notice Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full border-2 border-current flex items-center justify-center shadow-sm">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{emoji}</span>
              {date && (
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {date}
                </span>
              )}
            </div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Notice Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Priority Indicator */}
        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
            priority === 'high' ? 'bg-red-100 text-red-700' :
            priority === 'normal' ? 'bg-blue-100 text-blue-700' :
            'bg-green-100 text-green-700'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              priority === 'high' ? 'bg-red-500' :
              priority === 'normal' ? 'bg-blue-500' :
              'bg-green-500'
            } animate-pulse`}></div>
            {priority === 'high' ? 'Urgent' : priority === 'normal' ? 'Important' : 'Info'}
          </div>
          
          <button className="text-xs text-gray-500 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
            Read More
            <IconChevronRight size={12} />
          </button>
        </div>
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-50 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
};

// Cork Board Background Component
const CorkBoardBackground = () => (
  <div className="absolute inset-0 opacity-5">
    {/* Cork texture pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 20% 20%, #8B4513 1px, transparent 1px),
                       radial-gradient(circle at 80% 80%, #A0522D 1px, transparent 1px),
                       radial-gradient(circle at 40% 60%, #CD853F 1px, transparent 1px)`,
      backgroundSize: '30px 30px, 40px 40px, 25px 25px'
    }}></div>
  </div>
);

export default function NoticeBoard() {
  const notices = [
    {
      icon: <IconCalendar size={18} className="text-purple-600" />,
      emoji: "📅",
      title: "PTM on 20th July",
      description: "Parents are invited for one-on-one discussions with teachers to discuss your child's progress and development.",
      date: "20 Jul",
      priority: 'high' as const
    },
    {
      icon: <IconBus size={18} className="text-green-600" />,
      emoji: "🚌",
      title: "School Reopens on 1st July",
      description: "Welcome back to all students! We're excited to start the new academic session with renewed energy and learning.",
      date: "01 Jul",
      priority: 'normal' as const
    },
    {
      icon: <IconFlask size={18} className="text-orange-600" />,
      emoji: "🌟",
      title: "Science Day Fun",
      description: "A day full of discovery and creativity! Students will participate in exciting experiments and innovative projects.",
      date: "15 Jul",
      priority: 'normal' as const
    }
  ];

  const handleViewAllNotices = () => {
    console.log('View All Notices clicked');
    // Add navigation logic here
  };

  return (
    <section id="notices" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      <CorkBoardBackground />
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-orange-200 rounded-full opacity-25 animate-pulse [animation-delay:2s]"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-red-200 rounded-full opacity-35 animate-pulse [animation-delay:4s]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse [animation-delay:1s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full text-amber-800 font-medium text-sm mb-6 shadow-sm">
            <IconSpeakerphone size={16} className="text-amber-700" />
            📢 Latest Updates
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl sm:text-5xl">📢</span>
              <span>What&apos;s New</span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
              at JPS?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest announcements, events, and important information from Jharkhand Public School.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Notice Board Container */}
        <div className="relative">
          {/* Cork board frame */}
          <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-4 border-amber-200">
            
            {/* Board Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-dashed border-amber-300">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 flex items-center gap-2">
                <IconSpeakerphone size={24} />
                Notice Board
              </h3>
              <div className="flex items-center gap-2 text-sm text-amber-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live Updates
              </div>
            </div>

            {/* Notices Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {notices.map((notice, index) => (
                <NoticeCard
                  key={index}
                  index={index}
                  {...notice}
                />
              ))}
            </div>

            {/* View All Notices CTA */}
            <div className="text-center pt-6 border-t-2 border-dashed border-amber-300">
              <button
                onClick={handleViewAllNotices}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                <IconEye size={20} className="group-hover:scale-110 transition-transform" />
                View All Notices
                <IconChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-amber-700 mt-3">
                Get the complete list of announcements and updates
              </p>
            </div>

            {/* Decorative pins around the board */}
            <div className="absolute top-4 left-4 text-red-500 transform -rotate-12">
              <IconPin size={20} className="drop-shadow-sm" />
            </div>
            <div className="absolute top-4 right-4 text-blue-500 transform rotate-12">
              <IconPin size={20} className="drop-shadow-sm" />
            </div>
            <div className="absolute bottom-4 left-4 text-green-500 transform rotate-12">
              <IconPin size={20} className="drop-shadow-sm" />
            </div>
            <div className="absolute bottom-4 right-4 text-purple-500 transform -rotate-12">
              <IconPin size={20} className="drop-shadow-sm" />
            </div>
          </div>

          {/* Floating notification indicators */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg">
            3
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl">📋</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">All Notices</h4>
            <p className="text-xs text-gray-600">Complete archive</p>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl">🔔</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Notifications</h4>
            <p className="text-xs text-gray-600">Get alerts</p>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl">📅</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Events</h4>
            <p className="text-xs text-gray-600">School calendar</p>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl">📞</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
            <p className="text-xs text-gray-600">Get in touch</p>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12">
          <path d="M0 120L60 110C120 100 240 80 360 85C480 90 600 120 720 120C840 120 960 90 1080 75C1200 60 1320 60 1380 60L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="url(#noticeGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="noticeGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#F59E0B"/>
              <stop offset="0.5" stopColor="#EA580C"/>
              <stop offset="1" stopColor="#DC2626"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
