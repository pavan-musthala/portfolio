import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ activeSection, darkMode, toggleDarkMode }: NavigationProps) {
  const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
  
  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900/80 to-black/80 dark:from-gray-900/90 dark:to-black/90 backdrop-blur-md z-50 py-4 border-b border-gray-800/20">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent">
          PSM
        </h1>
        <div className="flex items-center gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative nav-link uppercase text-sm tracking-wider ${
                activeSection === section ? 'text-[#00ffcc]' : 'text-gray-400 hover:text-gray-200'
              } transition-colors duration-300`}
            >
              {section}
              {activeSection === section && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffcc] to-[#2575fc] transform origin-left"></span>
              )}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
          >
            {darkMode ? <Sun className="w-5 h-5 text-[#00ffcc]" /> : <Moon className="w-5 h-5 text-[#6a11cb]" />}
          </button>
        </div>
      </div>
    </nav>
  );
}