import React from 'react'
import { useFormContext } from 'react-hook-form'
import { IconHome, IconMapPin, IconMap } from '@tabler/icons-react'
import type { AdmissionFormData } from '../page'

const states = [
  'Jharkhand', 'West Bengal', 'Bihar', 'Odisha', 'Chhattisgarh', 'Uttar Pradesh',
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand'
]

export default function AddressDetailsTab() {
  const { register, formState: { errors }, watch, setValue } = useFormContext<AdmissionFormData>()

  const sameAsResidential = watch('addressDetails.sameAsResidential')

  const handleSameAddressChange = (checked: boolean) => {
    setValue('addressDetails.sameAsResidential', checked)
    if (checked) {
      const residentialAddress = watch('addressDetails.residentialAddress')
      setValue('addressDetails.permanentAddress', residentialAddress)
    }
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-orange-100 rounded-lg">
            <IconHome size={24} className="text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Address Details</h2>
        </div>
        <p className="text-gray-600">Provide current residential and permanent address information</p>
      </div>

      <div className="space-y-8">
        {/* Residential Address */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
            🏠 Current Residential Address
          </h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Complete Address <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('addressDetails.residentialAddress', {
                  required: "Please enter your full address.",
                  minLength: {
                    value: 10,
                    message: "Address must be at least 10 characters long."
                  }
                })}
                rows={3}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white resize-none ${
                  errors.addressDetails?.residentialAddress ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter house/flat number, street, area, locality"
              />
              {errors.addressDetails?.residentialAddress && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.addressDetails.residentialAddress.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    {...register('addressDetails.city', {
                      required: "Please enter your city name.",
                      minLength: {
                        value: 2,
                        message: "City name must be at least 2 characters long."
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${
                      errors.addressDetails?.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Barharwa, Sahibganj"
                  />
                  <IconMapPin size={20} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                </div>
                {errors.addressDetails?.city && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠️</span> {errors.addressDetails.city.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('addressDetails.state', {
                    required: "Please enter your state."
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${
                    errors.addressDetails?.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                {errors.addressDetails?.state && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠️</span> {errors.addressDetails.state.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('addressDetails.pincode', {
                    required: "Please enter a valid 6-digit pincode.",
                    pattern: {
                      value: /^[1-9][0-9]{5}$/,
                      message: "Please enter a valid 6-digit pincode."
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${
                    errors.addressDetails?.pincode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 816101"
                  maxLength={6}
                />
                {errors.addressDetails?.pincode && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠️</span> {errors.addressDetails.pincode.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nearest Landmark <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  {...register('addressDetails.nearestLandmark')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  placeholder="e.g., Near Railway Station, Market"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Distance from School <span className="text-gray-500">(Optional)</span>
                </label>
                <select
                  {...register('addressDetails.distanceFromSchool')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                >
                  <option value="">Select Distance</option>
                  <option value="less-than-1km">Less than 1 KM</option>
                  <option value="1-3km">1 - 3 KM</option>
                  <option value="3-5km">3 - 5 KM</option>
                  <option value="5-10km">5 - 10 KM</option>
                  <option value="more-than-10km">More than 10 KM</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Permanent Address */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-900 flex items-center gap-2">
              📍 Permanent Address
            </h3>
            
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={sameAsResidential}
                onChange={(e) => handleSameAddressChange(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-sm font-medium text-green-800">
                Same as residential address
              </span>
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Complete Permanent Address <span className="text-gray-500">(Optional)</span>
            </label>
            <textarea
              {...register('addressDetails.permanentAddress')}
              rows={3}
              disabled={sameAsResidential}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white resize-none ${
                sameAsResidential ? 'bg-gray-100 text-gray-500' : ''
              }`}
              placeholder={sameAsResidential ? "Same as residential address" : "Enter permanent address if different from residential"}
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
            📋 Additional Information
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 border border-yellow-300">
                <div className="flex items-center gap-2 mb-2">
                  <IconMap size={20} className="text-yellow-600" />
                  <h4 className="font-medium text-yellow-900">School Location</h4>
                </div>
                <p className="text-sm text-yellow-800">
                  <strong>Jharkhand Public School</strong><br />
                  Thana road, Barharwa<br />
                  Sahibganj, Jharkhand - 816101
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-yellow-300">
                <div className="flex items-center gap-2 mb-2">
                  <IconMapPin size={20} className="text-yellow-600" />
                  <h4 className="font-medium text-yellow-900">Transportation</h4>
                </div>
                <p className="text-sm text-yellow-800">
                  School transport facility available for students within 10 KM radius. 
                  Transportation charges apply separately.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-yellow-300">
              <h4 className="font-medium text-yellow-900 mb-2">📞 Area Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
                <div>
                  <strong>School Office:</strong> +91 8541061847
                </div>
                <div>
                  <strong>Email:</strong> contact@jpsbarharwa.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-orange-500 mt-0.5">ℹ️</div>
          <div>
            <h4 className="text-orange-900 font-semibold mb-1">Address Verification</h4>
            <p className="text-orange-800 text-sm">
              Address proof may be required during document verification. 
              Please ensure the address provided matches your official documents like Aadhar Card or Utility Bills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
