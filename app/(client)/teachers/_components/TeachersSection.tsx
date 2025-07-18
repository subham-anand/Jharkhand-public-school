'use client';

import React, { useState, useEffect } from 'react'
import { 
  IconSchool, 
  IconUser, 
  IconMedal, 
  IconAward,
  IconBook,
  IconMath,
  IconLanguage,
  IconWorld,
  IconAtom,
  IconStar,
  IconSparkles,
  IconCertificate,
  IconLoader,
  IconAlertCircle
} from '@tabler/icons-react'
import Image from 'next/image'

// Database Teacher interface
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
  isActive: boolean;
  order: number;
}

// Helper function to get subject icons
const getSubjectIcon = (subject: string) => {
  switch (subject.toLowerCase()) {
    case 'mathematics':
    case 'math':
      return <IconMath size={16} />
    case 'science':
      return <IconAtom size={16} />
    case 'english':
      return <IconLanguage size={16} />
    case 'hindi':
      return <IconBook size={16} />
    case 'social studies':
    case 'sst':
      return <IconWorld size={16} />
    case 'all subjects':
      return <IconUser size={16} />
    default:
      return <IconBook size={16} />
  }
}

// Helper function to get designation color
const getDesignationColor = (designation: string) => {
  switch (designation.toLowerCase()) {
    case 'principal':
      return 'from-purple-600 to-indigo-600'
    case 'headmaster':
      return 'from-blue-600 to-teal-600'
    case 'teacher':
      return 'from-teal-600 to-green-600'
    case 'assistant teacher':
      return 'from-green-600 to-emerald-600'
    case 'sports teacher':
      return 'from-orange-600 to-red-600'
    case 'music teacher':
      return 'from-pink-600 to-purple-600'
    default:
      return 'from-gray-600 to-gray-700'
  }
}

// Helper function to get experience number
const getExperienceNumber = (experience: string): number => {
  const match = experience.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
}

export default function TeachersSection() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch teachers from database
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('/api/teachers');
        if (response.ok) {
          const data = await response.json();
          setTeachers(data);
        } else {
          setError('Failed to load teachers');
        }
      } catch (error) {
        setError('Network error. Please try again.');
        console.error('Error fetching teachers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  // Calculate stats from database
  const totalTeachers = teachers.length;
  const totalExperience = teachers.reduce((sum, teacher) => sum + getExperienceNumber(teacher.experience), 0);

  // Group teachers by designation
  const groupedTeachers = teachers.reduce((acc, teacher) => {
    const designation = teacher.designation.toLowerCase();
    if (!acc[designation]) {
      acc[designation] = [];
    }
    acc[designation].push(teacher);
    return acc;
  }, {} as Record<string, Teacher[]>);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <IconLoader size={48} className="mx-auto text-blue-600 animate-spin mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Our Teachers</h2>
            <p className="text-gray-600">Please wait while we fetch the information...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <IconAlertCircle size={48} className="mx-auto text-red-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to Load Teachers</h2>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-6">
            <IconSchool className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Teachers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Dedicated educators committed to nurturing young minds and building bright futures
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalTeachers}</div>
              <div className="text-sm text-gray-600">Dedicated Teachers</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-teal-600 mb-2">{totalExperience}+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Qualified Staff</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Student Support</div>
            </div>
          </div>
        </div>

        {/* Teachers Sections */}
        <div className="space-y-16">
          {/* Principal Section */}
          {groupedTeachers.principal && groupedTeachers.principal.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-4">
                  <IconAward className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">School Leadership</h2>
                <p className="text-gray-600">Guiding our institution with vision and dedication</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedTeachers.principal.map((teacher) => (
                  <TeacherCard key={teacher._id} teacher={teacher} />
                ))}
              </div>
            </div>
          )}

          {/* Headmaster Section */}
          {groupedTeachers.headmaster && groupedTeachers.headmaster.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-4">
                  <IconMedal className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Academic Leadership</h2>
                <p className="text-gray-600">Ensuring excellence in education and student development</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedTeachers.headmaster.map((teacher) => (
                  <TeacherCard key={teacher._id} teacher={teacher} />
                ))}
              </div>
            </div>
          )}

          {/* Teachers Section */}
          {(groupedTeachers.teacher || groupedTeachers['assistant teacher'] || groupedTeachers['sports teacher'] || groupedTeachers['music teacher']) && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-full mb-4">
                  <IconUser className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Teaching Staff</h2>
                <p className="text-gray-600">Passionate educators shaping the future</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  ...(groupedTeachers.teacher || []),
                  ...(groupedTeachers['assistant teacher'] || []),
                  ...(groupedTeachers['sports teacher'] || []),
                  ...(groupedTeachers['music teacher'] || [])
                ].map((teacher) => (
                  <TeacherCard key={teacher._id} teacher={teacher} />
                ))}
              </div>
            </div>
          )}

          {/* No Teachers Message */}
          {teachers.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconUser size={32} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Teachers Found</h2>
              <p className="text-gray-600">Please check back later as we update our teaching staff information.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Teacher Card Component
function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src={teacher.photo || '/dummyuser.jpeg'}
            alt={teacher.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/dummyuser.jpeg';
            }}
          />
        </div>
        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r ${getDesignationColor(teacher.designation)} rounded-full text-white text-xs font-medium`}>
          {teacher.designation}
        </div>
      </div>

      {/* Teacher Info */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
        <p className="text-gray-600 mb-4">{teacher.experience} Experience</p>
        
        {/* Specialization */}
        {teacher.specialization && (
          <p className="text-sm text-gray-500 mb-4">{teacher.specialization}</p>
        )}
        
        {/* Subjects */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {teacher.subjects.slice(0, 3).map((subject, index) => (
            <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {getSubjectIcon(subject)}
              {subject}
            </span>
          ))}
          {teacher.subjects.length > 3 && (
            <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{teacher.subjects.length - 3} more
            </span>
          )}
        </div>

        {/* Qualifications */}
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {teacher.qualifications.map((qualification, index) => (
            <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs font-medium">
              <IconCertificate size={12} />
              {qualification}
            </span>
          ))}
        </div>

        {/* Bio */}
        {teacher.bio && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{teacher.bio}</p>
        )}

        {/* Achievements */}
        {teacher.achievements.length > 0 && (
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
              <IconStar size={12} />
              {teacher.achievements.length} Achievement{teacher.achievements.length > 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
          <IconSparkles size={14} className="text-white" />
        </div>
      </div>
    </div>
  )
}
