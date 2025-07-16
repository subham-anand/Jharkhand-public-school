import React from 'react'
import CTAButton from '@/components/ui/cta-button'
import { 
  IconBook,
  IconSchool,
  IconUsers,
  IconBulb,
  IconPalette,
  IconCalculator,
  IconLanguage,
  IconMicrophone,
  IconStar,
  IconCheck
} from '@tabler/icons-react'

export const metadata = {
  title: "Curriculum | Jharkhand Public School",
  description: "Comprehensive curriculum at Jharkhand Public School following JAC Board guidelines for Nursery to Class 8 students."
}

export default function CurriculumPage() {
  const subjects = [
    {
      icon: <IconLanguage size={24} />,
      name: "Hindi Language",
      description: "Primary language instruction following JAC Board curriculum",
      color: "blue"
    },
    {
      icon: <IconBook size={24} />,
      name: "English",
      description: "Essential English communication and literature skills",
      color: "teal"
    },
    {
      icon: <IconCalculator size={24} />,
      name: "Mathematics",
      description: "Foundation mathematics and problem-solving skills",
      color: "purple"
    },
    {
      icon: <IconBulb size={24} />,
      name: "Science",
      description: "Basic science concepts and practical learning",
      color: "green"
    },
    {
      icon: <IconUsers size={24} />,
      name: "Social Studies",
      description: "History, geography, and civic understanding",
      color: "orange"
    },
    {
      icon: <IconPalette size={24} />,
      name: "Arts & Crafts",
      description: "Creative expression and artistic development",
      color: "pink"
    }
  ]

  const classLevels = [
    {
      level: "Nursery - LKG",
      age: "3-4 years",
      focus: "Play-based Learning",
      subjects: ["Basic Hindi", "English Rhymes", "Number Recognition", "Drawing", "Physical Activities"],
      highlights: ["Fun Learning Environment", "Creative Activities", "Social Interaction"]
    },
    {
      level: "UKG - Class 1",
      age: "4-6 years",
      focus: "Foundation Building",
      subjects: ["Hindi Reading", "English Alphabet", "Basic Math", "Environmental Studies", "Art"],
      highlights: ["Reading Readiness", "Writing Skills", "Number Concepts"]
    },
    {
      level: "Class 2 - Class 5",
      age: "6-10 years",
      focus: "Core Learning",
      subjects: ["Hindi", "English", "Mathematics", "Science", "Social Studies", "Computer Basics"],
      highlights: ["Academic Foundation", "Critical Thinking", "Project Work"]
    },
    {
      level: "Class 6 - Class 8",
      age: "10-14 years",
      focus: "Advanced Learning",
      subjects: ["Hindi Literature", "English Grammar", "Advanced Math", "Physics", "Chemistry", "Biology", "History", "Geography"],
      highlights: ["JAC Board Preparation", "Competitive Exam Foundation", "Leadership Skills"]
    }
  ]

  const features = [
    {
      icon: <IconBook size={24} />,
      title: "JAC Board Aligned",
      description: "Curriculum follows Jharkhand Academic Council guidelines ensuring state board compatibility"
    },
    {
      icon: <IconLanguage size={24} />,
      title: "Hindi Medium",
      description: "Primary instruction in Hindi with strong English foundation for bilingual competency"
    },
    {
      icon: <IconBulb size={24} />,
      title: "Practical Learning",
      description: "Hands-on activities, experiments, and real-world applications of concepts"
    },
    {
      icon: <IconUsers size={24} />,
      title: "Small Class Sizes",
      description: "Individual attention with optimal teacher-student ratio for personalized learning"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconSchool size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Our Curriculum</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive education program following JAC Board guidelines, designed to nurture young minds from Nursery to Class 8
          </p>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our curriculum is designed to provide a strong foundation while fostering creativity and critical thinking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Subjects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Well-rounded education covering essential subjects for holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-${subject.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <span className={`text-${subject.color}-600`}>{subject.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{subject.name}</h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class-wise Curriculum */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Class-wise Learning Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Progressive curriculum designed for age-appropriate learning from Nursery to Class 8
            </p>
          </div>

          <div className="space-y-8">
            {classLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="lg:flex">
                  {/* Level Info */}
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-teal-600 text-white p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                        <p className="text-blue-100">Age: {level.age}</p>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Focus Area</h4>
                        <p className="text-blue-100">{level.focus}</p>
                      </div>
                    </div>
                  </div>

                  {/* Subjects & Highlights */}
                  <div className="lg:w-2/3 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Subjects */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <IconBook size={20} className="text-blue-600" />
                          Core Subjects
                        </h4>
                        <ul className="space-y-2">
                          {level.subjects.map((subject, subIndex) => (
                            <li key={subIndex} className="flex items-center gap-2 text-gray-600">
                              <IconCheck size={16} className="text-green-500 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <IconStar size={20} className="text-orange-600" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {level.highlights.map((highlight, hlIndex) => (
                            <li key={hlIndex} className="flex items-center gap-2 text-gray-600">
                              <IconCheck size={16} className="text-green-500 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Methods</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive evaluation system to track student progress and development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <IconMicrophone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Continuous Assessment</h3>
              <p className="text-gray-600 text-center">
                Regular class tests, assignments, and projects to monitor ongoing progress
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <IconBook className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Term Examinations</h3>
              <p className="text-gray-600 text-center">
                Formal examinations aligned with JAC Board patterns for thorough evaluation
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <IconStar className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Holistic Development</h3>
              <p className="text-gray-600 text-center">
                Assessment of co-curricular activities, behavior, and overall personality development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Learning Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Give your child the best foundation for their educational journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/Admission" variant="secondary">
              Start Admission Process
            </CTAButton>
            <CTAButton href="/contact" variant="outline">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
