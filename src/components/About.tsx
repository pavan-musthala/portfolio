import React from 'react';
import { MapPin, LineChart, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative group">
              {/* Main image with gradient border */}
              <motion.div
                className="relative rounded-2xl overflow-hidden border-2 border-transparent bg-gradient-to-r from-[#6a11cb] to-[#2575fc] p-[2px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Pavan Sai Musthala"
                  className="rounded-2xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-[#00ffcc] rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </motion.div>

              {/* Background decorative pattern */}
              <div className="absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-r from-[#6a11cb]/20 to-[#2575fc]/20 rounded-2xl transform rotate-6 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 order-1 md:order-2">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-gray-300"
            >
              As a totally unassuming data analyst with a Bachelor's degree in Biotechnology from NIT Warangal, I humbly dedicate myself to the mundane task of turning raw data into groundbreaking insights. Through a series of casual internships and management training sessions, I've somehow managed to master data migration, reporting, and process improvement – no big deal.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg leading-relaxed text-gray-300"
            >
              In my spare time, I've crafted robust data solutions, including basic little things like advanced dashboards and predictive models. Armed with Python, SQL, Power BI, and a whole toolbox of analytical skills, I'm merely looking to revolutionize data management and visualization wherever I go. And yes, I am seriously looking for good opportunities to showcase my skills and help organizations – because why let all this brilliance go to waste?
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 text-[#00ffcc]"
            >
              <MapPin className="w-5 h-5" />
              <span>Hyderabad, India</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-3 rounded-full bg-gradient-to-br from-[#6a11cb]/10 to-[#2575fc]/10 backdrop-blur-sm"
              >
                <LineChart className="w-6 h-6 text-[#00ffcc]" />
              </motion.div>
              <span className="text-gray-400">Data Analysis & Visualization</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}