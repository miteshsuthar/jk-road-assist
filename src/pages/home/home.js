import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

/* ========================================
   SCROLL ANIMATION HOOK
   ======================================== */
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
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
    <div className={`stat-card ${isVisible ? "stat-card-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

/* ========================================
   HOME PAGE
   ======================================== */
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsRef, statsVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [howItWorksRef, howItWorksVisible] = useScrollAnimation();
  const [videoRef, videoVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const slides = [
    {
      id: 1,
      image: "/images/slider/slide1.jpg",
      title: "24/7 Roadside Assistance",
      subtitle: "Help is Always a Call Away",
      description: "Get instant help when your car breaks down. Professional mechanics available round the clock across Jaipur.",
    },
    {
      id: 2,
      image: "/images/slider/slide2.jpg",
      title: "Expert Car Mechanics",
      subtitle: "Professional Service, Every Time",
      description: "Experienced mechanics ready to fix your vehicle on the spot. From battery issues to engine problems.",
    },
    {
      id: 3,
      image: "/images/slider/slide3.jpg",
      title: "Reliable Towing Services",
      subtitle: "Safe Transport When You Need It",
      description: "Professional tow trucks equipped to transport your car safely to your preferred destination.",
    },
    {
      id: 4,
      image: "/images/slider/slide4.jpg",
      title: "Emergency Breakdown Service",
      subtitle: "We're Here When You Need Us",
      description: "Flat tyres, battery jumpstart, key lockout - we handle all roadside emergencies efficiently.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Battery Jumpstart",
      description: "Quick battery jumpstart service when your car won't start",
      image: "/images/cardService/battery-jumpstart.jpg",
      link: "/services/battery-jumpstart",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Flat Tyre",
      description: "Professional flat tyre repair and replacement service",
      image: "/images/cardService/flat-tyre.jpg",
      link: "/services/flat-tyre",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Key Lockout",
      description: "Emergency key lockout assistance to get you back on the road",
      image: "/images/cardService/key-lockout.jpg",
      link: "/services/key-lockout",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Towing Services",
      description: "Reliable towing service for all vehicle types",
      image: "/images/cardService/towing-service.jpg",
      link: "/services/towing",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-1a3 3 0 110 0H9a3 3 0 110 0H7V7zm0 0V5a2 2 0 00-2-2H4" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Mechanical Fault",
      description: "On-site repair for various mechanical issues",
      image: "/images/cardService/mechanical-fault.jpg",
      link: "/services/mechanical-fault",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Emergency Breakdown",
      description: "Quick help when your engine overheats or breaks down",
      image: "/images/cardService/emergency-breakdown.png",
      link: "/services/emergency-breakdown",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Call Us",
      description: "Contact us at +91-8955836514 or use our website to request assistance",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "We Locate You",
      description: "Share your location and our nearest technician will be dispatched immediately",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Quick Repair",
      description: "Our certified mechanic arrives with tools and parts to fix your vehicle on-site",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Back on Road",
      description: "Your vehicle is fixed and you're safely back on the road in no time",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Jaipur",
      text: "My car broke down at midnight on the highway. RJ Roadside Assistance reached me within 25 minutes and got my car running. Lifesaver!",
      rating: 5,
    },
    {
      name: "Priya Gupta",
      location: "Jaipur",
      text: "Professional service, fair pricing, and extremely quick response. The mechanic was very knowledgeable and fixed my battery issue on the spot.",
      rating: 5,
    },
    {
      name: "Amit Verma",
      location: "Jaipur",
      text: "Got locked out of my car at a mall. Called RJ Roadside Assistance and they unlocked my car in 15 minutes without any damage. Highly recommended!",
      rating: 5,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="home-page">
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="hero-section">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "hero-slide-active" : ""}`}
          >
            <div
              className="hero-slide-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero-slide-overlay" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="hero-content">
          <div className="container-custom">
            <div className="hero-content-inner">
              <div key={currentSlide} className="hero-text-wrapper">
                <span className="hero-badge">
                  <span className="hero-badge-dot"></span>
                  Available 24/7 Across Jaipur
                </span>
                <h1 className="hero-title">{slides[currentSlide].title}</h1>
                <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                <p className="hero-description">{slides[currentSlide].description}</p>
                <div className="hero-actions">
                  <a href="tel:+918955836514" className="hero-btn-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <Link to="/contact" className="hero-btn-outline">
                    Book Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button onClick={prevSlide} className="hero-nav hero-nav-prev" aria-label="Previous slide">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="hero-nav hero-nav-next" aria-label="Next slide">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`hero-indicator ${index === currentSlide ? "hero-indicator-active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          STATS SECTION
          ======================================== */}
      <section className="stats-section" ref={statsRef}>
        <div className="container-custom">
          <div className="stats-grid">
            <StatCard number={24} suffix="/7" label="Availability" isVisible={statsVisible} delay={0} />
            <StatCard number={30} suffix=" Min" label="Avg Response Time" isVisible={statsVisible} delay={150} />
            <StatCard number={500} suffix="+" label="Rescues Completed" isVisible={statsVisible} delay={300} />
            <StatCard number={100} suffix="%" label="Satisfaction Rate" isVisible={statsVisible} delay={450} />
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES SECTION
          ======================================== */}
      <section className="section-padding bg-gray-50" ref={servicesRef}>
        <div className="container-custom">
          <div className={`section-header ${servicesVisible ? "visible" : ""}`}>
            <span className="section-badge">Our Services</span>
            <h2 className="section-title text-gray-900">Roadside Assistance Services</h2>
            <p className="section-subtitle">
              Professional roadside help when you need it most. Fast, reliable, and available 24/7.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.link}
                className={`service-card-new ${servicesVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="service-card-image" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="service-card-image-overlay" />
                </div>
                <div className="service-card-body">
                  <div className="service-card-icon">{service.icon}</div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                  <span className="service-card-link">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className={`text-center mt-10 ${servicesVisible ? "visible" : ""}`} style={{ opacity: servicesVisible ? 1 : 0, transition: 'opacity 0.6s ease 0.6s' }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View All Services & Pricing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS SECTION
          ======================================== */}
      <section className="how-it-works-section section-padding" ref={howItWorksRef}>
        <div className="container-custom">
          <div className={`section-header ${howItWorksVisible ? "visible" : ""}`}>
            <span className="section-badge section-badge-light">Simple Process</span>
            <h2 className="section-title text-white">How It Works</h2>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>
              Getting help is easy. Just follow these simple steps.
            </p>
          </div>

          <div className="hiw-grid">
            {howItWorks.map((step, index) => (
              <div
                key={step.step}
                className={`hiw-card ${howItWorksVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="hiw-step-number">{step.step}</div>
                <div className="hiw-icon">{step.icon}</div>
                <h3 className="hiw-title">{step.title}</h3>
                <p className="hiw-description">{step.description}</p>
                {index < howItWorks.length - 1 && <div className="hiw-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          VIDEO SECTION
          ======================================== */}
      <section className="section-padding bg-white" ref={videoRef}>
        <div className="container-custom">
          <div className="video-grid">
            <div className={`video-left ${videoVisible ? "visible" : ""}`}>
              <div className="video-wrapper">
                <video
                  className="video-player-new"
                  controls
                  poster="/images/car-repairig.jpg"
                >
                  <source src="/images/car-service-video.mp4" type="video/mp4" />
                </video>
                <div className="video-badge">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Our Story
                </div>
              </div>
            </div>
            <div className={`video-right ${videoVisible ? "visible" : ""}`}>
              <span className="section-badge">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Roadside<br />Assistance You Can Trust
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When your vehicle breaks down unexpectedly, you need a reliable service you can trust.
                RJ Roadside Assistance has been serving the Jaipur community with exceptional roadside assistance,
                providing peace of mind to thousands of drivers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our comprehensive program covers all emergency needs - from battery jumpstarts to flat tire
                repairs, key lockout services, and professional towing. We operate 24/7, ensuring help is
                always just a phone call away.
              </p>
              <div className="video-features">
                <div className="video-feature">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certified Mechanics</span>
                </div>
                <div className="video-feature">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent Pricing</span>
                </div>
                <div className="video-feature">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quick Response Time</span>
                </div>
                <div className="video-feature">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All Vehicle Types</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          TESTIMONIALS SECTION
          ======================================== */}
      <section className="section-padding bg-gray-50" ref={testimonialsRef}>
        <div className="container-custom">
          <div className={`section-header ${testimonialsVisible ? "visible" : ""}`}>
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title text-gray-900">What Our Customers Say</h2>
            <p className="section-subtitle">
              Real stories from real people who trusted us in their time of need.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${testimonialsVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-location">{testimonial.location}</div>
                  </div>
                </div>
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
            <h2 className="cta-title">Stranded on the Road?</h2>
            <p className="cta-subtitle">
              Don't worry. Our expert mechanics are ready to help you 24/7.<br />
              One call is all it takes.
            </p>
            <div className="cta-actions">
              <a href="tel:+918955836514" className="cta-btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91-8955836514
              </a>
              <Link to="/contact" className="cta-btn-outline">
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
