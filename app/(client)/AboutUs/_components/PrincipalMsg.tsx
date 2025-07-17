import React from 'react';
import { 
  IconQuote, 
  IconUser, 
  IconHeart, 
  IconSparkles, 
  IconStar,
  IconAward,
  IconSchool,
  IconCertificate,
  IconMedal
} from '@tabler/icons-react';
import Image from 'next/image';

export default function PrincipalMessage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-30 animate-bounce animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-xl shadow-lg">
              <IconUser size={32} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Leadership</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">📣 Principal&apos;s</span>
            <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
              Message
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A personal welcome from our dedicated educational leader
          </p>
        </div>

        {/* Main Message Section */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 p-1">
              <div className="bg-white rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Principal Photo Section */}
                  <div className="lg:col-span-1 relative">
                    <div className="h-full bg-gradient-to-br from-blue-100 via-teal-100 to-orange-100 p-8 lg:p-12 flex flex-col items-center justify-center text-center">
                      {/* Principal Photo Placeholder */}
                      <div className="relative mb-6">
                        <div className="w-48 h-48 lg:w-56 lg:h-56 mx-auto bg-gradient-to-br from-blue-200 to-teal-200 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                          {/* Photo placeholder - replace with actual image */}
                          <div className="w-full h-full bg-gradient-to-br from-blue-300 to-teal-300 flex items-center justify-center">
                            {/* <IconUser size={80} className="text-white" /> */}
                            <Image
                            src={"/jps_principal.jpg"}
                            alt='Principal Photo'
                            width={200}
                            height={200}
                            className="object-cover rounded-full"
                            />
                          </div>
                        </div>
                        
                        {/* Floating Achievement Badges */}
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 p-3 rounded-full shadow-lg animate-bounce">
                          <IconAward size={20} />
                        </div>
                        <div className="absolute -bottom-2 -left-2 bg-blue-400 text-blue-900 p-3 rounded-full shadow-lg animate-pulse">
                          <IconMedal size={20} />
                        </div>
                      </div>

                      {/* Principal Info */}
                      <div className="space-y-3">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          Chhotelal Gupta
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-blue-600">
                          <IconSchool size={20} />
                          <span className="font-semibold">Principal</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Jharkhand Public School
                        </p>
                        
                        {/* Credentials */}
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                          <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-md text-xs font-medium text-gray-700">
                            <IconCertificate size={14} />
                            <span>M.Ed</span>
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-md text-xs font-medium text-gray-700">
                            <IconStar size={14} />
                            <span>40+ Years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Content Section */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    {/* Quote Icon */}
                    <div className="flex items-start gap-4 mb-8">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg">
                          <IconQuote size={32} className="text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                          A Personal Welcome
                        </h4>
                        <p className="text-gray-600">
                          From our Principal&apos;s heart to your family
                        </p>
                      </div>
                    </div>

                    {/* Main Message */}
                    <div className="space-y-6 mb-8">
                      <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                        &ldquo;Dear Parents,
                      </blockquote>
                      
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                        At <span className="font-semibold text-blue-600">Jharkhand Public School</span>, we believe that every child is full of potential, waiting to be nurtured. Our school is built on <span className="font-semibold text-teal-600">love</span>, <span className="font-semibold text-orange-600">learning</span>, and <span className="font-semibold text-purple-600">values</span>.
                      </p>
                      
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                        We welcome your child with <span className="font-semibold text-red-500">open arms</span> and promise to guide them every step of the way.&rdquo;
                      </p>
                    </div>

                    {/* Key Values Highlight */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-red-50 rounded-xl">
                        <div className="text-2xl mb-2">❤️</div>
                        <div className="text-sm font-semibold text-red-700">Love</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-2xl mb-2">📚</div>
                        <div className="text-sm font-semibold text-blue-700">Learning</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl mb-2">⭐</div>
                        <div className="text-sm font-semibold text-purple-700">Values</div>
                      </div>
                    </div>

                    {/* Signature */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            — Chhotelal Gupta
                          </div>
                          <div className="text-gray-600 font-medium">
                            Principal, Jharkhand Public School
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full shadow-lg">
                            <IconHeart size={24} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Quote Marks */}
          <div className="absolute -top-6 -left-6 text-6xl text-blue-200 font-bold">&ldquo;</div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-blue-200 font-bold">&rdquo;</div>
        </div>

        {/* Bottom Section - School Promise */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <IconSparkles size={32} className="text-yellow-500" />
                <IconHeart size={32} className="text-red-500" />
                <IconSparkles size={32} className="text-yellow-500" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Promise to You
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every child who walks through our doors will be treated with respect, encouraged to dream big, and supported to achieve their goals. This is our commitment to your family.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <IconHeart size={16} />
                  <span>Nurturing Care</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                  <IconStar size={16} />
                  <span>Excellence</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                  <IconAward size={16} />
                  <span>Achievement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
