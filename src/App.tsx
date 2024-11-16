import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutTMJ from './pages/AboutTMJ';
import TMJ101 from './pages/TMJ101';
import Community from './pages/Community';
import Podcast from './pages/Podcast';
import MediaHub from './pages/MediaHub';
import JoinTheTribe from './pages/JoinTheTribe';
import SEO from './components/SEO';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = 'OH MY JAW | TMJ Healthcare Revolution';
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-pink-500 origin-left z-50"
          style={{ scaleX }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-tmj" element={<AboutTMJ />} />
          <Route path="/tmj-101" element={<TMJ101 />} />
          <Route path="/community" element={<Community />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/media" element={<MediaHub />} />
          <Route path="/join" element={<JoinTheTribe />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}