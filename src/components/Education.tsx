import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      period: "2019-2023",
      institution: "NIT WARANGAL",
      degree: "Bachelor of Technology in Biotechnology",
      description: "During my tenure at NIT Warangal, I gained a comprehensive foundation in biotechnology with a focus on integrating biological sciences with technology. The program emphasized critical thinking, problem-solving, and advanced technical skills, equipping me with a strong understanding of both theoretical and practical aspects of biotechnology.",
      icon: <GraduationCap className="w-8 h-8 text-[#00ffcc]" />,
    },
    {
      period: "2017-2019",
      institution: "Sri Chaitanya Jr Kalasala",
      degree: "Intermediate Education",
      description: "At Sri Chaitanya Jr Kalasala, I focused on core subjects essential for engineering and scientific studies. I prepared extensively for the Joint Entrance Examination (JEE), which enhanced my understanding of complex concepts in mathematics, physics, and chemistry. My dedication to academics is reflected in my board examination score of 981/1000, showcasing my strong grasp of the subjects and my commitment to academic excellence.",
      icon: <School className="w-8 h-8 text-[#00ffcc]" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
        >
          Education
        </motion.h2>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-sm
                       shadow-[0_0_15px_rgba(106,17,203,0.1)] hover:shadow-[0_0_20px_rgba(106,17,203,0.2)] 
                       transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 mt-1 p-3 rounded-full bg-gradient-to-br from-[#6a11cb]/10 to-[#2575fc]/10
                           border border-[#6a11cb]/20 shadow-[0_0_10px_rgba(106,17,203,0.1)]"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {edu.icon}
                </motion.div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                      className="text-2xl font-bold bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
                    >
                      {edu.institution}
                    </motion.h3>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="text-[#00ffcc] font-medium px-4 py-1 rounded-full bg-gradient-to-br from-gray-900 to-black
                               border border-[#6a11cb]/20 shadow-[0_0_10px_rgba(106,17,203,0.1)]"
                    >
                      {edu.period}
                    </motion.span>
                  </div>
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    className="text-xl text-gray-300 font-medium"
                  >
                    {edu.degree}
                  </motion.h4>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-gray-400 leading-relaxed"
                  >
                    {edu.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
