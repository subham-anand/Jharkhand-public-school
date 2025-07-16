import React from 'react'
import { useFormContext } from 'react-hook-form'
import { IconSchool, IconCertificate, IconBook } from '@tabler/icons-react'
import type { AdmissionFormData } from '../page'

const lastClasses = [
  'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 
  'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'
]

const schoolBoards = [
  'JAC (Jharkhand Academic Council)',
  'CBSE',
  'ICSE',
  'State Board',
  'Other'
]

const mediumOptions = [
  'Hindi',
  'English',
  'Bengali',
  'Other'
]

export default function PreviousSchoolTab() {
  const { register, formState: { errors }, watch } = useFormContext<AdmissionFormData>()

  const classApplyingFor = watch('studentInfo.classApplyingFor')
  const isApplicableForPreviousSchool = classApplyingFor && !['Nursery', 'LKG'].includes(classApplyingFor)

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <IconSchool size={24} className="text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Previous School Details</h2>
        </div>
        <p className="text-gray-600">
          {isApplicableForPreviousSchool 
            ? "Information about student's previous educational background"
            : "This section is not applicable for Nursery and LKG admissions"
          }
        </p>
      </div>

      {!isApplicableForPreviousSchool ? (
        /* Not Applicable Message */
        <div className="text-center py-12">
          <div className="max-w-md mx-auto bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              No Previous School Information Required
            </h3>
            <p className="text-blue-700 text-sm">
              Since you&apos;re applying for {classApplyingFor || 'Nursery/LKG'}, 
              previous school details are not required. You can proceed to the next section.
            </p>
          </div>
        </div>
      ) : (
        /* Previous School Form */
        <div className="space-y-8">
          {/* Basic School Information */}
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
              🏫 Previous School Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last School Attended <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    {...register('previousSchool.lastSchoolAttended', {
                      required: isApplicableForPreviousSchool ? "Please enter previous school name." : false,
                      minLength: {
                        value: 3,
                        message: "School name must be at least 3 characters long."
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white ${
                      errors.previousSchool?.lastSchoolAttended ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter the name of last school attended"
                  />
                  <IconSchool size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                </div>
                {errors.previousSchool?.lastSchoolAttended && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠️</span> {errors.previousSchool.lastSchoolAttended.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Class Passed <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('previousSchool.lastClassPassed', {
                    required: isApplicableForPreviousSchool ? "Please select the last class passed." : false
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white ${
                    errors.previousSchool?.lastClassPassed ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Last Class</option>
                  {lastClasses.map((cls) => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
                {errors.previousSchool?.lastClassPassed && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠️</span> {errors.previousSchool.lastClassPassed.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  School Board <span className="text-gray-500">(Optional)</span>
                </label>
                <select
                  {...register('previousSchool.schoolBoard')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
                >
                  <option value="">Select Board</option>
                  {schoolBoards.map((board) => (
                    <option key={board} value={board}>{board}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Medium of Instruction <span className="text-gray-500">(Optional)</span>
                </label>
                <select
                  {...register('previousSchool.mediumOfInstruction')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
                >
                  <option value="">Select Medium</option>
                  {mediumOptions.map((medium) => (
                    <option key={medium} value={medium}>{medium}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Grade/Percentage in Last Class <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  {...register('previousSchool.gradePercentage', {
                    pattern: {
                      value: /^[0-9.%A-F\s+-]+$/,
                      message: "Please enter valid grade/percentage (e.g., 85%, A+, 8.5 CGPA)"
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white ${
                    errors.previousSchool?.gradePercentage ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 85%, A+, 8.5 CGPA"
                />
                {errors.previousSchool?.gradePercentage && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠️</span> {errors.previousSchool.gradePercentage.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Transfer Certificate Details */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              📋 Transfer Certificate & Additional Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Transfer Certificate Number <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    {...register('previousSchool.transferCertificateNumber')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    placeholder="Enter TC number if available"
                  />
                  <IconCertificate size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Reason for Leaving <span className="text-gray-500">(Optional)</span>
                </label>
                <select
                  {...register('previousSchool.reasonForLeaving')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                >
                  <option value="">Select Reason</option>
                  <option value="family-relocation">Family Relocation</option>
                  <option value="better-opportunities">Better Educational Opportunities</option>
                  <option value="financial-reasons">Financial Reasons</option>
                  <option value="distance">Distance from Home</option>
                  <option value="curriculum-preference">Curriculum Preference</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Academic Performance Info */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
              📊 Academic Performance & Subjects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <div className="flex items-center gap-2 mb-2">
                  <IconBook size={20} className="text-green-600" />
                  <h4 className="font-medium text-green-900">Core Subjects Studied</h4>
                </div>
                <div className="text-sm text-green-800 space-y-1">
                  <div>✓ Hindi/English Language</div>
                  <div>✓ Mathematics</div>
                  <div>✓ Environmental Studies</div>
                  <div>✓ General Knowledge</div>
                  <div>✓ Drawing/Art</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <h4 className="font-medium text-green-900 mb-2">📝 Important Note</h4>
                <p className="text-sm text-green-800">
                  Previous school records will be verified during admission. 
                  Please ensure all information provided is accurate and matches 
                  your official documents.
                </p>
              </div>
            </div>
          </div>

          {/* Required Documents Info */}
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4">📄 Required Documents from Previous School</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-yellow-900">Mandatory Documents:</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Transfer Certificate (TC)</li>
                  <li>• Previous year Report Card</li>
                  <li>• Character Certificate</li>
                  <li>• School Leaving Certificate</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-yellow-900">If Available:</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Progress Report</li>
                  <li>• Health Card/Medical Records</li>
                  <li>• Extracurricular Certificates</li>
                  <li>• Migration Certificate (if from other state)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-purple-500 mt-0.5">ℹ️</div>
          <div>
            <h4 className="text-purple-900 font-semibold mb-1">Previous School Verification</h4>
            <p className="text-purple-800 text-sm">
              {isApplicableForPreviousSchool 
                ? "We may contact your previous school for verification of academic records. All documents will be verified during the admission process."
                : "For Nursery and LKG admissions, no previous school information is required. Your child will start their formal education journey with us!"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
