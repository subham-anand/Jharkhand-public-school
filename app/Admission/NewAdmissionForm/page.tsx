'use client'
// 🚀 Next Steps for Backend Integration
// Replace Cloudinary credentials in DocumentUploadsTab.tsx
// Create API endpoints (/api/admission/submit, /api/admission/draft)
// Setup database schema using the provided TypeScript interface
// Configure email notifications for application confirmation
// Add payment gateway integration for application fees
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { 
  IconUser, 
  IconUsers, 
  IconHome, 
  IconSchool, 
  IconUpload, 
  IconCheck,
  IconArrowLeft,
  IconArrowRight,
  IconFileText,
  IconPhone,
  IconMail
} from '@tabler/icons-react'
import StudentInformationTab from './_components/StudentInformationTab'
import ParentGuardianTab from './_components/ParentGuardianTab'
import AddressDetailsTab from './_components/AddressDetailsTab'
import PreviousSchoolTab from './_components/PreviousSchoolTab'
import DocumentUploadsTab from './_components/DocumentUploadsTab'
import DeclarationTab from './_components/DeclarationTab'

// Form data interface - Backend ready
export interface AdmissionFormData {
  // Student Information
  studentInfo: {
    fullName: string
    dateOfBirth: string
    gender: 'male' | 'female' | 'other'
    classApplyingFor: string
    nationality: string
    bloodGroup?: string
    religion?: string
    category?: 'general' | 'obc' | 'sc' | 'st' | 'other'
    studentAadhar?: string
    motherTongue?: string
  }
  
  // Parent/Guardian Details
  parentDetails: {
    fatherName: string
    fatherOccupation: string
    fatherQualification?: string
    fatherIncome?: string
    motherName: string
    motherOccupation?: string
    motherQualification?: string
    motherIncome?: string
    guardianName?: string
    relationWithChild?: string
    primaryContact: string
    alternatePhone?: string
    email: string
    fatherAadhar?: string
    motherAadhar?: string
  }
  
  // Address Details
  addressDetails: {
    residentialAddress: string
    city: string
    state: string
    pincode: string
    permanentAddress?: string
    sameAsResidential?: boolean
    nearestLandmark?: string
    distanceFromSchool?: string
  }
  
  // Previous School Details
  previousSchool: {
    lastSchoolAttended?: string
    lastClassPassed?: string
    transferCertificateNumber?: string
    reasonForLeaving?: string
    schoolBoard?: string
    mediumOfInstruction?: string
    gradePercentage?: string
  }
  
  // Document Uploads (Cloudinary URLs)
  documents: {
    birthCertificate?: string
    passportPhoto?: string
    studentAadhar?: string
    previousReportCard?: string
    transferCertificate?: string
    casteCertificate?: string
    incomeCertificate?: string
  }
  
  // Declaration & Consent
  declaration: {
    agreedToTerms: boolean
    consentForData: boolean
    emergencyContact?: string
    medicalConditions?: string
    specialNeeds?: string
  }
  
  // Meta Information
  meta: {
    submissionDate: string
    applicationId?: string
    status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
    academicYear: string
    fees?: {
      applicationFee: number
      paid: boolean
      paymentId?: string
    }
  }
}

// Tab configuration
const tabs = [
  {
    id: 'student',
    label: 'Student Info',
    icon: IconUser,
    component: StudentInformationTab
  },
  {
    id: 'parent',
    label: 'Parent Details',
    icon: IconUsers,
    component: ParentGuardianTab
  },
  {
    id: 'address',
    label: 'Address',
    icon: IconHome,
    component: AddressDetailsTab
  },
  {
    id: 'previous',
    label: 'Previous School',
    icon: IconSchool,
    component: PreviousSchoolTab
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: IconUpload,
    component: DocumentUploadsTab
  },
  {
    id: 'declaration',
    label: 'Declaration',
    icon: IconCheck,
    component: DeclarationTab
  }
]

export default function NewAdmissionForm() {
  const [currentTab, setCurrentTab] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [completedTabs, setCompletedTabs] = useState<number[]>([])

  // Initialize React Hook Form
  const methods = useForm<AdmissionFormData>({
    mode: 'onChange',
    defaultValues: {
      studentInfo: {
        nationality: 'Indian',
        category: 'general'
      },
      addressDetails: {
        state: 'Jharkhand',
        sameAsResidential: true
      },
      meta: {
        submissionDate: new Date().toISOString(),
        status: 'draft',
        academicYear: '2025-26',
        fees: {
          applicationFee: 500,
          paid: false
        }
      }
    }
  })

  const { handleSubmit, trigger, formState: { isValid } } = methods

  // Handle tab navigation
  const handleTabChange = async (tabIndex: number) => {
    if (tabIndex < currentTab || completedTabs.includes(currentTab)) {
      setCurrentTab(tabIndex)
      return
    }

    // Validate current tab before moving forward
    const currentTabId = tabs[currentTab].id
    let fieldsToValidate: string[] = []

    switch (currentTabId) {
      case 'student':
        fieldsToValidate = [
          'studentInfo.fullName',
          'studentInfo.dateOfBirth',
          'studentInfo.gender',
          'studentInfo.classApplyingFor',
          'studentInfo.nationality'
        ]
        break
      case 'parent':
        fieldsToValidate = [
          'parentDetails.fatherName',
          'parentDetails.fatherOccupation',
          'parentDetails.motherName',
          'parentDetails.primaryContact',
          'parentDetails.email'
        ]
        break
      case 'address':
        fieldsToValidate = [
          'addressDetails.residentialAddress',
          'addressDetails.city',
          'addressDetails.state',
          'addressDetails.pincode'
        ]
        break
      // Previous school and documents are optional for some cases
    }

    const isTabValid = fieldsToValidate.length > 0 ? await trigger(fieldsToValidate as never) : true
    
    if (isTabValid) {
      setCompletedTabs(prev => [...prev, currentTab])
      setCurrentTab(tabIndex)
    }
  }

  // Handle form submission
  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true)
    
    try {
      // Update meta information
      data.meta.submissionDate = new Date().toISOString()
      data.meta.status = 'submitted'
      data.meta.applicationId = `JPS${Date.now()}`

      // API call to backend
      const response = await fetch('/api/admission/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        // Success handling - redirect to success page
        window.location.href = `/Admission/Success?id=${result.applicationId}`
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Save as draft
  const saveDraft = async () => {
    const data = methods.getValues()
    data.meta.status = 'draft'
    
    try {
      await fetch('/api/admission/draft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      alert('Draft saved successfully!')
    } catch (error) {
      console.error('Draft save error:', error)
    }
  }

  const CurrentTabComponent = tabs[currentTab].component

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            🎓 New Admission Form
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Academic Year 2025-26 | Jharkhand Public School
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Application Form Active</span>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              const isCompleted = completedTabs.includes(index)
              const isCurrent = currentTab === index
              const isAccessible = index <= currentTab || completedTabs.includes(index)

              return (
                <div key={tab.id} className="flex flex-col items-center">
                  <button
                    onClick={() => isAccessible && handleTabChange(index)}
                    disabled={!isAccessible}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      isCompleted
                        ? 'bg-green-500 text-white shadow-lg'
                        : isCurrent
                        ? 'bg-blue-500 text-white shadow-lg'
                        : isAccessible
                        ? 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isCompleted ? (
                      <IconCheck size={20} />
                    ) : (
                      <Icon size={20} />
                    )}
                  </button>
                  <span className={`text-xs font-medium text-center ${
                    isCurrent ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {tab.label}
                  </span>
                </div>
              )
            })}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentTab + 1) / tabs.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <CurrentTabComponent />
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex gap-3">
                {currentTab > 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentTab(currentTab - 1)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-medium"
                  >
                    <IconArrowLeft size={20} />
                    <span>Previous</span>
                  </button>
                )}
                
                <button
                  type="button"
                  onClick={saveDraft}
                  className="flex items-center gap-2 px-6 py-3 bg-yellow-100 text-yellow-700 rounded-xl hover:bg-yellow-200 transition-colors duration-300 font-medium"
                >
                  <IconFileText size={20} />
                  <span>Save Draft</span>
                </button>
              </div>

              <div className="flex gap-3">
                {currentTab < tabs.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => handleTabChange(currentTab + 1)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    <span>Next</span>
                    <IconArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isSubmitting || !isValid
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <IconCheck size={20} />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Need Help?
            </h3>
            <p className="text-blue-700 mb-4">
              If you face any issues while filling the form, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <IconPhone size={16} className="text-blue-600" />
                <span>+91 8541061847</span>
              </div>
              <div className="flex items-center gap-2">
                <IconMail size={16} className="text-blue-600" />
                <span>contact@jpsbarharwa.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
