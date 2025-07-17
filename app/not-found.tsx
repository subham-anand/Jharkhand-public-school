"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  IconHome, 
  IconSearch, 
  IconBook, 
  IconUsers, 
  IconPhone,
  IconArrowLeft,
  IconSchool,
  IconMapPin
} from '@tabler/icons-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/bg_pattern.png')] opacity-5"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* School Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Jharkhand Public School"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Jharkhand Public School
          </h1>
          <p className="text-gray-600">Barharwa, Sahibganj, Jharkhand</p>
        </div>

        {/* 404 Error Display */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-4">
            404
          </div>
          <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            It looks like you&apos;ve wandered into an empty classroom! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* School-themed illustration */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md">
              <div className="flex items-center justify-center mb-6">
                <IconSchool size={80} className="text-blue-500" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Lost in the School Corridors?
                </h3>
                <p className="text-gray-600 text-sm">
                  Don&apos;t worry! Even the best students sometimes take a wrong turn. 
                  Let&apos;s get you back to where you need to be.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Where would you like to go?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Home */}
            <Link href="/" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconHome size={32} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Home</h4>
                  <p className="text-sm text-gray-600">Return to main page</p>
                </div>
              </div>
            </Link>

            {/* About */}
            <Link href="/#about" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="bg-teal-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                    <IconBook size={32} className="text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">About Us</h4>
                  <p className="text-sm text-gray-600">Learn about our school</p>
                </div>
              </div>
            </Link>

            {/* Admission */}
            <Link href="/Admission" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <IconUsers size={32} className="text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Admission</h4>
                  <p className="text-sm text-gray-600">Join our school family</p>
                </div>
              </div>
            </Link>

            {/* Contact */}
            <Link href="/contact" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <IconPhone size={32} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
                  <p className="text-sm text-gray-600">Get in touch with us</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gallery" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              <IconSearch size={20} />
              Gallery
            </Link>
            <Link href="/teachers" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              <IconUsers size={20} />
              Teachers
            </Link>
            <Link href="/fee-structure" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              <IconBook size={20} />
              Fee Structure
            </Link>
            <Link href="/transport" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              <IconMapPin size={20} />
              Transport
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <IconArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* School Info */}
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <IconSchool size={24} className="text-blue-600 mr-2" />
            <span className="font-semibold text-gray-800">Need Help?</span>
          </div>
          <p className="text-gray-600 mb-4">
            If you&apos;re looking for specific information about our school, feel free to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918541061847"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <IconPhone size={20} />
              Call: +91 8541061847
            </a>
            <a 
              href="mailto:contact@jpsbarharwa.in"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <IconUsers size={20} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
