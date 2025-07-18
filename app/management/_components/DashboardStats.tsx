import React from 'react';
import { AuthUser } from '@/services/AuthService';
import { 
  IconUsers, 
  IconPhoto, 
  IconHeart, 
  IconFileText,
  IconTrendingUp,
  IconEye,
  IconArrowUpRight,
  IconArrowDownRight
} from '@tabler/icons-react';

interface DashboardStatsProps {
  user: AuthUser;
}

export default function DashboardStats({ user }: DashboardStatsProps) {
  const stats = [
    {
      title: 'Total Students',
      value: '500+',
      change: '+12 this month',
      trend: 'up',
      percentage: '+2.4%',
      icon: IconUsers,
      color: 'blue',
      permission: 'admissions'
    },
    {
      title: 'Gallery Images',
      value: '45',
      change: '+8 new',
      trend: 'up',
      percentage: '+15.2%',
      icon: IconPhoto,
      color: 'green',
      permission: 'gallery'
    },
    {
      title: 'Testimonials',
      value: '28',
      change: '+5 pending',
      trend: 'up',
      percentage: '+8.1%',
      icon: IconHeart,
      color: 'purple',
      permission: 'testimonials'
    },
    {
      title: 'Content Pages',
      value: '15',
      change: 'All updated',
      trend: 'neutral',
      percentage: '0%',
      icon: IconFileText,
      color: 'orange',
      permission: 'content'
    },
    {
      title: 'Monthly Visitors',
      value: '2.4k',
      change: '+18% growth',
      trend: 'up',
      percentage: '+18%',
      icon: IconEye,
      color: 'teal',
      permission: 'settings'
    },
    {
      title: 'Admission Inquiries',
      value: '156',
      change: '+24 this week',
      trend: 'up',
      percentage: '+13.5%',
      icon: IconTrendingUp,
      color: 'red',
      permission: 'admissions'
    }
  ];

  const hasPermission = (permission: string | null) => {
    if (!permission) return true;
    if (user.role === 'super_admin') return true;
    return user.permissions.includes(permission);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-500',
        text: 'text-green-600',
        border: 'border-green-200'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'bg-orange-500',
        text: 'text-orange-600',
        border: 'border-orange-200'
      },
      teal: {
        bg: 'bg-teal-50',
        icon: 'bg-teal-500',
        text: 'text-teal-600',
        border: 'border-teal-200'
      },
      red: {
        bg: 'bg-red-50',
        icon: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-200'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => {
        if (!hasPermission(stat.permission)) return null;
        
        const colorClass = getColorClasses(stat.color);
        
        return (
          <div 
            key={stat.title}
            className={`relative overflow-hidden rounded-2xl ${colorClass.bg} border ${colorClass.border} p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full transform rotate-45 translate-x-16 -translate-y-16"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${colorClass.icon} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {stat.trend === 'up' ? (
                    <IconArrowUpRight size={16} className="text-green-500" />
                  ) : stat.trend === 'down' ? (
                    <IconArrowDownRight size={16} className="text-red-500" />
                  ) : null}
                  <span className={`text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-500' : 
                    stat.trend === 'down' ? 'text-red-500' : 
                    'text-gray-500'
                  }`}>
                    {stat.percentage}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className={`text-xs ${colorClass.text} font-medium`}>
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
