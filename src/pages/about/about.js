import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/about.css";

/* ========================================
   SCROLL ANIMATION HOOK
   ======================================== */
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

/* ========================================
   COUNTER ANIMATION HOOK
   ======================================== */
const useCounter = (target, isVisible, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
};

/* ========================================
   STAT CARD COMPONENT
   ======================================== */
const StatCard = ({ number, suffix, label, isVisible, delay }) => {
  const count = useCounter(number, isVisible);
  return (
    <div className={`about-stat-card ${isVisible ? "about-stat-card-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="about-stat-number">
        {count}{suffix}
      </div>
      <div className="about-stat-label">{label}</div>
    </div>
  );
};

/* ========================================
   ABOUT PAGE
   ======================================== */
const About = () => {
  const [storyRef, storyVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [whyRef, whyVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missionCards = [
    {
      title: "Our Mission",
      description: "To provide fast, affordable, and professional roadside assistance to every driver in Jaipur, ensuring no one is left stranded.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Our Vision",
      description: "To become Rajasthan's #1 roadside assistance brand, known for reliability, speed, and customer care.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Our Values",
      description: "Integrity, Speed, Safety, Transparency, and Customer First - these aren't just words, they guide every service call we take.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: "Certified & Trained Mechanics",
      description: "All our mechanics are professionally certified and undergo regular training to handle any roadside emergency.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing, No Surprises",
      description: "We believe in upfront pricing. You'll know the cost before we begin any work - no hidden charges, ever.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Fastest Response Time in Jaipur",
      description: "With an average response time of just 30 minutes, we get to you faster than anyone else in the city.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Professional Grade Equipment",
      description: "Our service vehicles are equipped with the latest diagnostic tools and professional-grade repair equipment.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "All Vehicle Types Supported",
      description: "From hatchbacks to SUVs, luxury cars to commercial vehicles - we service all makes and models.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-1a3 3 0 110 0H9a3 3 0 110 0H7V7zm0 0V5a2 2 0 00-2-2H4" />
        </svg>
      ),
    },
    {
      title: "Insurance & Documentation Help",
      description: "We assist with insurance claims and provide complete documentation for every service rendered.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const teamMembers = [
    {
      role: "Founder & CEO",
      initials: "FC",
      description: "Leads the vision of making roadside assistance accessible to all",
      color: "#1e40af",
    },
    {
      role: "Head Mechanic",
      initials: "HM",
      description: "15+ years experience, specializes in on-site diagnostics",
      color: "#0f766e",
    },
    {
      role: "Operations Manager",
      initials: "OM",
      description: "Ensures fastest dispatch and seamless service delivery",
      color: "#7c3aed",
    },
    {
      role: "Customer Relations",
      initials: "CR",
      description: "Your first point of contact, available 24/7",
      color: "#c2410c",
    },
  ];

  return (
    <div className="about-page">
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section
        className="about-hero"
        style={{ backgroundImage: "url(/images/about/about-hero.jpg)" }}
      >
        <div className="about-hero-overlay" />
        <div className="container-custom relative z-10">
          <nav className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </nav>
          <div className="about-hero-content">
            <span className="about-hero-badge">
              <span className="about-hero-badge-dot" />
              Our Story
            </span>
            <h1 className="about-hero-title">About RJ Roadside Assistance</h1>
            <p className="about-hero-subtitle">Your Trusted Roadside Partner Since Day One</p>
          </div>
        </div>
      </section>

      {/* ========================================
          OUR STORY SECTION
          ======================================== */}
      <section className="section-padding" ref={storyRef}>
        <div className="container-custom">
          <div className={`about-story-grid ${storyVisible ? "visible" : ""}`}>
            <div className="about-story-image">
              <img
                src="/images/about/our-story.jpg"
                alt="Our Story - RJ Roadside Assistance"
                loading="lazy"
              />
            </div>
            <div className="about-story-text">
              <span className="section-badge">Our Story</span>
              <h2 className="about-section-title">How It All Started</h2>
              <p className="about-story-para">
                RJ Roadside Assistance was born from a simple idea: no one should feel helpless when their car breaks down. Founded in Jaipur by a team of passionate automobile enthusiasts and experienced mechanics, we set out to build a roadside assistance service that's fast, reliable, and genuinely cares about every customer.
              </p>
              <p className="about-story-para">
                What started as a small team with one tow truck has grown into Jaipur's most trusted roadside assistance provider. We've helped over 500 stranded drivers get back on the road, and we're just getting started.
              </p>
              <p className="about-story-para">
                Our mission is clear: be there when you need us most, with the right tools, the right skills, and the right attitude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          MISSION / VISION / VALUES SECTION
          ======================================== */}
      <section className="section-padding bg-gray-50" ref={missionRef}>
        <div className="container-custom">
          <div className={`section-header ${missionVisible ? "visible" : ""}`}>
            <span className="section-badge">What Drives Us</span>
            <h2 className="section-title text-gray-900">Mission, Vision & Values</h2>
          </div>
          <div className="about-mission-grid">
            {missionCards.map((card, index) => (
              <div
                key={index}
                className={`about-mission-card ${missionVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="about-mission-icon">{card.icon}</div>
                <h3 className="about-mission-title">{card.title}</h3>
                <p className="about-mission-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          STATS SECTION
          ======================================== */}
      <section className="about-stats-section" ref={statsRef}>
        <div className="about-stats-pattern" />
        <div className="container-custom relative z-10">
          <div className={`section-header ${statsVisible ? "visible" : ""}`}>
            <span className="section-badge section-badge-light">By The Numbers</span>
            <h2 className="section-title text-white">Our Impact in Numbers</h2>
          </div>
          <div className="about-stats-grid">
            <StatCard number={500} suffix="+" label="Rescues Completed" isVisible={statsVisible} delay={0} />
            <StatCard number={24} suffix="/7" label="Availability" isVisible={statsVisible} delay={100} />
            <StatCard number={30} suffix=" Min" label="Avg Response Time" isVisible={statsVisible} delay={200} />
            <StatCard number={100} suffix="%" label="Satisfaction Rate" isVisible={statsVisible} delay={300} />
            <StatCard number={4.8} suffix="" label="Customer Rating" isVisible={statsVisible} delay={400} />
            <StatCard number={50} suffix="+" label="Service Areas" isVisible={statsVisible} delay={500} />
          </div>
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE US SECTION
          ======================================== */}
      <section className="section-padding bg-gray-50" ref={whyRef}>
        <div className="container-custom">
          <div className={`section-header ${whyVisible ? "visible" : ""}`}>
            <span className="section-badge">Why Us</span>
            <h2 className="section-title text-gray-900">Why Choose RJ Roadside Assistance?</h2>
          </div>
          <div className="about-why-grid">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`about-why-card ${whyVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="about-why-icon">{item.icon}</div>
                <h3 className="about-why-title">{item.title}</h3>
                <p className="about-why-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          OUR TEAM SECTION
          ======================================== */}
      <section className="section-padding" ref={teamRef}>
        <div className="container-custom">
          <div className={`section-header ${teamVisible ? "visible" : ""}`}>
            <span className="section-badge">Our Team</span>
            <h2 className="section-title text-gray-900">The People Behind the Service</h2>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`about-team-card ${teamVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className="about-team-avatar"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)` }}
                >
                  {member.initials}
                </div>
                <h3 className="about-team-role">{member.role}</h3>
                <p className="about-team-desc">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="cta-section-new" ref={ctaRef}>
        <div className="cta-bg-pattern" />
        <div className="container-custom relative z-10">
          <div className={`cta-content ${ctaVisible ? "visible" : ""}`}>
            <h2 className="cta-title">Ready to Experience the RJ Roadside Assistance Difference?</h2>
            <p className="cta-subtitle">
              Our certified mechanics are standing by 24/7. One call gets you back on the road.
            </p>
            <div className="cta-actions">
              <a href="tel:+918955836514" className="cta-btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91-8955836514
              </a>
              <Link to="/contact" className="cta-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
