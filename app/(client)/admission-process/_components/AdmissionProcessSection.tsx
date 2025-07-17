"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { 
  IconSchool, 
  IconClipboardCheck, 
  IconFileText, 
  IconUsers, 
  IconStar,
  IconMapPin,
  IconClock,
  IconPhone,
  IconMail,
  IconCheck,
  IconArrowRight,
  IconBuildingBank,
  IconAlertCircle,
  IconInfoCircle,
  IconHeart,
  IconAward,
  IconBook
} from '@tabler/icons-react'

export default function AdmissionProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const admissionSteps = [
    {
      id: 1,
      title: "Visit School Office",
      description: "Come to our school premises to begin the admission process",
      icon: <IconSchool size={32} className="text-blue-600" />,
      details: [
        "Visit during school hours (9:00 AM - 4:00 PM)",
        "Meet our admission counselor",
        "Get complete information about our programs",
        "Tour the school facilities",
        "Clear any doubts about our education system"
      ],
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500"
    },
    {
      id: 2,
      title: "Eligibility Assessment",
      description: "Quick test to determine appropriate class level for your child",
      icon: <IconClipboardCheck size={32} className="text-teal-600" />,
      details: [
        "Age-appropriate assessment test",
        "Evaluation of current academic level",
        "Hindi and basic mathematics skills",
        "Interactive session with teachers",
        "Immediate results and feedback"
      ],
      bgColor: "bg-teal-100",
      borderColor: "border-teal-500"
    },
    {
      id: 3,
      title: "Document Submission",
      description: "Submit all required documents for verification",
      icon: <IconFileText size={32} className="text-orange-600" />,
      details: [
        "Birth certificate (original & photocopy)",
        "Previous school records (if applicable)",
        "Passport-size photographs",
        "Address proof documents",
        "Medical fitness certificate"
      ],
      bgColor: "bg-orange-100",
      borderColor: "border-orange-500"
    },
    {
      id: 4,
      title: "Final Admission",
      description: "Complete the admission process and secure your child's future",
      icon: <IconUsers size={32} className="text-purple-600" />,
      details: [
        "Document verification complete",
        "Fee payment and receipt",
        "Class allocation confirmation",
        "Uniform and book list provided",
        "Welcome to JPS family!"
      ],
      bgColor: "bg-purple-100",
      borderColor: "border-purple-500"
    }
  ]

  const requiredDocuments = [
    { name: "Birth Certificate", required: true, description: "Original and photocopy required" },
    { name: "Previous School Records", required: false, description: "If transferring from another school" },
    { name: "Passport Photos", required: true, description: "Recent passport-size photographs" },
    { name: "Address Proof", required: true, description: "Aadhaar card, voter ID, or utility bill" },
    { name: "Medical Certificate", required: true, description: "Health fitness certificate" },
    { name: "Caste Certificate", required: false, description: "If applicable for category benefits" }
  ]

  const admissionInfo = {
    timing: "Monday to Friday: 9:00 AM - 4:00 PM",
    duration: "Process takes 2-3 hours",
    testDuration: "30-45 minutes",
    resultTime: "Immediate",
    address: "Thana road, Barharwa, Sahibganj, Jharkhand, 816101",
    phone: "+91 8541061847",
    email: "contact@jpsbarharwa.in"
  }

  const whyChooseUs = [
    {
      icon: <IconAward size={24} className="text-blue-600" />,
      title: "100% Success Rate",
      description: "All our students successfully complete their academic journey"
    },
    {
      icon: <IconBook size={24} className="text-teal-600" />,
      title: "JAC Board Curriculum",
      description: "Following Jharkhand Academic Council approved curriculum"
    },
    {
      icon: <IconUsers size={24} className="text-orange-600" />,
      title: "Experienced Teachers",
      description: "Qualified and dedicated teaching staff"
    },
    {
      icon: <IconHeart size={24} className="text-purple-600" />,
      title: "Nurturing Environment",
      description: "Safe and supportive learning atmosphere"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/bg_pattern.png')] opacity-5"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-8 animate-bounce">
              <IconSchool size={48} className="text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Admission Process
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join Jharkhand Public School family through our simple and transparent admission process. 
              We believe in personal interaction and proper assessment to ensure the best fit for your child.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <IconPhone size={20} />
                Contact Us Now
              </Link>
              <Link 
                href="#process" 
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <IconInfoCircle size={20} />
                Learn Process
              </Link>
            </div>
          </div>

          {/* Key Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <IconClock size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-sm text-gray-600">{admissionInfo.timing}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <IconClipboardCheck size={24} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Process Duration</h3>
                  <p className="text-sm text-gray-600">{admissionInfo.duration}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <IconStar size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Result Time</h3>
                  <p className="text-sm text-gray-600">{admissionInfo.resultTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section id="process" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our admission process is designed to be straightforward and personal, ensuring we find the right fit for every child.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {admissionSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${activeStep === index ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Step Icon and Number */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                        {step.icon}
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-gray-900">
                          {String(step.id).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3">
                            <div className="bg-green-100 p-1 rounded-full mt-1">
                              <IconCheck size={16} className="text-green-600" />
                            </div>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Button */}
                    <div className="flex-shrink-0 lg:self-start">
                      <button
                        onClick={() => setActiveStep(index)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-blue-500 text-white shadow-lg' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {activeStep === index ? 'Active Step' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-full w-0.5 h-8 bg-gray-200 transform translate-y-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please bring the following documents during your visit. This helps us process your application quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${doc.required ? 'bg-red-100' : 'bg-blue-100'}`}>
                    {doc.required ? (
                      <IconAlertCircle size={20} className="text-red-600" />
                    ) : (
                      <IconInfoCircle size={20} className="text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {doc.name}
                      {doc.required && <span className="text-red-500 ml-1">*</span>}
                    </h3>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start gap-3">
              <IconInfoCircle size={20} className="text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> All documents should be original with photocopies. 
                  Documents marked with * are mandatory for admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jharkhand Public School?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have been nurturing young minds since 2009 with a commitment to excellence and holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Child&apos;s Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Visit our school office today and take the first step towards securing your child&apos;s bright future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconMapPin size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-blue-100 text-sm">{admissionInfo.address}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconPhone size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-blue-100 text-sm">{admissionInfo.phone}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconMail size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-100 text-sm">{admissionInfo.email}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <IconArrowRight size={20} />
                Contact Us Today
              </Link>
              <Link 
                href="/fee-structure" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <IconBuildingBank size={20} />
                View Fee Structure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
