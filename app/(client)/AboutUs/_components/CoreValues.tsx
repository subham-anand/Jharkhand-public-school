import React from 'react';
import { 
  IconHeart, 
  IconBulb, 
  IconShield, 
  IconCertificate, 
  IconSparkles
} from '@tabler/icons-react';

// Simplified Core Values Component
export default function CoreValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🧭 Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            The guiding principles that shape every interaction at Jharkhand Public School
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Value 1: Respect & Kindness */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-red-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconHeart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Respect & Kindness
              </h3>
              <p className="text-gray-600 text-sm">
                Treating everyone with dignity, compassion, and understanding in all our interactions
              </p>
            </div>
          </div>

          {/* Value 2: Curiosity & Creativity */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconBulb size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Curiosity & Creativity
              </h3>
              <p className="text-gray-600 text-sm">
                Encouraging questions, imagination, and innovative thinking in every learning experience
              </p>
            </div>
          </div>

          {/* Value 3: Safety & Responsibility */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconShield size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Safety & Responsibility
              </h3>
              <p className="text-gray-600 text-sm">
                Creating secure environments where children learn to make responsible choices
              </p>
            </div>
          </div>

          {/* Value 4: Integrity & Discipline */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconCertificate size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Integrity & Discipline
              </h3>
              <p className="text-gray-600 text-sm">
                Building character through honesty, commitment, and self-control in all aspects of life
              </p>
            </div>
          </div>

          {/* Value 5: Joy in Learning */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconSparkles size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Joy in Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Making education fun, engaging, and meaningful for every child&apos;s unique journey
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Values in Action
          </h3>
          <p className="text-gray-600 mb-6">
            These values aren&apos;t just words on a wall—they&apos;re lived experiences that guide every moment at JPS.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
            Experience Our Values
          </button>
        </div>
      </div>
    </section>
  );
}
