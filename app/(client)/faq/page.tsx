import React from 'react'
import { 
  IconQuestionMark,
  IconSchool,
  IconClock,
  IconCurrency,
  IconBook,
  IconBus,
  IconPhone
} from '@tabler/icons-react'

export const metadata = {
  title: "FAQ | Jharkhand Public School",
  description: "Frequently asked questions about admissions, fees, curriculum, and facilities at Jharkhand Public School, Barharwa."
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Admissions",
      icon: <IconSchool size={24} />,
      color: "blue",
      faqs: [
        {
          question: "What is the admission process?",
          answer: "Admission process includes filling the application form, document verification, and interaction with the child. No entrance exam is required for nursery to class 8."
        },
        {
          question: "What is the minimum age for admission?",
          answer: "Minimum age for Nursery is 3 years, LKG is 4 years, and UKG is 5 years as of March 31st of the admission year."
        },
        {
          question: "When do admissions open?",
          answer: "Admissions typically open in January for the next academic session starting in April. We recommend applying early as seats are limited."
        },
        {
          question: "What documents are required?",
          answer: "Birth certificate, address proof, parent&apos;s ID proof, previous school transfer certificate (if applicable), and recent passport-size photographs."
        }
      ]
    },
    {
      title: "Fees & Payments",
      icon: <IconCurrency size={24} />,
      color: "green",
      faqs: [
        {
          question: "What is the fee structure?",
          answer: "Fee varies by class level. Please contact our office or visit the fee structure page for detailed information about tuition and additional charges."
        },
        {
          question: "Are there any scholarships available?",
          answer: "Yes, we offer merit-based scholarships and financial assistance for economically disadvantaged students. Contact our office for eligibility criteria."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept cash, bank transfer, online payments, and demand drafts. Monthly, quarterly, and annual payment options are available."
        },
        {
          question: "Is there a refund policy?",
          answer: "Refund policies vary based on circumstances. Please refer to our terms and conditions or contact the office for specific cases."
        }
      ]
    },
    {
      title: "Academics",
      icon: <IconBook size={24} />,
      color: "purple",
      faqs: [
        {
          question: "Which board does the school follow?",
          answer: "We follow the Jharkhand Academic Council (JAC) board curriculum, ensuring alignment with state education standards."
        },
        {
          question: "What is the medium of instruction?",
          answer: "Primary medium of instruction is Hindi, with English taught as a subject to ensure bilingual competency."
        },
        {
          question: "What are the class timings?",
          answer: "Regular classes: 8:00 AM to 2:00 PM (Monday to Saturday). Nursery programs have shorter durations based on age groups."
        },
        {
          question: "How many students are there per class?",
          answer: "We maintain optimal class sizes - 15 students for Nursery, 20 for LKG, and 25-30 for higher classes to ensure individual attention."
        }
      ]
    },
    {
      title: "Facilities",
      icon: <IconBus size={24} />,
      color: "orange",
      faqs: [
        {
          question: "Is transportation available?",
          answer: "Yes, we provide safe school bus transportation covering various routes in Barharwa and nearby areas. GPS tracking available."
        },
        {
          question: "What safety measures are in place?",
          answer: "CCTV monitoring, trained security personnel, safe building infrastructure, first aid facilities, and regular safety drills."
        },
        {
          question: "Are meals provided?",
          answer: "We provide nutritious mid-day snacks for nursery students. Students can also bring home-cooked meals in lunch boxes."
        },
        {
          question: "What extra-curricular activities are offered?",
          answer: "Sports, arts and crafts, music, dance, storytelling, and various cultural activities to promote holistic development."
        }
      ]
    }
  ]

  const quickAnswers = [
    {
      question: "School Timings",
      answer: "8:00 AM - 2:00 PM (Mon-Sat)",
      icon: <IconClock size={20} />
    },
    {
      question: "Contact Number",
      answer: "+91 8541061847",
      icon: <IconPhone size={20} />
    },
    {
      question: "Classes Offered",
      answer: "Nursery to Class 8",
      icon: <IconSchool size={20} />
    },
    {
      question: "Medium",
      answer: "Hindi (English as subject)",
      icon: <IconBook size={20} />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconQuestionMark size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about Jharkhand Public School - admissions, academics, facilities, and more
          </p>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Answers</h2>
            <p className="text-gray-600">Essential information at a glance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAnswers.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed FAQs</h2>
            <p className="text-gray-600">Browse questions by category</p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Category Header */}
                <div className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 text-white p-6`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="p-6">
                  <div className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                          <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-sm font-bold">Q</span>
                          </span>
                          {faq.question}
                        </h4>
                        <div className="ml-8">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+918541061847"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">More Information</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore other resources to learn more about our school
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="/AboutUs"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              About Us
            </a>
            <a
              href="/Admission"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              Admissions
            </a>
            <a
              href="/curriculum"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              Curriculum
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
