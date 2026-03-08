import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import PageTitle from "./components/page-title/page-title";
import AppRoutes from "./routes/routes";
import WhatsAppWidget from "./components/whatsapp-widget/whatsapp-widget";
import BackToTop from "./components/back-to-top/back-to-top";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />

        {/* WhatsApp Chat Widget */}
        <WhatsAppWidget />

        {/* Back to Top */}
        <BackToTop />

        {/* Floating Call Button - Mobile */}
        <a
          href="tel:+918955836514"
          className="floating-call-btn"
          aria-label="Call for emergency help"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
