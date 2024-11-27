import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Skills', href: '#skills', icon: '🛠️' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Education', href: '#education', icon: '🎓' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(href.substring(1));
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-r from-black/50 via-black/30 to-black/50 backdrop-blur-lg border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="flex-shrink-0 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffcc] via-[#2575fc] to-[#00ffcc] 
                            rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative px-4 py-2 bg-black ring-1 ring-white/10 rounded-lg">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#00ffcc] via-[#2575fc] to-[#00ffcc] 
                               bg-clip-text text-transparent bg-size-200 animate-gradient">
                  PSM
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide
                              transition-all duration-300 group overflow-hidden
                              ${activeSection === item.href.substring(1)
                                ? 'text-[#00ffcc] bg-white/5'
                                : 'text-gray-300 hover:text-[#00ffcc]'}`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                      {item.name}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00ffcc]/20 via-[#2575fc]/20 to-[#00ffcc]/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.7 }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.div 
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-lg text-gray-300 hover:text-[#00ffcc]
                         transition-colors duration-300 focus:outline-none group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffcc]/20 via-[#2575fc]/20 to-[#00ffcc]/20 
                              rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: {
                  opacity: { duration: 0.2 },
                  height: { duration: 0.2 }
                }
              }}
              className="md:hidden bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-lg border-b border-white/10"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: {
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }
                    }}
                    onClick={() => scrollToSection(item.href)}
                    className={`group flex items-center w-full px-4 py-3 rounded-lg
                             text-gray-300 text-sm font-medium
                             ${activeSection === item.href.substring(1)
                               ? 'bg-white/5 text-[#00ffcc]'
                               : 'hover:bg-white/5 hover:text-[#00ffcc]'}
                             transition-all duration-300`}
                  >
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity mr-3">
                      {item.icon}
                    </span>
                    {item.name}
                    <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 
                                          group-hover:translate-x-1 transition-all duration-300" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
