import React from 'react'
import { useFormContext } from 'react-hook-form'
import { IconCheck, IconShield, IconHeart, IconAlertTriangle } from '@tabler/icons-react'
import type { AdmissionFormData } from '../page'

export default function DeclarationTab() {
  const { register, formState: { errors }, watch } = useFormContext<AdmissionFormData>()

  const agreedToTerms = watch('declaration.agreedToTerms')
  const consentForData = watch('declaration.consentForData')

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <IconCheck size={24} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Declaration & Consent</h2>
        </div>
        <p className="text-gray-600">Please read and agree to the terms before submitting your application</p>
      </div>

      <div className="space-y-8">
        {/* Emergency Contact Information */}
        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
            🚨 Emergency Contact Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Emergency Contact Person <span className="text-gray-500">(If different from parents)</span>
              </label>
              <input
                type="text"
                {...register('declaration.emergencyContact')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white"
                placeholder="Name and contact number of emergency person"
              />
              <p className="mt-1 text-xs text-gray-600">
                Example: Grandmother - Mrs. Radha Devi (9876543210)
              </p>
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
            🏥 Medical Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Medical Conditions/Allergies <span className="text-gray-500">(If any)</span>
              </label>
              <textarea
                {...register('declaration.medicalConditions')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white resize-none"
                placeholder="Please mention any medical conditions, allergies, or dietary restrictions"
              />
              <p className="mt-1 text-xs text-gray-600">
                This information helps us provide better care for your child
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Educational Needs <span className="text-gray-500">(If any)</span>
              </label>
              <textarea
                {...register('declaration.specialNeeds')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white resize-none"
                placeholder="Please mention any special educational requirements or learning needs"
              />
              <p className="mt-1 text-xs text-gray-600">
                We are committed to inclusive education and will provide necessary support
              </p>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
            📋 Terms and Conditions
          </h3>
          
          <div className="bg-white rounded-lg p-6 border border-yellow-300 max-h-80 overflow-y-auto">
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Admission Policy</h4>
                <p>
                  I understand that admission to Jharkhand Public School is subject to availability of seats 
                  and fulfillment of admission criteria. The school reserves the right to accept or reject 
                  any application without assigning reasons.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Fee Structure and Payment</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>I agree to pay all fees as per the fee structure of the school</li>
                  <li>Fees once paid will not be refunded under any circumstances</li>
                  <li>Failure to pay fees on time may result in cancellation of admission</li>
                  <li>The school may revise the fee structure annually</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Academic and Disciplinary Rules</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>The student will abide by all school rules and regulations</li>
                  <li>Regular attendance (minimum 75%) is mandatory</li>
                  <li>The school may take disciplinary action for misconduct</li>
                  <li>Parents must attend all parent-teacher meetings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">4. Health and Safety</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>I will provide accurate medical information about my child</li>
                  <li>The school is not liable for any injury during school activities</li>
                  <li>Emergency medical treatment may be provided if required</li>
                  <li>Vaccination and health check-up records must be maintained</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">5. Transfer and Withdrawal</h4>
                <p>
                  One month&apos;s written notice is required for withdrawal. Transfer certificate 
                  will be issued only after clearance of all dues and submission of required documents.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">6. Communication</h4>
                <p>
                  The school will communicate important information through SMS, email, or official notices. 
                  Parents are responsible for regularly checking communications from the school.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('declaration.agreedToTerms', {
                  required: "Please agree to the terms and declaration before submitting."
                })}
                className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
              />
              <div>
                <span className="font-medium text-gray-900">
                  I agree to the Terms and Conditions <span className="text-red-500">*</span>
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  I have read and understood all the terms and conditions mentioned above and agree to abide by them.
                </p>
              </div>
            </label>
            {errors.declaration?.agreedToTerms && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <IconAlertTriangle size={16} />
                {errors.declaration.agreedToTerms.message}
              </p>
            )}
          </div>
        </div>

        {/* Data Privacy Consent */}
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <IconShield size={20} />
            Data Privacy & Consent
          </h3>
          
          <div className="bg-white rounded-lg p-6 border border-purple-300">
            <h4 className="font-semibold text-gray-900 mb-3">Data Collection and Usage</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Information We Collect:</strong> Personal details, academic records, contact information, 
                photographs, and documents provided during the admission process.
              </p>
              <p>
                <strong>How We Use It:</strong> For admission processing, academic records, communication with parents, 
                emergency situations, and school administration purposes.
              </p>
              <p>
                <strong>Data Security:</strong> All personal information is stored securely and accessed only by 
                authorized school personnel. We do not share your data with third parties without consent.
              </p>
              <p>
                <strong>Retention Period:</strong> Student data is retained as per educational regulations and 
                may be kept for alumni records with your consent.
              </p>
            </div>

            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('declaration.consentForData', {
                    required: "Please provide consent for data processing."
                  })}
                  className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
                />
                <div>
                  <span className="font-medium text-gray-900">
                    I consent to data processing <span className="text-red-500">*</span>
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    I consent to the collection, processing, and storage of the provided information for admission 
                    and educational purposes as described above.
                  </p>
                </div>
              </label>
              {errors.declaration?.consentForData && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <IconAlertTriangle size={16} />
                  {errors.declaration.consentForData.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Final Declaration */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
            <IconHeart size={20} />
            Parent/Guardian Declaration
          </h3>
          
          <div className="bg-white rounded-lg p-6 border border-green-300">
            <div className="space-y-4 text-sm text-gray-700">
              <p className="font-medium text-gray-900">I hereby declare that:</p>
              
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>All information provided in this application is true and complete to the best of my knowledge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>I understand that any false information may lead to cancellation of admission.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>I will provide original documents for verification when required.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>I authorize the school to contact my child&apos;s previous school for verification if needed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>I will abide by all school rules, regulations, and fee policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>I understand that admission is subject to seat availability and school discretion.</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This application will be processed as per the school&apos;s admission policy. 
                  You will be notified about the admission status via SMS/Email within 7-10 working days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Status */}
        {agreedToTerms && consentForData && (
          <div className="bg-green-100 border border-green-300 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <IconCheck size={24} className="text-green-600 flex-shrink-0" />
              <div>
                <h4 className="text-green-900 font-semibold">Ready to Submit!</h4>
                <p className="text-green-800 text-sm">
                  You have completed all required sections and agreed to the terms. 
                  You can now submit your admission application.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-blue-500 mt-0.5">ℹ️</div>
          <div>
            <h4 className="text-blue-900 font-semibold mb-1">After Submission</h4>
            <p className="text-blue-800 text-sm">
              Once you submit this application, you will receive a confirmation email with your application ID. 
              Please keep this ID for future reference and bring original documents for verification during the admission interview.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
