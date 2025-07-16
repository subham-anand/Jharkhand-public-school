import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { IconUpload, IconPhoto, IconFileText, IconCheck, IconX, IconCloudUpload } from '@tabler/icons-react'
import type { AdmissionFormData } from '../page'

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = 'your-cloud-name' // Replace with your Cloudinary cloud name
const CLOUDINARY_UPLOAD_PRESET = 'admission-documents' // Replace with your upload preset

interface DocumentUploadProps {
  title: string
  description: string
  fieldName: keyof AdmissionFormData['documents']
  acceptedTypes: string[]
  maxSize: number
  required?: boolean
  icon: React.ElementType
}

interface UploadState {
  [key: string]: {
    uploading: boolean
    progress: number
    error: string | null
    success: boolean
  }
}

export default function DocumentUploadsTab() {
  const { register, formState: { errors }, setValue, watch } = useFormContext<AdmissionFormData>()
  const [uploadStates, setUploadStates] = useState<UploadState>({})

  const documents = watch('documents') || {}
  const classApplyingFor = watch('studentInfo.classApplyingFor')
  const isClass1Plus = classApplyingFor && !['Nursery', 'LKG', 'UKG'].includes(classApplyingFor)

  // Upload file to Cloudinary
  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    formData.append('folder', 'admission-documents')

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    const data = await response.json()
    return data.secure_url
  }

  // Handle file upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Update upload state
    setUploadStates(prev => ({
      ...prev,
      [fieldName]: { uploading: true, progress: 0, error: null, success: false }
    }))

    try {
      // Validate file size (max 2MB for photos, 5MB for documents)
      const maxSize = fieldName === 'passportPhoto' ? 2 * 1024 * 1024 : 5 * 1024 * 1024
      if (file.size > maxSize) {
        throw new Error(`File size should not exceed ${maxSize / (1024 * 1024)}MB`)
      }

      // Upload to Cloudinary
      const imageUrl = await uploadToCloudinary(file)

      // Update form value
      setValue(`documents.${fieldName as keyof AdmissionFormData['documents']}`, imageUrl)

      // Update upload state
      setUploadStates(prev => ({
        ...prev,
        [fieldName]: { uploading: false, progress: 100, error: null, success: true }
      }))

    } catch (error) {
      console.error('Upload error:', error)
      setUploadStates(prev => ({
        ...prev,
        [fieldName]: { 
          uploading: false, 
          progress: 0, 
          error: error instanceof Error ? error.message : 'Upload failed', 
          success: false 
        }
      }))
    }
  }

  // Remove uploaded file
  const removeFile = (fieldName: string) => {
    setValue(`documents.${fieldName as keyof AdmissionFormData['documents']}`, '')
    setUploadStates(prev => ({
      ...prev,
      [fieldName]: { uploading: false, progress: 0, error: null, success: false }
    }))
  }

  // Document upload component
  const DocumentUpload: React.FC<DocumentUploadProps> = ({ 
    title, 
    description, 
    fieldName, 
    acceptedTypes, 
    maxSize, 
    required = false,
    icon: Icon 
  }) => {
    const uploadState = uploadStates[fieldName]
    const hasFile = documents[fieldName]
    const isUploading = uploadState?.uploading

    return (
      <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg flex-shrink-0 ${
            hasFile ? 'bg-green-100' : required ? 'bg-red-100' : 'bg-gray-100'
          }`}>
            <Icon size={24} className={`${
              hasFile ? 'text-green-600' : required ? 'text-red-600' : 'text-gray-600'
            }`} />
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-1">
              {title} {required && <span className="text-red-500">*</span>}
            </h4>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            
            {!hasFile ? (
              <div>
                <label className={`inline-flex items-center gap-2 px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                  isUploading 
                    ? 'border-blue-300 bg-blue-50 text-blue-600' 
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-600 hover:text-blue-600'
                }`}>
                  <input
                    type="file"
                    className="hidden"
                    accept={acceptedTypes.join(',')}
                    onChange={(e) => handleFileUpload(e, fieldName)}
                    disabled={isUploading}
                  />
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <IconCloudUpload size={20} />
                      <span>Choose File</span>
                    </>
                  )}
                </label>
                
                <div className="mt-2 text-xs text-gray-500">
                  Accepted: {acceptedTypes.join(', ')} • Max size: {maxSize}MB
                </div>
                
                {uploadState?.error && (
                  <div className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <IconX size={16} />
                    {uploadState.error}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between bg-green-50 rounded-lg p-3 border border-green-200">
                <div className="flex items-center gap-2 text-green-800">
                  <IconCheck size={16} />
                  <span className="text-sm font-medium">File uploaded successfully</span>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={documents[fieldName]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 underline"
                  >
                    View
                  </a>
                  <button
                    type="button"
                    onClick={() => removeFile(fieldName)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <IconX size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <IconUpload size={24} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Document Uploads</h2>
        </div>
        <p className="text-gray-600">Upload clear, readable copies of required documents</p>
      </div>

      {/* Upload Progress Summary */}
      {Object.keys(uploadStates).some(key => uploadStates[key]?.uploading) && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-medium text-blue-900 mb-2">Upload in Progress...</h3>
          <div className="space-y-2">
            {Object.entries(uploadStates).map(([key, state]) => 
              state.uploading && (
                <div key={key} className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-blue-800">Uploading {key}...</span>
                </div>
              )
            )}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Essential Documents */}
        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
            📄 Essential Documents (Required)
          </h3>
          
          <div className="space-y-6">
            <DocumentUpload
              title="Birth Certificate"
              description="Official birth certificate issued by Municipal Corporation or Registrar"
              fieldName="birthCertificate"
              acceptedTypes={['.pdf', '.jpg', '.jpeg', '.png']}
              maxSize={5}
              required={true}
              icon={IconFileText}
            />

            <DocumentUpload
              title="Passport Size Photo"
              description="Recent color photograph with white background (3.5 x 4.5 cm)"
              fieldName="passportPhoto"
              acceptedTypes={['.jpg', '.jpeg', '.png']}
              maxSize={2}
              required={true}
              icon={IconPhoto}
            />
          </div>
        </div>

        {/* Academic Documents (for Class 1+) */}
        {isClass1Plus && (
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              🎓 Academic Documents (Required for {classApplyingFor})
            </h3>
            
            <div className="space-y-6">
              <DocumentUpload
                title="Previous Year Report Card"
                description="Last academic year's report card or mark sheet"
                fieldName="previousReportCard"
                acceptedTypes={['.pdf', '.jpg', '.jpeg', '.png']}
                maxSize={5}
                required={true}
                icon={IconFileText}
              />

              <DocumentUpload
                title="Transfer Certificate"
                description="Transfer Certificate (TC) from previous school"
                fieldName="transferCertificate"
                acceptedTypes={['.pdf', '.jpg', '.jpeg', '.png']}
                maxSize={5}
                required={true}
                icon={IconFileText}
              />
            </div>
          </div>
        )}

        {/* Optional Documents */}
        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
            📋 Optional Documents
          </h3>
          
          <div className="space-y-6">
            <DocumentUpload
              title="Student Aadhar Card"
              description="Aadhar card of the student (if available)"
              fieldName="studentAadhar"
              acceptedTypes={['.pdf', '.jpg', '.jpeg', '.png']}
              maxSize={5}
              required={false}
              icon={IconFileText}
            />

            <DocumentUpload
              title="Caste Certificate"
              description="Caste certificate for reserved category students"
              fieldName="casteCertificate"
              acceptedTypes={['.pdf', '.jpg', '.jpeg', '.png']}
              maxSize={5}
              required={false}
              icon={IconFileText}
            />

            <DocumentUpload
              title="Income Certificate"
              description="Family income certificate (if applying for fee concession)"
              fieldName="incomeCertificate"
              acceptedTypes={['.pdf', '.jpg', '.jpeg', '.png']}
              maxSize={5}
              required={false}
              icon={IconFileText}
            />
          </div>
        </div>
      </div>

      {/* Upload Guidelines */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Document Upload Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">✅ Do&apos;s</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Upload clear, readable documents</li>
              <li>• Use proper lighting when scanning</li>
              <li>• Ensure all corners are visible</li>
              <li>• Keep file sizes under the limit</li>
              <li>• Use standard formats (PDF, JPG, PNG)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">❌ Don&apos;ts</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Don&apos;t upload blurry images</li>
              <li>• Avoid partial document captures</li>
              <li>• Don&apos;t use unsupported formats</li>
              <li>• Avoid uploading very large files</li>
              <li>• Don&apos;t submit edited documents</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
          <h4 className="font-medium text-gray-900 mb-2">🔒 Document Security</h4>
          <p className="text-sm text-gray-700">
            All uploaded documents are securely stored and encrypted. Your documents will only be used 
            for admission purposes and will be handled as per our privacy policy. We use Cloudinary 
            for secure cloud storage with enterprise-grade security.
          </p>
        </div>
      </div>

      {/* Hidden form fields for validation */}
      <div className="hidden">
        <input 
          {...register('documents.birthCertificate', {
            required: "Please upload your child's birth certificate."
          })}
        />
        <input 
          {...register('documents.passportPhoto', {
            required: "Please upload a clear photo (Max 2MB)."
          })}
        />
        {isClass1Plus && (
          <>
            <input 
              {...register('documents.previousReportCard', {
                required: "Please upload last year's report card."
              })}
            />
            <input 
              {...register('documents.transferCertificate', {
                required: "Please upload transfer certificate."
              })}
            />
          </>
        )}
      </div>

      {/* Error Display */}
      {(errors.documents?.birthCertificate || 
        errors.documents?.passportPhoto || 
        errors.documents?.previousReportCard || 
        errors.documents?.transferCertificate) && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h4 className="text-red-900 font-semibold mb-2">⚠️ Required Documents Missing</h4>
          <div className="space-y-1 text-sm text-red-800">
            {errors.documents?.birthCertificate && <p>• {errors.documents.birthCertificate.message}</p>}
            {errors.documents?.passportPhoto && <p>• {errors.documents.passportPhoto.message}</p>}
            {errors.documents?.previousReportCard && <p>• {errors.documents.previousReportCard.message}</p>}
            {errors.documents?.transferCertificate && <p>• {errors.documents.transferCertificate.message}</p>}
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-green-500 mt-0.5">ℹ️</div>
          <div>
            <h4 className="text-green-900 font-semibold mb-1">Document Verification</h4>
            <p className="text-green-800 text-sm">
              All uploaded documents will be verified with original copies during the admission interview. 
              Please ensure that uploaded documents are authentic and clearly readable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
