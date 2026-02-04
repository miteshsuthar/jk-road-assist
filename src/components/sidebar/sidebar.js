import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <aside className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blue-600">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Close sidebar"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={onClose}
            >
              Services
            </Link>
            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                Car Services
              </h3>
              <Link
                to="/services/body-repair"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Body Repair
              </Link>
              <Link
                to="/services/brake-repair"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Brake Repair
              </Link>
              <Link
                to="/services/ac-repair"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                AC Repair
              </Link>
              <Link
                to="/services/engine-diagnostic"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Engine Diagnostic
              </Link>
            </div>
            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                Roadside Assistance
              </h3>
              <Link
                to="/services/battery-jumpstart"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Battery Jumpstart
              </Link>
              <Link
                to="/services/flat-tyre"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Flat Tyre
              </Link>
              <Link
                to="/services/key-lockout"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Key Lockout
              </Link>
              <Link
                to="/services/towing"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Towing Services
              </Link>
              <Link
                to="/services/mechanical-fault"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Mechanical Fault
              </Link>
              <Link
                to="/services/emergency-breakdown"
                className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                onClick={onClose}
              >
                Emergency Breakdown
              </Link>
            </div>
            <div className="border-t pt-4">
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={onClose}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </div>
            <Link
              to="/book"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center mt-4"
              onClick={onClose}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
