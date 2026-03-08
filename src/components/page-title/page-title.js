import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_TITLES = {
  "/": "Home",
  "/services": "Services & Pricing",
  "/rsa-services": "RSA Membership Plans",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/track-service": "Track Your Service",
  "/login": "Login",
  "/terms": "Terms & Conditions",
  "/privacy": "Privacy Policy",
  "/blog": "Blog & Tips",
};

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = PAGE_TITLES[path];

    if (!title && path.startsWith("/blog/")) {
      const slug = path.split("/blog/")[1];
      title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }

    if (!title && path.startsWith("/services/")) {
      const serviceName = path.split("/services/")[1];
      title = serviceName
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }

    document.title = title
      ? `${title} | RJ Roadside Assistance`
      : "RJ Roadside Assistance - 24/7 Roadside Assistance Service";
  }, [location]);

  return null;
};

export default PageTitle;
