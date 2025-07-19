'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface AuthUser {
  id: string;
  email: string;
  role: string;
  permissions: string[];
}

interface HeroCarouselImage {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  publicId: string;
  altText: string;
  emoji: string;
  order: number;
  isActive: boolean;
  createdAt: string;
}

interface HeroCarouselClientProps {
  user: AuthUser;
}

export default function HeroCarouselClient({ user }: HeroCarouselClientProps) {
  const [images, setImages] = useState<HeroCarouselImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingImage, setEditingImage] = useState<HeroCarouselImage | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Access to user for permissions if needed in future
  console.log('User:', user.email);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    altText: '',
    emoji: '🎓',
    order: 0,
    isActive: true
  });

  // Fetch carousel images
  const fetchImages = async () => {
    try {
      const response = await fetch('/api/hero-carousel');
      const data = await response.json();
      if (data.success) {
        setImages(data.data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // Create FormData for file upload
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('title', formData.title);
      uploadFormData.append('description', formData.description);
      uploadFormData.append('altText', formData.altText);
      uploadFormData.append('emoji', formData.emoji);
      uploadFormData.append('order', formData.order.toString());
      
      const response = await fetch('/api/hero-carousel/upload', {
        method: 'POST',
        body: uploadFormData
      });

      const data = await response.json();
      if (data.success) {
        fetchImages();
        setFormData({
          title: '',
          description: '',
          altText: '',
          emoji: '🎓',
          order: 0,
          isActive: true
        });
        setShowAddForm(false);
      } else {
        console.error('Upload error:', data.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  // Handle update
  const handleUpdate = async (id: string, updateData: Partial<HeroCarouselImage>) => {
    try {
      const response = await fetch('/api/hero-carousel', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updateData })
      });

      const data = await response.json();
      if (data.success) {
        fetchImages();
        setEditingImage(null);
      }
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch(`/api/hero-carousel?id=${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      if (data.success) {
        fetchImages();
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hero Carousel Management</h1>
          <p className="text-gray-600 mt-1">Manage homepage hero section images</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Image
        </button>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingImage) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingImage ? 'Edit Image' : 'Add New Image'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={editingImage ? editingImage.title : formData.title}
                  onChange={(e) => {
                    if (editingImage) {
                      setEditingImage({ ...editingImage, title: e.target.value });
                    } else {
                      setFormData({ ...formData, title: e.target.value });
                    }
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Image title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Alt Text</label>
                <input
                  type="text"
                  value={editingImage ? editingImage.altText : formData.altText}
                  onChange={(e) => {
                    if (editingImage) {
                      setEditingImage({ ...editingImage, altText: e.target.value });
                    } else {
                      setFormData({ ...formData, altText: e.target.value });
                    }
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Alt text for accessibility"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={editingImage ? editingImage.description || '' : formData.description}
                  onChange={(e) => {
                    if (editingImage) {
                      setEditingImage({ ...editingImage, description: e.target.value });
                    } else {
                      setFormData({ ...formData, description: e.target.value });
                    }
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  rows={3}
                  placeholder="Image description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Emoji</label>
                  <input
                    type="text"
                    value={editingImage ? editingImage.emoji : formData.emoji}
                    onChange={(e) => {
                      if (editingImage) {
                        setEditingImage({ ...editingImage, emoji: e.target.value });
                      } else {
                        setFormData({ ...formData, emoji: e.target.value });
                      }
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="🎓"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Order</label>
                  <input
                    type="number"
                    value={editingImage ? editingImage.order : formData.order}
                    onChange={(e) => {
                      if (editingImage) {
                        setEditingImage({ ...editingImage, order: parseInt(e.target.value) });
                      } else {
                        setFormData({ ...formData, order: parseInt(e.target.value) });
                      }
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
              </div>

              {!editingImage && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Image File</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="mt-1 block w-full"
                    disabled={uploading}
                  />
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingImage(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  disabled={uploading}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (editingImage) {
                      handleUpdate(editingImage._id, editingImage);
                    }
                  }}
                  disabled={uploading || !editingImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {uploading ? 'Processing...' : editingImage ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[4/5] relative">
              <Image
                src={image.imageUrl}
                alt={image.altText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-2 right-2 flex space-x-1">
                <span className="bg-white rounded-full p-1 text-sm">{image.emoji}</span>
                <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-xs">
                  #{image.order}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{image.altText}</p>
              {image.description && (
                <p className="text-xs text-gray-500 mb-3">{image.description}</p>
              )}
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingImage(image)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleUpdate(image._id, { isActive: !image.isActive })}
                    className={`text-sm ${image.isActive ? 'text-green-600' : 'text-gray-400'}`}
                  >
                    {image.isActive ? 'Active' : 'Inactive'}
                  </button>
                  <button
                    onClick={() => handleDelete(image._id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No carousel images</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by uploading your first hero image.</p>
            <div className="mt-6">
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
