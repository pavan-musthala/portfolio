import React from 'react';
import { Database, LineChart, Code, Terminal, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  index: number;
}

function SkillCard({ icon, title, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-sm
                 shadow-[0_0_15px_rgba(106,17,203,0.1)] hover:shadow-[0_0_20px_rgba(106,17,203,0.2)] transition-all duration-300"
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        className="text-[#00ffcc] mb-4"
      >
        {icon}
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
      >
        {title}
      </motion.h3>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          },
          hidden: {
            opacity: 0
          }
        }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 10 }
            }}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-gradient-to-br from-gray-900 to-black text-[#00ffcc] rounded-full text-sm 
                     border border-[#6a11cb]/20 hover:border-[#2575fc]/40 transition-all duration-300
                     shadow-[0_0_10px_rgba(106,17,203,0.1)] hover:shadow-[0_0_15px_rgba(106,17,203,0.2)]"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const skillsData = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Development Tools",
      skills: ['Visual Studio Code', 'Jupyter Notebook', 'Git Version Control']
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Data Analysis & Visualization",
      skills: ['MySQL', 'PowerBI', 'Advanced Excel', 'Statistical Analysis', 'Data Visualization']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming & Libraries",
      skills: ['Python', 'SQL', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      skills: ['Data Wrangling', 'Data Cleaning', 'Data Modeling', 'ETL Processes', 'Database Management']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Skills",
      skills: ['Cross-functional Team Collaboration', 'Technical Communication', 'Business Domain Analysis', 'Project Management', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}