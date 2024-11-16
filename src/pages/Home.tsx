import { useEffect } from 'react';
import Hero from '../components/Hero';
import WhatIsTMJ from '../components/WhatIsTMJ';
import Issues from '../components/Issues';
import Mission from '../components/Mission';
import Stats from '../components/Stats';
import PatientStories from '../components/PatientStories';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function Home() {
  useEffect(() => {
    // Smooth scroll to section when clicking on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main>
      <SEO />
      <Hero />
      <WhatIsTMJ />
      <Issues />
      <Mission />
      <Stats />
      <PatientStories />
      <Contact />
    </main>
  );
}