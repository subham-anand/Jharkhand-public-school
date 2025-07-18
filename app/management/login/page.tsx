import React from 'react';
import Image from 'next/image';
import LoginForm from './_components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                className="h-16 w-auto drop-shadow-lg"
                src="/logo.png"
                alt="Jharkhand Public School"
                width={64}
                height={64}
              />
              <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Management Portal
          </h1>
          <p className="text-gray-600">
            <span className="font-semibold text-blue-600">Jharkhand Public School</span>
            <br />
            <span className="text-sm">Secure access to school administration</span>
          </p>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            © 2024 Jharkhand Public School. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Barharwa, Sahibganj, Jharkhand - 816101
          </p>
        </div>
      </div>
    </div>
  );
}
