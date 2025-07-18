'use client';

import React, { useState, useEffect } from 'react';
import { IconMail, IconPhone, IconUser, IconCalendar, IconTrash, IconCheck } from '@tabler/icons-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function ContactsList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/management/contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/management/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isRead: true }),
      });

      if (response.ok) {
        setContacts(contacts.map(contact => 
          contact._id === id 
            ? { ...contact, isRead: true }
            : contact
        ));
      }
    } catch (error) {
      console.error('Error marking contact as read:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact message?')) {
      try {
        const response = await fetch(`/api/management/contacts/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setContacts(contacts.filter(contact => contact._id !== id));
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const filteredContacts = contacts.filter(contact => {
    if (filter === 'read') return contact.isRead;
    if (filter === 'unread') return !contact.isRead;
    return true;
  });

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
        <h2 className="text-xl font-semibold text-gray-900">Contact Messages</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'all'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({contacts.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'unread'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Unread ({contacts.filter(c => !c.isRead).length})
          </button>
          <button
            onClick={() => setFilter('read')}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === 'read'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Read ({contacts.filter(c => c.isRead).length})
          </button>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredContacts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No contact messages found.
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <div
              key={contact._id}
              className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-colors ${
                contact.isRead ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'
              }`}
              onClick={() => setSelectedContact(contact)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <IconUser size={16} className="text-gray-500" />
                    <h3 className={`font-medium ${contact.isRead ? 'text-gray-900' : 'text-blue-900'}`}>
                      {contact.name}
                    </h3>
                    {!contact.isRead && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <IconMail size={14} />
                      {contact.email}
                    </span>
                    {contact.phone && (
                      <span className="flex items-center gap-1">
                        <IconPhone size={14} />
                        {contact.phone}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {contact.subject}
                  </p>
                  
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {contact.message}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <IconCalendar size={12} />
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {!contact.isRead && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkAsRead(contact._id);
                      }}
                      className="p-1 text-blue-600 hover:bg-blue-100 rounded-md"
                      title="Mark as read"
                    >
                      <IconCheck size={16} />
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(contact._id);
                    }}
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

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{selectedContact.name}</h3>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-sm text-gray-900">{selectedContact.email}</p>
                </div>
                {selectedContact.phone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-sm text-gray-900">{selectedContact.phone}</p>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <p className="text-sm text-gray-900">{selectedContact.subject}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">
                    {selectedContact.message}
                  </p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <p className="text-sm text-gray-900">
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              {!selectedContact.isRead && (
                <button
                  onClick={() => {
                    handleMarkAsRead(selectedContact._id);
                    setSelectedContact(null);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Mark as Read
                </button>
              )}
              <button
                onClick={() => setSelectedContact(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
