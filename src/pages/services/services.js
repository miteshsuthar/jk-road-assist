import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  CAR_BRANDS,
  CAR_MODELS,
  FUEL_TYPES,
  SERVICE_CATEGORIES,
  SERVICES,
  calculatePrice,
  getVehicleTypeLabel,
} from "../../constants/pricing";
import useScrollReveal from "../../hooks/useScrollReveal";
import "../../styles/services.css";

/* ========================================
   BRAND LOGO COMPONENT
   ======================================== */
const BrandLogo = ({ brand, isSelected, onClick }) => (
  <button
    className={`brand-card ${isSelected ? "brand-card-selected" : ""}`}
    onClick={onClick}
  >
    <div className="brand-logo" style={{ backgroundColor: brand.color }}>
      <span className="brand-logo-text">{brand.logo}</span>
    </div>
    <span className="brand-name">{brand.shortName}</span>
    {isSelected && (
      <div className="brand-check">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )}
  </button>
);

/* ========================================
   MODEL CARD COMPONENT
   ======================================== */
const ModelCard = ({ model, isSelected, onClick }) => (
  <button
    className={`model-card ${isSelected ? "model-card-selected" : ""}`}
    onClick={onClick}
  >
    <div className="model-icon">
      <CarSilhouette type={model.type} />
    </div>
    <span className="model-name">{model.name}</span>
    <span className="model-type">{getVehicleTypeLabel(model.type)}</span>
    {isSelected && (
      <div className="model-check">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )}
  </button>
);

/* ========================================
   CAR SILHOUETTE SVG
   ======================================== */
const CarSilhouette = ({ type }) => {
  if (type === "suv" || type === "muv") {
    return (
      <svg viewBox="0 0 80 40" fill="currentColor" className="car-svg">
        <path d="M8 32c0-2.2 1.8-4 4-4s4 1.8 4 4H8zm56 0c0-2.2 1.8-4 4-4s4 1.8 4 4h-8zM6 28h68c2 0 3-1 3-3v-5c0-2-1-3-3-3h-8l-6-8c-1-1.5-2.5-2-4-2H28c-2 0-3.5.5-5 2l-7 8H6c-2 0-3 1-3 3v5c0 2 1 3 3 3z" />
      </svg>
    );
  }
  if (type === "luxury") {
    return (
      <svg viewBox="0 0 80 40" fill="currentColor" className="car-svg">
        <path d="M8 33c0-2.2 1.8-4 4-4s4 1.8 4 4H8zm56 0c0-2.2 1.8-4 4-4s4 1.8 4 4h-8zM5 29h70c1.5 0 2.5-1 2.5-2.5v-4c0-1.5-1-2.5-2.5-2.5h-6l-8-9c-1-1.2-2.5-1.5-4-1.5H26c-1.5 0-3 .3-4 1.5l-9 9H5c-1.5 0-2.5 1-2.5 2.5v4C2.5 28 3.5 29 5 29z" />
      </svg>
    );
  }
  if (type === "sedan") {
    return (
      <svg viewBox="0 0 80 40" fill="currentColor" className="car-svg">
        <path d="M10 33c0-2.2 1.8-4 4-4s4 1.8 4 4h-8zm52 0c0-2.2 1.8-4 4-4s4 1.8 4 4h-8zM7 29h66c1.5 0 2.5-1 2.5-2.5V23c0-1.5-.5-2.5-2-3l-10-5c-1-.5-2-1.5-3-3l-5-4c-1-1-2.5-1-4-1H30c-1.5 0-3 0-4 1l-6 4c-1 1.5-2 2.5-3 3L7 20c-1.5.5-2 1.5-2 3v3.5C5 28 6 29 7 29z" />
      </svg>
    );
  }
  // hatchback (default)
  return (
    <svg viewBox="0 0 80 40" fill="currentColor" className="car-svg">
      <path d="M10 33c0-2.2 1.8-4 4-4s4 1.8 4 4h-8zm52 0c0-2.2 1.8-4 4-4s4 1.8 4 4h-8zM7 29h66c1.5 0 2.5-1 2.5-2.5V24c0-1.5-.5-2-2-2.5l-6-2c-1-.5-1.5-1-2-2l-6-7c-1-1.2-2.5-1.5-4-1.5H32c-2 0-3.5.3-5 1.5l-7 7c-.5 1-1 1.5-2 2l-5 2C11.5 22 11 22.5 11 24v2.5C11 28 12 29 13.5 29H7z" />
    </svg>
  );
};

/* ========================================
   FUEL TYPE BUTTON
   ======================================== */
const FuelButton = ({ fuel, isSelected, onClick }) => (
  <button
    className={`fuel-btn ${isSelected ? "fuel-btn-selected" : ""}`}
    onClick={onClick}
    style={{ "--fuel-color": fuel.color }}
  >
    <FuelIcon type={fuel.id} />
    <span>{fuel.name}</span>
  </button>
);

const FuelIcon = ({ type }) => {
  if (type === "diesel") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    );
  }
  if (type === "cng") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  );
};

/* ========================================
   SERVICE CARD COMPONENT
   ======================================== */
const ServiceCard = ({ service, vehicleType, fuelType, hasSelection, index }) => {
  const price = hasSelection
    ? calculatePrice(service, vehicleType, fuelType)
    : service.basePrice;

  return (
    <div className="sp-service-card" style={{ animationDelay: `${index * 60}ms` }}>
      {service.popular && <div className="sp-card-badge">Popular</div>}

      <div className="sp-card-header">
        <div className="sp-card-icon-wrap">
          <ServiceIcon serviceId={service.id} />
        </div>
        <div className="sp-card-rating">
          <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{service.rating}</span>
          <span className="sp-card-reviews">({service.reviews})</span>
        </div>
      </div>

      <h3 className="sp-card-title">{service.name}</h3>
      <p className="sp-card-desc">{service.shortDesc}</p>

      <div className="sp-card-meta">
        <span className="sp-card-duration">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {service.duration}
        </span>
      </div>

      <div className="sp-card-includes">
        {service.includes.map((item, i) => (
          <div key={i} className="sp-card-include-item">
            <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="sp-card-footer">
        <div className="sp-card-price">
          {!hasSelection && <span className="sp-price-from">From</span>}
          <span className="sp-price-amount">
            <span className="sp-price-symbol">&#8377;</span>
            {price.toLocaleString("en-IN")}
          </span>
          {!hasSelection && <span className="sp-price-note">*select car for exact price</span>}
        </div>

        <div className="sp-card-actions">
          <a href="tel:+918955836514" className="sp-btn-book">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book Now
          </a>
          {service.link && (
            <Link to={service.link} className="sp-btn-details">
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

/* ========================================
   SERVICE ICON COMPONENT
   ======================================== */
const ServiceIcon = ({ serviceId }) => {
  const icons = {
    "battery-jumpstart": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    "tyre-puncture": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    ),
    "fuel-delivery": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    "car-towing": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-1a3 3 0 110 0H9a3 3 0 110 0H7V7zm0 0V5a2 2 0 00-2-2H4" />
      </svg>
    ),
    "key-lockout": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    "battery-replacement": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1zm5-3h6v3H9V4zm2 6v4m-2-2h4" />
      </svg>
    ),
    "motorcycle-towing": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4M6 18l6-8 6 8" />
      </svg>
    ),
    "special-vehicle-towing": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    "minor-repair": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    "breakdown-help": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    "roadside-assistance": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    "emergency-breakdown": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    "tyre-change": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
      </svg>
    ),
    "battery-check": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    "car-fluid-leakage": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  };
  return icons[serviceId] || icons["roadside-assistance"];
};

/* ========================================
   CATEGORY ICON COMPONENT
   ======================================== */
const CategoryIcon = ({ icon }) => {
  const icons = {
    grid: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    alert: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    truck: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12l2 5h-1a3 3 0 110 0H9a3 3 0 110 0H7V7zm0 0V5a2 2 0 00-2-2H4" />
      </svg>
    ),
    wrench: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35" />
      </svg>
    ),
    battery: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tyre: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
      </svg>
    ),
  };
  return icons[icon] || icons.grid;
};

/* ========================================
   STEP INDICATOR
   ======================================== */
const StepIndicator = ({ currentStep, totalSteps }) => (
  <div className="step-indicator">
    {Array.from({ length: totalSteps }, (_, i) => (
      <div key={i} className="step-item">
        <div
          className={`step-dot ${
            i < currentStep ? "step-dot-done" : i === currentStep ? "step-dot-active" : ""
          }`}
        >
          {i < currentStep ? (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span>{i + 1}</span>
          )}
        </div>
        <span className="step-label">
          {["Brand", "Model", "Fuel"][i]}
        </span>
        {i < totalSteps - 1 && <div className={`step-line ${i < currentStep ? "step-line-done" : ""}`} />}
      </div>
    ))}
  </div>
);

/* ========================================
   MAIN SERVICES PAGE
   ======================================== */
const ServicesPage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [selectionStep, setSelectionStep] = useState(0); // 0=brand, 1=model, 2=fuel

  const [heroRef, heroVisible] = useScrollReveal();
  const [selectorRef, selectorVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const modelSectionRef = useRef(null);
  const fuelSectionRef = useRef(null);
  const pricingSectionRef = useRef(null);

  // Smooth scroll helper
  const scrollToRef = useCallback((ref) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }, []);

  // Brand selection
  const handleBrandSelect = useCallback((brand) => {
    setSelectedBrand(brand);
    setSelectedModel(null);
    setSelectedFuel(null);
    setSelectionStep(1);
    scrollToRef(modelSectionRef);
  }, [scrollToRef]);

  // Model selection
  const handleModelSelect = useCallback((model) => {
    setSelectedModel(model);
    setSelectedFuel(null);
    setSelectionStep(2);
    scrollToRef(fuelSectionRef);
  }, [scrollToRef]);

  // Fuel selection
  const handleFuelSelect = useCallback((fuel) => {
    setSelectedFuel(fuel);
    setSelectionStep(3);
    scrollToRef(pricingSectionRef);
  }, [scrollToRef]);

  // Reset selection
  const resetSelection = useCallback(() => {
    setSelectedBrand(null);
    setSelectedModel(null);
    setSelectedFuel(null);
    setSelectionStep(0);
  }, []);

  // Filter brands by search
  const displayBrands = showAllBrands
    ? CAR_BRANDS
    : CAR_BRANDS.filter((b) => b.popular);

  const filteredBrands = searchQuery
    ? CAR_BRANDS.filter((b) =>
        b.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : displayBrands;

  // Get models for selected brand
  const models = selectedBrand ? CAR_MODELS[selectedBrand.id] || [] : [];

  // Get available fuel types for selected model
  const availableFuels = selectedModel
    ? FUEL_TYPES.filter((f) => selectedModel.fuelTypes.includes(f.id))
    : [];

  // Filter services by category
  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  // Has complete selection
  const hasSelection = selectedBrand && selectedModel && selectedFuel;

  return (
    <div className="services-page">
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="sp-hero" ref={heroRef}>
        <div className="sp-hero-bg" />
        <div className="sp-hero-overlay" />
        <div className="container-custom relative z-10">
          <div className={`sp-hero-content ${heroVisible ? "visible" : ""}`}>
            <span className="sp-hero-badge">
              <span className="sp-hero-badge-dot" />
              15+ Services Available
            </span>
            <h1 className="sp-hero-title">
              Roadside Assistance<br />
              <span className="sp-hero-title-accent">Services & Pricing</span>
            </h1>
            <p className="sp-hero-subtitle">
              Select your car to see exact prices. Professional help for every roadside emergency.
            </p>
            <div className="sp-hero-stats">
              <div className="sp-hero-stat">
                <span className="sp-hero-stat-number">15+</span>
                <span className="sp-hero-stat-label">Services</span>
              </div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat">
                <span className="sp-hero-stat-number">30min</span>
                <span className="sp-hero-stat-label">Avg Response</span>
              </div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat">
                <span className="sp-hero-stat-number">24/7</span>
                <span className="sp-hero-stat-label">Available</span>
              </div>
              <div className="sp-hero-stat-divider" />
              <div className="sp-hero-stat">
                <span className="sp-hero-stat-number">500+</span>
                <span className="sp-hero-stat-label">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sp-hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120V60C240 0 480 0 720 30C960 60 1200 60 1440 30V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ========================================
          CAR SELECTOR SECTION
          ======================================== */}
      <section className="sp-selector-section" ref={selectorRef}>
        <div className="container-custom">
          <div className={`sp-selector ${selectorVisible ? "visible" : ""}`}>
            <div className="sp-selector-header">
              <div className="sp-selector-title-row">
                <h2 className="sp-selector-title">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Select Your Car
                </h2>
                {selectionStep > 0 && (
                  <button className="sp-reset-btn" onClick={resetSelection}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Reset
                  </button>
                )}
              </div>
              <p className="sp-selector-desc">Choose your vehicle to get accurate service pricing</p>
              <StepIndicator currentStep={selectionStep} totalSteps={3} />
            </div>

            {/* Selection Summary Bar */}
            {selectionStep > 0 && (
              <div className="sp-selection-summary">
                {selectedBrand && (
                  <div className="sp-summary-chip">
                    <div className="sp-summary-chip-logo" style={{ backgroundColor: selectedBrand.color }}>
                      {selectedBrand.logo}
                    </div>
                    <span>{selectedBrand.name}</span>
                    <button onClick={() => { setSelectedBrand(null); setSelectedModel(null); setSelectedFuel(null); setSelectionStep(0); }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
                {selectedModel && (
                  <div className="sp-summary-chip">
                    <span>{selectedModel.name}</span>
                    <button onClick={() => { setSelectedModel(null); setSelectedFuel(null); setSelectionStep(1); }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
                {selectedFuel && (
                  <div className="sp-summary-chip">
                    <span>{selectedFuel.name}</span>
                    <button onClick={() => { setSelectedFuel(null); setSelectionStep(2); }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* STEP 1: Brand Selection */}
            <div className={`sp-step ${selectionStep === 0 ? "sp-step-active" : selectionStep > 0 ? "sp-step-done" : ""}`}>
              <h3 className="sp-step-title">
                <span className="sp-step-num">1</span>
                Select Manufacturer
              </h3>

              {selectionStep === 0 && (
                <>
                  <div className="sp-search-bar">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search car brand..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="sp-search-input"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")} className="sp-search-clear">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="sp-brands-grid">
                    {filteredBrands.map((brand, index) => (
                      <BrandLogo
                        key={brand.id}
                        brand={brand}
                        isSelected={selectedBrand?.id === brand.id}
                        onClick={() => handleBrandSelect(brand)}
                      />
                    ))}
                  </div>

                  {!searchQuery && (
                    <button
                      className="sp-show-more-btn"
                      onClick={() => setShowAllBrands(!showAllBrands)}
                    >
                      {showAllBrands ? "Show Popular Brands" : `+ ${CAR_BRANDS.length - displayBrands.length} More Brands`}
                    </button>
                  )}
                </>
              )}
            </div>

            {/* STEP 2: Model Selection */}
            <div
              ref={modelSectionRef}
              className={`sp-step ${selectionStep === 1 ? "sp-step-active" : selectionStep > 1 ? "sp-step-done" : "sp-step-hidden"}`}
            >
              <h3 className="sp-step-title">
                <span className="sp-step-num">2</span>
                Select Model
                {selectedBrand && <span className="sp-step-brand">({selectedBrand.name})</span>}
              </h3>

              {selectionStep === 1 && (
                <div className="sp-models-grid">
                  {models.map((model) => (
                    <ModelCard
                      key={model.id}
                      model={model}
                      isSelected={selectedModel?.id === model.id}
                      onClick={() => handleModelSelect(model)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* STEP 3: Fuel Selection */}
            <div
              ref={fuelSectionRef}
              className={`sp-step ${selectionStep === 2 ? "sp-step-active" : selectionStep > 2 ? "sp-step-done" : "sp-step-hidden"}`}
            >
              <h3 className="sp-step-title">
                <span className="sp-step-num">3</span>
                Select Fuel Type
                {selectedModel && <span className="sp-step-brand">({selectedModel.name})</span>}
              </h3>

              {selectionStep === 2 && (
                <div className="sp-fuel-grid">
                  {availableFuels.map((fuel) => (
                    <FuelButton
                      key={fuel.id}
                      fuel={fuel}
                      isSelected={selectedFuel?.id === fuel.id}
                      onClick={() => handleFuelSelect(fuel)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Selection Complete Message */}
            {hasSelection && (
              <div className="sp-selection-complete">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Showing prices for <strong>{selectedBrand.name} {selectedModel.name}</strong> ({selectedFuel.name})
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES & PRICING SECTION
          ======================================== */}
      <section className="sp-pricing-section section-padding" ref={servicesRef}>
        <div className="container-custom" ref={pricingSectionRef}>
          <div className={`section-header ${servicesVisible ? "visible" : ""}`}>
            <span className="section-badge">Our Services</span>
            <h2 className="section-title text-gray-900">
              {hasSelection
                ? `Services for ${selectedBrand.name} ${selectedModel.name}`
                : "All Roadside Assistance Services"}
            </h2>
            <p className="section-subtitle">
              {hasSelection
                ? "Prices shown are for your selected vehicle. Book now or call for instant help."
                : "Select your car above for exact pricing, or browse all services below."}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="sp-category-tabs">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`sp-category-tab ${activeCategory === cat.id ? "sp-category-tab-active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <CategoryIcon icon={cat.icon} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Not selected banner */}
          {!hasSelection && (
            <div className="sp-select-car-banner">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Select your car above to view exact prices for your vehicle</span>
            </div>
          )}

          {/* Service Cards Grid */}
          <div className={`sp-services-grid ${servicesVisible ? "visible" : ""}`}>
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                vehicleType={selectedModel?.type}
                fuelType={selectedFuel?.id}
                hasSelection={hasSelection}
                index={index}
              />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="sp-no-services">
              <p>No services found in this category.</p>
              <button onClick={() => setActiveCategory("all")} className="sp-btn-show-all">
                Show All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE US SECTION
          ======================================== */}
      <section className="sp-why-section">
        <div className="container-custom">
          <div className="sp-why-grid">
            <div className="sp-why-card">
              <div className="sp-why-icon sp-why-icon-blue">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>30 Min Response</h3>
              <p>Average arrival time across Jaipur</p>
            </div>
            <div className="sp-why-card">
              <div className="sp-why-icon sp-why-icon-green">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Certified Mechanics</h3>
              <p>Trained professionals you can trust</p>
            </div>
            <div className="sp-why-card">
              <div className="sp-why-icon sp-why-icon-amber">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Transparent Pricing</h3>
              <p>No hidden fees, upfront quotes always</p>
            </div>
            <div className="sp-why-card">
              <div className="sp-why-icon sp-why-icon-red">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3>24/7 Available</h3>
              <p>Round-the-clock emergency support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="sp-cta" ref={ctaRef}>
        <div className="sp-cta-bg" />
        <div className="container-custom relative z-10">
          <div className={`sp-cta-content ${ctaVisible ? "visible" : ""}`}>
            <h2 className="sp-cta-title">Need Immediate Help?</h2>
            <p className="sp-cta-subtitle">
              Don't wait — our mechanics are ready to assist you right now.<br />
              Call us for instant roadside assistance anywhere in Jaipur.
            </p>
            <div className="sp-cta-actions">
              <a href="tel:+918955836514" className="sp-cta-btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91-8955836514
              </a>
              <a
                href="https://wa.me/918955836514?text=Hi%2C%20I%20need%20roadside%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="sp-cta-btn-whatsapp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <Link to="/track-service" className="sp-cta-btn-whatsapp" style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Track Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
