import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/legal.css";

const Terms = () => {
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
            <span>Terms & Conditions</span>
          </nav>
          <h1 className="legal-hero-title">Terms & Conditions</h1>
          <p className="legal-hero-subtitle">Last updated: March 7, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content section-padding">
        <div className="container-custom">
          <div className="legal-card">
            <div className="legal-intro">
              <p>
                Welcome to RJ Roadside Assistance. By using our website (<strong>rjroadsideassistance.com</strong>) and availing any of our services, you agree to be bound by the following Terms & Conditions. Please read them carefully before using our services.
              </p>
            </div>

            {/* 1 */}
            <div className="legal-section">
              <h2>1. About Our Services</h2>
              <p>
                RJ Roadside Assistance is a 24/7 roadside assistance service provider based in Jaipur, Rajasthan, India. We offer the following services:
              </p>
              <ul>
                <li>Battery Jumpstart</li>
                <li>Flat Tyre Repair & Replacement</li>
                <li>Key Lockout Assistance</li>
                <li>Vehicle Towing (Flatbed & Wheel-lift)</li>
                <li>On-site Mechanical Repair & Diagnostics</li>
                <li>Emergency Breakdown Assistance</li>
                <li>RSA (Roadside Assistance) Annual Membership Plans</li>
              </ul>
              <p>
                Our services are available across Jaipur city and surrounding areas within a 50km radius. Availability outside this area is subject to confirmation.
              </p>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h2>2. Service Request & Acceptance</h2>
              <ul>
                <li>Services can be requested by calling <strong>+91-8955836514</strong>, via WhatsApp, or through the contact form on our website.</li>
                <li>Upon receiving a service request, we will dispatch the nearest available technician. Estimated arrival times (typically 20-30 minutes) are approximate and may vary due to traffic, weather, or location.</li>
                <li>We reserve the right to decline or defer a service request if conditions are unsafe, the vehicle requires specialized equipment we don't carry, or the request falls outside our service area.</li>
                <li>For towing services, the customer must provide accurate vehicle information (make, model, weight class) for us to dispatch the appropriate equipment.</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h2>3. Pricing & Payment</h2>
              <ul>
                <li><strong>Upfront Quotes:</strong> We provide a price estimate before dispatching a technician. The final price may vary if the on-site assessment reveals additional issues or the vehicle details differ from what was communicated.</li>
                <li><strong>Pay-Per-Service:</strong> For non-members, pricing varies by service type, vehicle category (hatchback, sedan, SUV, luxury), and fuel type. Exact prices are displayed on our Services & Pricing page.</li>
                <li><strong>RSA Membership:</strong> Annual membership plans (Basic at &#8377;1,999/year, Standard at &#8377;3,999/year, Premium at &#8377;6,999/year) cover specified services as outlined in the plan details. Services exceeding plan limits are charged at standard rates.</li>
                <li><strong>Payment Methods:</strong> We accept UPI (Google Pay, PhonePe, Paytm), credit/debit cards (Visa, Mastercard, RuPay), net banking, and cash/cheque payment at the time of service.</li>
                <li><strong>No Hidden Charges:</strong> The quoted price is the price you pay. Additional charges apply only if extra work is requested or discovered on-site, with your prior approval.</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h2>4. RSA Membership Terms</h2>
              <ul>
                <li>Membership is activated within 24 hours of payment confirmation. A unique member ID and membership card will be issued.</li>
                <li>Memberships are valid for 12 months from the date of activation.</li>
                <li><strong>Vehicle Limits:</strong> Basic covers 1 vehicle, Standard covers up to 2, and Premium covers up to 3. Additional vehicles can be added at extra cost.</li>
                <li><strong>Service Limits:</strong> Basic plans include 2 service calls per year. Standard includes 5 calls. Premium includes unlimited calls.</li>
                <li><strong>Towing Distance:</strong> Standard plans include towing up to 25km. Premium includes up to 50km. Additional distance is charged at &#8377;25/km.</li>
                <li><strong>Non-Transferable:</strong> Memberships are tied to the registered vehicle(s) and cannot be transferred to other individuals or vehicles not registered under the plan.</li>
                <li><strong>Renewal:</strong> Members are notified 30 days before expiry. Early renewal (before expiry date) qualifies for a 10% loyalty discount.</li>
              </ul>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h2>5. Cancellations & Refunds</h2>
              <ul>
                <li><strong>Service Cancellation:</strong> You may cancel a service request at no charge if the technician has not yet been dispatched. Once dispatched, a cancellation fee of &#8377;200 may apply to cover mobilization costs.</li>
                <li><strong>Membership Cancellation:</strong> RSA memberships can be cancelled within 7 days of activation for a full refund, provided no services have been used. After 7 days, or if any service has been availed, memberships are non-refundable.</li>
                <li><strong>Refund Processing:</strong> Approved refunds are processed within 7-10 business days to the original payment method.</li>
              </ul>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h2>6. Customer Responsibilities</h2>
              <ul>
                <li>Provide accurate vehicle information (make, model, registration, location) when requesting service.</li>
                <li>Ensure the vehicle is accessible to our technicians upon arrival.</li>
                <li>Stay with or near your vehicle until the technician arrives, unless safety requires otherwise.</li>
                <li>For key lockout services, you must provide valid identification and vehicle registration documents to verify ownership before we unlock the vehicle.</li>
                <li>Inform us of any known hazards (fuel leaks, accident damage, airbag deployment) before our technician begins work.</li>
              </ul>
            </div>

            {/* 7 */}
            <div className="legal-section">
              <h2>7. Limitations of Liability</h2>
              <ul>
                <li>RJ Roadside Assistance provides emergency roadside assistance and minor on-site repairs. We are not a substitute for a full-service automobile workshop.</li>
                <li>We are not liable for pre-existing mechanical or electrical issues in your vehicle, or damage caused by such issues.</li>
                <li>Our liability for any service is limited to the amount paid for that specific service.</li>
                <li>We are not responsible for delays caused by traffic, weather, road conditions, or circumstances beyond our control.</li>
                <li>Towed vehicles are transported at the customer's risk. We take reasonable precautions (professional straps, condition documentation) but are not liable for mechanical issues discovered after delivery to the workshop.</li>
                <li>We recommend that customers maintain appropriate vehicle insurance. Our services do not replace insurance coverage.</li>
              </ul>
            </div>

            {/* 8 */}
            <div className="legal-section">
              <h2>8. Service Guarantee</h2>
              <ul>
                <li>All on-site repairs carry a 24-hour workmanship guarantee. If the same issue recurs within 24 hours, we will re-service at no additional charge.</li>
                <li>Replacement parts (batteries, tyres, fuses, etc.) carry the manufacturer's warranty, not ours.</li>
                <li>If we are unable to resolve the issue on-site, we will provide a diagnosis and recommend next steps at no additional diagnostic charge.</li>
              </ul>
            </div>

            {/* 9 */}
            <div className="legal-section">
              <h2>9. Website Usage</h2>
              <ul>
                <li>The content on this website is for informational purposes only. Service availability and pricing are subject to change without prior notice.</li>
                <li>You agree not to misuse our website, attempt unauthorized access, or use automated tools to scrape content.</li>
                <li>Our contact form collects personal information (name, email, phone, message) solely for the purpose of responding to your inquiry. See our <Link to="/privacy">Privacy Policy</Link> for details.</li>
              </ul>
            </div>

            {/* 10 */}
            <div className="legal-section">
              <h2>10. Intellectual Property</h2>
              <p>
                All content on this website — including the RJ Roadside Assistance name, logo, text, images, and design — is the property of RJ Roadside Assistance and is protected under applicable intellectual property laws. You may not reproduce, distribute, or use our branding without written permission.
              </p>
            </div>

            {/* 11 */}
            <div className="legal-section">
              <h2>11. Governing Law & Disputes</h2>
              <p>
                These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
              </p>
              <p>
                We encourage customers to contact us directly to resolve any concerns before pursuing legal action. Most issues can be resolved through a phone call or email.
              </p>
            </div>

            {/* 12 */}
            <div className="legal-section">
              <h2>12. Amendments</h2>
              <p>
                RJ Roadside Assistance reserves the right to update these Terms & Conditions at any time. Changes will be posted on this page with the updated date. Continued use of our services after changes constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* 13 */}
            <div className="legal-section">
              <h2>13. Contact Us</h2>
              <p>If you have any questions about these Terms & Conditions, please contact us:</p>
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

export default Terms;
