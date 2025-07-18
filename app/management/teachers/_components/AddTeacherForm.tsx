'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  IconPlus, 
  IconLoader, 
  IconCheck, 
  IconAlertCircle, 
  IconX, 
  IconSchool,
  IconMail,
  IconPhone,
  IconUser,
  IconBook,
  IconTrophy,
  IconUpload
} from '@tabler/icons-react';

export default function AddTeacherForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    designation: 'Teacher',
    subjects: [''],
    experience: '',
    specialization: '',
    qualifications: [''],
    bio: '',
    phone: '',
    email: '',
    achievements: [''],
    order: 0
  });

  const designationOptions = [
    { value: 'Principal', label: 'Principal', icon: IconSchool },
    { value: 'Headmaster', label: 'Headmaster', icon: IconSchool },
    { value: 'Teacher', label: 'Teacher', icon: IconUser },
    { value: 'Assistant Teacher', label: 'Assistant Teacher', icon: IconUser },
    { value: 'Sports Teacher', label: 'Sports Teacher', icon: IconTrophy },
    { value: 'Music Teacher', label: 'Music Teacher', icon: IconBook }
  ];

  const subjectOptions = [
    'All Subjects', 'Mathematics', 'Science', 'English', 'Hindi', 'Social Studies',
    'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Physical Education',
    'Music', 'Art', 'Sanskrit', 'Geography', 'History', 'Economics'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayField = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field as keyof typeof prev] as string[]), '']
    }));
  };

  const removeArrayField = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageToCloudinary = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      let photoBase64 = '';

      // Convert image to base64 if selected
      if (imageFile) {
        setIsUploadingImage(true);
        photoBase64 = await uploadImageToCloudinary(imageFile);
        setIsUploadingImage(false);
      }

      // Clean up form data
      const cleanedData = {
        ...formData,
        subjects: formData.subjects.filter(s => s.trim() !== ''),
        qualifications: formData.qualifications.filter(q => q.trim() !== ''),
        achievements: formData.achievements.filter(a => a.trim() !== ''),
        photo: photoBase64,
        order: parseInt(formData.order.toString()) || 0
      };

      const response = await fetch('/api/management/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Teacher added successfully!');
        // Reset form
        setFormData({
          name: '',
          designation: 'Teacher',
          subjects: [''],
          experience: '',
          specialization: '',
          qualifications: [''],
          bio: '',
          phone: '',
          email: '',
          achievements: [''],
          order: 0
        });
        setSelectedImage(null);
        setImageFile(null);
        
        // Refresh the page to show new teacher
        window.location.reload();
      } else {
        setError(data.error || 'Failed to add teacher');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error adding teacher:', error);
    } finally {
      setIsLoading(false);
      setIsUploadingImage(false);
    }
  };

  // Clear messages after 5 seconds
  React.useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage('');
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

  return (
    <div className="space-y-6">
      {/* Success/Error Messages */}
      {(message || error) && (
        <div className={`p-4 rounded-xl border transition-all duration-300 ${
          message 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center gap-3">
            {message ? (
              <IconCheck size={20} className="text-green-600" />
            ) : (
              <IconAlertCircle size={20} className="text-red-600" />
            )}
            <p className={`text-sm font-medium ${
              message ? 'text-green-800' : 'text-red-800'
            }`}>
              {message || error}
            </p>
            <button
              onClick={() => { setMessage(''); setError(''); }}
              className={`ml-auto p-1 rounded-lg transition-colors ${
                message 
                  ? 'text-green-600 hover:bg-green-100' 
                  : 'text-red-600 hover:bg-red-100'
              }`}
            >
              <IconX size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Profile Photo
          </label>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="Preview"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <IconUser size={32} className="text-gray-400" />
                )}
              </div>
              {isUploadingImage && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <IconLoader size={20} className="text-white animate-spin" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                ref={fileInputRef}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <IconUpload size={18} />
                Upload Photo
              </button>
              <p className="text-xs text-gray-500 mt-1">
                Max size: 5MB. Supported: JPG, PNG, GIF
              </p>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <IconUser size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter full name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Designation *
            </label>
            <select
              value={formData.designation}
              onChange={(e) => handleInputChange('designation', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {designationOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <IconMail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <IconPhone size={18} className="text-gray-400" />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience *
            </label>
            <input
              type="text"
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="e.g., 5+ Years"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialization
            </label>
            <input
              type="text"
              value={formData.specialization}
              onChange={(e) => handleInputChange('specialization', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="e.g., Mathematics & Science"
            />
          </div>
        </div>

        {/* Subjects */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subjects *
          </label>
          {formData.subjects.map((subject, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <select
                value={subject}
                onChange={(e) => handleArrayChange('subjects', index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Subject</option>
                {subjectOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {formData.subjects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('subjects', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <IconX size={16} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('subjects')}
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            + Add Subject
          </button>
        </div>

        {/* Qualifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Qualifications *
          </label>
          {formData.qualifications.map((qualification, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={qualification}
                onChange={(e) => handleArrayChange('qualifications', index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g., B.Ed, M.A, M.Sc"
              />
              {formData.qualifications.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('qualifications', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <IconX size={16} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('qualifications')}
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            + Add Qualification
          </button>
        </div>

        {/* Achievements */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Achievements
          </label>
          {formData.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={achievement}
                onChange={(e) => handleArrayChange('achievements', index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g., Best Teacher Award 2023"
              />
              {formData.achievements.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('achievements', index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <IconX size={16} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('achievements')}
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            + Add Achievement
          </button>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            value={formData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            rows={4}
            placeholder="Brief description about the teacher..."
          />
        </div>

        {/* Order */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display Order
          </label>
          <input
            type="number"
            value={formData.order}
            onChange={(e) => handleInputChange('order', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="0"
            min="0"
          />
          <p className="text-xs text-gray-500 mt-1">
            Lower numbers appear first in the list
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || isUploadingImage}
          className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-3 px-6 rounded-xl font-medium hover:from-emerald-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <IconLoader size={20} className="animate-spin" />
              <span>Adding Teacher...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <IconPlus size={20} />
              <span>Add Teacher</span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
