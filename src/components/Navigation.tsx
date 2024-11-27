import React, { useState, useCallback } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ activeSection, darkMode, toggleDarkMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
  
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  
  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900/80 to-black/80 dark:from-gray-900/90 dark:to-black/90 backdrop-blur-md z-50 py-4 border-b border-gray-800/20">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent">
          PSM
        </h1>
        
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative nav-link uppercase text-sm tracking-wider ${
                activeSection === section ? 'text-[#00ffcc]' : 'text-gray-400 hover:text-gray-200'
              } transition-colors duration-200`}
            >
              {section}
              {activeSection === section && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffcc] to-[#2575fc]" />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md transform transition-transform duration-200 ease-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } will-change-transform`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={closeMenu}
              className={`uppercase text-sm tracking-wider ${
                activeSection === section ? 'text-[#00ffcc]' : 'text-gray-400'
              } transition-colors duration-200 py-2`}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}