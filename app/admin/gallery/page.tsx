'use client'
// Gallery Management
import { useState, useEffect } from 'react';
import { 
  IconArrowLeft,
  IconPlus,
  IconTrash,
  IconUpload,
  IconX,
  IconCheck
} from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryImage {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isActive: boolean;
  createdAt?: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['Events', 'Sports', 'Academics', 'Infrastructure', 'Cultural', 'Other'];

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/admin/gallery');
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      try {
        const response = await fetch(`/api/admin/gallery/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchImages();
        }
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
  };

  const toggleImageStatus = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (response.ok) {
        fetchImages();
      }
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  const filteredImages = images.filter(image => 
    filterCategory === 'all' || image.category === filterCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-700">
                <IconArrowLeft size={24} />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <IconPlus size={20} />
              Add Image
            </button>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filterCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading images...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <button
                      onClick={() => toggleImageStatus(image._id!, image.isActive)}
                      className={`p-1 rounded-full ${
                        image.isActive 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-500 text-white'
                      }`}
                    >
                      <IconCheck size={16} />
                    </button>
                    <button
                      onClick={() => deleteImage(image._id!)}
                      className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <IconTrash size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{image.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {image.category}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      image.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {image.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found. Add your first image!</p>
          </div>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <ImageUploadForm
          onClose={() => setShowForm(false)}
          onSave={() => {
            fetchImages();
            setShowForm(false);
          }}
          categories={categories}
        />
      )}
    </div>
  );
}

// Image Upload Form Component
function ImageUploadForm({ 
  onClose, 
  onSave,
  categories
}: { 
  onClose: () => void;
  onSave: () => void;
  categories: string[];
}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Events',
    isActive: true,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    // Simple local upload - replace with your preferred upload service
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please select an image');
      return;
    }

    setUploading(true);

    try {
      // Upload image to server
      const imageUrl = await uploadImage(selectedFile);

      // Save to database
      const response = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imageUrl,
        }),
      });

      if (response.ok) {
        onSave();
      }
    } catch (error) {
      console.error('Error saving image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Add New Image</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IconX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              {previewUrl ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <IconUpload className="mx-auto text-gray-400 mb-2" size={48} />
                  <p className="text-gray-500">Click to upload an image</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
              Active (Show on website)
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
