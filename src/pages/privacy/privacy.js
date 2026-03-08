import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/legal.css";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-overlay" />
        <div className="container-custom relative z-10">
          <nav className="legal-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-subtitle">Last updated: March 7, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content section-padding">
        <div className="container-custom">
          <div className="legal-card">
            <div className="legal-intro">
              <p>
                RJ Roadside Assistance ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>
            </div>

            {/* 1 */}
            <div className="legal-section">
              <h2>1. Information We Collect</h2>
              <h3>a) Information You Provide</h3>
              <ul>
                <li><strong>Contact Form:</strong> First name, last name, email address, phone number, and message content when you submit an inquiry through our website.</li>
                <li><strong>Service Requests:</strong> Your name, phone number, vehicle details (make, model, registration), and location when you call or WhatsApp us for service.</li>
                <li><strong>RSA Membership:</strong> Name, phone number, email, vehicle details, and payment information when you subscribe to a membership plan.</li>
              </ul>

              <h3>b) Information Collected Automatically</h3>
              <ul>
                <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, and device type.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referral source, and navigation patterns.</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address (we do not track precise GPS location through the website).</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h2>2. How We Use Your Information</h2>
              <ul>
                <li><strong>Service Delivery:</strong> To dispatch technicians, process service requests, and communicate updates about your service.</li>
                <li><strong>Communication:</strong> To respond to your inquiries submitted through the contact form, phone, or WhatsApp.</li>
                <li><strong>Membership Management:</strong> To activate, manage, and renew your RSA membership.</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our website and services.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations.</li>
              </ul>
              <p>
                We do <strong>not</strong> use your information for unsolicited marketing, and we do <strong>not</strong> sell your data to third parties.
              </p>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h2>3. Email Service (EmailJS)</h2>
              <p>
                Our contact form uses <strong>EmailJS</strong> to send your inquiry directly to our email. When you submit the form:
              </p>
              <ul>
                <li>Your data is transmitted securely to EmailJS servers for email delivery.</li>
                <li>We do not store your form submissions in any database — they are delivered as email messages only.</li>
                <li>EmailJS processes data in accordance with their own privacy policy.</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h2>4. Data Sharing</h2>
              <p>We do not sell, trade, or rent your personal information. We may share your data only in the following cases:</p>
              <ul>
                <li><strong>Service Partners:</strong> We may share your vehicle location and details with our dispatched technician to provide the requested service.</li>
                <li><strong>Insurance Coordination:</strong> If you request insurance assistance, we may share relevant service details with your insurance provider with your consent.</li>
                <li><strong>Legal Requirements:</strong> If required by law, court order, or government authority.</li>
              </ul>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h2>5. Data Security</h2>
              <ul>
                <li>Our website is served over HTTPS, ensuring encrypted data transmission.</li>
                <li>We do not store credit card or payment information on our servers. All payments are processed through secure third-party payment gateways.</li>
                <li>Access to customer data is restricted to authorized personnel only.</li>
                <li>While we take reasonable measures to protect your data, no method of transmission over the internet is 100% secure.</li>
              </ul>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h2>6. Cookies</h2>
              <p>
                Our website uses minimal cookies and local storage for basic functionality:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., service worker cache).</li>
                <li>We do not use advertising cookies or third-party tracking cookies.</li>
                <li>No personal information is stored in cookies.</li>
              </ul>
            </div>

            {/* 7 */}
            <div className="legal-section">
              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
                <li><strong>Opt-out:</strong> Unsubscribe from any communications at any time by contacting us.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at <a href="mailto:rjroadsideassistance95@gmail.com">rjroadsideassistance95@gmail.com</a> or call <a href="tel:+918955836514">+91-8955836514</a>.
              </p>
            </div>

            {/* 8 */}
            <div className="legal-section">
              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to external services (WhatsApp, Instagram). These third-party sites have their own privacy policies, and we are not responsible for their practices. We encourage you to review their policies.
              </p>
            </div>

            {/* 9 */}
            <div className="legal-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are intended for individuals aged 18 and above who are legally authorized to operate motor vehicles. We do not knowingly collect information from children under 18.
              </p>
            </div>

            {/* 10 */}
            <div className="legal-section">
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. We encourage you to review this page periodically.
              </p>
            </div>

            {/* 11 */}
            <div className="legal-section">
              <h2>11. Contact Us</h2>
              <p>For any questions or concerns about this Privacy Policy, please contact us:</p>
              <div className="legal-contact-box">
                <p><strong>RJ Roadside Assistance</strong></p>
                <p>Jaipur, Rajasthan, India</p>
                <p>Phone: <a href="tel:+918955836514">+91-8955836514</a></p>
                <p>Email: <a href="mailto:rjroadsideassistance95@gmail.com">rjroadsideassistance95@gmail.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/918955836514" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
