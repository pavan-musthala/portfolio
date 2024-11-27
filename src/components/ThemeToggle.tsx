import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 p-2 rounded-full 
                 ${isDark ? 'bg-gray-800' : 'bg-white'} 
                 shadow-lg border border-gray-200 dark:border-gray-700
                 hover:shadow-xl transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`absolute ${isDark ? 'opacity-100' : 'opacity-0'}`}
      >
        <Moon className="w-6 h-6 text-[#00ffcc]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className={`${isDark ? 'opacity-0' : 'opacity-100'}`}
      >
        <Sun className="w-6 h-6 text-[#6a11cb]" />
      </motion.div>
    </motion.button>
  );
}
