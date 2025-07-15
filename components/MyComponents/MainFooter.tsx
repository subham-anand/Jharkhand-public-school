"use client"
import React from 'react'
import { 
  IconMapPin, 
  IconPhone, 
  IconMail, 
  IconClock, 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandTwitter, 
  IconBrandYoutube,
  IconSchool,
  IconHeart,
  IconArrowUp,
  IconStar
} from '@tabler/icons-react'

// Quick Link Item Component
const QuickLinkItem = ({ 
  href, 
  children, 
  icon 
}: { 
  href: string; 
  children: React.ReactNode; 
  icon?: React.ReactNode;
}) => {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group py-1"
    >
      {icon && <span className="text-blue-400 group-hover:text-blue-300 transition-colors">{icon}</span>}
      <span>{children}</span>
    </a>
  );
};

// Social Media Link Component
const SocialLink = ({ 
  href, 
  icon, 
  label, 
  color 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  color: string;
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      className={`w-10 h-10 rounded-full bg-gray-700 hover:${color} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group`}
    >
      <span className="text-gray-300 group-hover:text-white transition-colors">
        {icon}
      </span>
    </a>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  link?: string;
}) => {
  const ContentWrapper = link ? 'a' : 'div';
  const contentProps = link ? { href: link, className: "hover:text-blue-400 transition-colors" } : {};

  return (
    <div className="flex items-start gap-3 group">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
        <span className="text-white">
          {icon}
        </span>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <ContentWrapper {...contentProps} className={`text-gray-300 text-sm leading-relaxed ${link ? 'hover:text-blue-400 transition-colors' : ''}`}>
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
};



// Scroll to Top Button Component
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <IconArrowUp size={20} />
    </button>
  );
};

export default function MainFooter() {
  const currentYear = new Date().getFullYear();

  const quickLinks = {
    about: [
      { href: '#about', label: 'About Us' },
      { href: '#why-choose-us', label: 'Why Choose JPS' },
      { href: '#testimonials', label: 'Parent Reviews' },
      { href: '#gallery', label: 'Photo Gallery' },
      { href: '#notices', label: 'Latest News' }
    ],
    admissions: [
      { href: '#admissions', label: 'Admission Process' },
      { href: '/admission-form', label: 'Apply Online' },
      { href: '/admission-requirements', label: 'Requirements' },
      { href: '/fee-structure', label: 'Fee Structure' },
      { href: '/scholarship', label: 'Scholarships' }
    ],
    academics: [
      { href: '/curriculum', label: 'Curriculum' },
      { href: '/nursery', label: 'Nursery Program' },
      { href: '/primary', label: 'Primary Classes' },
      { href: '/activities', label: 'Activities' },
      { href: '/calendar', label: 'Academic Calendar' }
    ],
    support: [
      { href: '/contact', label: 'Contact Us' },
      { href: '/faq', label: 'FAQ' },
      { href: '/parent-portal', label: 'Parent Portal' },
      { href: '/transport', label: 'Transportation' },
      { href: '/safety', label: 'Safety Measures' }
    ]
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #3B82F6 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, #14B8A6 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 60px 60px'
          }}></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-teal-400 rounded-full opacity-5 animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-pulse [animation-delay:4s]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo and Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                    <IconSchool size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">JPS</h3>
                    <p className="text-xs text-gray-300">Since 2010</p>
                  </div>
                </div>
                
                {/* Brand Message */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <IconStar size={16} className="text-yellow-400" />
                    <h4 className="font-bold text-blue-300">Jharkhand Public School</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Educating with Heart Since 2010.</span>
                    <br />
                    Helping young minds bloom with care, creativity, and character.
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <IconHeart size={16} className="text-red-400" />
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  <SocialLink
                    href="https://facebook.com/jharkhnadpublicschool"
                    icon={<IconBrandFacebook size={18} />}
                    label="Facebook"
                    color="bg-blue-600"
                  />
                  <SocialLink
                    href="https://instagram.com/jharkhnadpublicschool"
                    icon={<IconBrandInstagram size={18} />}
                    label="Instagram"
                    color="bg-pink-600"
                  />
                  <SocialLink
                    href="https://twitter.com/jharkhnadpublicschool"
                    icon={<IconBrandTwitter size={18} />}
                    label="Twitter"
                    color="bg-blue-400"
                  />
                  <SocialLink
                    href="https://youtube.com/jharkhnadpublicschool"
                    icon={<IconBrandYoutube size={18} />}
                    label="YouTube"
                    color="bg-red-600"
                  />
                </div>
              </div>
            </div>

            {/* Quick Links Sections */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* About Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-300">About JPS</h4>
                <div className="space-y-2">
                  {quickLinks.about.map((link, index) => (
                    <QuickLinkItem key={index} href={link.href}>
                      {link.label}
                    </QuickLinkItem>
                  ))}
                </div>
              </div>

              {/* Admissions Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-teal-300">Admissions</h4>
                <div className="space-y-2">
                  {quickLinks.admissions.map((link, index) => (
                    <QuickLinkItem key={index} href={link.href}>
                      {link.label}
                    </QuickLinkItem>
                  ))}
                </div>
              </div>

              {/* Academics Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-purple-300">Academics</h4>
                <div className="space-y-2">
                  {quickLinks.academics.map((link, index) => (
                    <QuickLinkItem key={index} href={link.href}>
                      {link.label}
                    </QuickLinkItem>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-orange-300">Get in Touch</h4>
                <div className="space-y-4">
                  <ContactInfoItem
                    icon={<IconMapPin size={18} />}
                    title="Address"
                    content="Thana road, Barharwa, Sahibganj, Jharkhand, 816101"
                    link="https://maps.google.com"
                  />
                  <ContactInfoItem
                    icon={<IconPhone size={18} />}
                    title="Phone"
                    content="+91 8541061847"
                    link="tel:+918541061847"
                  />
                  <ContactInfoItem
                    icon={<IconMail size={18} />}
                    title="Email"
                    content="contact@jpsbarharwa.in"
                    link="mailto:contact@jpsbarharwa.in"
                  />
                  <ContactInfoItem
                    icon={<IconClock size={18} />}
                    title="School Hours"
                    content="Mon - Sat: 8:00 AM - 2:00 PM"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Support Links */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="font-bold text-lg mb-4 text-green-300">Support & Resources</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {quickLinks.support.map((link, index) => (
                <QuickLinkItem key={index} href={link.href}>
                  {link.label}
                </QuickLinkItem>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-gray-300 text-sm">
                  © {currentYear} Jharkhand Public School. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Made with ❤️ for the future of education
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <a href="/legal/PrivacyPolicy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-500">•</span>
                <a href="/legal/TermsofService" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <span className="text-gray-500">•</span>
                <a href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  )
}
