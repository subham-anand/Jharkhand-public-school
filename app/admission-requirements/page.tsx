import React from 'react'
import { IconFileText, IconUsers, IconAward } from '@tabler/icons-react'

export const metadata = {
  title: "Admission Requirements | Jharkhand Public School",
  description: "Complete admission requirements and eligibility criteria for Jharkhand Public School, Barharwa."
}

export default function AdmissionRequirementsPage() {
  const requirements = [
    {
      class: "Nursery (3-4 years)",
      documents: ["Birth Certificate", "Address Proof", "Parent ID", "2 Photos"],
      eligibility: "Child must be 3+ years old as of March 31st",
      process: "Application → Document Verification → Interaction"
    },
    {
      class: "LKG/UKG (4-6 years)", 
      documents: ["Birth Certificate", "Address Proof", "Parent ID", "Previous School TC", "2 Photos"],
      eligibility: "Age appropriate as of March 31st",
      process: "Application → Document Verification → Basic Assessment"
    },
    {
      class: "Classes 1-8",
      documents: ["Birth Certificate", "Transfer Certificate", "Progress Report", "Address Proof", "Parent ID", "2 Photos"],
      eligibility: "Previous class completion certificate required",
      process: "Application → Document Verification → Entrance Test → Interview"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconFileText size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Admission Requirements</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to know about admission criteria and required documents
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
                  <h3 className="text-2xl font-bold">{req.class}</h3>
                </div>
                <div className="p-8 grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <IconFileText className="text-blue-600" size={20} />
                      Required Documents
                    </h4>
                    <ul className="space-y-2">
                      {req.documents.map((doc, i) => (
                        <li key={i} className="text-gray-600">• {doc}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <IconUsers className="text-green-600" size={20} />
                      Eligibility
                    </h4>
                    <p className="text-gray-600">{req.eligibility}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <IconAward className="text-purple-600" size={20} />
                      Process
                    </h4>
                    <p className="text-gray-600">{req.process}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
