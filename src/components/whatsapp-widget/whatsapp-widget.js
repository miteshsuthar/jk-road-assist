import React, { useState, useEffect } from "react";
import "../../styles/whatsapp-widget.css";

const WHATSAPP_NUMBER = "918955836514";

const SERVICE_OPTIONS = [
  { value: "battery-jumpstart", label: "Battery Jumpstart" },
  { value: "flat-tyre", label: "Flat Tyre Repair" },
  { value: "key-lockout", label: "Key Lockout" },
  { value: "towing", label: "Towing Service" },
  { value: "mechanical-fault", label: "Mechanical Repair" },
  { value: "emergency-breakdown", label: "Emergency Breakdown" },
  { value: "rsa-membership", label: "RSA Membership" },
  { value: "other", label: "Other / General Query" },
];

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    vehicle: "",
    location: "",
    message: "",
  });

  // Close widget on route change
  useEffect(() => {
    const handleClose = () => { setIsOpen(false); setStep(1); };
    window.addEventListener("popstate", handleClose);
    return () => window.removeEventListener("popstate", handleClose);
  }, []);

  // Lock body scroll when widget open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setStep(1);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceSelect = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
    setStep(2);
  };

  const buildWhatsAppMessage = () => {
    const selectedService = SERVICE_OPTIONS.find((s) => s.value === formData.service);
    let msg = `Hi, I need roadside assistance.\n\n`;
    msg += `*Service:* ${selectedService ? selectedService.label : "General Query"}\n`;
    if (formData.name) msg += `*Name:* ${formData.name}\n`;
    if (formData.phone) msg += `*Phone:* ${formData.phone}\n`;
    if (formData.vehicle) msg += `*Vehicle:* ${formData.vehicle}\n`;
    if (formData.location) msg += `*Location:* ${formData.location}\n`;
    if (formData.message) msg += `*Details:* ${formData.message}\n`;
    return encodeURIComponent(msg);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");
    // Reset after sending
    setFormData({ name: "", phone: "", service: "", vehicle: "", location: "", message: "" });
    setStep(1);
    setIsOpen(false);
  };

  const handleQuickChat = () => {
    const msg = encodeURIComponent("Hi, I need roadside assistance. Please help!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleToggle}
        className={`wa-floating-btn ${isOpen ? "wa-floating-btn-active" : ""}`}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="wa-widget">
          {/* Header */}
          <div className="wa-widget-header">
            <div className="wa-widget-header-info">
              <div className="wa-widget-avatar">
                <img src="/images/logo.jpg" alt="RJ" className="wa-widget-avatar-img" />
                <span className="wa-widget-online-dot" />
              </div>
              <div>
                <h3 className="wa-widget-name">RJ Roadside Assistance</h3>
                <p className="wa-widget-status">
                  <span className="wa-widget-status-dot" />
                  Online — Typically replies instantly
                </p>
              </div>
            </div>
            <button onClick={handleToggle} className="wa-widget-close" aria-label="Close">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="wa-widget-body">
            {/* Welcome Message */}
            <div className="wa-chat-bubble">
              <p className="wa-chat-text">
                Hello! 👋 Welcome to <strong>RJ Roadside Assistance</strong>. How can we help you today?
              </p>
              <span className="wa-chat-time">24/7 Available</span>
            </div>

            {step === 1 && (
              <>
                {/* Quick Chat Button */}
                <button onClick={handleQuickChat} className="wa-quick-chat-btn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Quick Chat — Start Conversation Now
                </button>

                <p className="wa-or-text">Or select a service to get started:</p>

                {/* Service Selection */}
                <div className="wa-service-grid">
                  {SERVICE_OPTIONS.map((service) => (
                    <button
                      key={service.value}
                      onClick={() => handleServiceSelect(service.value)}
                      className="wa-service-option"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <form onSubmit={handleSend} className="wa-form">
                <div className="wa-form-selected">
                  <span>Selected: <strong>{SERVICE_OPTIONS.find((s) => s.value === formData.service)?.label}</strong></span>
                  <button type="button" onClick={() => setStep(1)} className="wa-form-change">Change</button>
                </div>

                <div className="wa-form-field">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="wa-form-input"
                    required
                  />
                </div>
                <div className="wa-form-field">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="wa-form-input"
                    required
                  />
                </div>
                <div className="wa-form-field">
                  <input
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="Vehicle (e.g., Maruti Swift)"
                    className="wa-form-input"
                  />
                </div>
                <div className="wa-form-field">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Your Location"
                    className="wa-form-input"
                  />
                </div>
                <div className="wa-form-field">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your issue (optional)"
                    className="wa-form-input wa-form-textarea"
                    rows="2"
                  />
                </div>

                <button type="submit" className="wa-send-btn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="wa-widget-footer">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span>End-to-end encrypted by WhatsApp</span>
          </div>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isOpen && <div className="wa-backdrop" onClick={handleToggle} />}
    </>
  );
};

export default WhatsAppWidget;
