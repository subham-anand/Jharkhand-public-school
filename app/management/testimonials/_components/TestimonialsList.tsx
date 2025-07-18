'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconTrash, IconStar, IconCheck, IconX } from '@tabler/icons-react';

interface Testimonial {
  _id: string;
  name: string;
  email: string;
  relationship: string;
  rating: number;
  message: string;
  photo?: string;
  isApproved: boolean;
  createdAt: string;
}

export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/management/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprovalToggle = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/management/testimonials/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isApproved: !currentStatus,
        }),
      });

      if (response.ok) {
        setTestimonials(testimonials.map(testimonial => 
          testimonial._id === id 
            ? { ...testimonial, isApproved: !currentStatus }
            : testimonial
        ));
      }
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      try {
        const response = await fetch(`/api/management/testimonials/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setTestimonials(testimonials.filter(testimonial => testimonial._id !== id));
        }
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      }
    }
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === 'approved') return testimonial.isApproved;
    if (filter === 'pending') return !testimonial.isApproved;
    return true;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <IconStar
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Testimonials List</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'all'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({testimonials.length})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'approved'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Approved ({testimonials.filter(t => t.isApproved).length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'pending'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Pending ({testimonials.filter(t => !t.isApproved).length})
          </button>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredTestimonials.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No testimonials found.
          </div>
        ) : (
          filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className={`border border-gray-200 rounded-lg p-4 ${
                testimonial.isApproved ? 'bg-green-50' : 'bg-orange-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {testimonial.photo && (
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                      <span className="text-sm text-gray-500">({testimonial.relationship})</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                      {testimonial.message}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-gray-500">
                        {new Date(testimonial.createdAt).toLocaleDateString()}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        testimonial.isApproved
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {testimonial.isApproved ? 'Approved' : 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleApprovalToggle(testimonial._id, testimonial.isApproved)}
                    className={`p-1 rounded-md ${
                      testimonial.isApproved
                        ? 'text-orange-600 hover:bg-orange-100'
                        : 'text-green-600 hover:bg-green-100'
                    }`}
                    title={testimonial.isApproved ? 'Unapprove' : 'Approve'}
                  >
                    {testimonial.isApproved ? <IconX size={16} /> : <IconCheck size={16} />}
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded-md"
                    title="Delete"
                  >
                    <IconTrash size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
