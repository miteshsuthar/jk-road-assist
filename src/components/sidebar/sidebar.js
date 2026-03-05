import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const roadsideServices = [
    { path: "/services/battery-jumpstart", label: "Battery Jumpstart", icon: "battery" },
    { path: "/services/flat-tyre", label: "Flat Tyre", icon: "tyre" },
    { path: "/services/key-lockout", label: "Key Lockout", icon: "key" },
    { path: "/services/towing", label: "Towing Services", icon: "tow" },
    { path: "/services/mechanical-fault", label: "Mechanical Fault", icon: "wrench" },
    { path: "/services/emergency-breakdown", label: "Emergency Breakdown", icon: "emergency" },
  ];

  return (
    <>
      <div className="sidebar-backdrop" onClick={onClose}></div>
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Quick Services</h2>
          <button onClick={onClose} className="sidebar-close" aria-label="Close sidebar">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">Roadside Assistance</h3>
            <div className="sidebar-links">
              {roadsideServices.map((service) => (
                <Link key={service.path} to={service.path} className="sidebar-link" onClick={onClose}>
                  <span className="sidebar-link-dot"></span>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-section-title">Quick Links</h3>
            <div className="sidebar-links">
              <Link to="/about" className="sidebar-link" onClick={onClose}>
                <span className="sidebar-link-dot"></span>
                About Us
              </Link>
              <Link to="/contact" className="sidebar-link" onClick={onClose}>
                <span className="sidebar-link-dot"></span>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <a href="tel:+918955836514" className="sidebar-call-btn">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Emergency: +91-8955836514
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
