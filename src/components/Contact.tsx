import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/pavanmusthala/',
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/pavan-musthala',
      color: 'hover:text-[#333]'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:musthalapavan@gmail.com',
      color: 'hover:text-[#EA4335]'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00ffcc] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
        >
          Connect with Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-full bg-gradient-to-br from-[#6a11cb]/10 to-[#2575fc]/10 backdrop-blur-sm
                       border border-[#6a11cb]/20 hover:border-[#2575fc]/40 transition-all duration-300
                       shadow-[0_0_10px_rgba(106,17,203,0.1)] hover:shadow-[0_0_20px_rgba(106,17,203,0.2)]
                       group ${link.color}`}
            >
              <div className="text-[#00ffcc] group-hover:text-current transition-colors duration-300">
                {link.icon}
              </div>
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-gray-400"
        >
          Let's connect and create something amazing together!
        </motion.p>
      </div>
    </section>
  );
}
