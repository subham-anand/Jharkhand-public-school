import React from 'react';
import AuthenticatedWrapper from '../_components/AuthenticatedWrapper';
import TeachersList from './_components/TeachersList';
import AddTeacherForm from './_components/AddTeacherForm';
import { redirect } from 'next/navigation';

export default function TeachersManagement() {
  return (
    <AuthenticatedWrapper>
      {(user) => {
        // Check if user has permission to manage teachers
        if (user.role !== 'super_admin' && !user.permissions.includes('content')) {
          redirect('/management');
        }

        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      Teachers Management
                    </h1>
                    <p className="text-green-100 text-lg">
                      Manage teacher profiles, qualifications, and information
                    </p>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Add Teacher Form */}
              <div className="xl:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add New Teacher
                  </h2>
                  <AddTeacherForm />
                </div>
              </div>

              {/* Teachers List */}
              <div className="xl:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Manage Teachers
                  </h2>
                  <TeachersList currentUser={user} />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </AuthenticatedWrapper>
  );
}
