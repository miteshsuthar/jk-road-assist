import React from "react";
import { Link } from "react-router-dom";
import "../../styles/not-found.css";

const NotFound = () => (
  <div className="notfound-page">
    <div className="notfound-content">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-desc">
        The page you're looking for doesn't exist or has been moved.
        Don't worry — we're still here to help you on the road!
      </p>
      <div className="notfound-actions">
        <Link to="/" className="notfound-btn-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
          </svg>
          Back to Home
        </Link>
        <a href="tel:+918955836514" className="notfound-btn-outline">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call for Help
        </a>
      </div>
      <div className="notfound-links">
        <span>Quick links:</span>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  </div>
);

export default NotFound;
