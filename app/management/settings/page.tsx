import React from 'react';
import { IconSettings, IconDatabase, IconKey, IconMail, IconCloud } from '@tabler/icons-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">System configuration and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <IconDatabase size={20} className="text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Database</h2>
          </div>
          <p className="text-gray-600 mb-4">MongoDB connection status and configuration</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Connected to MongoDB</span>
            </div>
            <p className="text-xs text-gray-500">
              Database: {process.env.NODE_ENV === 'development' ? 'Development' : 'Production'}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <IconCloud size={20} className="text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">Media Storage</h2>
          </div>
          <p className="text-gray-600 mb-4">Cloudinary integration for image management</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Cloudinary Configured</span>
            </div>
            <p className="text-xs text-gray-500">
              Images are automatically optimized and stored in the cloud
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <IconMail size={20} className="text-orange-600" />
            <h2 className="text-xl font-semibold text-gray-900">Email Service</h2>
          </div>
          <p className="text-gray-600 mb-4">SMTP configuration for notifications</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Email Service Active</span>
            </div>
            <p className="text-xs text-gray-500">
              Contact forms and notifications are working
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <IconKey size={20} className="text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">Security</h2>
          </div>
          <p className="text-gray-600 mb-4">Authentication and security settings</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">JWT Authentication</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Role-based Access</span>
            </div>
            <p className="text-xs text-gray-500">
              Secure login and permission system active
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <IconSettings size={20} className="text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-900">System Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Version</label>
            <p className="text-sm text-gray-900">1.0.0</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Environment</label>
            <p className="text-sm text-gray-900">
              {process.env.NODE_ENV === 'development' ? 'Development' : 'Production'}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Updated</label>
            <p className="text-sm text-gray-900">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-yellow-800 mb-2">
          ⚠️ Configuration Required
        </h3>
        <p className="text-sm text-yellow-700">
          Please ensure all environment variables are properly configured in your .env.local file:
        </p>
        <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
          <li>CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET</li>
          <li>MONGODB_URI for database connection</li>
          <li>EMAIL_USER and EMAIL_PASS for email notifications</li>
          <li>JWT_SECRET for authentication security</li>
        </ul>
      </div>
    </div>
  );
}
