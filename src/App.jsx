import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import SocialSidebar from "./components/common/SocialSidebar";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import ApplyNow from "./pages/ApplyNow";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SocialSidebar />
      <ScrollToTop /> {/* ✅ GLOBAL USE */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<ApplyNow />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
