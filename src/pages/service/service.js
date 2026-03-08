import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVICE_DATA } from "../../constants/services";
import useScrollReveal from "../../hooks/useScrollReveal";
import "../../styles/service.css";

/* ========================================
   FAQ ACCORDION ITEM
   ======================================== */
const FaqItem = ({ question, answer, isOpen, onClick, index, isVisible }) => (
  <div
    className={`faq-item ${isOpen ? "faq-item-open" : ""} ${isVisible ? "visible" : ""}`}
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <button className="faq-question" onClick={onClick} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
      <span>{question}</span>
      <svg
        className={`faq-chevron ${isOpen ? "faq-chevron-open" : ""}`}
        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}>
      <p>{answer}</p>
    </div>
  </div>
);

/* ========================================
   FEATURE ICON COMPONENT
   ======================================== */
const FeatureIcon = ({ type }) => {
  const icons = {
    clock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    speed: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    tool: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
    check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    car: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-1a3 3 0 110 0H9a3 3 0 110 0H7V7zm0 0V5a2 2 0 00-2-2H4" />,
    price: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[type] || icons.check}
    </svg>
  );
};

/* ========================================
   MAIN SERVICE PAGE
   ======================================== */
const Service = () => {
  const { serviceName } = useParams();
  const service = SERVICE_DATA[serviceName];
  const [openFaq, setOpenFaq] = useState(null);

  const [overviewRef, overviewVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [processRef, processVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [relatedRef, relatedVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaq(null);
  }, [serviceName]);

  const formatServiceName = (name) => {
    if (!name) return "Service";
    return name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  };

  /* Coming Soon fallback */
  if (!service) {
    const serviceTitle = formatServiceName(serviceName);
    return (
      <div className="svc-page">
        <div className="svc-hero" style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)" }}>
          <div className="svc-hero-overlay" />
          <div className="container-custom relative z-10">
            <nav className="svc-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/services">Services</Link>
              <span>/</span>
              <span>{serviceTitle}</span>
            </nav>
            <div className="svc-hero-content">
              <h1 className="svc-hero-title">{serviceTitle} — Coming Soon</h1>
              <p className="svc-hero-desc">We're preparing this service. In the meantime, call us for immediate help.</p>
              <div className="svc-hero-actions">
                <a href="tel:+918955836514" className="svc-btn-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call: +91-8955836514
                </a>
                <Link to="/" className="svc-btn-outline">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const relatedServices = (service.relatedServices || [])
    .map((slug) => SERVICE_DATA[slug])
    .filter(Boolean);

  return (
    <div className="svc-page">
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section
        className="svc-hero"
        style={{ backgroundImage: `url(${service.heroImage || service.image})` }}
      >
        <div className="svc-hero-overlay" />
        <div className="container-custom relative z-10">
          <nav className="svc-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>

          <div className="svc-hero-content">
            <span className="svc-hero-badge">
              <span className="svc-hero-badge-dot" />
              24/7 Available
            </span>
            <h1 className="svc-hero-title">{service.heroTitle}</h1>
            <p className="svc-hero-subtitle">{service.heroSubtitle}</p>
            <p className="svc-hero-desc">{service.heroDescription}</p>

            {/* Quick Stats */}
            {service.quickStats && (
              <div className="svc-hero-stats">
                {service.quickStats.map((stat, i) => (
                  <div key={i} className="svc-hero-stat">
                    <div className="svc-hero-stat-value">
                      {stat.value}<span className="svc-hero-stat-unit">{stat.unit}</span>
                    </div>
                    <div className="svc-hero-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="svc-hero-actions">
              <a href="tel:+918955836514" className="svc-btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link to="/contact" className="svc-btn-outline">Book This Service</Link>
              <a
                href={`https://wa.me/918955836514?text=${encodeURIComponent(`Hi, I need help with ${service.title}. Please assist!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-btn-whatsapp"
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

      {/* ========================================
          OVERVIEW SECTION
          ======================================== */}
      <section className="svc-overview section-padding" ref={overviewRef}>
        <div className="container-custom">
          <div className={`svc-overview-grid ${overviewVisible ? "visible" : ""}`}>
            <div className="svc-overview-image">
              <img
                src={service.overview.image}
                alt={service.title}
                loading="lazy"
              />
            </div>
            <div className="svc-overview-text">
              <span className="section-badge">Overview</span>
              <h2 className="svc-section-title">{service.overview.title}</h2>
              {service.overview.paragraphs.map((p, i) => (
                <p key={i} className="svc-overview-para">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FEATURES SECTION
          ======================================== */}
      <section className="svc-features section-padding bg-gray-50" ref={featuresRef}>
        <div className="container-custom">
          <div className={`section-header ${featuresVisible ? "visible" : ""}`}>
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title text-gray-900">Why Choose Our {service.title}?</h2>
          </div>
          <div className="svc-features-grid">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className={`svc-feature-card ${featuresVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="svc-feature-icon">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="svc-feature-title">{feature.title}</h3>
                <p className="svc-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS
          ======================================== */}
      <section className="svc-process section-padding" ref={processRef}>
        <div className="container-custom">
          <div className={`section-header ${processVisible ? "visible" : ""}`}>
            <span className="section-badge section-badge-light">Simple Process</span>
            <h2 className="section-title text-white">How It Works</h2>
          </div>
          <div className="svc-process-grid">
            {service.process.map((step, index) => (
              <div
                key={index}
                className={`svc-process-card ${processVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="svc-process-step">{step.step}</div>
                <h3 className="svc-process-title">{step.title}</h3>
                <p className="svc-process-desc">{step.description}</p>
                {index < service.process.length - 1 && <div className="svc-process-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ SECTION
          ======================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="svc-faq section-padding" ref={faqRef}>
          <div className="container-custom">
            <div className={`section-header ${faqVisible ? "visible" : ""}`}>
              <span className="section-badge">FAQ</span>
              <h2 className="section-title text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="svc-faq-list">
              {service.faqs.map((faq, index) => (
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
      )}

      {/* ========================================
          RELATED SERVICES
          ======================================== */}
      {relatedServices.length > 0 && (
        <section className="svc-related section-padding bg-gray-50" ref={relatedRef}>
          <div className="container-custom">
            <div className={`section-header ${relatedVisible ? "visible" : ""}`}>
              <span className="section-badge">Explore More</span>
              <h2 className="section-title text-gray-900">Related Services</h2>
            </div>
            <div className="svc-related-grid">
              {relatedServices.map((rs, index) => (
                <Link
                  key={rs.slug}
                  to={`/services/${rs.slug}`}
                  className={`svc-related-card ${relatedVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="svc-related-image" style={{ backgroundImage: `url(${rs.image})` }}>
                    <div className="svc-related-image-overlay" />
                  </div>
                  <div className="svc-related-body">
                    <h3 className="svc-related-title">{rs.title}</h3>
                    <p className="svc-related-desc">{rs.description}</p>
                    <span className="svc-related-link">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="svc-cta" ref={ctaRef}>
        <div className="svc-cta-pattern" />
        <div className="container-custom relative z-10">
          <div className={`svc-cta-content ${ctaVisible ? "visible" : ""}`}>
            <h2 className="svc-cta-title">Need {service.title} Right Now?</h2>
            <p className="svc-cta-subtitle">
              Our certified technicians are standing by 24/7. One call gets you back on the road.
            </p>
            <div className="svc-cta-actions">
              <a href="tel:+918955836514" className="svc-cta-btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91-8955836514
              </a>
              <Link to="/contact" className="svc-cta-btn-outline">Book Online</Link>
              <a
                href={`https://wa.me/918955836514?text=${encodeURIComponent(`Hi, I need ${service.title} service. Please help!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-cta-btn-outline"
                style={{ borderColor: '#25d366', color: '#25d366' }}
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

export default Service;
