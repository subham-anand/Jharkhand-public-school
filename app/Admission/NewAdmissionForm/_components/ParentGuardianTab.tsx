import React from 'react'
import { useFormContext } from 'react-hook-form'
import { IconUsers, IconPhone, IconMail, IconBriefcase } from '@tabler/icons-react'
import type { AdmissionFormData } from '../page'

export default function ParentGuardianTab() {
  const { register, formState: { errors }, watch } = useFormContext<AdmissionFormData>()

  const guardianName = watch('parentDetails.guardianName')

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-teal-100 rounded-lg">
            <IconUsers size={24} className="text-teal-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Parent/Guardian Details</h2>
        </div>
        <p className="text-gray-600">Provide information about parents or legal guardian</p>
      </div>

      <div className="space-y-8">
        {/* Father's Information */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
            👨‍💼 Father&apos;s Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Father&apos;s Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.fatherName', {
                  required: "Please enter the father's name.",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters long."
                  }
                })}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${
                  errors.parentDetails?.fatherName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter father's full name"
              />
              {errors.parentDetails?.fatherName && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.fatherName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Occupation <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register('parentDetails.fatherOccupation', {
                    required: "Please enter the father's occupation."
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${
                    errors.parentDetails?.fatherOccupation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Teacher, Engineer, Business"
                />
                <IconBriefcase size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
              </div>
              {errors.parentDetails?.fatherOccupation && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.fatherOccupation.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Qualification <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.fatherQualification')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                placeholder="e.g., B.Tech, M.A., 12th Pass"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Income <span className="text-gray-500">(Optional)</span>
              </label>
              <select
                {...register('parentDetails.fatherIncome')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option value="">Select Income Range</option>
                <option value="below-1-lakh">Below ₹1 Lakh</option>
                <option value="1-3-lakh">₹1 - 3 Lakh</option>
                <option value="3-5-lakh">₹3 - 5 Lakh</option>
                <option value="5-10-lakh">₹5 - 10 Lakh</option>
                <option value="above-10-lakh">Above ₹10 Lakh</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Aadhar Number <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.fatherAadhar', {
                  pattern: {
                    value: /^[0-9]{12}$/,
                    message: "Aadhar number must be 12 digits."
                  }
                })}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${
                  errors.parentDetails?.fatherAadhar ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter 12-digit Aadhar number"
                maxLength={12}
              />
              {errors.parentDetails?.fatherAadhar && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.fatherAadhar.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mother's Information */}
        <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
          <h3 className="text-lg font-semibold text-pink-900 mb-4 flex items-center gap-2">
            👩‍💼 Mother&apos;s Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mother&apos;s Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.motherName', {
                  required: "Please enter the mother's name.",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters long."
                  }
                })}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white ${
                  errors.parentDetails?.motherName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter mother's full name"
              />
              {errors.parentDetails?.motherName && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.motherName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Occupation <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.motherOccupation')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                placeholder="e.g., Housewife, Teacher, Doctor"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Qualification <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.motherQualification')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                placeholder="e.g., B.A., M.Sc., 10th Pass"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Income <span className="text-gray-500">(Optional)</span>
              </label>
              <select
                {...register('parentDetails.motherIncome')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
              >
                <option value="">Select Income Range</option>
                <option value="below-1-lakh">Below ₹1 Lakh</option>
                <option value="1-3-lakh">₹1 - 3 Lakh</option>
                <option value="3-5-lakh">₹3 - 5 Lakh</option>
                <option value="5-10-lakh">₹5 - 10 Lakh</option>
                <option value="above-10-lakh">Above ₹10 Lakh</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Aadhar Number <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.motherAadhar', {
                  pattern: {
                    value: /^[0-9]{12}$/,
                    message: "Aadhar number must be 12 digits."
                  }
                })}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white ${
                  errors.parentDetails?.motherAadhar ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter 12-digit Aadhar number"
                maxLength={12}
              />
              {errors.parentDetails?.motherAadhar && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.motherAadhar.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Guardian Information (if applicable) */}
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center gap-2">
            👥 Guardian Information <span className="text-sm text-gray-600">(If not living with parents)</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Guardian&apos;s Name <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                {...register('parentDetails.guardianName')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white"
                placeholder="Enter guardian's full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Relation with Child <span className={guardianName ? "text-red-500" : "text-gray-500"}>
                  {guardianName ? "*" : "(Optional)"}
                </span>
              </label>
              <input
                type="text"
                {...register('parentDetails.relationWithChild', {
                  required: guardianName ? "Please specify the relation to the child." : false
                })}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white ${
                  errors.parentDetails?.relationWithChild ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Uncle, Aunt, Grandfather"
              />
              {errors.parentDetails?.relationWithChild && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.relationWithChild.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
            📞 Contact Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Primary Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  {...register('parentDetails.primaryContact', {
                    required: "Please enter a valid 10-digit mobile number.",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Please enter a valid 10-digit mobile number."
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white ${
                    errors.parentDetails?.primaryContact ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                />
                <IconPhone size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
              </div>
              {errors.parentDetails?.primaryContact && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.primaryContact.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Alternate Phone Number <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="tel"
                {...register('parentDetails.alternatePhone', {
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Please enter a valid alternate number."
                  }
                })}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white ${
                  errors.parentDetails?.alternatePhone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter alternate contact number"
                maxLength={10}
              />
              {errors.parentDetails?.alternatePhone && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.alternatePhone.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register('parentDetails.email', {
                    required: "Please enter a valid email address.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address."
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white ${
                    errors.parentDetails?.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter email address (for communication)"
                />
                <IconMail size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
              </div>
              {errors.parentDetails?.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.parentDetails.email.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-teal-500 mt-0.5">ℹ️</div>
          <div>
            <h4 className="text-teal-900 font-semibold mb-1">Contact Information Usage</h4>
            <p className="text-teal-800 text-sm">
              The provided contact information will be used for all school communications, 
              including admission updates, academic progress, and emergency situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
