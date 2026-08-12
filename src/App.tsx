import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AppPage from "./pages/AppPage";
import Academy from "./pages/Academy";
import Seminars from "./pages/Seminars";
import Articles from "./pages/Articles";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // άσε τα anchor links να κάνουν smooth scroll
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
