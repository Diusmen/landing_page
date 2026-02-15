import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Identification from './components/Identification';
import Quiz from './components/Quiz';
import Offers from './components/Offers';
import Authority from './components/Authority';
import StrategicSession from './components/StrategicSession';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') as string);
        target?.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-luxury-accent selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-luxury-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight font-sans text-luxury-black">Lawan.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#work" className="hover:text-black transition-colors">Portfolio</a>
            <a href="#quiz" className="hover:text-black transition-colors">Diagnostic</a>
            <a href="#offers" className="hover:text-black transition-colors">Offres</a>
            <a href="#results" className="hover:text-black transition-colors">Résultats</a>
            <a href="#contact" className="px-5 py-2 bg-luxury-black text-white hover:text-luxury-accent rounded-none hover:bg-gray-900 transition-colors uppercase tracking-wider text-xs">Session Stratégique</a>
          </div>
        </div>
      </nav>

      <main>
        <div id="work">
          <Hero />
        </div>
        <div id="identification">
            <Identification />
        </div>
        <div id="quiz">
            <Quiz />
        </div>
        <div id="offers">
            <Offers />
        </div>
        <div id="results">
            <Authority />
        </div>
        <div id="contact">
            <StrategicSession />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;