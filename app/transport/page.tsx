import React from 'react'
import { IconBus, IconMapPin, IconClock, IconShield } from '@tabler/icons-react'

export const metadata = {
  title: "Transportation | Jharkhand Public School",
  description: "Safe and reliable school bus transportation services for students of Jharkhand Public School, Barharwa."
}

export default function TransportPage() {
  const routes = [
    { area: "Barharwa Main", timing: "7:30 AM", fee: "₹500/month" },
    { area: "Rajmahal Road", timing: "7:45 AM", fee: "₹600/month" },
    { area: "Sahibganj Route", timing: "7:15 AM", fee: "₹800/month" },
    { area: "Local Villages", timing: "7:50 AM", fee: "₹400/month" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconBus size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Transportation</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Safe, reliable, and convenient transportation services for our students
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Bus Routes & Timings</h2>
              <div className="space-y-4">
                {routes.map((route, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconMapPin className="text-blue-600" size={20} />
                        <span className="font-semibold text-gray-900">{route.area}</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-600">
                          <IconClock size={16} />
                          {route.timing}
                        </div>
                        <div className="text-green-600 font-semibold">{route.fee}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Features</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <IconShield className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">GPS Tracking</h3>
                      <p className="text-gray-600">Real-time location tracking for parent peace of mind</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconShield className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Trained Drivers</h3>
                      <p className="text-gray-600">Licensed and experienced drivers with clean records</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconShield className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Bus Attendant</h3>
                      <p className="text-gray-600">Female attendant for student supervision and safety</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconShield className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Regular Maintenance</h3>
                      <p className="text-gray-600">Weekly vehicle inspection and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
