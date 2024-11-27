import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Optimize scrolling performance
    const options = {
      threshold: [0.2, 0.5, 0.8],
      rootMargin: '-10% 0px -10% 0px'
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Add smooth scroll behavior
    const handleScroll = () => {
      document.body.style.setProperty('--scroll', (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)).toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''} will-change-scroll`}>
      <Navigation
        activeSection={activeSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="flex-grow bg-white dark:bg-black text-gray-800 dark:text-white">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;