import React from 'react'
import { useFormContext } from 'react-hook-form'
import { IconUser, IconCalendar, IconDroplet } from '@tabler/icons-react'
import type { AdmissionFormData } from '../page'

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const classes = ['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8']
const categories = [
  { value: 'general', label: 'General' },
  { value: 'obc', label: 'OBC' },
  { value: 'sc', label: 'SC' },
  { value: 'st', label: 'ST' },
  { value: 'other', label: 'Other' }
]

export default function StudentInformationTab() {
  const { register, formState: { errors } } = useFormContext<AdmissionFormData>()

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <IconUser size={24} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Student Information</h2>
        </div>
        <p className="text-gray-600">Please provide accurate information about the student</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('studentInfo.fullName', {
              required: "Please enter your child's full name.",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long."
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Name should only contain letters and spaces."
              }
            })}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.studentInfo?.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Enter student's full name"
          />
          {errors.studentInfo?.fullName && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.studentInfo.fullName.message}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              {...register('studentInfo.dateOfBirth', {
                required: "Please select a valid date of birth.",
                validate: (value) => {
                  const today = new Date()
                  const birthDate = new Date(value)
                  const age = today.getFullYear() - birthDate.getFullYear()
                  
                  if (birthDate > today) {
                    return "Birth date cannot be in the future."
                  }
                  if (age > 20) {
                    return "Student age should not exceed 18 years."
                  }
                  if (age < 1) {
                    return "Student must be at least 2 years old."
                  }
                  return true
                }
              })}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.studentInfo?.dateOfBirth ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              max={new Date().toISOString().split('T')[0]}
            />
            <IconCalendar size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
          </div>
          {errors.studentInfo?.dateOfBirth && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.studentInfo.dateOfBirth.message}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            {...register('studentInfo.gender', {
              required: "Please select your child's gender."
            })}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.studentInfo?.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.studentInfo?.gender && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.studentInfo.gender.message}
            </p>
          )}
        </div>

        {/* Class Applying For */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Class Applying For <span className="text-red-500">*</span>
          </label>
          <select
            {...register('studentInfo.classApplyingFor', {
              required: "Please select the class you are applying for."
            })}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.studentInfo?.classApplyingFor ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          {errors.studentInfo?.classApplyingFor && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.studentInfo.classApplyingFor.message}
            </p>
          )}
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nationality <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('studentInfo.nationality', {
              required: "Please enter the nationality."
            })}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.studentInfo?.nationality ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="e.g., Indian"
          />
          {errors.studentInfo?.nationality && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.studentInfo.nationality.message}
            </p>
          )}
        </div>

        {/* Blood Group */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Blood Group <span className="text-gray-500">(Optional)</span>
          </label>
          <div className="relative">
            <select
              {...register('studentInfo.bloodGroup')}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">Select Blood Group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
            <IconDroplet size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Religion */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Religion <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            {...register('studentInfo.religion')}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="e.g., Hindu, Muslim, Christian, etc."
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category <span className="text-gray-500">(Optional)</span>
          </label>
          <select
            {...register('studentInfo.category')}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>{category.label}</option>
            ))}
          </select>
        </div>

        {/* Mother Tongue */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mother Tongue <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            {...register('studentInfo.motherTongue')}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="e.g., Hindi, Bengali, English, etc."
          />
        </div>

        {/* Student Aadhar */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Student Aadhar Number <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            {...register('studentInfo.studentAadhar', {
              pattern: {
                value: /^[0-9]{12}$/,
                message: "Aadhar number must be 12 digits."
              }
            })}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.studentInfo?.studentAadhar ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Enter 12-digit Aadhar number"
            maxLength={12}
          />
          {errors.studentInfo?.studentAadhar && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span>⚠️</span> {errors.studentInfo.studentAadhar.message}
            </p>
          )}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-blue-500 mt-0.5">ℹ️</div>
          <div>
            <h4 className="text-blue-900 font-semibold mb-1">Important Note</h4>
            <p className="text-blue-800 text-sm">
              Please ensure all information is accurate as it will be used for official records. 
              Fields marked with <span className="text-red-500">*</span> are mandatory.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
