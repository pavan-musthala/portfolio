import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0.1 : 0.6,
    ease: [0.645, 0.045, 0.355, 1],
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black scroll-container">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#6a11cb]/10 to-[#2575fc]/10"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent will-change-transform"
        >
          Pavan Sai Musthala
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.2 }}
          className="text-3xl mb-8 text-gray-300"
        >
          Looking for Opportunities
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.3 }}
          className="h-16 mb-12 will-change-transform"
        >
          <TypeAnimation
            sequence={[
              'Transforming Data into Insights',
              2000,
              'Driving Data-Driven Decisions',
              2000,
              'Empowering Businesses with Data',
              2000,
            ]}
            wrapper="span"
            speed={40}
            className="text-2xl text-gray-400"
            repeat={Infinity}
          />
        </motion.div>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white
                     hover:shadow-[0_0_20px_rgba(106,17,203,0.3)] transition-shadow duration-300"
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
}