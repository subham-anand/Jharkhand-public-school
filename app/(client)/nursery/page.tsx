import React from 'react'
import CTAButton from '@/components/ui/cta-button'
import { 
  IconUsers,
  IconHeart,
  IconStar,
  IconClock,
  IconBook,
  IconPalette,
  IconRun,
  IconCheck
} from '@tabler/icons-react'

export const metadata = {
  title: "Nursery Program | Jharkhand Public School",
  description: "Comprehensive nursery program for 3-5 year olds at Jharkhand Public School. Play-based learning, creative activities, and foundation building."
}

export default function NurseryPage() {
  const ageGroups = [
    {
      name: "Nursery",
      age: "3-4 years",
      duration: "Half Day (3 hours)",
      capacity: "15 students per class",
      focus: "Play-based Learning & Social Skills"
    },
    {
      name: "LKG (Lower KG)",
      age: "4-5 years", 
      duration: "Half Day (4 hours)",
      capacity: "20 students per class",
      focus: "Pre-Reading & Number Recognition"
    },
    {
      name: "UKG (Upper KG)",
      age: "5-6 years",
      duration: "Full Day (5 hours)",
      capacity: "25 students per class", 
      focus: "School Readiness & Foundation Skills"
    }
  ]

  const activities = [
    {
      icon: <IconBook size={24} />,
      title: "Story Time",
      description: "Interactive storytelling sessions to develop language skills and imagination",
      color: "blue"
    },
    {
      icon: <IconPalette size={24} />,
      title: "Arts & Crafts", 
      description: "Creative activities to enhance fine motor skills and artistic expression",
      color: "purple"
    },
    {
      icon: <IconRun size={24} />,
      title: "Physical Play",
      description: "Outdoor games and activities for gross motor development and fitness",
      color: "green"
    },
    {
      icon: <IconUsers size={24} />,
      title: "Group Activities",
      description: "Collaborative games and projects to build social and teamwork skills",
      color: "orange"
    },
    {
      icon: <IconStar size={24} />,
      title: "Show & Tell",
      description: "Confidence building through presentations and sharing experiences",
      color: "teal"
    },
    {
      icon: <IconHeart size={24} />,
      title: "Value Education",
      description: "Teaching moral values, kindness, and good habits through stories",
      color: "pink"
    }
  ]

  const curriculum = [
    {
      subject: "Language Development",
      topics: ["Hindi Alphabets", "English Rhymes", "Vocabulary Building", "Listening Skills"]
    },
    {
      subject: "Number Concepts", 
      topics: ["Number Recognition 1-20", "Counting", "Shapes & Patterns", "Size Comparison"]
    },
    {
      subject: "Environmental Awareness",
      topics: ["My Family", "Animals & Birds", "Fruits & Vegetables", "Community Helpers"]
    },
    {
      subject: "Creative Arts",
      topics: ["Drawing & Coloring", "Paper Crafts", "Clay Modeling", "Music & Dance"]
    },
    {
      subject: "Life Skills",
      topics: ["Personal Hygiene", "Table Manners", "Sharing & Caring", "Following Instructions"]
    }
  ]

  const features = [
    "Child-friendly infrastructure with colorful classrooms",
    "Qualified and trained nursery teachers", 
    "Safe and secure play areas",
    "Age-appropriate learning materials and toys",
    "Regular parent-teacher interactions",
    "Nutritious mid-day snacks",
    "Medical check-ups and health monitoring",
    "Transportation facility available"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconHeart size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Nursery Program</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A nurturing environment where young minds begin their educational journey through play, creativity, and love
          </p>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Age Groups & Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully structured programs for different age groups to ensure optimal development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{group.name}</h3>
                  <p className="text-blue-100">{group.age}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <IconClock className="text-blue-500" size={20} />
                    <span className="text-gray-700">{group.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IconUsers className="text-teal-500" size={20} />
                    <span className="text-gray-700">{group.capacity}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Primary Focus</h4>
                    <p className="text-gray-600">{group.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fun and engaging activities designed to promote learning through play
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-${activity.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <span className={`text-${activity.color}-600`}>{activity.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of early childhood development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {curriculum.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <IconBook className="text-blue-600" size={24} />
                  {subject.subject}
                </h3>
                <ul className="space-y-2">
                  {subject.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                      <IconCheck size={16} className="text-green-500 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we provide to ensure your child&apos;s comfort, safety, and development
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <IconCheck className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Schedule</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A well-structured day that balances learning, play, and rest
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 text-center">
              <h3 className="text-xl font-bold">Sample Daily Routine (UKG)</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { time: "8:00 - 8:30 AM", activity: "Welcome & Free Play" },
                  { time: "8:30 - 9:00 AM", activity: "Circle Time & Prayer" },
                  { time: "9:00 - 9:30 AM", activity: "Language Activities" },
                  { time: "9:30 - 10:00 AM", activity: "Number Concepts" },
                  { time: "10:00 - 10:15 AM", activity: "Snack Time" },
                  { time: "10:15 - 10:45 AM", activity: "Creative Arts" },
                  { time: "10:45 - 11:15 AM", activity: "Outdoor Play" },
                  { time: "11:15 - 11:45 AM", activity: "Story Time" },
                  { time: "11:45 - 12:00 PM", activity: "Review & Goodbye" }
                ].map((slot, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-blue-600">{slot.time}</span>
                    <span className="text-gray-700">{slot.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Give Your Child the Best Start
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our nurturing community where every child is valued and supported
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/Admission" variant="secondary">
              Apply for Nursery
            </CTAButton>
            <CTAButton href="/contact" variant="outline">
              Schedule Visit
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
