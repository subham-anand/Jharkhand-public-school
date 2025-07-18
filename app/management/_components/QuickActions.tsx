import React from 'react';
import Link from 'next/link';
import { AuthUser } from '@/services/AuthService';
import { 
  IconPlus, 
  IconEdit, 
  IconEye, 
  IconUsers,
  IconPhoto,
  IconHeart,
  IconFileText
} from '@tabler/icons-react';

interface QuickActionsProps {
  user: AuthUser;
}

export default function QuickActions({ user }: QuickActionsProps) {
  const quickActions = [
    {
      title: 'Add New Gallery Image',
      description: 'Upload photos from recent events',
      href: '/management/gallery/new',
      icon: IconPhoto,
      color: 'blue',
      permission: 'gallery'
    },
    {
      title: 'Manage Testimonials',
      description: 'Review and approve testimonials',
      href: '/management/testimonials',
      icon: IconHeart,
      color: 'purple',
      permission: 'testimonials'
    },
    {
      title: 'Update Content',
      description: 'Edit website content and pages',
      href: '/management/content',
      icon: IconFileText,
      color: 'green',
      permission: 'content'
    },
    {
      title: 'Manage Teachers',
      description: 'Add or update teacher information',
      href: '/management/teachers',
      icon: IconUsers,
      color: 'orange',
      permission: 'content'
    },
    {
      title: 'View Analytics',
      description: 'Check website performance',
      href: '/management/analytics',
      icon: IconEye,
      color: 'teal',
      permission: 'settings'
    },
    {
      title: 'Create Admin',
      description: 'Add new admin or moderator',
      href: '/management/users/new',
      icon: IconPlus,
      color: 'red',
      permission: 'users'
    }
  ];

  const hasPermission = (permission: string | null) => {
    if (!permission) return true;
    if (user.role === 'super_admin') return true;
    return user.permissions.includes(permission);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: 'bg-green-50 text-green-600 hover:bg-green-100',
      purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
      teal: 'bg-teal-50 text-teal-600 hover:bg-teal-100',
      red: 'bg-red-50 text-red-600 hover:bg-red-100'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-50 text-gray-600 hover:bg-gray-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-3">
        {quickActions.map((action) => {
          if (!hasPermission(action.permission)) return null;
          
          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(action.color)}`}>
                <action.icon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
              <IconEdit size={16} className="text-gray-400" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
