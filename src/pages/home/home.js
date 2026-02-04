import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import { WHY_CHOOSE_US } from "../../constants/home";
import "../../styles/home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/slider/images1.jpg",
      title: "24/7 Roadside Assistance",
      description: "Fastest Roadside Aid - Anytime, Anywhere",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      content: "Get instant help when your car breaks down. Our 24/7 roadside assistance service in Jaipur ensures you're never stranded. Call us at 9929983644 for immediate support.",
    },
    {
      id: 2,
      image: "/images/slider/image2.jpg",
      title: "Expert Car Mechanics",
      description: "Professional mechanics at your service",
      gradient: "linear-gradient(135deg, #1e40af 0%, #60a5fa 100%)",
      content: "Experienced mechanics ready to fix your vehicle on the spot. From battery issues to engine problems, we provide professional car repair services across Jaipur.",
    },
    {
      id: 3,
      image: "/images/slider/image3.jpg",
      title: "Towing Services",
      description: "Reliable towing when you need it most",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
      content: "Safe and reliable towing services for all vehicle types. Our professional tow trucks are equipped to transport your car safely to your preferred destination.",
    },
    {
      id: 4,
      image: "/images/slider/image4.jpg",
      title: "Emergency Car Breakdown Service",
      description: "We're here when you need us most",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
      content: "Emergency breakdown assistance available round the clock. Flat tyres, battery jumpstart, key lockout - we handle all roadside emergencies quickly and efficiently.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const services = [
    {
      id: 1,
      title: "Battery Jumpstart",
      description: "Quick battery jumpstart service when your car won't start",
      icon: "🔋",
      image: "/images/cardService/battery-jumpstart.jpg",
      link: "/services/battery-jumpstart",
    },
    {
      id: 2,
      title: "Flat Tyre",
      description: "Professional flat tyre repair and replacement service",
      icon: "🛞",
      image: "/images/cardService/flat-tyre.jpg",
      link: "/services/flat-tyre",
    },
    {
      id: 3,
      title: "Key Lockout",
      description: "Emergency key lockout assistance to get you back on the road",
      icon: "🔑",
      image: "/images/cardService/key-lockout.jpg",
      link: "/services/key-lockout",
    },
    {
      id: 4,
      title: "Towing Services",
      description: "Reliable towing service for all vehicle types",
      icon: "🚛",
      image: "/images/cardService/towing-service.jpg",
      link: "/services/towing",
    },
    {
      id: 5,
      title: "Mechanical Fault",
      description: "On-site repair for various mechanical issues",
      icon: "🔧",
      image: "/images/cardService/mechanical-fault.jpg",
      link: "/services/mechanical-fault",
    },
    {
      id: 6,
      title: "Emergency Breakdown",
      description: "Quick help when your engine overheats or breaks down on the road",
      icon: "🚨",
      image: "/images/cardService/emergency-breakdown.png",
      link: "/services/emergency-breakdown",
    },
  ];

  const serviceDetails = [
    {
      title: "Body Repair",
      description:
        "Expert body repair services to restore your vehicle's appearance and structural integrity.",
      features: ["Dent removal", "Paint matching", "Panel replacement"],
    },
    {
      title: "Brake Repair",
      description:
        "Comprehensive brake system inspection and repair to ensure your safety on the road.",
      features: ["Brake pad replacement", "Brake fluid service", "Rotor resurfacing"],
    },
    {
      title: "AC Repair",
      description:
        "Professional car AC repair and maintenance to keep you cool during hot weather.",
      features: ["AC diagnosis", "Refrigerant recharge", "Compressor repair"],
    },
    {
      title: "Engine Diagnostic",
      description:
        "Advanced engine diagnostic services to identify and fix engine problems efficiently.",
      features: ["Computer diagnostics", "Performance tuning", "Engine repair"],
    },
    {
      title: "Wheel Alignment",
      description:
        "Precise wheel alignment service to improve handling and extend tire life.",
      features: ["4-wheel alignment", "Tire balancing", "Suspension check"],
    },
  ];

  const whyChooseUsServices = [
    {
      title: "QuickRoad Assistance",
      subtitle: "QuickHelp Roadside Assistance",
      icon: "🚗",
      image: "/images/cardService/battery-jumpstart.jpg",
    },
    {
      title: "Swift Rescue Roadside Services",
      subtitle: "Rapid Response Roadside Aid",
      icon: "🚗",
      image: "/images/cardService/flat-tyre.jpg",
    },
    {
      title: "Ultimate Roadside Support",
      subtitle: "Dependable Roadside Rescue",
      icon: "🚗",
      image: "/images/cardService/key-lockout.jpg",
    },
    {
      title: "FastTrack Roadside Solutions",
      subtitle: "Reliable Roadside Helpers",
      icon: "🚗",
      image: "/images/cardService/towing-service.jpg",
    },
    {
      title: "OnTheGo Roadside Assistance",
      subtitle: "Emergency Roadside Aid",
      icon: "🚗",
      image: "/images/cardService/mechanical-fault.jpg",
    },
    {
      title: "ROADSIDE ASSISTANCE",
      subtitle: "Instant Roadside Rescue",
      icon: "🚗",
      image: "/images/car-repairig.jpg",
    },
  ];

  const videoContent = `When your vehicle breaks down unexpectedly, you need a reliable roadside assistance service that you can trust. DK Road Assist has been serving the Jaipur community with exceptional roadside assistance services for years, providing peace of mind to thousands of drivers across the city.

Our comprehensive roadside assistance program covers all your emergency needs, from battery jumpstarts to flat tire repairs, key lockout services, and professional towing. We understand that vehicle breakdowns can happen at the most inconvenient times, which is why we operate 24/7, ensuring that help is always just a phone call away.

What sets DK Road Assist apart is our commitment to rapid response times and professional service. Our team of certified mechanics and roadside assistance specialists are equipped with state-of-the-art tools and vehicles to handle any situation efficiently. Whether you're stranded on a busy highway or in a remote location, we'll reach you quickly and get you back on the road safely.

We take pride in our transparent pricing and honest service. There are no hidden fees or surprise charges - you'll know exactly what you're paying for before we begin any work. Our goal is to provide exceptional value while ensuring your complete satisfaction.`;

  return (
    <div className="home-page">
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Jaipur</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">DK Road Assist Roadside Assistance Service</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Sliding Image */}
      <section className="hero-slider-section relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-slide absolute inset-0 ${
              index === currentSlide ? "slider-slide-active" : "slider-slide-inactive"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center slider-image"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "#1e3a8a",
              }}
            >
              <div className="absolute inset-0 slider-overlay"></div>
            </div>
          </div>
        ))}

        {/* Content Overlay - Bottom Right */}
        <div className="absolute bottom-0 right-0 z-10 pb-8 pr-4 md:pb-12 md:pr-8 lg:pr-16">
          <div key={currentSlide} className="slider-text-direct">
            <h2 className="slider-text-title-direct">
              {slides[currentSlide].title}
            </h2>
            <p className="slider-text-description-direct">
              {slides[currentSlide].content}
            </p>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={goToPrevious}
          className="slider-nav-button slider-nav-prev"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="slider-nav-button slider-nav-next"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slider Indicators */}
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slider-indicator ${
                index === currentSlide ? "slider-indicator-active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="slider-indicator-dot"></span>
            </button>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Image on top, text below */}
          <div className="why-choose-us-left">
            <div
              className="why-choose-us-image-block"
              style={{ backgroundImage: `url(${IMAGES.whyChooseUs.background})` }}
            />
            <div className="why-choose-us-text-block">
              <h3 className="why-choose-us-label">{WHY_CHOOSE_US.LABEL}</h3>
              <h2 className="why-choose-us-title">{WHY_CHOOSE_US.TITLE}</h2>
              <p className="why-choose-us-description">
                {WHY_CHOOSE_US.DESCRIPTION}
              </p>
              <p className="why-choose-us-bottom-text">{WHY_CHOOSE_US.BOTTOM_TEXT}</p>
            </div>
          </div>

          {/* Right Side - Service Cards with Background */}
          <div className="why-choose-us-right">
            <div
              className="why-choose-us-bg"
              style={{
                backgroundImage: "url(/images/engine.jpg)",
              }}
            ></div>
            <div className="why-choose-us-cards-grid">
              {whyChooseUsServices.map((service, index) => (
                <div
                  key={index}
                  className="why-choose-us-card"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="why-choose-us-card-overlay"></div>
                  <div className="why-choose-us-card-content">
                    <div className="why-choose-us-card-icon">{service.icon}</div>
                    <h4 className="why-choose-us-card-title">{service.title}</h4>
                    <p className="why-choose-us-card-subtitle">{service.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Video Card */}
            <div className="video-card-container">
              <div className="video-card">
                <video
                  className="video-player"
                  controls
                  poster="/images/car-repairig.jpg"
                >
                  <source src="/images/car-service-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="video-content">
              <h2 className="video-content-title">
                Professional Roadside Assistance Services
              </h2>
              <div className="video-content-text">
                {videoContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="video-content-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Roadside Assistance In Jaipur
            </h2>
            <p className="text-xl text-gray-600">
              Our service partners provide services as well as other essential services
            </p>
          </div>

          <div className="services-grid-container">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card service-card-bg relative overflow-hidden"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "500px",
                }}
              >
                <div className="service-card-overlay"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-white mb-4 text-center">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to={service.link}
                    className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Professional Car Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive automotive solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className="service-card p-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Help Right Now?</h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Our expert mechanics are ready to assist you 24/7
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="tel:+919929983644"
              className="bg-white text-red-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
