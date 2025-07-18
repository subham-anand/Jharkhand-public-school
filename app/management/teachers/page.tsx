import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthService } from '@/services/AuthService';
import TeachersList from './_components/TeachersList';
import AddTeacherForm from './_components/AddTeacherForm';

export default async function TeachersManagement() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) {
    redirect('/management/login');
  }

  const user = await AuthService.getCurrentUser(token);
  if (!user) {
    redirect('/management/login');
  }

  // Check if user has permission to manage content
  if (user.role !== 'super_admin' && !user.permissions.includes('content')) {
    redirect('/management');
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teachers Management</h1>
          <p className="text-gray-600 mt-1">Manage teacher profiles and information</p>
        </div>
      </div>

      {/* Add Teacher Form */}
      <AddTeacherForm />

      {/* Teachers List */}
      <TeachersList />
    </div>
  );
}
