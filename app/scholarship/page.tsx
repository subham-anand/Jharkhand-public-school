import React from 'react'
import { IconAward, IconBook, IconStar } from '@tabler/icons-react'

export const metadata = {
  title: "Scholarships | Jharkhand Public School",
  description: "Merit-based and need-based scholarships available at Jharkhand Public School for deserving students."
}

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconAward size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Scholarships</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Supporting bright minds with financial assistance and merit-based scholarships
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconStar className="text-yellow-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Merit Scholarship</h3>
              <p className="text-gray-600 text-center mb-6">Up to 50% fee reduction for academically excellent students</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 90%+ marks in previous class</li>
                <li>• Consistent academic performance</li>
                <li>• Good conduct certificate</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconBook className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Need-Based Aid</h3>
              <p className="text-gray-600 text-center mb-6">Financial assistance for economically disadvantaged families</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Income certificate required</li>
                <li>• Up to 75% fee waiver</li>
                <li>• Case-by-case evaluation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconAward className="text-green-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Special Recognition</h3>
              <p className="text-gray-600 text-center mb-6">Awards for excellence in sports, arts, and leadership</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Competition winners</li>
                <li>• Cultural program leaders</li>
                <li>• Community service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
