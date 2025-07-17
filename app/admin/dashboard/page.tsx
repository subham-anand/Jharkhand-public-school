// Admin Dashboard - Main Overview
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthService } from '@/services/AuthService';
import Link from 'next/link';
import { 
  IconUsers, 
  IconFileText, 
  IconPhoto, 
  IconHeart, 
  IconSettings,
  IconChartBar,
  IconSchool
} from '@tabler/icons-react';

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) {
    redirect('/admin/login');
  }

  const user = await AuthService.getCurrentUser(token);
  if (!user) {
    redirect('/admin/login');
  }

  const dashboardCards = [
    {
      title: 'Admissions',
      description: 'Manage admission applications',
      icon: IconUsers,
      href: '/admin/admissions',
      color: 'blue'
    },
    {
      title: 'Content Management',
      description: 'Edit hero, about, and other content',
      icon: IconFileText,
      href: '/admin/content',
      color: 'green'
    },
    {
      title: 'Gallery',
      description: 'Manage school photo gallery',
      icon: IconPhoto,
      href: '/admin/gallery',
      color: 'purple'
    },
    {
      title: 'Testimonials',
      description: 'Add and edit testimonials',
      icon: IconHeart,
      href: '/admin/testimonials',
      color: 'pink'
    },
    {
      title: 'Settings',
      description: 'System settings and configuration',
      icon: IconSettings,
      href: '/admin/settings',
      color: 'gray'
    },
    {
      title: 'Analytics',
      description: 'View website statistics',
      icon: IconChartBar,
      href: '/admin/analytics',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <IconSchool className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">JPS Admin Panel</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Website
              </Link>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Admin Dashboard</h2>
          <p className="text-gray-600">Manage your school website content and applications</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={index}
                href={card.href}
                className={`block bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-${card.color}-100 rounded-lg`}>
                    <Icon className={`text-${card.color}-600`} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-blue-600">0</div>
              <div className="text-gray-600">Pending Admissions</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-green-600">0</div>
              <div className="text-gray-600">Total Students</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-purple-600">0</div>
              <div className="text-gray-600">Gallery Images</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-pink-600">0</div>
              <div className="text-gray-600">Testimonials</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
