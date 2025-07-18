'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IconDashboard, 
  IconUsers, 
  IconFileText, 
  IconPhoto, 
  IconHeart, 
  IconSettings,
  IconSchool,
  IconMail,
  IconChartBar,
  IconUserPlus,
  IconChevronRight
} from '@tabler/icons-react';
import { AuthUser } from '@/services/AuthService';

interface AdminSidebarProps {
  user: AuthUser;
}

export default function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigationItems = [
    {
      title: 'Dashboard',
      href: '/management',
      icon: IconDashboard,
      permission: null,
      color: 'blue',
      description: 'Overview & Stats'
    },
    {
      title: 'User Management',
      href: '/management/users',
      icon: IconUsers,
      permission: 'users',
      color: 'purple',
      description: 'Manage Users'
    },
    {
      title: 'Content Management',
      href: '/management/content',
      icon: IconFileText,
      permission: 'content',
      color: 'green',
      description: 'Website Content'
    },
    {
      title: 'Teachers',
      href: '/management/teachers',
      icon: IconSchool,
      permission: 'content',
      color: 'orange',
      description: 'Staff Management'
    },
    {
      title: 'Gallery',
      href: '/management/gallery',
      icon: IconPhoto,
      permission: 'gallery',
      color: 'pink',
      description: 'Photo Gallery'
    },
    {
      title: 'Testimonials',
      href: '/management/testimonials',
      icon: IconHeart,
      permission: 'testimonials',
      color: 'red',
      description: 'Reviews & Feedback'
    },
    {
      title: 'Admissions',
      href: '/management/admissions',
      icon: IconUserPlus,
      permission: 'admissions',
      color: 'indigo',
      description: 'Student Admissions'
    },
    {
      title: 'Contact Messages',
      href: '/management/contacts',
      icon: IconMail,
      permission: 'content',
      color: 'cyan',
      description: 'Inquiries & Messages'
    },
    {
      title: 'Analytics',
      href: '/management/analytics',
      icon: IconChartBar,
      permission: 'settings',
      color: 'emerald',
      description: 'Performance Metrics'
    },
    {
      title: 'Settings',
      href: '/management/settings',
      icon: IconSettings,
      permission: 'settings',
      color: 'gray',
      description: 'System Settings'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    orange: 'bg-orange-500 hover:bg-orange-600 text-white',
    pink: 'bg-pink-500 hover:bg-pink-600 text-white',
    red: 'bg-red-500 hover:bg-red-600 text-white',
    indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    cyan: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    gray: 'bg-gray-500 hover:bg-gray-600 text-white'
  };

  const hasPermission = (permission: string | null) => {
    if (!permission) return true;
    if (user.role === 'super_admin') return true;
    return user.permissions.includes(permission);
  };

  const isActive = (href: string) => {
    if (href === '/management') {
      return pathname === '/management';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-r border-slate-700 overflow-y-auto dark-scrollbar">
      {/* Header */}
      <div className="p-6 border-b border-slate-700 animate-slide-in-top">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <IconSchool size={24} className="text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
          </div>
          <div>
            <h2 className="font-bold text-xl text-white">JPS Admin</h2>
            <p className="text-slate-400 text-sm">Management Panel</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-6 border-b border-slate-700 animate-slide-in-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {user.email.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm truncate">{user.email}</p>
            <p className="text-slate-400 text-xs capitalize">{user.role.replace('_', ' ')}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 animate-slide-in-left">
        <nav className="space-y-2">
          {navigationItems.map((item, index) => {
            if (!hasPermission(item.permission)) return null;
            
            const active = isActive(item.href);
            const colorClass = colorClasses[item.color as keyof typeof colorClasses];
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  active 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105 animate-glow' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  active 
                    ? 'bg-white/20 shadow-lg' 
                    : `${colorClass} group-hover:shadow-lg`
                }`}>
                  <item.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className={`text-xs transition-colors duration-200 ${
                    active ? 'text-blue-100' : 'text-slate-500 group-hover:text-slate-400'
                  }`}>
                    {item.description}
                  </p>
                </div>
                {(active || hoveredItem === item.href) && (
                  <IconChevronRight 
                    size={16} 
                    className={`transition-all duration-200 ${
                      active ? 'text-white' : 'text-slate-400'
                    }`} 
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900 border-t border-slate-700 animate-slide-in-left">
        <div className="text-center">
          <p className="text-slate-500 text-xs">
            © 2024 Jharkhand Public School
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Admin Panel v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
