import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeSections from "./components/HomeSections";
import FeaturedCourses from "./components/FeaturedCourses";
import LearningCategories from "./components/HomeSections";
import Testimonials from "./components/Testimonials";
import LearningOffer from "./components/LearningOffer";
import TrendingCourses from "./components/TrendingCourses";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[#062b2e]">
      <Navbar />
      <Hero />
      <HomeSections />
      <FeaturedCourses />
      <LearningOffer />
      <Testimonials />
      <TrendingCourses />
      <Footer />
    </main>
  );
}
