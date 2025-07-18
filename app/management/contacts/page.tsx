import React from 'react';
import ContactsList from './_components/ContactsList';

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600">Manage inquiries and contact form submissions</p>
        </div>
      </div>

      <ContactsList />
    </div>
  );
}
