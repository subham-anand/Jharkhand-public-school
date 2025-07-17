import React from 'react'
import { IconCalendar, IconBook, IconTrophy } from '@tabler/icons-react'

export const metadata = {
  title: "Academic Calendar | Jharkhand Public School",
  description: "Academic calendar with important dates, examinations, holidays, and events at Jharkhand Public School."
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconCalendar size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Academic Calendar</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Important dates, examinations, holidays, and school events for the academic year
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconBook className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Session 2025-26</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Session Starts</span>
                  <span className="text-blue-600">April 1, 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold">Mid-term Exams</span>
                  <span className="text-green-600">September 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-semibold">Annual Exams</span>
                  <span className="text-purple-600">February 2026</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-semibold">Result Declaration</span>
                  <span className="text-orange-600">March 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconTrophy className="text-orange-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Special Events</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-semibold">Sports Day</span>
                  <span className="text-red-600">December 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="font-semibold">Annual Function</span>
                  <span className="text-yellow-600">January 2026</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                  <span className="font-semibold">Science Exhibition</span>
                  <span className="text-teal-600">November 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="font-semibold">Cultural Fest</span>
                  <span className="text-indigo-600">October 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
