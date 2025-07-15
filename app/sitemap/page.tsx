import React from 'react';
import Link from 'next/link';
import { 
  IconHome, 
  IconSchool, 
  IconUsers, 
//   IconBulletin, 
  IconPhoto, 
  IconPhone, 
  IconMail, 
  IconMapPin,
  IconCertificate,
  IconBook,
  IconAward,
  IconShieldCheck,
  IconHeartHandshake,
  IconBrandPushbullet
} from '@tabler/icons-react';

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Website",
      icon: <IconHome className="w-6 h-6" />,
      description: "Primary website sections and pages",
      pages: [
        {
          title: "Home",
          url: "/",
          description: "Main landing page with hero section and overview",
          sections: ["Hero", "Quick Links", "School Highlights"]
        },
        {
          title: "About Us",
          url: "/#about",
          description: "School history, mission, vision, and values",
          sections: ["School History", "Mission & Vision", "Statistics", "Achievements"]
        },
        {
          title: "Why Choose Us",
          url: "/#why-choose-us",
          description: "Key differentiators and benefits of our school",
          sections: ["Quality Education", "Experienced Teachers", "Modern Facilities", "Values-Based Learning"]
        }
      ]
    },
    {
      category: "Academic Services",
      icon: <IconSchool className="w-6 h-6" />,
      description: "Educational programs and academic offerings",
      pages: [
        {
          title: "Academic Programs",
          url: "/#academics",
          description: "Nursery to Class 8 curriculum and programs",
          sections: ["JAC Board Curriculum", "Hindi Medium Instruction", "Age-Appropriate Learning"]
        },
        {
          title: "Admission Information",
          url: "/#admission",
          description: "Current admission status and enrollment process",
          sections: ["Admission Open", "Eligibility Criteria", "Application Process", "Fee Structure"]
        },
        {
          title: "Class Structure",
          url: "/#classes",
          description: "Detailed information about each grade level",
          sections: ["Nursery Program", "Primary Classes (1-5)", "Upper Primary (6-8)"]
        }
      ]
    },
    {
      category: "School Services",
      icon: <IconUsers className="w-6 h-6" />,
      description: "Student support and educational services",
      pages: [
        {
          title: "Student Support",
          url: "/#student-support",
          description: "Comprehensive student development programs",
          sections: ["Academic Support", "Counseling Services", "Special Needs Support"]
        },
        {
          title: "Extra-Curricular Activities",
          url: "/#activities",
          description: "Sports, arts, and creative development programs",
          sections: ["Sports Programs", "Cultural Activities", "Creative Arts", "Leadership Development"]
        },
        {
          title: "Library Services",
          url: "/#library",
          description: "Learning resources and reading programs",
          sections: ["Book Collection", "Reading Programs", "Digital Resources"]
        }
      ]
    },
    {
      category: "Communication & Updates",
      icon: <IconBrandPushbullet className="w-6 h-6" />,
      description: "School announcements and communication channels",
      pages: [
        {
          title: "Notice Board",
          url: "/#notices",
          description: "Important announcements and school updates",
          sections: ["Latest Announcements", "Event Notifications", "Policy Updates", "Emergency Notices"]
        },
        {
          title: "School Events",
          url: "/#events",
          description: "Upcoming and past school events and celebrations",
          sections: ["Academic Events", "Cultural Programs", "Sports Competitions", "Parent Meetings"]
        },
        {
          title: "News & Updates",
          url: "/#news",
          description: "School achievements and community news",
          sections: ["School Achievements", "Student Success Stories", "Community Involvement"]
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
          url: "/#gallery",
          description: "Visual showcase of school facilities and activities",
          sections: ["Campus Facilities", "Classroom Activities", "Event Photos", "Student Life"]
        },
        {
          title: "Testimonials",
          url: "/#testimonials",
          description: "Parent and student feedback and experiences",
          sections: ["Parent Reviews", "Student Experiences", "Alumni Success", "Community Feedback"]
        },
        {
          title: "Virtual Tour",
          url: "/#tour",
          description: "Interactive exploration of school facilities",
          sections: ["Classrooms", "Playground", "Library", "Administrative Areas"]
        }
      ]
    },
    {
      category: "Contact & Location",
      icon: <IconPhone className="w-6 h-6" />,
      description: "Contact information and school location details",
      pages: [
        {
          title: "Contact Information",
          url: "/#contact",
          description: "Phone, email, and address details",
          sections: ["Phone Numbers", "Email Addresses", "Physical Address", "Office Hours"]
        },
        {
          title: "Location & Directions",
          url: "/#location",
          description: "School location with maps and directions",
          sections: ["Address Details", "Map Integration", "Transportation", "Parking Information"]
        },
        {
          title: "Visit Us",
          url: "/#visit",
          description: "Information for prospective families visiting the school",
          sections: ["Visiting Hours", "Campus Tours", "Meeting Schedule", "Appointment Booking"]
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
          description: "Data collection and privacy protection policies",
          sections: ["Data Collection", "Usage Policies", "Student Privacy", "Contact Rights"]
        },
        {
          title: "Terms of Service",
          url: "/legal/TermsofService",
          description: "Website usage terms and educational service agreements",
          sections: ["Acceptable Use", "Educational Terms", "Liability", "Governing Law"]
        },
        {
          title: "School Policies",
          url: "/#policies",
          description: "Academic and administrative policies",
          sections: ["Academic Policies", "Admission Policies", "Safety Policies", "Code of Conduct"]
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
            <div className="text-2xl font-bold text-gray-900">2010</div>
            <div className="text-sm text-gray-600">Established</div>
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
              Ready to Join Our School Community?
            </h2>
            <p className="text-blue-100 mb-6">
              Explore our website to learn more about our educational programs, 
              facilities, and the nurturing environment we provide for young minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#admission" 
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Apply for Admission
              </Link>
              <Link 
                href="/#contact" 
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