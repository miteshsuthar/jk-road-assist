import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";
import "../../styles/track-service.css";

const DEMO_TRACKING_DATA = {
  "RJ-2024-001": {
    customerName: "Rahul Sharma",
    service: "Flat Tyre Assistance",
    vehicle: "Maruti Suzuki Swift (RJ-14-AB-1234)",
    mechanic: { name: "Vikram Singh", phone: "+91-89558-36514", rating: 4.8, jobs: 320 },
    location: "Near Jagatpura Flyover, Jaipur",
    eta: 18,
    currentStep: 2,
    requestTime: "10:35 AM",
  },
  "RJ-2024-002": {
    customerName: "Priya Gupta",
    service: "Battery Jump Start",
    vehicle: "Hyundai Creta (RJ-14-CD-5678)",
    mechanic: { name: "Ramesh Kumar", phone: "+91-89558-36514", rating: 4.9, jobs: 485 },
    location: "Mansarovar Metro Station, Jaipur",
    eta: 8,
    currentStep: 3,
    requestTime: "11:20 AM",
  },
  "RJ-2024-003": {
    customerName: "Amit Verma",
    service: "Towing Service",
    vehicle: "Honda City (RJ-14-EF-9012)",
    mechanic: { name: "Suresh Meena", phone: "+91-89558-36514", rating: 4.7, jobs: 210 },
    location: "MI Road, Jaipur",
    eta: 0,
    currentStep: 4,
    requestTime: "09:15 AM",
  },
};

const TRACKING_STEPS = [
  { label: "Request Received", description: "Your service request has been received" },
  { label: "Mechanic Assigned", description: "A mechanic has been assigned to your request" },
  { label: "On The Way", description: "Mechanic is en route to your location" },
  { label: "Arrived", description: "Mechanic has arrived at your location" },
  { label: "Completed", description: "Service has been completed successfully" },
];

const TrackService = () => {
  const [trackingId, setTrackingId] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [heroRef, heroVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Trigger result animation when tracking data loads
  useEffect(() => {
    if (trackingData) {
      setShowResult(false);
      const timer = setTimeout(() => setShowResult(true), 50);
      return () => clearTimeout(timer);
    } else {
      setShowResult(false);
    }
  }, [trackingData]);

  const handleSearch = (e) => {
    e.preventDefault();
    const id = trackingId.trim().toUpperCase();
    if (!id) {
      setError("Please enter a tracking ID");
      return;
    }

    setIsSearching(true);
    setError("");
    setTrackingData(null);

    // Simulate API call
    setTimeout(() => {
      const data = DEMO_TRACKING_DATA[id];
      if (data) {
        setTrackingData(data);
      } else {
        setError("No service request found. Try demo IDs: RJ-2024-001, RJ-2024-002, or RJ-2024-003");
      }
      setIsSearching(false);
    }, 1200);
  };

  const handleDemoClick = (id) => {
    setTrackingId(id);
    setError("");
    setTrackingData(null);
    setIsSearching(true);

    setTimeout(() => {
      setTrackingData(DEMO_TRACKING_DATA[id]);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="track-page">
      {/* Hero */}
      <section className="track-hero">
        <div className="track-hero-overlay" />
        <div className="container-custom relative z-10">
          <nav className="track-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Track Service</span>
          </nav>
          <div className="track-hero-content">
            <span className="track-hero-badge">
              <span className="track-hero-badge-dot" />
              Live Tracking
            </span>
            <h1 className="track-hero-title">Track Your Service</h1>
            <p className="track-hero-subtitle">
              Enter your tracking ID to see real-time status of your roadside assistance request.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="track-search section-padding" ref={heroRef}>
        <div className="container-custom">
          <div className={`track-search-card ${heroVisible ? "visible" : ""}`}>
            <form onSubmit={handleSearch} className="track-search-form">
              <div className="track-input-wrapper">
                <svg className="track-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => { setTrackingId(e.target.value); setError(""); }}
                  placeholder="Enter Tracking ID (e.g., RJ-2024-001)"
                  className="track-input"
                />
              </div>
              <button type="submit" disabled={isSearching} className="track-search-btn">
                {isSearching ? (
                  <>
                    <svg className="track-spinner" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                    </svg>
                    Searching...
                  </>
                ) : (
                  "Track Now"
                )}
              </button>
            </form>

            {error && (
              <div className="track-error">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="track-demo-ids">
              <span className="track-demo-label">Try demo:</span>
              {Object.keys(DEMO_TRACKING_DATA).map((id) => (
                <button key={id} onClick={() => handleDemoClick(id)} className="track-demo-btn">
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      {trackingData && (
        <section className="track-result section-padding">
          <div className="container-custom">
            <div className={`track-result-grid ${showResult ? "visible" : ""}`}>
              {/* Left - Status Timeline */}
              <div className="track-timeline-card">
                <h2 className="track-card-title">Service Status</h2>
                <div className="track-timeline">
                  {TRACKING_STEPS.map((step, index) => {
                    const isCompleted = index <= trackingData.currentStep;
                    const isCurrent = index === trackingData.currentStep;
                    return (
                      <div key={index} className={`track-step ${isCompleted ? "track-step-completed" : ""} ${isCurrent ? "track-step-current" : ""}`}>
                        <div className="track-step-indicator">
                          <div className="track-step-dot">
                            {isCompleted && !isCurrent ? (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : isCurrent ? (
                              <span className="track-step-pulse" />
                            ) : null}
                          </div>
                          {index < TRACKING_STEPS.length - 1 && <div className="track-step-line" />}
                        </div>
                        <div className="track-step-content">
                          <h4 className="track-step-label">{step.label}</h4>
                          <p className="track-step-desc">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Details */}
              <div className="track-details-col">
                {/* Service Info */}
                <div className="track-info-card">
                  <h2 className="track-card-title">Service Details</h2>
                  <div className="track-info-grid">
                    <div className="track-info-item">
                      <span className="track-info-label">Service</span>
                      <span className="track-info-value">{trackingData.service}</span>
                    </div>
                    <div className="track-info-item">
                      <span className="track-info-label">Vehicle</span>
                      <span className="track-info-value">{trackingData.vehicle}</span>
                    </div>
                    <div className="track-info-item">
                      <span className="track-info-label">Location</span>
                      <span className="track-info-value">{trackingData.location}</span>
                    </div>
                    <div className="track-info-item">
                      <span className="track-info-label">Requested At</span>
                      <span className="track-info-value">{trackingData.requestTime}</span>
                    </div>
                  </div>
                </div>

                {/* ETA Card */}
                {trackingData.currentStep < 4 && (
                  <div className="track-eta-card">
                    <div className="track-eta-icon">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="track-eta-label">Estimated Arrival</p>
                      <p className="track-eta-value">
                        {trackingData.eta > 0 ? `${trackingData.eta} minutes` : "Arrived"}
                      </p>
                    </div>
                  </div>
                )}

                {/* Mechanic Card */}
                <div className="track-mechanic-card">
                  <h2 className="track-card-title">Your Mechanic</h2>
                  <div className="track-mechanic-info">
                    <div className="track-mechanic-avatar">
                      {trackingData.mechanic.name.charAt(0)}
                    </div>
                    <div className="track-mechanic-details">
                      <h3 className="track-mechanic-name">{trackingData.mechanic.name}</h3>
                      <div className="track-mechanic-stats">
                        <span className="track-mechanic-rating">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {trackingData.mechanic.rating}
                        </span>
                        <span className="track-mechanic-jobs">{trackingData.mechanic.jobs}+ jobs</span>
                      </div>
                    </div>
                  </div>
                  <a href={`tel:${trackingData.mechanic.phone}`} className="track-call-mechanic">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Mechanic
                  </a>
                </div>

                {/* Completed Card */}
                {trackingData.currentStep === 4 && (
                  <div className="track-completed-card">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="track-completed-title">Service Completed!</h3>
                    <p className="track-completed-desc">Your roadside assistance has been completed. Thank you for choosing RJ Roadside Assistance.</p>
                    <Link to="/contact" className="track-feedback-btn">Share Feedback</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works (shown when no results) */}
      {!trackingData && !isSearching && (
        <section className="track-how section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">How Live Tracking Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Stay informed every step of the way with our real-time service tracking.</p>
            </div>
            <div className="track-how-grid">
              {[
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "Request Service", desc: "Call us or submit a request and receive your tracking ID instantly." },
                { icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122", title: "Track in Real-Time", desc: "Enter your tracking ID to see live updates on mechanic location and ETA." },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Get Assisted", desc: "Our expert mechanic arrives and resolves your issue on the spot." },
              ].map((item, i) => (
                <div key={i} className="track-how-card">
                  <div className="track-how-number">{i + 1}</div>
                  <div className="track-how-icon">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="track-how-title">{item.title}</h3>
                  <p className="track-how-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TrackService;
