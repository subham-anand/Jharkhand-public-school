"use client"
import React from 'react'
import { 
  IconDownload, 
  IconPrinter, 
  IconSchool, 
  IconStar, 
  IconMapPin, 
  IconPhone, 
  IconMail, 
  IconClock,
  IconUsers,
  IconAward,
  IconBook,
  IconBus,
  IconShield,
  IconHeart,
  IconTrophy,
  IconCertificate,
  IconMicroscope,
  IconPalette,
  IconMusic,
  IconSoccerField,
  IconCamera,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube
} from '@tabler/icons-react'
import Image from 'next/image'

export default function SchoolBrochurePage() {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // Create a print-friendly version
    const printContent = document.getElementById('brochure-content')
    if (printContent) {
      const printWindow = window.open('', '', 'height=800,width=1200')
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Jharkhand Public School - School Brochure</title>
              <style>
                @page { size: A4; margin: 0.5in; }
                body { font-family: Arial, sans-serif; font-size: 12px; line-height: 1.4; }
                .header { text-align: center; margin-bottom: 20px; }
                .section { margin-bottom: 15px; }
                .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
                .highlight { background-color: #f0f8ff; padding: 10px; border-left: 4px solid #3b82f6; }
                .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
                .no-print { display: none; }
                img { max-width: 100%; height: auto; }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.print()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Action Buttons - Hidden during print */}
      <div className="print:hidden fixed top-20 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <IconPrinter size={20} />
          Print
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
        >
          <IconDownload size={20} />
          Download
        </button>
      </div>

      {/* Brochure Content */}
      <div id="brochure-content" className="max-w-4xl mx-auto px-4 py-8 print:px-0 print:py-4">
        
        {/* Header Section */}
        <div className="text-center mb-8 print:mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="/logo.png"
              alt="Jharkhand Public School Logo"
              width={80}
              height={80}
              className="rounded-full border-4 border-blue-200"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 print:text-2xl">
                Jharkhand Public School
              </h1>
              <p className="text-lg text-blue-600 font-semibold">
                Nurturing Young Minds Since 2009
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 print:text-xs">
            <div className="flex items-center gap-1">
              <IconMapPin size={16} />
              <span>Barharwa, Sahibganj, Jharkhand</span>
            </div>
            <div className="flex items-center gap-1">
              <IconCertificate size={16} />
              <span>JAC Board Affiliated</span>
            </div>
            <div className="flex items-center gap-1">
              <IconStar size={16} className="text-yellow-500" />
              <span>100% Success Rate</span>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-lg mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-3 print:text-xl">Welcome to Excellence in Education</h2>
          <p className="text-lg leading-relaxed print:text-sm">
            At Jharkhand Public School, we believe every child is unique and deserves personalized attention. 
            Our dedicated faculty and modern facilities create an environment where students thrive academically, 
            socially, and personally. Join us in shaping the leaders of tomorrow.
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 print:mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-2">
              <IconSchool className="text-blue-600" size={24} />
              <h3 className="font-semibold text-gray-900">Established</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">2009</p>
            <p className="text-sm text-gray-600">16+ Years of Excellence</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-500">
            <div className="flex items-center gap-2 mb-2">
              <IconUsers className="text-teal-600" size={24} />
              <h3 className="font-semibold text-gray-900">Students</h3>
            </div>
            <p className="text-2xl font-bold text-teal-600">500+</p>
            <p className="text-sm text-gray-600">Happy Learners</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-center gap-2 mb-2">
              <IconAward className="text-orange-600" size={24} />
              <h3 className="font-semibold text-gray-900">Success Rate</h3>
            </div>
            <p className="text-2xl font-bold text-orange-600">100%</p>
            <p className="text-sm text-gray-600">Academic Excellence</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl">About Our School</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Our Mission</h3>
              <p className="text-gray-700 mb-4 print:text-sm">
                To provide quality education that nurtures intellectual curiosity, moral values, 
                and social responsibility in our students, preparing them for a bright future.
              </p>
              
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Our Vision</h3>
              <p className="text-gray-700 print:text-sm">
                To be the leading educational institution in Jharkhand, known for academic excellence, 
                character development, and holistic growth of students.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Key Features</h3>
              <ul className="space-y-2 text-gray-700 print:text-sm">
                <li className="flex items-center gap-2">
                  <IconStar className="text-yellow-500" size={16} />
                  <span>JAC Board Affiliated</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconBook className="text-blue-500" size={16} />
                  <span>Hindi Medium Instruction</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconSchool className="text-green-500" size={16} />
                  <span>Nursery to Class 8</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconHeart className="text-red-500" size={16} />
                  <span>Personalized Attention</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconTrophy className="text-orange-500" size={16} />
                  <span>100% Success Rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Programs */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Pre-Primary (Nursery - UKG)</h3>
              <p className="text-gray-700 text-sm mb-2">
                Foundation years focusing on play-based learning, motor skills development, and basic literacy.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Interactive learning methods</li>
                <li>• Creative activities</li>
                <li>• Social skills development</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">Primary (Class 1-8)</h3>
              <p className="text-gray-700 text-sm mb-2">
                Comprehensive curriculum aligned with JAC Board standards, emphasizing conceptual understanding.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Subject-wise expert teachers</li>
                <li>• Regular assessments</li>
                <li>• Skill-based learning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl">World-Class Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: IconMicroscope, label: "Science Lab", color: "text-purple-600" },
              { icon: IconPalette, label: "Art Room", color: "text-pink-600" },
              { icon: IconMusic, label: "Music Room", color: "text-indigo-600" },
              { icon: IconSoccerField, label: "Sports Ground", color: "text-green-600" },
              { icon: IconBook, label: "Library", color: "text-blue-600" },
              { icon: IconCamera, label: "Computer Lab", color: "text-gray-600" },
              { icon: IconBus, label: "Transport", color: "text-orange-600" },
              { icon: IconShield, label: "Safety First", color: "text-red-600" }
            ].map((facility, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <facility.icon className={`${facility.color} mx-auto mb-2`} size={32} />
                <p className="text-sm font-medium text-gray-700">{facility.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Information */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 print:text-xl">Admission Information 2025-26</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Admission Open For:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Nursery (Age 3-4 years)</li>
                <li>• LKG (Age 4-5 years)</li>
                <li>• UKG (Age 5-6 years)</li>
                <li>• Class 1-8 (Subject to availability)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Required Documents:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Birth Certificate</li>
                <li>• Previous School Certificate</li>
                <li>• Address Proof</li>
                <li>• Recent Photographs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl">Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 p-2 text-left">Class</th>
                  <th className="border border-gray-300 p-2 text-left">Monthly Fee</th>
                  <th className="border border-gray-300 p-2 text-left">Admission Fee</th>
                  <th className="border border-gray-300 p-2 text-left">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Nursery - UKG</td>
                  <td className="border border-gray-300 p-2">₹500</td>
                  <td className="border border-gray-300 p-2">₹2,000</td>
                  <td className="border border-gray-300 p-2">₹1,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2">Class 1-3</td>
                  <td className="border border-gray-300 p-2">₹700</td>
                  <td className="border border-gray-300 p-2">₹3,000</td>
                  <td className="border border-gray-300 p-2">₹1,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Class 4-8</td>
                  <td className="border border-gray-300 p-2">₹900</td>
                  <td className="border border-gray-300 p-2">₹3,500</td>
                  <td className="border border-gray-300 p-2">₹2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            * Additional charges may apply for transport, uniform, and books.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">School Address</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <IconMapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Thana road, Barharwa, Sahibganj, Jharkhand, 816101</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconPhone className="text-green-600" size={20} />
                  <span className="text-gray-700">+91 8541061847</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconMail className="text-red-600" size={20} />
                  <span className="text-gray-700">contact@jpsbarharwa.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock className="text-orange-600" size={20} />
                  <span className="text-gray-700">Mon - Sat: 8:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <IconBrandFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" size={24} />
                <IconBrandInstagram className="text-pink-600 hover:text-pink-800 cursor-pointer" size={24} />
                <IconBrandWhatsapp className="text-green-600 hover:text-green-800 cursor-pointer" size={24} />
                <IconBrandYoutube className="text-red-600 hover:text-red-800 cursor-pointer" size={24} />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Website: www.jpsbarharwa.in
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            🌟 <strong>Jharkhand Public School</strong> - Where Dreams Take Flight
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Jharkhand Public School. All rights reserved. | Licensed Educational Institution
          </p>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            font-size: 12px;
            line-height: 1.3;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:mb-4 {
            margin-bottom: 1rem !important;
          }
          
          .print\\:mb-6 {
            margin-bottom: 1.5rem !important;
          }
          
          .print\\:text-xl {
            font-size: 1.25rem !important;
          }
          
          .print\\:text-sm {
            font-size: 0.875rem !important;
          }
          
          .print\\:text-xs {
            font-size: 0.75rem !important;
          }
          
          .print\\:px-0 {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          .print\\:py-4 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          
          @page {
            size: A4;
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  )
}
