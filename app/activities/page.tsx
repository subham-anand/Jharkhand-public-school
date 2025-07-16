import React from 'react'
import { IconPalette, IconMusic, IconRun, IconTrophy } from '@tabler/icons-react'

export const metadata = {
  title: "Activities | Jharkhand Public School",
  description: "Extra-curricular activities, sports, arts, and cultural programs at Jharkhand Public School for holistic development."
}

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconTrophy size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Activities</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Extra-curricular activities for holistic development and talent nurturing
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconPalette className="text-purple-600 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Arts & Crafts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Drawing & Painting</li>
                <li>• Clay Modeling</li>
                <li>• Paper Crafts</li>
                <li>• Creative Projects</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconMusic className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Music & Dance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Classical Music</li>
                <li>• Folk Dances</li>
                <li>• Choir Practice</li>
                <li>• Cultural Programs</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconRun className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Sports</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cricket & Football</li>
                <li>• Athletics</li>
                <li>• Indoor Games</li>
                <li>• Yoga & Exercise</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <IconTrophy className="text-orange-600 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Competitions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Speech Contest</li>
                <li>• Science Fair</li>
                <li>• Sports Day</li>
                <li>• Cultural Fest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
