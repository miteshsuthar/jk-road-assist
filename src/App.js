import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import AppRoutes from "./routes/routes";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App min-h-screen flex flex-col">
        <Header />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main id="main-content" className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
