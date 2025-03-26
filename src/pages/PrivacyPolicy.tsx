
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Privacy Policy - The CRO Lab';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Our privacy policy outlines how we collect, use, and protect your personal information.');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>The CRO Lab ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect several types of information from and about users of our website, including:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Personal identifiers such as name, email address, phone number, and company name when you contact us or request our services.</li>
              <li>Usage data such as IP address, browser type, operating system, and pages visited when you interact with our website.</li>
              <li>Marketing and communications preferences regarding how you wish to receive information from us.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Providing, maintaining, and improving our services.</li>
              <li>Responding to your inquiries and fulfilling your requests.</li>
              <li>Sending administrative information and marketing communications.</li>
              <li>Analyzing website usage to enhance user experience.</li>
              <li>Protecting our rights and preventing fraud.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Service providers who perform services on our behalf.</li>
              <li>Professional advisers including lawyers, auditors, and insurers.</li>
              <li>Government bodies when required by law.</li>
              <li>Business partners in connection with offerings that may be of interest to you.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from accidental loss, unauthorized access, and disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>The right to access your personal information.</li>
              <li>The right to correct inaccurate or incomplete information.</li>
              <li>The right to request deletion of your personal information.</li>
              <li>The right to restrict or object to processing of your information.</li>
              <li>The right to data portability.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with their information, please contact us.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by the updated "Last Updated" date. We encourage you to review this privacy policy periodically.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p className="mt-2">
              The CRO Lab<br />
              Email: privacy@thecrolab.com<br />
              Phone: +44 20 1234 5678
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
