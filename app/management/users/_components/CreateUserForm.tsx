'use client';

import React, { useState } from 'react';
import { AuthUser } from '@/services/AuthService';
import { IconPlus, IconLoader, IconCheck, IconAlertCircle, IconX, IconUserPlus, IconMail, IconShield, IconSettings } from '@tabler/icons-react';

interface CreateUserFormProps {
  currentUser: AuthUser;
}

export default function CreateUserForm({ currentUser }: CreateUserFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    role: 'admin' as 'admin' | 'moderator',
    permissions: [] as string[]
  });

  const allPermissions = [
    { id: 'admissions', label: 'Admissions Management', icon: IconUserPlus, color: 'text-emerald-600' },
    { id: 'content', label: 'Content Management', icon: IconMail, color: 'text-blue-600' },
    { id: 'testimonials', label: 'Testimonials Management', icon: IconCheck, color: 'text-purple-600' },
    { id: 'gallery', label: 'Gallery Management', icon: IconPlus, color: 'text-pink-600' },
    { id: 'users', label: 'User Management', icon: IconUserPlus, color: 'text-indigo-600' },
    { id: 'settings', label: 'Settings Management', icon: IconSettings, color: 'text-gray-600' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/auth/create-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Admin user created successfully! They will receive login instructions via email.');
        setFormData({ email: '', role: 'admin', permissions: [] });
      } else {
        setError(data.error || 'Failed to create user');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePermissionToggle = (permissionId: string) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter(p => p !== permissionId)
        : [...prev.permissions, permissionId]
    }));
  };

  const handleRoleChange = (role: 'admin' | 'moderator') => {
    setFormData(prev => ({
      ...prev,
      role,
      permissions: [] // Reset permissions when role changes
    }));
  };

  // Clear messages after 5 seconds
  React.useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage('');
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

  // Only super admin can create users
  if (currentUser.role !== 'super_admin') {
    return (
      <div className="bg-gray-50 rounded-xl p-6 text-center">
        <IconAlertCircle size={48} className="text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">You don&apos;t have permission to create users.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Success/Error Messages */}
      {(message || error) && (
        <div className={`p-4 rounded-xl border transition-all duration-300 ${
          message 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center gap-3">
            {message ? (
              <IconCheck size={20} className="text-green-600" />
            ) : (
              <IconAlertCircle size={20} className="text-red-600" />
            )}
            <p className={`text-sm font-medium ${
              message ? 'text-green-800' : 'text-red-800'
            }`}>
              {message || error}
            </p>
            <button
              onClick={() => { setMessage(''); setError(''); }}
              className={`ml-auto p-1 rounded-lg transition-colors ${
                message 
                  ? 'text-green-600 hover:bg-green-100' 
                  : 'text-red-600 hover:bg-red-100'
              }`}
            >
              <IconX size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconMail size={18} className="text-gray-400" />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter email address"
              required
            />
          </div>
        </div>

        {/* Role Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Role
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleRoleChange('admin')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                formData.role === 'admin'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <IconShield size={20} className={formData.role === 'admin' ? 'text-blue-600' : 'text-gray-400'} />
                <div className="text-left">
                  <p className="font-medium">Admin</p>
                  <p className="text-xs text-gray-500">Full access</p>
                </div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange('moderator')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                formData.role === 'moderator'
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <IconUserPlus size={20} className={formData.role === 'moderator' ? 'text-green-600' : 'text-gray-400'} />
                <div className="text-left">
                  <p className="font-medium">Moderator</p>
                  <p className="text-xs text-gray-500">Limited access</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Permissions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Permissions
          </label>
          <div className="space-y-2">
            {allPermissions.map(permission => {
              const Icon = permission.icon;
              return (
                <label
                  key={permission.id}
                  className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    formData.permissions.includes(permission.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.permissions.includes(permission.id)}
                    onChange={() => handlePermissionToggle(permission.id)}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-3 flex-1">
                    <Icon size={18} className={formData.permissions.includes(permission.id) ? 'text-blue-600' : 'text-gray-400'} />
                    <span className={`text-sm font-medium ${
                      formData.permissions.includes(permission.id) ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      {permission.label}
                    </span>
                  </div>
                  {formData.permissions.includes(permission.id) && (
                    <IconCheck size={16} className="text-blue-600" />
                  )}
                </label>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !formData.email || formData.permissions.length === 0}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <IconLoader size={20} className="animate-spin" />
              <span>Creating User...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <IconUserPlus size={20} />
              <span>Create User</span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
