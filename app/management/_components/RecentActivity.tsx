import React from 'react';
import { AuthUser } from '@/services/AuthService';
import { 
  IconClock, 
  IconPhoto, 
  IconHeart, 
  IconFileText,
  IconUsers,
  IconCheck
} from '@tabler/icons-react';

interface RecentActivityProps {
  user: AuthUser;
}

export default function RecentActivity({ }: RecentActivityProps) {
  // Mock recent activity data - in real app, this would come from database
  const recentActivities = [
    {
      id: 1,
      action: 'New testimonial submitted',
      description: 'Parent review from Rahul Kumar',
      time: '2 hours ago',
      type: 'testimonial',
      icon: IconHeart,
      color: 'purple'
    },
    {
      id: 2,
      action: 'Gallery image uploaded',
      description: 'Sports Day 2024 photos added',
      time: '5 hours ago',
      type: 'gallery',
      icon: IconPhoto,
      color: 'blue'
    },
    {
      id: 3,
      action: 'Content updated',
      description: 'About Us page modified',
      time: '1 day ago',
      type: 'content',
      icon: IconFileText,
      color: 'green'
    },
    {
      id: 4,
      action: 'New admission inquiry',
      description: 'Application for Class 3',
      time: '1 day ago',
      type: 'admission',
      icon: IconUsers,
      color: 'orange'
    },
    {
      id: 5,
      action: 'Teacher profile updated',
      description: 'Arvind Sir&apos;s information updated',
      time: '2 days ago',
      type: 'teacher',
      icon: IconCheck,
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600',
      teal: 'bg-teal-50 text-teal-600',
      red: 'bg-red-50 text-red-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-50 text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <IconClock size={20} className="text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getColorClasses(activity.color)}`}>
              <activity.icon size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.action}</p>
              <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all activity
        </button>
      </div>
    </div>
  );
}
