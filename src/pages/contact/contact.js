import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../../constants/email";
import "../../styles/contact.css";

const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactDetails: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [formRef, formVisible] = useScrollReveal();
  const [infoRef, infoVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setSubmitStatus({ type: "error", message: "First name is required" });
      return false;
    }
    if (!formData.lastName.trim()) {
      setSubmitStatus({ type: "error", message: "Last name is required" });
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitStatus({ type: "error", message: "Email is required" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      return false;
    }
    if (!formData.contactDetails.trim()) {
      setSubmitStatus({ type: "error", message: "Contact details are required" });
      return false;
    }
    if (!formData.description.trim()) {
      setSubmitStatus({ type: "error", message: "Description is required" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    if (!EMAIL_CONFIG.SERVICE_ID || !EMAIL_CONFIG.TEMPLATE_ID || !EMAIL_CONFIG.PUBLIC_KEY) {
      setSubmitStatus({ type: "error", message: "Email service is not configured. Please contact the administrator." });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        to_email: EMAIL_CONFIG.TO_EMAIL,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        contact_details: formData.contactDetails,
        message: formData.description,
        first_name: formData.firstName,
        last_name: formData.lastName,
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS returned status ${response.status}`);
      }

      setSubmitStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
      setFormData({ firstName: "", lastName: "", email: "", contactDetails: "", description: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      let errorMessage = "Failed to send message. Please try again later.";
      if (error.text) errorMessage = `Error: ${error.text}`;
      else if (error.message) errorMessage = `Error: ${error.message}`;
      setSubmitStatus({ type: "error", message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container-custom relative z-10">
          <nav className="contact-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>
          <div className="contact-hero-content">
            <span className="contact-hero-badge">
              <span className="contact-hero-badge-dot" />
              We're Here to Help
            </span>
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle">
              Have a question or need roadside assistance? Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main section-padding">
        <div className="container-custom">
          <div className="contact-grid" ref={formRef}>
            {/* Left - Image & Info */}
            <div className={`contact-left ${formVisible ? "visible" : ""}`}>
              <div className="contact-image-wrapper">
                <img src="/images/contact-side.jpg" alt="RJ Roadside Assistance" className="contact-side-image" />
                <div className="contact-image-overlay" />
                <div className="contact-image-content">
                  <h3 className="contact-image-title">RJ Roadside Assistance</h3>
                  <p className="contact-image-text">Professional roadside assistance available 24/7 across Jaipur</p>
                </div>
              </div>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="contact-info-label">Call Us</h4>
                    <a href="tel:+918955836514" className="contact-info-value">+91-8955836514</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="contact-info-label">Email Us</h4>
                    <a href={`mailto:${EMAIL_CONFIG.TO_EMAIL}`} className="contact-info-value">{EMAIL_CONFIG.TO_EMAIL}</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon contact-info-icon-whatsapp">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="contact-info-label">WhatsApp</h4>
                    <a href="https://wa.me/918955836514" target="_blank" rel="noopener noreferrer" className="contact-info-value">Chat with us</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="contact-info-label">Location</h4>
                    <span className="contact-info-value">Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className={`contact-right ${formVisible ? "visible" : ""}`}>
              <div className="contact-form-card">
                <h2 className="contact-form-title">Send us a Message</h2>
                <p className="contact-form-subtitle">Fill out the form below and we'll get back to you shortly.</p>

                {submitStatus.message && (
                  <div className={`contact-alert ${submitStatus.type === "success" ? "contact-alert-success" : "contact-alert-error"}`}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {submitStatus.type === "success" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="firstName" className="contact-label">First Name <span className="contact-required">*</span></label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="contact-input" placeholder="John" required />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="lastName" className="contact-label">Last Name <span className="contact-required">*</span></label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="contact-input" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email" className="contact-label">Email <span className="contact-required">*</span></label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="contact-input" placeholder="john@example.com" required />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contactDetails" className="contact-label">Phone Number <span className="contact-required">*</span></label>
                    <input type="text" id="contactDetails" name="contactDetails" value={formData.contactDetails} onChange={handleChange} className="contact-input" placeholder="+91 99299 83644" required />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="description" className="contact-label">Message <span className="contact-required">*</span></label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="5" className="contact-input contact-textarea" placeholder="Tell us how we can help you..." required />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="contact-submit-btn">
                    {isSubmitting ? (
                      <>
                        <svg className="contact-spinner" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Info Section */}
      <section className="contact-bottom section-padding bg-gray-50" ref={infoRef}>
        <div className="container-custom">
          <div className={`contact-bottom-grid ${infoVisible ? "visible" : ""}`}>
            <div className="contact-bottom-card">
              <div className="contact-bottom-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="contact-bottom-title">24/7 Available</h3>
              <p className="contact-bottom-desc">Our team is available round the clock for emergency roadside assistance.</p>
            </div>
            <div className="contact-bottom-card">
              <div className="contact-bottom-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="contact-bottom-title">Quick Response</h3>
              <p className="contact-bottom-desc">Average response time of 30 minutes across all Jaipur service areas.</p>
            </div>
            <div className="contact-bottom-card">
              <div className="contact-bottom-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="contact-bottom-title">Trusted Service</h3>
              <p className="contact-bottom-desc">500+ successful rescues with 100% customer satisfaction rate.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
