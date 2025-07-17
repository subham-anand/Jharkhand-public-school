'use client'
// Testimonials Management
import { useState, useEffect } from 'react';
import { 
  IconArrowLeft,
  IconPlus,
  IconEdit,
  IconTrash,
  IconStar,
  IconX,
  IconCheck
} from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

interface Testimonial {
  _id?: string;
  name: string;
  relation: string; // Parent, Student, Alumni
  content: string;
  rating: number;
  photo?: string;
  isActive: boolean;
  createdAt?: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/admin/testimonials');
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      try {
        const response = await fetch(`/api/admin/testimonials/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchTestimonials();
        }
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      }
    }
  };

  const toggleTestimonialStatus = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (response.ok) {
        fetchTestimonials();
      }
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

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
              <h1 className="text-2xl font-bold text-gray-900">Testimonials Management</h1>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <IconPlus size={20} />
              Add Testimonial
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {testimonial.photo ? (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.relation}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <IconStar
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {testimonial.content}
                </p>

                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    testimonial.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {testimonial.isActive ? 'Active' : 'Inactive'}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleTestimonialStatus(testimonial._id!, testimonial.isActive)}
                      className={`p-2 rounded-lg ${
                        testimonial.isActive 
                          ? 'text-gray-600 hover:bg-gray-100' 
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                    >
                      <IconCheck size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setEditingTestimonial(testimonial);
                        setShowForm(true);
                      }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <IconEdit size={16} />
                    </button>
                    <button
                      onClick={() => deleteTestimonial(testimonial._id!)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <IconTrash size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {testimonials.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">No testimonials found. Add your first testimonial!</p>
          </div>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <TestimonialForm
          testimonial={editingTestimonial}
          onClose={() => {
            setShowForm(false);
            setEditingTestimonial(null);
          }}
          onSave={() => {
            fetchTestimonials();
            setShowForm(false);
            setEditingTestimonial(null);
          }}
        />
      )}
    </div>
  );
}

// Testimonial Form Component
function TestimonialForm({ 
  testimonial, 
  onClose, 
  onSave 
}: { 
  testimonial: Testimonial | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState<Testimonial>({
    name: testimonial?.name || '',
    relation: testimonial?.relation || 'Parent',
    content: testimonial?.content || '',
    rating: testimonial?.rating || 5,
    photo: testimonial?.photo || '',
    isActive: testimonial?.isActive ?? true,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = testimonial 
        ? `/api/admin/testimonials/${testimonial._id}`
        : '/api/admin/testimonials';
      
      const method = testimonial ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
      }
    } catch (error) {
      console.error('Error saving testimonial:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">
            {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IconX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relation *
            </label>
            <select
              required
              value={formData.relation}
              onChange={(e) => setFormData({ ...formData, relation: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Parent">Parent</option>
              <option value="Student">Student</option>
              <option value="Alumni">Alumni</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Testimonial Content *
            </label>
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating *
            </label>
            <select
              required
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[1, 2, 3, 4, 5].map(rating => (
                <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo URL (Optional)
            </label>
            <input
              type="url"
              value={formData.photo}
              onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://example.com/photo.jpg"
            />
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
              disabled={saving}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
