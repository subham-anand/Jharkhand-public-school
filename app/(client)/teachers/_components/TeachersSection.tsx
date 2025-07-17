import React from 'react'
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
  IconHeart,
  IconSparkles,
  IconCertificate
} from '@tabler/icons-react'
import Image from 'next/image'
import { teachersData, getTotalTeachers, getTotalExperience, type Teacher } from '@/utils/teachersData'

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
    default:
      return 'from-gray-600 to-gray-700'
  }
}

// Teacher Card Component
const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Card Header with Photo */}
      <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 p-6 pb-0">
        <div className="flex flex-col items-center">
          {/* Profile Photo */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
              <Image
                src={teacher.photo}
                alt={`${teacher.name} - ${teacher.designation}`}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Designation Badge */}
            <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${getDesignationColor(teacher.designation)} text-white px-3 py-1 rounded-full shadow-lg`}>
              <div className="flex items-center gap-1">
                <IconSchool size={12} />
                <span className="text-xs font-medium">{teacher.designation}</span>
              </div>
            </div>
          </div>
          
          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
            {teacher.name}
          </h3>
          
          {/* Specialization */}
          <p className="text-sm text-gray-600 text-center mb-4">
            {teacher.specialization}
          </p>
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-6">
        {/* Subjects */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <IconBook size={16} />
            Subject(s)
          </h4>
          <div className="flex flex-wrap gap-2">
            {teacher.subjects.map((subject: string, index: number) => (
              <div key={index} className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {getSubjectIcon(subject)}
                <span>{subject}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Experience & Qualifications */}
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-2">
            <IconAward size={16} className="text-orange-500" />
            <span className="text-sm text-gray-600">
              <span className="font-medium">Experience:</span> {teacher.experience}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <IconCertificate size={16} className="text-green-500" />
            <span className="text-sm text-gray-600">
              <span className="font-medium">Qualifications:</span> {teacher.qualifications.join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeachersSection() {
  const totalTeachers = getTotalTeachers()
  const totalExperience = getTotalExperience()
  
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-xl shadow-lg">
              <IconUser size={32} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Faculty</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">👨‍🏫 Meet Our</span>
            <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
              Dedicated Teachers
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our qualified and experienced faculty members are committed to providing quality education 
            and nurturing young minds from Nursery to Class 8 with JAC Board curriculum.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconUser size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{totalTeachers}</div>
            <div className="text-gray-600">Total Faculty Members</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconAward size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{totalExperience}+</div>
            <div className="text-gray-600">Years of Combined Experience</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconCertificate size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Qualified Teachers</div>
          </div>
        </div>

        {/* Principal Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
              <IconMedal size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Principal</h2>
              <p className="text-gray-600">Educational Leadership</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachersData.principal.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>

        {/* Headmaster Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg">
              <IconStar size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Headmaster</h2>
              <p className="text-gray-600">Academic Administration</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachersData.headmaster.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>

        {/* Teachers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl shadow-lg">
              <IconBook size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Teaching Faculty</h2>
              <p className="text-gray-600">Subject Matter Experts</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachersData.teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <IconSparkles size={32} className="text-yellow-300" />
              <IconHeart size={32} className="text-red-300" />
              <IconSparkles size={32} className="text-yellow-300" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Excellence in Education
            </h2>
            
            <p className="text-blue-100 text-lg mb-6">
              Our dedicated faculty combines years of experience with modern teaching methods 
              to ensure every student receives the best education possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/Admission" 
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Apply for Admission
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
