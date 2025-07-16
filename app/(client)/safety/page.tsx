import React from 'react'
import { IconShield, IconCamera, IconUsers, IconFirstAidKit } from '@tabler/icons-react'

export const metadata = {
  title: "Safety Measures | Jharkhand Public School",
  description: "Comprehensive safety and security measures at Jharkhand Public School to ensure student well-being."
}

export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: <IconCamera size={32} />,
      title: "CCTV Monitoring",
      description: "24/7 CCTV surveillance in all areas of the school campus",
      color: "blue"
    },
    {
      icon: <IconUsers size={32} />,
      title: "Trained Security",
      description: "Professional security personnel on duty during school hours",
      color: "green"
    },
    {
      icon: <IconFirstAidKit size={32} />,
      title: "Medical Facility",
      description: "First aid facility and trained staff for medical emergencies",
      color: "red"
    },
    {
      icon: <IconShield size={32} />,
      title: "Safe Infrastructure",
      description: "Child-safe building design with proper safety measures",
      color: "purple"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconShield size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Safety Measures</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive safety and security measures to ensure every child&apos;s well-being
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <span className={`text-${feature.color}-600`}>{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Protocols</h2>
            <p className="text-gray-600">Detailed safety procedures we follow</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Entry & Exit Control</h3>
                <p className="text-gray-600">Controlled access with visitor registration and student pick-up protocols</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Procedures</h3>
                <p className="text-gray-600">Regular fire drills and emergency evacuation training for all students</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Health Monitoring</h3>
                <p className="text-gray-600">Daily health check-ups and immediate medical attention when needed</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Staff Training</h3>
                <p className="text-gray-600">Regular safety training for all staff members and background verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
