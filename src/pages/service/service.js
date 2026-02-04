import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVICE_DATA } from "../../constants/services";
import "../../styles/service.css";
import "../../styles/coming-soon.css";

const Service = () => {
  const { serviceName } = useParams();
  const service = SERVICE_DATA[serviceName];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [serviceName]);

  const formatServiceName = (name) => {
    if (!name) return "Service";
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (!service) {
    const serviceTitle = formatServiceName(serviceName);
    return (
      <div className="coming-soon-page">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600 mb-4">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{serviceTitle}</span>
            </nav>
          </div>
        </div>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-block p-6 bg-blue-100 rounded-full mb-6">
                  <svg
                    className="w-24 h-24 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Coming Soon
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
                {serviceTitle} Service
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're working hard to bring you this service. Our team is preparing
                something amazing for you. Stay tuned!
              </p>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  What to Expect
                </h3>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
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
                    <span>Professional and reliable service</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
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
                    <span>24/7 availability for your convenience</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
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
                    <span>Expert technicians at your service</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
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
                    <span>Quick response time</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Back to Home
                </Link>
                <Link
                  to="/contact"
                  className="bg-gray-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Call us now!
                </p>
                <a
                  href="tel:+919929983644"
                  className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91-9929983644
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="service-page">
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="service-hero-section text-white py-16 relative"
        style={{
          backgroundImage: service.image ? `url(${service.image})` : 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="service-hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              {service.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Service Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              {service.overview}
            </p>
            {service.detailedContent && (
              <div className="service-detailed-content">
                {service.detailedContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Why Choose Our {service.title}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
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
                    <p className="text-gray-700 text-lg">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Key Benefits
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need {service.title} Right Now?</h2>
          <p className="text-xl mb-8">
            Our expert technicians are ready to assist you 24/7
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="tel:+919929983644"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +91-9929983644
            </a>
            <Link
              to="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
