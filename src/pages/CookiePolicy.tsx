
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They allow the website to recognize your device and store certain information about your preferences or actions.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
            <p>We use the following types of cookies on our website:</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.1 Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.2 Performance Cookies</h3>
            <p>These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how our website works.</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.3 Functionality Cookies</h3>
            <p>These cookies allow the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize.</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.4 Targeting Cookies</h3>
            <p>These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaigns. They are usually placed by advertising networks with the website operator's permission.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These may include:</p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Google Ads for advertising</li>
              <li>Facebook Pixel for advertising and analytics</li>
              <li>LinkedIn Insight Tag for advertising and analytics</li>
              <li>HotJar for user behavior analytics</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. How to Control Cookies</h2>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
            
            <p className="mt-4">Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-palette-purple hover:underline">www.allaboutcookies.org</a>.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to This Cookie Policy</h2>
            <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this policy.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at:</p>
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

export default CookiePolicy;
