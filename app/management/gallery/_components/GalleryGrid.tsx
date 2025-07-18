'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  IconPhoto, 
  IconTrash, 
  IconLoader,
  IconCheck,
  IconX,
  IconEye,
  IconEyeOff,
  IconStar,
  IconStarOff
} from '@tabler/icons-react';

interface GalleryImage {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  publicId?: string;
  category: string;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  uploadedBy?: string;
}

export default function GalleryGrid() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Events', label: 'Events' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Academics', label: 'Academics' },
    { value: 'Infrastructure', label: 'Infrastructure' },
    { value: 'Cultural', label: 'Cultural' },
    { value: 'Other', label: 'Other' }
  ];

  const fetchImages = useCallback(async () => {
    try {
      const categoryParam = selectedCategory === 'all' ? '' : `?category=${selectedCategory}`;
      const response = await fetch(`/api/management/gallery${categoryParam}`);
      const data = await response.json();

      if (response.ok) {
        setImages(data);
      } else {
        setError(data.error || 'Failed to fetch images');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleToggleActive = async (imageId: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/management/gallery/${imageId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (response.ok) {
        setImages(images.map(img => 
          img._id === imageId ? { ...img, isActive: !isActive } : img
        ));
      }
    } catch {
      setError('Failed to update image status');
    }
  };

  const handleToggleFeatured = async (imageId: string, isFeatured: boolean) => {
    try {
      const response = await fetch(`/api/management/gallery/${imageId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFeatured: !isFeatured }),
      });

      if (response.ok) {
        setImages(images.map(img => 
          img._id === imageId ? { ...img, isFeatured: !isFeatured } : img
        ));
      }
    } catch {
      setError('Failed to update featured status');
    }
  };

  const handleDelete = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      const response = await fetch(`/api/management/gallery/${imageId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setImages(images.filter(img => img._id !== imageId));
      }
    } catch {
      setError('Failed to delete image');
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Events: 'bg-blue-100 text-blue-800',
      Sports: 'bg-green-100 text-green-800',
      Academics: 'bg-purple-100 text-purple-800',
      Infrastructure: 'bg-orange-100 text-orange-800',
      Cultural: 'bg-pink-100 text-pink-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-center py-8">
          <IconLoader size={24} className="animate-spin text-blue-500" />
          <span className="ml-2 text-gray-600">Loading images...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="text-center py-8">
          <IconX size={24} className="text-red-500 mx-auto mb-2" />
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header with Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <IconPhoto size={24} className="text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900">Gallery Images</h2>
          <span className="text-sm text-gray-500">({images.length} images)</span>
        </div>
        
        <div className="flex items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <div className="text-center py-8">
          <IconPhoto size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No images found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image._id}
              className={`relative group rounded-lg overflow-hidden border ${
                image.isActive ? 'border-gray-200' : 'border-gray-200 opacity-60'
              }`}
            >
              {/* Image */}
              <div className="aspect-square relative">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedImage(image);
                        setShowModal(true);
                      }}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <IconEye size={16} className="text-gray-700" />
                    </button>
                    <button
                      onClick={() => handleToggleActive(image._id, image.isActive)}
                      className={`p-2 rounded-full transition-colors ${
                        image.isActive
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-green-500 hover:bg-green-600 text-white'
                      }`}
                    >
                      {image.isActive ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                    </button>
                    <button
                      onClick={() => handleToggleFeatured(image._id, image.isFeatured)}
                      className={`p-2 rounded-full transition-colors ${
                        image.isFeatured
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                          : 'bg-gray-500 hover:bg-gray-600 text-white'
                      }`}
                    >
                      {image.isFeatured ? <IconStar size={16} /> : <IconStarOff size={16} />}
                    </button>
                    <button
                      onClick={() => handleDelete(image._id)}
                      className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                    >
                      <IconTrash size={16} />
                    </button>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                    {image.category}
                  </span>
                  {image.isFeatured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <IconStar size={12} className="mr-1" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Active Status */}
                <div className="absolute top-2 right-2">
                  {image.isActive ? (
                    <div className="w-3 h-3 bg-green-500 rounded-full" title="Active" />
                  ) : (
                    <div className="w-3 h-3 bg-red-500 rounded-full" title="Inactive" />
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">{image.title}</h3>
                {image.description && (
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{image.description}</p>
                )}
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <span>{formatDate(image.createdAt)}</span>
                  <div className="flex items-center gap-1">
                    {image.isActive ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <IconCheck size={12} />
                        <span>Active</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-red-600">
                        <IconX size={12} />
                        <span>Inactive</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Image Preview */}
      {showModal && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{selectedImage.title}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <IconX size={20} />
                </button>
              </div>
              
              <div className="relative mb-4">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600"><strong>Category:</strong> {selectedImage.category}</p>
                {selectedImage.description && (
                  <p className="text-sm text-gray-600"><strong>Description:</strong> {selectedImage.description}</p>
                )}
                <p className="text-sm text-gray-600"><strong>Status:</strong> {selectedImage.isActive ? 'Active' : 'Inactive'}</p>
                <p className="text-sm text-gray-600"><strong>Featured:</strong> {selectedImage.isFeatured ? 'Yes' : 'No'}</p>
                <p className="text-sm text-gray-600"><strong>Added:</strong> {formatDate(selectedImage.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
