import React from 'react'
import { IconSchool, IconUsers, IconClock } from '@tabler/icons-react'

export const metadata = {
  title: "Primary Classes | Jharkhand Public School",
  description: "Primary education program for Classes 1-5 at Jharkhand Public School following JAC Board curriculum."
}

export default function PrimaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconSchool size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Primary Classes</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Foundation building education for Classes 1-5 following JAC Board curriculum
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconUsers className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Classes 1-2</h3>
              <p className="text-gray-600 text-center mb-6">Early learning with focus on reading, writing, and basic math</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Hindi & English alphabets</li>
                <li>• Number concepts 1-100</li>
                <li>• Basic science concepts</li>
                <li>• Creative activities</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconSchool className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Classes 3-4</h3>
              <p className="text-gray-600 text-center mb-6">Building strong foundation in core subjects</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced language skills</li>
                <li>• Mathematical operations</li>
                <li>• Environmental studies</li>
                <li>• Computer basics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconClock className="text-purple-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Class 5</h3>
              <p className="text-gray-600 text-center mb-6">Preparation for middle school with comprehensive curriculum</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced mathematics</li>
                <li>• Science experiments</li>
                <li>• Social studies projects</li>
                <li>• Leadership skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
