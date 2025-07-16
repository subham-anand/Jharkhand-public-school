import React from 'react'
import { IconAward, IconBook, IconStar } from '@tabler/icons-react'

export const metadata = {
  title: "Scholarships | Jharkhand Public School",
  description: "Information about scholarship opportunities at Jharkhand Public School. Currently developing scholarship programs for future implementation."
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
            Scholarship programs are currently under development and will be available in the future
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Current Status Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12 text-center">
            <IconAward className="text-blue-500 mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Scholarship Programs Coming Soon</h2>
            <p className="text-blue-700 text-lg mb-6">
              We are currently developing comprehensive scholarship programs to support deserving students. 
              These programs will be available in the near future.
            </p>
            <div className="bg-white rounded-lg p-4 text-blue-600">
              <p className="font-semibold">Stay tuned for updates on our upcoming scholarship opportunities!</p>
            </div>
          </div>

          {/* Future Scholarship Plans */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planned Scholarship Categories</h2>
            <p className="text-gray-600 text-lg">Here&apos;s what we&apos;re planning to offer in the future</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 opacity-75">
              <IconStar className="text-yellow-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Merit Scholarship</h3>
              <p className="text-gray-600 text-center mb-6">Planned for academically excellent students</p>
              <ul className="space-y-2 text-gray-500">
                <li>• Outstanding academic performance</li>
                <li>• Consistent excellence</li>
                <li>• Good conduct record</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 opacity-75">
              <IconBook className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Need-Based Aid</h3>
              <p className="text-gray-600 text-center mb-6">Planned financial assistance for families in need</p>
              <ul className="space-y-2 text-gray-500">
                <li>• Income-based evaluation</li>
                <li>• Documented financial need</li>
                <li>• Case-by-case assessment</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 opacity-75">
              <IconAward className="text-green-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Special Recognition</h3>
              <p className="text-gray-600 text-center mb-6">Planned awards for excellence in various fields</p>
              <ul className="space-y-2 text-gray-500">
                <li>• Sports achievements</li>
                <li>• Cultural activities</li>
                <li>• Leadership qualities</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About Future Scholarships?</h3>
            <p className="text-blue-100 mb-6">
              Contact our administrative office for more information about upcoming scholarship programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:contact@jpsbarharwa.in" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Email Us
              </a>
              <a 
                href="tel:+918541061847" 
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
