'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  IconEdit, 
  IconLoader,
  IconCheck,
  IconX,
  IconSchool,
  IconMail,
  IconPhone
} from '@tabler/icons-react';

interface Teacher {
  _id: string;
  name: string;
  designation: string;
  subjects: string[];
  experience: string;
  photo: string;
  photoPublicId?: string;
  specialization: string;
  qualifications: string[];
  isActive: boolean;
  bio?: string;
  phone?: string;
  email?: string;
  joinedDate?: string;
  achievements?: string[];
  order?: number;
  createdAt: string;
}

export default function TeachersList() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('/api/management/teachers');
      const data = await response.json();

      if (response.ok) {
        setTeachers(data);
      } else {
        setError(data.error || 'Failed to fetch teachers');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = async (teacherId: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/management/teachers/${teacherId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (response.ok) {
        setTeachers(teachers.map(teacher => 
          teacher._id === teacherId ? { ...teacher, isActive: !isActive } : teacher
        ));
      }
    } catch {
      setError('Failed to update teacher status');
    }
  };

  const getDesignationColor = (designation: string) => {
    switch (designation) {
      case 'Principal':
        return 'bg-purple-100 text-purple-800';
      case 'Headmaster':
        return 'bg-blue-100 text-blue-800';
      case 'Teacher':
        return 'bg-green-100 text-green-800';
      case 'Assistant Teacher':
        return 'bg-yellow-100 text-yellow-800';
      case 'Sports Teacher':
        return 'bg-orange-100 text-orange-800';
      case 'Music Teacher':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
          <span className="ml-2 text-gray-600">Loading teachers...</span>
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
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Teachers</h2>
      
      {teachers.length === 0 ? (
        <div className="text-center py-8">
          <IconSchool size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No teachers found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher._id}
              className={`p-6 rounded-xl border ${
                teacher.isActive ? 'border-gray-200 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
              }`}
            >
              {/* Teacher Photo */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={teacher.photo || '/dummyuser.jpeg'}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDesignationColor(teacher.designation)}`}>
                    {teacher.designation}
                  </span>
                </div>
              </div>

              {/* Teacher Details */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Subjects</p>
                  <div className="flex flex-wrap gap-1">
                    {teacher.subjects.map((subject, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Experience: <span className="font-medium">{teacher.experience}</span></p>
                  <p className="text-sm text-gray-600">Specialization: <span className="font-medium">{teacher.specialization}</span></p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Qualifications</p>
                  <div className="flex flex-wrap gap-1">
                    {teacher.qualifications.map((qual, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                {(teacher.email || teacher.phone) && (
                  <div className="pt-3 border-t border-gray-200">
                    {teacher.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <IconMail size={14} />
                        <span>{teacher.email}</span>
                      </div>
                    )}
                    {teacher.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <IconPhone size={14} />
                        <span>{teacher.phone}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Bio */}
                {teacher.bio && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600 line-clamp-3">{teacher.bio}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  {teacher.isActive ? (
                    <div className="flex items-center gap-1 text-green-600">
                      <IconCheck size={14} />
                      <span className="text-xs">Active</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-600">
                      <IconX size={14} />
                      <span className="text-xs">Inactive</span>
                    </div>
                  )}
                  <span className="text-gray-400 text-xs">•</span>
                  <span className="text-xs text-gray-500">
                    Added {formatDate(teacher.createdAt)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleActive(teacher._id, teacher.isActive)}
                    className={`px-2 py-1 text-xs rounded-full ${
                      teacher.isActive
                        ? 'bg-red-100 text-red-800 hover:bg-red-200'
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    {teacher.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                    <IconEdit size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
