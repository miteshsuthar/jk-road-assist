import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentDateTime(now.toLocaleDateString("en-US", options));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Red Top Bar */}
      <div className="bg-green-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>Join RJ Road Assist Network</span>
            <span>|</span>
            <Link to="/login" className="hover:text-red-200">
              Login
            </Link>
          </div>
          <div>{currentDateTime}</div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">RJ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  RJ Road Assist
                </h1>
                <p className="text-sm text-gray-600">Mechanic On Your Way!!!</p>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-gray-600"
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
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    +91-9929983644
                  </p>
                  <p className="text-xs text-gray-600">
                    Emergency Car Breakdown Service
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-gray-600"
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
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    24/7 Car Mechanic
                  </p>
                  <p className="text-xs text-gray-600">
                    Help on the Way - Anytime, Anywhere
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-gray-600"
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
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Roadside Assistance
                  </p>
                  <p className="text-xs text-gray-600">
                    Fastest Roadside Aid India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Blue Navigation Bar */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="hidden md:flex items-center space-x-6 py-3">
              <Link
                to="/"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                to="/premium-cars"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                Premium Cars Services
              </Link>
              <Link
                to="/rsa-services"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                RSA Services
              </Link>
              <Link
                to="/roadside-package"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                Roadside Package
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                to="/team"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                Team
              </Link>
              <Link
                to="/gallery"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-300 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </nav>
            <Link
              to="/book"
              className="bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-colors font-semibold"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-700">
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  to="/premium-cars"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Premium Cars Services
                </Link>
                <Link
                  to="/rsa-services"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  RSA Services
                </Link>
                <Link
                  to="/roadside-package"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Roadside Package
                </Link>
                <Link
                  to="/about"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/team"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Team
                </Link>
                <Link
                  to="/gallery"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-blue-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
                <Link
                  to="/book"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-center"
                  onClick={toggleMenu}
                >
                  Book Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
