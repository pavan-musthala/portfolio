import React, { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
  
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  
  return (
    <nav className="sticky top-0 left-0 right-0 w-full bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md z-[9999] border-b border-gray-800/20">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
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
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={closeMenu}
              className={`capitalize hover:text-[#2575fc] transition-colors ${
                activeSection === section ? 'text-[#6a11cb]' : 'text-gray-400'
              }`}
            >
              {section}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-md z-[90] md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={closeMenu}
                className={`text-2xl capitalize hover:text-[#2575fc] transition-colors ${
                  activeSection === section ? 'text-[#6a11cb]' : 'text-gray-400'
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}