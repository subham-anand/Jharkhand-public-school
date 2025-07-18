import React from 'react';
import AuthenticatedWrapper from './_components/AuthenticatedWrapper';
import DashboardStats from './_components/DashboardStats';
import RecentActivity from './_components/RecentActivity';
import QuickActions from './_components/QuickActions';

export default function ManagementDashboard() {
  return (
    <AuthenticatedWrapper>
      {(user) => (
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">
                    Welcome back, {user.email.split('@')[0]}! 👋
                  </h1>
                  <p className="text-blue-100 text-lg">
                    Here&apos;s what&apos;s happening at Jharkhand Public School today
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="bg-white/20 px-4 py-2 rounded-full">
                      <span className="text-sm font-medium capitalize">
                        {user.role.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">
                        {new Date().toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Last updated:</span>
                <span className="text-sm font-medium text-gray-900">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
            <DashboardStats user={user} />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Actions
              </h3>
              <QuickActions user={user} />
            </div>
            
            {/* Recent Activity */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recent Activity
              </h3>
              <RecentActivity user={user} />
            </div>
          </div>
        </div>
      )}
    </AuthenticatedWrapper>
  );
}
