import React from 'react';
import ContentList from './_components/ContentList';
import AddContentForm from './_components/AddContentForm';

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Manage website content, pages, and announcements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <AddContentForm />
        </div>
        <div className="lg:col-span-1">
          <ContentList />
        </div>
      </div>
    </div>
  );
}
