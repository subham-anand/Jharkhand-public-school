import React from 'react';
import { 
  IconTarget, 
  IconEye, 
  IconShield, 
  IconHeart, 
  IconBulb, 
  IconUsers, 
  IconStar, 
  IconSparkles,
  IconBuildingCommunity,
  IconAward
} from '@tabler/icons-react';

export default function MissionAndVision() {
  const missionItems = [
    {
      icon: IconShield,
      title: "Safe, Joyful Learning Spaces",
      description: "Creating secure environments where children feel comfortable to explore and learn",
      color: "blue",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-500"
    },
    {
      icon: IconBulb,
      title: "Curiosity, Creativity & Kindness",
      description: "Fostering natural wonder while developing creative thinking and empathy",
      color: "teal",
      bgGradient: "from-teal-50 to-teal-100",
      iconBg: "bg-teal-500"
    },
    {
      icon: IconAward,
      title: "Strong Academic & Emotional Foundation",
      description: "Building comprehensive skills for lifelong learning and emotional intelligence",
      color: "orange",
      bgGradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-500"
    },
    {
      icon: IconUsers,
      title: "Partnership with Parents",
      description: "Working together as a team to ensure every child's growth and success",
      color: "purple",
      bgGradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-500"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-20 animate-bounce animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-xl shadow-lg">
              <IconSparkles size={32} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Purpose</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">🌟 Mission &</span>
            <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guiding our journey towards educational excellence and holistic development
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 p-1">
              <div className="bg-white rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Vision Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg">
                        <IconEye size={36} className="text-white" />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
                        To be a <span className="text-blue-600 font-bold">center of excellence</span> for early education, where children develop <span className="text-teal-600 font-bold">confidence</span>, <span className="text-orange-600 font-bold">curiosity</span>, and <span className="text-purple-600 font-bold">compassion</span>.
                      </p>
                    </div>

                    {/* Vision Highlights */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-3xl font-bold text-blue-600">💪</div>
                        <div className="text-sm font-semibold text-blue-800 mt-2">Confidence</div>
                      </div>
                      <div className="text-center p-4 bg-teal-50 rounded-xl">
                        <div className="text-3xl font-bold text-teal-600">🔍</div>
                        <div className="text-sm font-semibold text-teal-800 mt-2">Curiosity</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-3xl font-bold text-orange-600">❤️</div>
                        <div className="text-sm font-semibold text-orange-800 mt-2">Compassion</div>
                      </div>
                    </div>
                  </div>

                  {/* Vision Visual */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-100 via-teal-100 to-orange-100 rounded-2xl p-8 shadow-xl">
                      <div className="text-center">
                        <div className="text-8xl mb-6">🏆</div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">Excellence in Education</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Building tomorrow&apos;s leaders through innovative learning experiences and character development.
                        </p>
                        
                        {/* Achievement Indicators */}
                        <div className="flex justify-center gap-4 mt-6">
                          <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md">
                            <IconStar size={16} className="text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700">Excellence</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md">
                            <IconTarget size={16} className="text-green-500" />
                            <span className="text-sm font-medium text-gray-700">Growth</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 p-3 rounded-full shadow-lg animate-bounce">
                      <IconSparkles size={24} />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 p-3 rounded-full shadow-lg animate-pulse">
                      <IconHeart size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-xl shadow-lg">
                <IconTarget size={36} className="text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four core commitments that drive everything we do
            </p>
          </div>

          {/* Mission Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionItems.map((item, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${item.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
                  {/* Mission Item Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${item.iconBg} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 mt-6">
                    <div className="flex-1 bg-white rounded-full h-2">
                      <div className={`h-full bg-gradient-to-r ${item.iconBg.replace('bg-', 'from-')} to-${item.color}-400 rounded-full transition-all duration-1000 group-hover:w-full`} style={{width: '75%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Ongoing</span>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-gray-800 border-2 border-gray-100">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <IconBuildingCommunity size={32} className="text-blue-500" />
              <IconHeart size={32} className="text-red-500" />
              <IconUsers size={32} className="text-teal-500" />
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 italic leading-relaxed mb-6">
              &ldquo;Together, we create an environment where every child feels valued, supported, and inspired to reach their fullest potential.&rdquo;
            </blockquote>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <IconSparkles size={24} className="text-yellow-500" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-orange-500"></div>
            </div>
            
            <cite className="block mt-4 text-lg font-semibold text-gray-800">
              The JPS Promise
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
