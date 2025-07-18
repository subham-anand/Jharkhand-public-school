'use client';

import React, { useState } from 'react';
import { 
  IconX, 
  IconLoader, 
  IconUser, 
  IconCamera, 
  IconCheck, 
  IconAlertCircle,
  IconPlus,
  IconMinus
} from '@tabler/icons-react';
import Image from 'next/image';

interface Teacher {
  _id: string;
  name: string;
  designation: string;
  subjects: string[];
  experience: string;
  specialization: string;
  qualifications: string[];
  bio: string;
  phone: string;
  email: string;
  achievements: string[];
  photo: string;
  isActive: boolean;
  order: number;
}

interface EditTeacherFormProps {
  teacher: Teacher;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditTeacherForm({ teacher, onClose, onSuccess }: EditTeacherFormProps) {
  const [formData, setFormData] = useState({
    name: teacher.name,
    designation: teacher.designation,
    subjects: teacher.subjects,
    experience: teacher.experience,
    specialization: teacher.specialization,
    qualifications: teacher.qualifications,
    bio: teacher.bio,
    phone: teacher.phone,
    email: teacher.email,
    achievements: teacher.achievements,
    photo: teacher.photo,
    isActive: teacher.isActive,
    order: teacher.order
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>(teacher.photo);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Handle photo upload
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle array inputs
  const handleArrayChange = (field: keyof typeof formData, index: number, value: string) => {
    const currentArray = formData[field] as string[];
    const newArray = [...currentArray];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: keyof typeof formData) => {
    const currentArray = formData[field] as string[];
    setFormData(prev => ({ ...prev, [field]: [...currentArray, ''] }));
  };

  const removeArrayItem = (field: keyof typeof formData, index: number) => {
    const currentArray = formData[field] as string[];
    setFormData(prev => ({ ...prev, [field]: currentArray.filter((_, i) => i !== index) }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Prepare form data
      const updateData = {
        ...formData,
        subjects: formData.subjects.filter(s => s.trim() !== ''),
        qualifications: formData.qualifications.filter(q => q.trim() !== ''),
        achievements: formData.achievements.filter(a => a.trim() !== ''),
      };

      // Handle photo if changed
      if (photoFile) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64 = e.target?.result as string;
          updateData.photo = base64;
          await submitForm(updateData);
        };
        reader.readAsDataURL(photoFile);
      } else {
        await submitForm(updateData);
      }
    } catch (error) {
      setError('Failed to update teacher. Please try again.');
      console.error('Error updating teacher:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitForm = async (data: Partial<Teacher>) => {
    const response = await fetch(`/api/management/teachers/${teacher._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      onSuccess();
      onClose();
    } else {
      const errorData = await response.json();
      setError(errorData.error || 'Failed to update teacher');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-bold text-gray-900">Edit Teacher</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
              <IconAlertCircle size={20} className="text-red-600" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Photo Upload */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
                {photoPreview ? (
                  <Image
                    src={photoPreview}
                    alt="Teacher photo"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <IconUser size={32} className="text-gray-400" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-700 transition-colors">
                <IconCamera size={16} className="text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Profile Photo</h3>
              <p className="text-sm text-gray-600 mt-1">Click the camera icon to update photo</p>
            </div>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Designation *
              </label>
              <select
                value={formData.designation}
                onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                required
              >
                <option value="">Select designation</option>
                <option value="Principal">Principal</option>
                <option value="Headmaster">Headmaster</option>
                <option value="Teacher">Teacher</option>
                <option value="Assistant Teacher">Assistant Teacher</option>
                <option value="Sports Teacher">Sports Teacher</option>
                <option value="Music Teacher">Music Teacher</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience *
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                placeholder="e.g., 5 years"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
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
                onChange={(e) => setFormData(prev => ({ ...prev, specialization: e.target.value }))}
                placeholder="e.g., Primary Education"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="e.g., +91 9876543210"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="e.g., teacher@jpsbarharwa.in"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Biography
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              rows={4}
              placeholder="Brief description about the teacher..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
            />
          </div>

          {/* Subjects */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subjects Taught *
            </label>
            <div className="space-y-2">
              {formData.subjects.map((subject, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => handleArrayChange('subjects', index, e.target.value)}
                    placeholder="e.g., Mathematics"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('subjects', index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <IconMinus size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('subjects')}
                className="flex items-center gap-2 px-4 py-2 text-emerald-600 border border-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <IconPlus size={16} />
                Add Subject
              </button>
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Qualifications *
            </label>
            <div className="space-y-2">
              {formData.qualifications.map((qualification, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => handleArrayChange('qualifications', index, e.target.value)}
                    placeholder="e.g., B.Ed"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('qualifications', index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <IconMinus size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('qualifications')}
                className="flex items-center gap-2 px-4 py-2 text-emerald-600 border border-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <IconPlus size={16} />
                Add Qualification
              </button>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Achievements
            </label>
            <div className="space-y-2">
              {formData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={achievement}
                    onChange={(e) => handleArrayChange('achievements', index, e.target.value)}
                    placeholder="e.g., Best Teacher Award 2023"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('achievements', index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <IconMinus size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('achievements')}
                className="flex items-center gap-2 px-4 py-2 text-emerald-600 border border-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <IconPlus size={16} />
                Add Achievement
              </button>
            </div>
          </div>

          {/* Status and Order */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Order
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 0 }))}
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.isActive.toString()}
                onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.value === 'true' }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <IconLoader size={20} className="animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <IconCheck size={20} />
                  Update Teacher
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
