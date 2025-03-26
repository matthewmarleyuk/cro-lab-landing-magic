
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By accessing or using The CRO Lab website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
            <p>The CRO Lab provides conversion rate optimization services, including but not limited to CRO audits, A/B testing, UX research, landing page optimization, and website personalization. The specific services provided will be detailed in a separate agreement or statement of work.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Use our services in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorized access to any part of our services or systems.</li>
              <li>Engage in any activity that disrupts or interferes with our services.</li>
              <li>Use our services to transmit malware or other malicious code.</li>
              <li>Infringe on the intellectual property rights of others.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
            <p>All content, features, and functionality of our website, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by The CRO Lab and are protected by copyright, trademark, and other intellectual property laws.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Content</h2>
            <p>Any content you provide to us, including but not limited to feedback, suggestions, or testimonials, may be used by us without restriction. By providing such content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Payment Terms</h2>
            <p>Payment terms for our services will be specified in a separate agreement or statement of work. Unless otherwise stated, invoices are due within 30 days of issuance. Late payments may be subject to interest charges.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, The CRO Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services, even if we have been advised of the possibility of such damages.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
            <p>You agree to indemnify and hold harmless The CRO Lab and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will cease immediately.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-2">
              The CRO Lab<br />
              Email: legal@thecrolab.com<br />
              Phone: +44 20 1234 5678
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
