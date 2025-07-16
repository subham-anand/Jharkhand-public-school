import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="text-sm text-gray-600 mb-6">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Jharkhand Public School (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your use of our website located at jpsbarharwa.in and any related services provided by Jharkhand Public School.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Services</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jharkhand Public School provides educational services and maintains this website to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide information about our school programs and services</li>
            <li>Facilitate communication between school, students, and parents</li>
            <li>Share announcements, news, and educational resources</li>
            <li>Enable online admission inquiries and applications</li>
            <li>Display school activities, events, and achievements</li>
            <li>Provide contact information and location details</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Eligibility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our services are intended for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Parents and Guardians:</strong> Seeking information about educational services for their children</li>
            <li><strong>Students:</strong> Current and prospective students of appropriate age</li>
            <li><strong>Educational Professionals:</strong> Teachers, administrators, and education sector stakeholders</li>
            <li><strong>Community Members:</strong> Individuals interested in our school&apos;s activities and programs</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            If you are under 18 years of age, you must have permission from your parent or guardian to use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Acceptable Use Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Use the website in any way that could damage, disable, or impair the service</li>
            <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
            <li>Transmit any harmful, offensive, or inappropriate content</li>
            <li>Violate any applicable local, state, national, or international law</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Collect or harvest information about other users without consent</li>
            <li>Use automated systems to access the website without permission</li>
            <li>Interfere with other users&apos; enjoyment of the website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Educational Services Terms</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 Admission Process</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Information provided on our website regarding admissions is for informational purposes only. Final admission decisions are subject to our official admission policies and procedures. All admissions are governed by separate enrollment agreements.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-3">5.2 Academic Information</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Academic programs, curriculum details, and educational policies displayed on our website are subject to change. We strive to keep information current but recommend contacting the school directly for the most up-to-date information.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-3">5.3 Fee Structure</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Any fee information displayed on our website is indicative and subject to change. Official fee structures and payment terms are provided through separate documentation during the admission process.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Jharkhand Public School or its licensors and is protected by Indian and international copyright laws.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You may view and download content for personal, non-commercial use only. You may not:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Reproduce, distribute, or publicly display our content without permission</li>
            <li>Use our logos, trademarks, or branding without written consent</li>
            <li>Create derivative works based on our content</li>
            <li>Use our content for commercial purposes without authorization</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. User-Generated Content</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you submit any content to our website (such as testimonials, comments, or feedback), you grant us a non-exclusive, royalty-free, perpetual license to use, modify, and display such content for educational and promotional purposes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You represent and warrant that any content you submit:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Is accurate and truthful</li>
            <li>Does not violate any third-party rights</li>
            <li>Does not contain harmful or inappropriate material</li>
            <li>Complies with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Privacy and Data Protection</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our website, you consent to our Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to protecting student and family privacy in accordance with applicable educational privacy laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties of any kind, either express or implied. We do not warrant that:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>The website will be available continuously or without interruption</li>
            <li>The information provided is complete, accurate, or up-to-date</li>
            <li>The website will be free from errors, viruses, or other harmful components</li>
            <li>The website will meet your specific requirements or expectations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the maximum extent permitted by law, Jharkhand Public School shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our total liability for any claim arising out of or relating to these Terms shall not exceed the amount paid by you, if any, for accessing our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Indemnification</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless Jharkhand Public School, its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Your use of our website or services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Any content you submit or transmit through our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Third-Party Links and Services</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website may contain links to third-party websites or services. We do not control or endorse these external sites and are not responsible for their content, privacy policies, or practices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your interactions with third-party websites are governed by their respective terms and policies. We encourage you to review these before engaging with third-party services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Termination</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We reserve the right to terminate or suspend your access to our website at any time, without prior notice, for any reason, including if we believe you have violated these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Upon termination, your right to use our website will cease immediately, but the provisions that by their nature should survive termination will remain in effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website and updating the &ldquo;Last updated&rdquo; date.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your continued use of our website after changes have been posted constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. Governing Law and Jurisdiction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms are governed by and construed in accordance with the laws of India and the state of Jharkhand. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Jharkhand.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">16. Severability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will otherwise remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">17. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2"><strong>Jharkhand Public School</strong></p>
            <p className="text-gray-700 mb-2">Email: contact@jpsbarharwa.in</p>
            <p className="text-gray-700 mb-2">Phone: +91 8541061847</p>
            <p className="text-gray-700 mb-2">Address: Thana road, Barharwa, Sahibganj, Jharkhand, 816101</p>
            <p className="text-gray-700">Website: www.jpsbarharwa.in</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">18. Entire Agreement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Jharkhand Public School regarding your use of our website and services.
          </p>
        </section>

        <div className="border-t pt-6 mt-8">
          <p className="text-sm text-gray-600">
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;