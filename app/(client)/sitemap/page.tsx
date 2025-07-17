import React from 'react';
import Link from 'next/link';
import { 
  IconHome, 
  IconSchool, 
  IconUsers, 
  IconPhoto, 
  IconPhone, 
  IconMail, 
  IconMapPin,
  IconCertificate,
  IconBook,
  IconAward,
  IconShieldCheck,
  IconHeartHandshake,
  IconBellRinging,
  IconFileText
} from '@tabler/icons-react';

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Website",
      icon: <IconHome className="w-6 h-6" />,
      description: "Primary website sections and homepage",
      pages: [
        {
          title: "Home",
          url: "/",
          description: "Main landing page with complete school overview",
          sections: ["Hero Section", "About Us", "Why Choose Us", "Admission Open", "Notice Board", "Gallery", "Testimonials", "Contact"]
        }
      ]
    },
    {
      category: "About & Information",
      icon: <IconSchool className="w-6 h-6" />,
      description: "School information and detailed sections",
      pages: [
        {
          title: "About Us",
          url: "/AboutUs",
          description: "Comprehensive school information, history, and mission",
          sections: ["School History", "Mission & Vision", "Faculty", "Infrastructure", "Achievements"]
        },
        {
          title: "Curriculum",
          url: "/curriculum", 
          description: "JAC Board curriculum and academic programs",
          sections: ["JAC Board Curriculum", "Subject Details", "Teaching Methodology", "Assessment"]
        },
        {
          title: "Activities",
          url: "/activities",
          description: "Extra-curricular activities and programs",
          sections: ["Sports", "Cultural Activities", "Creative Arts", "Competitions"]
        },
        {
          title: "Calendar",
          url: "/calendar",
          description: "Academic calendar and important dates",
          sections: ["Academic Year", "Holidays", "Events", "Exam Schedule"]
        },
        {
          title: "Safety",
          url: "/safety",
          description: "Student safety measures and protocols",
          sections: ["Safety Policies", "Emergency Procedures", "Health Protocols", "Security Measures"]
        },
        {
          title: "Teachers",
          url: "/teachers",
          description: "Meet our qualified and experienced faculty members",
          sections: ["Principal", "Headmaster", "Teaching Staff", "Faculty Qualifications"]
        }
      ]
    },
    {
      category: "Academic Programs",
      icon: <IconBook className="w-6 h-6" />,
      description: "Class-wise academic programs and details",
      pages: [
        {
          title: "Nursery Program",
          url: "/nursery",
          description: "Early childhood education program",
          sections: ["Age Group", "Curriculum", "Activities", "Development Focus"]
        },
        {
          title: "Primary Classes",
          url: "/primary",
          description: "Classes 1-5 academic program",
          sections: ["Curriculum", "Subjects", "Teaching Methods", "Assessment"]
        }
      ]
    },
    {
      category: "Admission & Enrollment",
      icon: <IconCertificate className="w-6 h-6" />,
      description: "Admission process and requirements",
      pages: [
        {
          title: "Admission",
          url: "/Admission",
          description: "Complete admission information and process",
          sections: ["Admission Process", "Application Form", "Required Documents", "Important Dates"]
        },
        {
          title: "Admission Requirements",
          url: "/admission-requirements",
          description: "Detailed admission criteria and eligibility",
          sections: ["Age Criteria", "Documents Required", "Entrance Process", "Selection Criteria"]
        },
        {
          title: "Fee Structure",
          url: "/fee-structure",
          description: "Detailed fee information and payment options",
          sections: ["Tuition Fees", "Additional Charges", "Payment Methods", "Fee Policies"]
        },
        {
          title: "Scholarship",
          url: "/scholarship",
          description: "Scholarship programs and financial assistance",
          sections: ["Merit Scholarships", "Need-based Aid", "Application Process", "Eligibility"]
        }
      ]
    },
    {
      category: "Services & Support",
      icon: <IconUsers className="w-6 h-6" />,
      description: "Student services and parent support",
      pages: [
        {
          title: "Transport",
          url: "/transport",
          description: "School transportation services and routes",
          sections: ["Bus Routes", "Timings", "Safety Features", "Transportation Fees"]
        },
        {
          title: "Parent Portal",
          url: "/parent-portal",
          description: "Online portal for parents and guardians",
          sections: ["Student Progress", "Attendance", "Fee Payment", "Communication"]
        },
        {
          title: "FAQ",
          url: "/faq",
          description: "Frequently asked questions and answers",
          sections: ["Admission FAQs", "Academic FAQs", "General Questions", "Contact Info"]
        }
      ]
    },
    {
      category: "Communication & Updates",
      icon: <IconBellRinging className="w-6 h-6" />,
      description: "School announcements and communication",
      pages: [
        {
          title: "Notice Board",
          url: "/#notice",
          description: "Latest announcements and important updates",
          sections: ["Current Notices", "Event Announcements", "Policy Updates", "Emergency Notices"]
        },
        {
          title: "Contact Us",
          url: "/contact",
          description: "Contact information and inquiry form",
          sections: ["Contact Details", "Location", "Inquiry Form", "Office Hours"]
        }
      ]
    },
    {
      category: "Gallery & Testimonials",
      icon: <IconPhoto className="w-6 h-6" />,
      description: "Visual showcase and community feedback",
      pages: [
        {
          title: "Image Gallery",
          url: "/gallery",
          description: "Photo gallery of school facilities, events, and activities",
          sections: ["Campus Photos", "Event Pictures", "Student Activities", "Facilities", "Achievements"]
        },
        {
          title: "Testimonials",
          url: "/#testimonials",
          description: "Parent and student feedback and experiences",
          sections: ["Parent Reviews", "Student Experiences", "Success Stories", "Community Feedback"]
        }
      ]
    },
    {
      category: "Resources & Documents",
      icon: <IconFileText className="w-6 h-6" />,
      description: "Important documents and resources",
      pages: [
        {
          title: "School Brochure",
          url: "/schoolBroucher",
          description: "Complete school brochure and information packet",
          sections: ["School Overview", "Academic Programs", "Facilities", "Admission Info"]
        },
        {
          title: "Sitemap",
          url: "/sitemap",
          description: "Complete website navigation and structure",
          sections: ["All Pages", "Site Structure", "Navigation Guide", "Quick Links"]
        }
      ]
    },
    {
      category: "Legal & Policies",
      icon: <IconShieldCheck className="w-6 h-6" />,
      description: "Legal documents and school policies",
      pages: [
        {
          title: "Privacy Policy",
          url: "/legal/PrivacyPolicy",
          description: "Data privacy and protection policies",
          sections: ["Data Collection", "Usage Policies", "Student Privacy", "Rights"]
        },
        {
          title: "Terms of Service",
          url: "/legal/TermsofService",
          description: "Website usage terms and service agreements",
          sections: ["Acceptable Use", "Educational Terms", "Liability", "Governing Law"]
        }
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate through all sections and services of Jharkhand Public School website. 
            Find everything you need about our educational programs, services, and resources.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
            <IconBook className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{siteStructure.reduce((acc, cat) => acc + cat.pages.length, 0)}</div>
            <div className="text-sm text-gray-600">Total Pages</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
            <IconUsers className="w-8 h-8 text-teal-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{siteStructure.length}</div>
            <div className="text-sm text-gray-600">Service Categories</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
            <IconCertificate className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">JAC</div>
            <div className="text-sm text-gray-600">Board Affiliation</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
            <IconAward className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">N-8</div>
            <div className="text-sm text-gray-600">Classes Offered</div>
          </div>
        </div>

        {/* Sitemap Structure */}
        <div className="space-y-8">
          {siteStructure.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg border p-6 lg:p-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Pages Grid */}
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {category.pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        <a 
                          href={page.url} 
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {page.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {page.description}
                      </p>
                      <div className="text-xs text-blue-600 font-medium mb-2">
                        URL: {page.url}
                      </div>
                    </div>
                    
                    {/* Sections */}
                    <div className="border-t pt-3">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Sections:</h4>
                      <div className="flex flex-wrap gap-1">
                        {page.sections.map((section, sectionIndex) => (
                          <span 
                            key={sectionIndex}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                          >
                            {section}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto">
            <IconHeartHandshake className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Ready to Join Jharkhand Public School?
            </h2>
            <p className="text-blue-100 mb-6">
              Explore our comprehensive educational programs from Nursery to Class 8. 
              JAC Board curriculum with Hindi medium instruction in a nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/Admission" 
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Apply for Admission
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <IconMail className="w-4 h-4" />
              <span>contact@jpsbarharwa.in</span>
            </div>
            <div className="flex items-center gap-2">
              <IconPhone className="w-4 h-4" />
              <span>+91 8541061847</span>
            </div>
            <div className="flex items-center gap-2">
              <IconMapPin className="w-4 h-4" />
              <span>Barharwa, Jharkhand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;