import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Service from "../pages/service/service";
import ServicesPage from "../pages/services/services";
import RsaServices from "../pages/rsa-services/rsa-services";
import About from "../pages/about/about";
import ComingSoon from "../pages/coming-soon/coming-soon";
import { COMING_SOON_PATHS } from "../constants/routes";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services/:serviceName" element={<Service />} />
    <Route path="/rsa-services" element={<RsaServices />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<ComingSoon />} />
    {COMING_SOON_PATHS.filter((path) => path !== "/login").map((path) => (
      <Route key={path} path={path} element={<ComingSoon />} />
    ))}
  </Routes>
);

export default AppRoutes;
