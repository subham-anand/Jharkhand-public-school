'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconPlus, IconPhoto, IconUser, IconMail, IconStar } from '@tabler/icons-react';

export default function AddTestimonialForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationship: 'parent',
    rating: 5,
    message: '',
    photo: null as File | null,
    isApproved: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('relationship', formData.relationship);
      formDataToSend.append('rating', formData.rating.toString());
      formDataToSend.append('message', formData.message);
      formDataToSend.append('isApproved', formData.isApproved.toString());
      
      if (formData.photo) {
        formDataToSend.append('photo', formData.photo);
      }

      const response = await fetch('/api/management/testimonials', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          relationship: 'parent',
          rating: 5,
          message: '',
          photo: null,
          isApproved: false
        });
        setPreviewImage(null);
        
        // Refresh testimonials list
        window.location.reload();
      } else {
        throw new Error('Failed to add testimonial');
      }
    } catch (error) {
      console.error('Error adding testimonial:', error);
      alert('Failed to add testimonial. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <IconPlus size={20} className="text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Add New Testimonial</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <IconUser size={16} className="inline mr-1" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <IconMail size={16} className="inline mr-1" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Relationship
            </label>
            <select
              name="relationship"
              value={formData.relationship}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="parent">Parent</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <IconStar size={16} className="inline mr-1" />
              Rating
            </label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter testimonial message"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <IconPhoto size={16} className="inline mr-1" />
            Photo (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {previewImage && (
            <div className="mt-2">
              <Image
                src={previewImage}
                alt="Preview"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md border border-gray-300"
              />
            </div>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.isApproved}
              onChange={(e) => setFormData(prev => ({ ...prev, isApproved: e.target.checked }))}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Approve for display</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
        >
          {isLoading ? 'Adding...' : 'Add Testimonial'}
        </button>
      </form>
    </div>
  );
}
