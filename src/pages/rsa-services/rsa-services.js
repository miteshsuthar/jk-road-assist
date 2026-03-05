import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/rsa-services.css";

const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
};

const useCounter = (target, isVisible, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
};

const FaqItem = ({ question, answer, isOpen, onClick, index, isVisible }) => (
  <div
    className={`rsa-faq-item ${isOpen ? "rsa-faq-item-open" : ""} ${isVisible ? "visible" : ""}`}
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <button className="rsa-faq-question" onClick={onClick} aria-expanded={isOpen}>
      <span>{question}</span>
      <svg className={`rsa-faq-chevron ${isOpen ? "rsa-faq-chevron-open" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`rsa-faq-answer ${isOpen ? "rsa-faq-answer-open" : ""}`}>
      <p>{answer}</p>
    </div>
  </div>
);

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "1,999",
    period: "/year",
    color: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    features: {
      "Battery Jumpstart": true,
      "Flat Tyre Assistance": true,
      "Key Lockout": false,
      "Towing Service": false,
      "On-site Repairs": false,
      "Services per Year": "2",
      "Response Time": "30 min",
      "WhatsApp Support": false,
      "Dedicated Manager": false,
      "Vehicle Health Check": false,
    },
  },
  {
    id: "standard",
    name: "Standard",
    price: "3,999",
    period: "/year",
    popular: true,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb, #1e40af)",
    features: {
      "Battery Jumpstart": true,
      "Flat Tyre Assistance": true,
      "Key Lockout": true,
      "Towing Service": "Up to 25km",
      "On-site Repairs": "Basic",
      "Services per Year": "5",
      "Response Time": "20 min",
      "WhatsApp Support": true,
      "Dedicated Manager": false,
      "Vehicle Health Check": false,
    },
  },
  {
    id: "premium",
    name: "Premium",
    price: "6,999",
    period: "/year",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    features: {
      "Battery Jumpstart": true,
      "Flat Tyre Assistance": true,
      "Key Lockout": true,
      "Towing Service": "Up to 50km",
      "On-site Repairs": "Full",
      "Services per Year": "Unlimited",
      "Response Time": "15 min",
      "WhatsApp Support": true,
      "Dedicated Manager": true,
      "Vehicle Health Check": true,
    },
  },
];

const FEATURE_LIST = [
  "Battery Jumpstart", "Flat Tyre Assistance", "Key Lockout", "Towing Service",
  "On-site Repairs", "Services per Year", "Response Time", "WhatsApp Support",
  "Dedicated Manager", "Vehicle Health Check",
];

const BENEFITS = [
  { title: "Instant SOS", desc: "One-tap emergency call to dispatch nearest mechanic", icon: "bolt" },
  { title: "GPS Tracking", desc: "Track your mechanic's live location on the way", icon: "location" },
  { title: "Cashless Service", desc: "No cash needed - all covered under your membership", icon: "card" },
  { title: "Family Coverage", desc: "Add family members' vehicles at discounted rates", icon: "users" },
  { title: "Insurance Help", desc: "We coordinate with your insurance for covered repairs", icon: "shield" },
  { title: "Annual Checkup", desc: "Complimentary annual vehicle health inspection", icon: "check" },
];

const PAYMENT_METHODS = [
  { name: "UPI / QR Pay", desc: "Google Pay, PhonePe, Paytm", icon: "upi" },
  { name: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay", icon: "card" },
  { name: "Net Banking", desc: "All major Indian banks", icon: "bank" },
  { name: "Cash / Cheque", desc: "Pay on activation", icon: "cash" },
];

const JOURNEY_STEPS = [
  { num: "01", title: "Choose Plan", desc: "Select your ideal membership tier" },
  { num: "02", title: "Make Payment", desc: "Pay securely via UPI, card or cash" },
  { num: "03", title: "Get Activated", desc: "Receive membership card within 24hrs" },
  { num: "04", title: "Drive Worry-Free", desc: "Call anytime for instant roadside help" },
];

const COVERAGE_AREAS = [
  "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Jagatpura",
  "Tonk Road", "Ajmer Road", "Jhotwara", "Sanganer",
  "Sitapura", "Pratap Nagar", "C-Scheme", "MI Road",
  "Bani Park", "Raja Park", "Sodala", "Durgapura",
];

const FAQS = [
  { question: "What is RSA (Roadside Assistance)?", answer: "RSA stands for Roadside Assistance. It is an annual membership service that provides you with on-demand help during vehicle breakdowns, flat tyres, battery failures, lockouts, and other emergencies. With an RSA membership, you get priority access to our services at no additional cost (within your plan limits)." },
  { question: "How do I activate my RSA membership?", answer: "After subscribing to a plan, you will receive a confirmation call within 24 hours. Our team will verify your vehicle details and issue your membership card with a unique member ID. Your membership is active from the date of confirmation and valid for 12 months." },
  { question: "Can I add multiple vehicles to my RSA plan?", answer: "Yes! You can add multiple vehicles under a single membership. The Basic plan covers 1 vehicle, the Standard plan covers up to 2 vehicles, and the Premium plan covers up to 3 vehicles. Additional vehicles can be added at a nominal extra charge." },
  { question: "What payment methods do you accept?", answer: "We accept UPI (Google Pay, PhonePe, Paytm), credit/debit cards (Visa, Mastercard, RuPay), net banking from all major Indian banks, and cash/cheque payment on activation. All online payments are processed securely." },
  { question: "How does the renewal process work?", answer: "We will notify you 30 days before your membership expires via phone call and WhatsApp. You can renew online or by calling us. Early renewal (before expiry) comes with a 10% loyalty discount on all plans." },
  { question: "What is the emergency contact number?", answer: "RSA members can call our dedicated helpline at +91-8955836514 anytime, 24/7. Premium members also get a dedicated WhatsApp line for instant communication with their account manager." },
];

const BenefitIcon = ({ type }) => {
  const icons = {
    bolt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    location: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
    card: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[type] || icons.bolt}
    </svg>
  );
};

const RsaServices = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [openFaq, setOpenFaq] = useState(null);

  const [compareRef, compareVisible] = useScrollReveal();
  const [benefitsRef, benefitsVisible] = useScrollReveal();
  const [journeyRef, journeyVisible] = useScrollReveal();
  const [paymentRef, paymentVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [coverageRef, coverageVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const memberCount = useCounter(500, statsVisible);
  const rescueCount = useCounter(2000, statsVisible);
  const satisfactionCount = useCounter(100, statsVisible);
  const responseCount = useCounter(15, statsVisible);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const activePlan = PLANS.find(p => p.id === selectedPlan) || PLANS[1];

  return (
    <div className="rsa-page">
      {/* Hero */}
      <section className="rsa-hero" style={{ backgroundImage: "url(/images/rsa/rsa-hero.jpg)" }}>
        <div className="rsa-hero-overlay" />
        <div className="container-custom relative z-10">
          <nav className="rsa-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>RSA Membership</span>
          </nav>
          <div className="rsa-hero-content">
            <span className="rsa-hero-badge">
              <span className="rsa-hero-badge-dot" />
              Annual Membership Plans
            </span>
            <h1 className="rsa-hero-title">
              Never Get <span className="rsa-hero-highlight">Stranded</span> Again
            </h1>
            <p className="rsa-hero-subtitle">
              Join 500+ drivers who trust RJ Roadside Assistance for 24/7 roadside protection in Jaipur.
            </p>
            <div className="rsa-hero-actions">
              <a href="#rsa-compare" className="rsa-hero-btn-primary">
                Compare Plans
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="tel:+918955836514" className="rsa-hero-btn-outline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Selector + Comparison Table */}
      <section className="rsa-compare section-padding" id="rsa-compare" ref={compareRef}>
        <div className="container-custom">
          <div className={`section-header ${compareVisible ? "visible" : ""}`}>
            <span className="section-badge">Membership Plans</span>
            <h2 className="section-title text-gray-900">Choose Your Protection Level</h2>
            <p className="rsa-section-subtitle">Compare features across all plans to find the perfect fit for you.</p>
          </div>

          {/* Plan Toggle Tabs */}
          <div className={`rsa-plan-tabs ${compareVisible ? "visible" : ""}`}>
            {PLANS.map((plan) => (
              <button
                key={plan.id}
                className={`rsa-plan-tab ${selectedPlan === plan.id ? "rsa-plan-tab-active" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
                style={selectedPlan === plan.id ? { background: plan.gradient, borderColor: "transparent" } : {}}
              >
                <span className="rsa-plan-tab-name">{plan.name}</span>
                <span className="rsa-plan-tab-price">Rs {plan.price}{plan.period}</span>
                {plan.popular && <span className="rsa-plan-tab-badge">Popular</span>}
              </button>
            ))}
          </div>

          {/* Selected Plan Detail Card */}
          <div className={`rsa-plan-detail ${compareVisible ? "visible" : ""}`}>
            <div className="rsa-plan-detail-header" style={{ background: activePlan.gradient }}>
              <div>
                <h3 className="rsa-plan-detail-name">{activePlan.name} Plan</h3>
                <p className="rsa-plan-detail-tagline">
                  {activePlan.id === "basic" && "Essential coverage for everyday drivers"}
                  {activePlan.id === "standard" && "Complete protection for frequent drivers"}
                  {activePlan.id === "premium" && "Ultimate coverage with VIP benefits"}
                </p>
              </div>
              <div className="rsa-plan-detail-price">
                <span className="rsa-plan-detail-currency">Rs</span>
                <span className="rsa-plan-detail-amount">{activePlan.price}</span>
                <span className="rsa-plan-detail-period">{activePlan.period}</span>
              </div>
            </div>

            <div className="rsa-plan-detail-features">
              {FEATURE_LIST.map((feature) => {
                const val = activePlan.features[feature];
                return (
                  <div key={feature} className="rsa-plan-feature-row">
                    <span className="rsa-plan-feature-name">{feature}</span>
                    <span className={`rsa-plan-feature-value ${val === false ? "rsa-plan-feature-no" : ""}`}>
                      {val === true ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : val === false ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <span className="rsa-plan-feature-text">{val}</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="rsa-plan-detail-actions">
              <a href="tel:+918955836514" className="rsa-plan-subscribe-btn" style={{ background: activePlan.gradient }}>
                Subscribe to {activePlan.name} Plan
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="https://wa.me/918955836514?text=Hi%2C%20I%20am%20interested%20in%20the%20RSA%20{activePlan.name}%20plan" target="_blank" rel="noopener noreferrer" className="rsa-plan-whatsapp-btn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp to Subscribe
              </a>
            </div>
          </div>

          {/* Full Comparison Table (Desktop) */}
          <div className={`rsa-comparison-table-wrapper ${compareVisible ? "visible" : ""}`}>
            <table className="rsa-comparison-table">
              <thead>
                <tr>
                  <th className="rsa-table-feature-header">Features</th>
                  {PLANS.map(plan => (
                    <th key={plan.id} className="rsa-table-plan-header">
                      <div className="rsa-table-plan-badge" style={{ background: plan.gradient }}>{plan.name}</div>
                      <div className="rsa-table-plan-price">Rs {plan.price}<span>{plan.period}</span></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_LIST.map((feature) => (
                  <tr key={feature}>
                    <td className="rsa-table-feature-name">{feature}</td>
                    {PLANS.map(plan => {
                      const val = plan.features[feature];
                      return (
                        <td key={plan.id} className="rsa-table-cell">
                          {val === true ? (
                            <svg className="rsa-table-check" fill="none" stroke="#10b981" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          ) : val === false ? (
                            <svg className="rsa-table-cross" fill="none" stroke="#cbd5e1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          ) : (
                            <span className="rsa-table-text">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="rsa-table-action-row">
                  <td></td>
                  {PLANS.map(plan => (
                    <td key={plan.id}>
                      <a href="tel:+918955836514" className="rsa-table-btn" style={{ background: plan.gradient }}>Choose {plan.name}</a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="rsa-benefits section-padding bg-gray-50" ref={benefitsRef}>
        <div className="container-custom">
          <div className={`section-header ${benefitsVisible ? "visible" : ""}`}>
            <span className="section-badge">Why RSA Membership</span>
            <h2 className="section-title text-gray-900">More Than Just Roadside Help</h2>
          </div>
          <div className="rsa-benefits-grid">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className={`rsa-benefit-card ${benefitsVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="rsa-benefit-icon">
                  <BenefitIcon type={benefit.icon} />
                </div>
                <h3 className="rsa-benefit-title">{benefit.title}</h3>
                <p className="rsa-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps - Horizontal Timeline */}
      <section className="rsa-journey section-padding" ref={journeyRef}>
        <div className="container-custom">
          <div className={`section-header ${journeyVisible ? "visible" : ""}`}>
            <span className="section-badge section-badge-light">How It Works</span>
            <h2 className="section-title text-white">Your RSA Journey</h2>
          </div>
          <div className="rsa-journey-timeline">
            {JOURNEY_STEPS.map((step, index) => (
              <div
                key={index}
                className={`rsa-journey-step ${journeyVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="rsa-journey-num">{step.num}</div>
                <div className="rsa-journey-line" />
                <h3 className="rsa-journey-title">{step.title}</h3>
                <p className="rsa-journey-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="rsa-payment section-padding" ref={paymentRef}>
        <div className="container-custom">
          <div className={`section-header ${paymentVisible ? "visible" : ""}`}>
            <span className="section-badge">Payment Options</span>
            <h2 className="section-title text-gray-900">Flexible Payment Methods</h2>
            <p className="rsa-section-subtitle">Choose your preferred way to pay. All online transactions are 100% secure.</p>
          </div>
          <div className={`rsa-payment-grid ${paymentVisible ? "visible" : ""}`}>
            {PAYMENT_METHODS.map((method, index) => (
              <div
                key={index}
                className="rsa-payment-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="rsa-payment-icon">
                  {method.icon === "upi" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {method.icon === "card" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  )}
                  {method.icon === "bank" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {method.icon === "cash" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="rsa-payment-title">{method.name}</h3>
                <p className="rsa-payment-desc">{method.desc}</p>
              </div>
            ))}
          </div>
          <div className={`rsa-payment-secure ${paymentVisible ? "visible" : ""}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>All transactions are encrypted and 100% secure</span>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="rsa-stats section-padding" ref={statsRef}>
        <div className="rsa-stats-pattern" />
        <div className="container-custom relative z-10">
          <div className="rsa-stats-grid">
            <div className={`rsa-stat ${statsVisible ? "visible" : ""}`}>
              <div className="rsa-stat-number">{memberCount}+</div>
              <div className="rsa-stat-label">Active Members</div>
            </div>
            <div className={`rsa-stat ${statsVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
              <div className="rsa-stat-number">{rescueCount}+</div>
              <div className="rsa-stat-label">Rescues Done</div>
            </div>
            <div className={`rsa-stat ${statsVisible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
              <div className="rsa-stat-number">{satisfactionCount}%</div>
              <div className="rsa-stat-label">Satisfaction</div>
            </div>
            <div className={`rsa-stat ${statsVisible ? "visible" : ""}`} style={{ transitionDelay: "450ms" }}>
              <div className="rsa-stat-number">{responseCount} min</div>
              <div className="rsa-stat-label">Fastest Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="rsa-coverage section-padding" ref={coverageRef}>
        <div className="container-custom">
          <div className={`rsa-coverage-content ${coverageVisible ? "visible" : ""}`}>
            <div className="rsa-coverage-text">
              <span className="section-badge">Coverage Area</span>
              <h2 className="rsa-coverage-title">Pan-Jaipur Coverage</h2>
              <p className="rsa-coverage-para">
                Our RSA membership covers the entire Jaipur city and surrounding areas within a 50km radius. Whether you're stuck on the highway or in a residential colony, our team will reach you quickly.
              </p>
              <p className="rsa-coverage-para">
                Premium members enjoy extended coverage and priority response in all service areas.
              </p>
            </div>
            <div className="rsa-coverage-areas">
              <h3 className="rsa-coverage-areas-title">Key Service Areas</h3>
              <div className="rsa-coverage-tags">
                {COVERAGE_AREAS.map((area, i) => (
                  <span key={i} className="rsa-coverage-tag">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rsa-faq-section section-padding bg-gray-50" ref={faqRef}>
        <div className="container-custom">
          <div className={`section-header ${faqVisible ? "visible" : ""}`}>
            <span className="section-badge">FAQ</span>
            <h2 className="section-title text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="rsa-faq-list">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                isVisible={faqVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rsa-cta" ref={ctaRef}>
        <div className="rsa-cta-pattern" />
        <div className="container-custom relative z-10">
          <div className={`rsa-cta-content ${ctaVisible ? "visible" : ""}`}>
            <h2 className="rsa-cta-title">Ready to Drive Worry-Free?</h2>
            <p className="rsa-cta-subtitle">
              Join 500+ drivers who trust RJ Roadside Assistance. Subscribe to an RSA plan today.
            </p>
            <div className="rsa-cta-actions">
              <a href="tel:+918955836514" className="rsa-cta-btn-call">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91-8955836514
              </a>
              <a
                href="https://wa.me/918955836514?text=Hi%2C%20I%20want%20to%20subscribe%20to%20RSA%20membership"
                target="_blank"
                rel="noopener noreferrer"
                className="rsa-cta-btn-whatsapp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RsaServices;
