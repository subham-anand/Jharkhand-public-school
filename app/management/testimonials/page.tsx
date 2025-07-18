import React from 'react';
import TestimonialsList from './_components/TestimonialsList';
import AddTestimonialForm from './_components/AddTestimonialForm';

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Testimonials Management</h1>
          <p className="text-gray-600">Manage parent and student testimonials</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <AddTestimonialForm />
        </div>
        <div className="lg:col-span-1">
          <TestimonialsList />
        </div>
      </div>
    </div>
  );
}
