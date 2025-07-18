'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  IconEdit, 
  IconTrash, 
  IconLoader, 
  IconCheck, 
  IconAlertCircle,
  IconX,
  IconPhone,
  IconMail,
  IconSchool,
  IconCertificate,
  IconTrophy,
  IconUser,
  IconRefresh
} from '@tabler/icons-react';
import EditTeacherForm from './EditTeacherForm';

interface Teacher {
  _id: string;
  name: string;
  designation: string;
  subjects: string[];
  experience: string;
  specialization: string;
  qualifications: string[];
  bio: string;
  phone: string;
  email: string;
  achievements: string[];
  photo: string;
  photoPublicId: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function TeachersList() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  const fetchTeachers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/management/teachers');
      
      if (response.ok) {
        const data = await response.json();
        setTeachers(data);
      } else {
        setError('Failed to fetch teachers');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error fetching teachers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTeacher = async (teacherId: string) => {
    if (!confirm('Are you sure you want to delete this teacher?')) {
      return;
    }

    try {
      setIsDeleting(teacherId);
      const response = await fetch(`/api/management/teachers/${teacherId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Teacher deleted successfully!');
        setTeachers(teachers.filter(teacher => teacher._id !== teacherId));
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to delete teacher');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error deleting teacher:', error);
    } finally {
      setIsDeleting(null);
    }
  };

  const handleEditSuccess = () => {
    setMessage('Teacher updated successfully!');
    fetchTeachers(); // Refresh the list
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // Clear messages after 5 seconds
  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage('');
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

  const getDesignationIcon = (designation: string) => {
    switch (designation.toLowerCase()) {
      case 'principal':
      case 'headmaster':
        return <IconSchool size={16} className="text-blue-600" />;
      case 'sports teacher':
        return <IconTrophy size={16} className="text-orange-600" />;
      default:
        return <IconUser size={16} className="text-gray-600" />;
    }
  };

  const getDesignationColor = (designation: string) => {
    switch (designation.toLowerCase()) {
      case 'principal':
        return 'bg-blue-100 text-blue-800';
      case 'headmaster':
        return 'bg-purple-100 text-purple-800';
      case 'sports teacher':
        return 'bg-orange-100 text-orange-800';
      case 'music teacher':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3">
          <IconLoader size={20} className="animate-spin text-emerald-600" />
          <span className="text-gray-600">Loading teachers...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Success/Error Messages */}
      {(message || error) && (
        <div className={`p-4 rounded-xl border transition-all duration-300 ${
          message 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center gap-3">
            {message ? (
              <IconCheck size={20} className="text-green-600" />
            ) : (
              <IconAlertCircle size={20} className="text-red-600" />
            )}
            <p className={`text-sm font-medium ${
              message ? 'text-green-800' : 'text-red-800'
            }`}>
              {message || error}
            </p>
            <button
              onClick={() => { setMessage(''); setError(''); }}
              className={`ml-auto p-1 rounded-lg transition-colors ${
                message 
                  ? 'text-green-600 hover:bg-green-100' 
                  : 'text-red-600 hover:bg-red-100'
              }`}
            >
              <IconX size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-900">Teachers ({teachers.length})</h3>
          <button
            onClick={fetchTeachers}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            title="Refresh"
          >
            <IconRefresh size={18} />
          </button>
        </div>
      </div>

      {/* Teachers List */}
      {teachers.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconUser size={24} className="text-gray-400" />
          </div>
          <p className="text-gray-500 text-lg font-medium">No teachers found</p>
          <p className="text-gray-400 text-sm mt-1">Add your first teacher to get started</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {teachers.map((teacher) => (
            <div key={teacher._id} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-4">
                {/* Profile Photo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                    {teacher.photo && teacher.photo !== '/dummyuser.jpeg' ? (
                      <Image
                        src={teacher.photo}
                        alt={teacher.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/dummyuser.jpeg';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <IconUser size={24} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-lg">{teacher.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {getDesignationIcon(teacher.designation)}
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDesignationColor(teacher.designation)}`}>
                          {teacher.designation}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => setEditingTeacher(teacher)}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit teacher"
                      >
                        <IconEdit size={16} />
                      </button>
                      <button
                        onClick={() => deleteTeacher(teacher._id)}
                        disabled={isDeleting === teacher._id}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Delete teacher"
                      >
                        {isDeleting === teacher._id ? (
                          <IconLoader size={16} className="animate-spin" />
                        ) : (
                          <IconTrash size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Experience & Specialization */}
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <IconCertificate size={14} />
                      {teacher.experience}
                    </span>
                    {teacher.specialization && (
                      <span>• {teacher.specialization}</span>
                    )}
                  </div>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {teacher.subjects.map((subject, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800">
                        {subject}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                    {teacher.phone && (
                      <span className="flex items-center gap-1">
                        <IconPhone size={14} />
                        {teacher.phone}
                      </span>
                    )}
                    {teacher.email && (
                      <span className="flex items-center gap-1">
                        <IconMail size={14} />
                        {teacher.email}
                      </span>
                    )}
                  </div>

                  {/* Bio */}
                  {teacher.bio && (
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {teacher.bio}
                    </p>
                  )}

                  {/* Qualifications */}
                  {teacher.qualifications.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 font-medium">Qualifications:</p>
                      <p className="text-sm text-gray-600">
                        {teacher.qualifications.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* Achievements */}
                  {teacher.achievements.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 font-medium">Achievements:</p>
                      <p className="text-sm text-gray-600">
                        {teacher.achievements.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Edit Teacher Form Modal */}
      {editingTeacher && (
        <EditTeacherForm
          teacher={editingTeacher}
          onClose={() => setEditingTeacher(null)}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
}
