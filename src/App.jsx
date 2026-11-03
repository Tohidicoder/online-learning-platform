import { Routes, Route } from "react-router-dom";

// ==========================================
// COMPONENTS
// ==========================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeSections from "./components/HomeSections";
import FeaturedCourses from "./components/FeaturedCourses";
import Testimonials from "./components/Testimonials";
import LearningOffer from "./components/LearningOffer";
import TrendingCourses from "./components/TrendingCourses";
import Footer from "./components/Footer";

// ==========================================
// PAGES
// ==========================================

import AboutOne from "./pages/AboutOne";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import PricingTwo from "./pages/PricingTwo";
import Career from "./pages/career";
import FAQ from "./pages/FAQ";
import Events from "./pages/Events";

import Team from "./pages/Team";

// ==========================================
// HOME PAGE
// ==========================================

function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
      <FeaturedCourses />
      <LearningOffer />
      <Testimonials />
      <TrendingCourses />
      <Footer />
    </>
  );
}

// ==========================================
// MAIN APP
// ==========================================

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        {/* HOME */}

        <Route path="/" element={<HomePage />} />

        {/* ABOUT */}

        <Route path="/about" element={<AboutOne />} />

        {/* BLOG */}

        <Route path="/blog" element={<Blog />} />

        {/* CONTACT */}

        <Route path="/contact" element={<Contact />} />

        {/* PRICING */}

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/pricing-two" element={<PricingTwo />} />

        {/* CAREER */}

        <Route path="/career" element={<Career />} />

        {/* FAQ */}

        <Route path="/faq" element={<FAQ />} />

        <Route path="/events" element={<Events />} />

        {/* TEAM */}

        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}
