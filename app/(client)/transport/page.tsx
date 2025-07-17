import React from 'react'
import { IconBus, IconMapPin, IconShield, IconInfoCircle, IconPhone, IconMail, IconAlertTriangle } from '@tabler/icons-react'

export const metadata = {
  title: "Transportation Information | Jharkhand Public School",
  description: "Transportation information and alternatives for students of Jharkhand Public School, Barharwa. Learn about commuting options and future transportation plans."
}

export default function TransportPage() {
  const alternativeOptions = [
    { 
      option: "Private Auto-rickshaw", 
      cost: "₹300-500/month", 
      description: "Shared auto-rickshaw services available from nearby areas",
      contact: "Local auto-rickshaw stands"
    },
    { 
      option: "Bicycle", 
      cost: "One-time investment", 
      description: "Eco-friendly option for students living within 3-5 km",
      contact: "Local bicycle shops"
    },
    { 
      option: "Walking Groups", 
      cost: "Free", 
      description: "Safe walking groups for students from nearby neighborhoods",
      contact: "School coordination"
    },
    { 
      option: "Parent Carpool", 
      cost: "Shared fuel costs", 
      description: "Organized parent carpool system for different areas",
      contact: "Parent coordination groups"
    }
  ]

  const futureFeatures = [
    { icon: IconShield, title: "GPS Tracking", description: "Real-time location monitoring for safety" },
    { icon: IconShield, title: "Trained Drivers", description: "Licensed and experienced professional drivers" },
    { icon: IconShield, title: "Female Attendant", description: "Dedicated attendant for student supervision" },
    { icon: IconShield, title: "Regular Maintenance", description: "Weekly vehicle inspection and safety checks" },
    { icon: IconShield, title: "Insurance Coverage", description: "Comprehensive insurance for all passengers" },
    { icon: IconShield, title: "Emergency Protocols", description: "Established emergency response procedures" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconBus size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Transportation</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transportation information and commuting alternatives for our students
          </p>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <IconInfoCircle className="text-amber-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-amber-900 mb-3">Transportation Service Status</h2>
                <p className="text-amber-800 text-lg leading-relaxed mb-4">
                  We currently do not offer school bus transportation services. However, we are committed to exploring transportation options for the future based on student enrollment and demand.
                </p>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-amber-800 font-medium">
                    <strong>Why no transportation currently?</strong> As a growing school, we are focusing on strengthening our core educational services first. Transportation services require significant investment in safety infrastructure, which we plan to develop systematically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Transportation Options */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Alternative Transportation Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are some safe and reliable transportation alternatives for our students
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {alternativeOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconBus className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{option.option}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-green-600 font-semibold">{option.cost}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{option.description}</p>
                        <div className="flex items-center gap-2 text-sm text-blue-600">
                          <IconPhone size={16} />
                          <span>{option.contact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Guidelines */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Guidelines for Alternative Transport</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Important safety measures to consider when using alternative transportation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconAlertTriangle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Safety First</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Always use licensed vehicles</li>
                  <li>• Verify driver credentials</li>
                  <li>• Ensure proper insurance coverage</li>
                  <li>• Check vehicle condition regularly</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconShield className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Group Safety</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Travel in groups when possible</li>
                  <li>• Share ride details with parents</li>
                  <li>• Maintain emergency contact list</li>
                  <li>• Follow designated routes</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconPhone className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Communication</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Keep parents informed of timing</li>
                  <li>• Maintain school contact numbers</li>
                  <li>• Report any safety concerns</li>
                  <li>• Use parent coordination groups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Transportation Plans */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Transportation Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When we introduce transportation services, these safety features will be included
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {futureFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <feature.icon className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Transportation Help?</h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              For questions about transportation alternatives or to express interest in future school bus services, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 justify-center">
                <IconPhone size={20} />
                <span>+91 8541061847</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <IconMail size={20} />
                <span>contact@jpsbarharwa.in</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <IconMapPin size={20} />
                <span>Barharwa, Jharkhand</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
