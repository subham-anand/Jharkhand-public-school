import React from 'react'
import { IconCurrencyRupee, IconSchool, IconBus } from '@tabler/icons-react'

export const metadata = {
  title: "Fee Structure | Jharkhand Public School",
  description: "Transparent fee structure for all classes at Jharkhand Public School. Affordable quality education with flexible payment options."
}

export default function FeeStructurePage() {
  const feeStructure = [
    {
      class: "Nursery",
      admissionFee: "2,000",
      monthlyFee: "800",
      annualFee: "9,600",
      extras: "Uniform, Books"
    },
    {
      class: "LKG",
      admissionFee: "2,500",
      monthlyFee: "900",
      annualFee: "10,800",
      extras: "Uniform, Books, Activity Kit"
    },
    {
      class: "UKG",
      admissionFee: "2,500",
      monthlyFee: "1,000",
      annualFee: "12,000",
      extras: "Uniform, Books, Activity Kit"
    },
    {
      class: "Class 1-2",
      admissionFee: "3,000",
      monthlyFee: "1,200",
      annualFee: "14,400",
      extras: "Uniform, Books, Sports Kit"
    },
    {
      class: "Class 3-5",
      admissionFee: "3,500",
      monthlyFee: "1,500",
      annualFee: "18,000",
      extras: "Uniform, Books, Computer Fee"
    },
    {
      class: "Class 6-8",
      admissionFee: "4,000",
      monthlyFee: "1,800",
      annualFee: "21,600",
      extras: "Uniform, Books, Lab Fee"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconCurrencyRupee size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Fee Structure</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent and affordable fee structure for quality education
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Class</th>
                    <th className="px-6 py-4 text-center">Admission Fee</th>
                    <th className="px-6 py-4 text-center">Monthly Fee</th>
                    <th className="px-6 py-4 text-center">Annual Fee</th>
                    <th className="px-6 py-4 text-left">Additional</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{fee.class}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">₹{fee.admissionFee}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">₹{fee.monthlyFee}</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">₹{fee.annualFee}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.extras}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <IconCurrencyRupee className="text-green-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Payment</h3>
              <p className="text-gray-600">Monthly, quarterly, or annual payment options available</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <IconSchool className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Scholarships</h3>
              <p className="text-gray-600">Merit and need-based scholarships available</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <IconBus className="text-orange-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Transport</h3>
              <p className="text-gray-600">Optional bus service: ₹500/month</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
