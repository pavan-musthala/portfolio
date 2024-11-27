import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  points: string[];
  index: number;
}

function TimelineItem({ title, company, date, points, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="timeline-item relative mb-12 last:mb-0"
    >
      <div className="absolute left-[-37px] top-0 w-[75px] h-[75px] rounded-full bg-gradient-to-br from-[#6a11cb] to-[#2575fc] p-[2px]">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
          <span className="text-[#00ffcc] text-sm">{date.split(' ')[0]}</span>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="ml-12 p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-sm
                   shadow-[0_0_15px_rgba(106,17,203,0.1)] hover:shadow-[0_0_20px_rgba(106,17,203,0.2)] transition-shadow duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent">
              {company}
            </h3>
            <h4 className="text-xl text-gray-100 mt-1">{title}</h4>
          </div>
          <div className="text-[#00ffcc] mt-2 sm:mt-0 font-medium">{date}</div>
        </div>
        <motion.ul 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            },
            hidden: {
              opacity: 0
            }
          }}
          className="space-y-3"
        >
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -20 }
              }}
              className="text-gray-300 flex items-start group"
            >
              <span className="mr-3 text-[#00ffcc] group-hover:scale-110 transition-transform duration-200">•</span>
              <span className="group-hover:text-gray-200 transition-colors duration-200">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: "Management Trainee",
      company: "RAAM GROUP",
      date: "Mar 2024 - May 2024",
      points: [
        "Analyzed automotive sales data to develop data-driven strategies for MG Motors",
        "Collaborated with corporate sales team on ground-level operations analysis",
        "Managed data quality assurance and extraction processes for sales reporting"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "BONATRA HEALTHCARE",
      date: "Oct 2023-Dec 2023",
      points: [
        "Implemented METABASE migration from Google Sheets, optimizing data accessibility",
        "Generated monthly cohort analysis and revenue reports for strategic decision-making",
        "Enhanced operational efficiency through ERPNEXT task list implementation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-10 top-[75px] bottom-6 w-0.5 bg-gradient-to-b from-[#6a11cb] to-[#2575fc] opacity-30"></div>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}