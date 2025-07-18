import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthService } from '@/services/AuthService';
import GalleryGrid from './_components/GalleryGrid';
import GalleryUpload from './_components/GalleryUpload';

export default async function GalleryManagement() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) {
    redirect('/management/login');
  }

  const user = await AuthService.getCurrentUser(token);
  if (!user) {
    redirect('/management/login');
  }

  // Check if user has permission to manage gallery
  if (user.role !== 'super_admin' && !user.permissions.includes('gallery')) {
    redirect('/management');
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-gray-600 mt-1">Manage school photos and images</p>
        </div>
      </div>

      {/* Upload Section */}
      <GalleryUpload />

      {/* Gallery Grid */}
      <GalleryGrid />
    </div>
  );
}
