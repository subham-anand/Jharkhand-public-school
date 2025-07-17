import React from 'react'
import { IconShield, IconUsers, IconUser, IconLock } from '@tabler/icons-react'

export const metadata = {
  title: "Parent Portal | Jharkhand Public School",
  description: "Parent portal for accessing student progress, announcements, and school communications at Jharkhand Public School."
}

export default function ParentPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconUsers size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Parent Portal</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay connected with your child&apos;s educational journey through our parent portal
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Your Parent Dashboard</h2>
              <p className="text-gray-600">Login to view your child&apos;s progress, attendance, and school updates</p>
            </div>

            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="studentId"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12"
                      placeholder="Enter student ID"
                    />
                    <IconUser className="absolute left-4 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12"
                      placeholder="Enter password"
                    />
                    <IconLock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Login to Portal
                </button>
              </form>

              <div className="mt-6 text-center">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm">
                  Forgot your login details? Contact school office
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portal Features</h2>
            <p className="text-gray-600">Everything you need to stay connected with your child&apos;s education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <IconShield className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Access</h3>
              <p className="text-gray-600">Safe and secure login system</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <IconUser className="text-green-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Student Progress</h3>
              <p className="text-gray-600">Track academic performance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <IconUsers className="text-purple-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Attendance</h3>
              <p className="text-gray-600">Monitor daily attendance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <IconShield className="text-orange-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Announcements</h3>
              <p className="text-gray-600">Receive school updates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
