import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { lazy, Suspense } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  image: string;
  links: {
    live: string;
    github: string;
  };
  index: number;
}

const projects = [
  {
    title: "Fitness WebApp, (FitFreak)",
    description: "Designed and deployed a fitness-focused web application offering workout plans, nutrition tracking, diet plans, and progress monitoring. " +
      "Leveraged Cursor AI to generate the application's code, streamlining the development process. " +
      "Gained hands-on experience with AI-powered development tools, application structure design, and deployment. " +
      "Deployed a fully functional prototype using Vercel, enabling seamless user interaction with core features.",
    tools: ['Python', 'AI/ML', 'React', 'Cursor AI', 'Vercel'],
    image: "/FitFreak.jpg",
    links: {
      live: "https://fitfreak-liard.vercel.app/",
      github: "https://github.com/pavan-musthala/fitfreak"
    }
  },
  {
    title: "Zomato Restaurants Analysis",
    description: "This project is an interactive data analysis dashboard built using Streamlit, designed to explore and visualize Zomato restaurant data effectively. Features include interactive data exploration, geographical analysis, price and rating insights, cuisine distribution analysis, and online ordering trends. The dashboard provides valuable insights into restaurant ratings, price distributions, popular cuisines, location patterns, and consumer behavior, making it a powerful tool for stakeholders in the restaurant industry to make informed decisions.",
    tools: ['Python', 'Pandas', 'Matplotlib'],
    image: "/zomato.jpg",
    links: {
      live: "https://zomato-analysis.streamlit.app/",
      github: "https://github.com/pavan-musthala/zomato-analysis"
    }
  },
  {
    title: "Olympics Analysis Dashboard",
    description: "An interactive web application that provides a comprehensive analysis of Olympic Games history from 1896 to 2016. This data visualization project, built with Streamlit, transforms historical Olympic data into meaningful insights through interactive visualizations. Key features include medal tally tracking, gender participation analysis, country-wise performance metrics, athlete demographic trends, and sport-specific insights, making it a valuable resource for sports analysts, researchers, and enthusiasts.",
    tools: ['Python', 'Streamlit', 'Pandas', 'Seaborn', 'Plotly'],
    image: "/olympics.jpg",
    links: {
      live: "https://olympics-dashboard.streamlit.app/",
      github: "https://github.com/pavan-musthala/olympics-dashboard"
    }
  },
  {
    title: "Diabetes Risk Predictor",
    description: "The Diabetes Risk Predictor is an interactive web application that leverages machine learning to assess an individual's risk of developing diabetes based on various health metrics. Using a Support Vector Machine (SVM) Classifier and the Pima Indians Diabetes Database, the application predicts diabetes risk based on 8 health indicators. Features include real-time risk prediction, confidence scoring, interactive dashboard with visual comparisons, and in-depth analysis of key health metrics. The project demonstrates practical applications of machine learning in healthcare while providing users with valuable health insights.",
    tools: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Plotly'],
    image: "/diabetes.png",
    links: {
      live: "https://diabetes-risk-predictor.streamlit.app/",
      github: "https://github.com/pavan-musthala/diabetes-risk-predictor"
    }
  },
  {
    title: "Calorie Tracker",
    description: "The Exercise Calorie Predictor is an interactive web application that predicts the number of calories burned during exercise based on various physical and exercise parameters. Using an XGBoost regression model, it provides real-time predictions based on inputs such as gender, age, height, weight, exercise duration, heart rate, and body temperature. The application helps users understand the impact of their exercise and make informed decisions for optimizing their fitness routines. Additionally, the app provides personalized feedback on exercise intensity and gives tips to maximize calorie burn.",
    tools: ['Python', 'Streamlit', 'XGBoost', 'Scikit-learn', 'Plotly'],
    image: "/calories.png",
    links: {
      live: "https://calorie-trackerr.streamlit.app/",
      github: "https://github.com/pavan-musthala/calorie-tracker"
    }
  },
  {
    title: "Sales Data Analysis Dashboard",
    description: "Developed an interactive Power BI dashboard to analyze sales data, uncover trends, and provide actionable insights. The dashboard offers a comprehensive view of sales performance, product trends, and customer behavior across categories and time periods. By leveraging Power BI's data modeling and visualization tools, it facilitates data-driven decision-making through dynamic, user-friendly visuals. Key insights include identification of top-performing SKUs, analysis of promotional events' impact, highlighting of underperforming categories, and demonstration of price sensitivity's influence on sales volume.",
    tools: ['Power BI', 'DAX', 'Power Query', 'Excel'],
    image: "/sales.jpg",
    links: {
      live: "",
      github: "https://github.com/pavan-musthala/powerbi-dashboard"
    }
  }
];

function ProjectCard({ title, description, tools, image, links, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-sm
                 shadow-[0_0_15px_rgba(106,17,203,0.1)] hover:shadow-[0_0_20px_rgba(106,17,203,0.2)] transition-all duration-300
                 group w-full"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="aspect-video overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="p-4 sm:p-6">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-4 sm:line-clamp-none"
        >
          {description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {tools.map((tool, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-gray-800/50 text-gray-300"
            >
              {tool}
            </span>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="flex gap-3"
        >
          {links.live && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50
                       shadow-[0_0_15px_rgba(106,17,203,0.1)] hover:shadow-[0_0_20px_rgba(106,17,203,0.2)]
                       text-[#6a11cb] hover:text-[#2575fc] transition-all duration-300"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50
                     shadow-[0_0_15px_rgba(106,17,203,0.1)] hover:shadow-[0_0_20px_rgba(106,17,203,0.2)]
                     text-[#6a11cb] hover:text-[#2575fc] transition-all duration-300"
            aria-label="View Code"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <Suspense key={index} fallback={<div className="h-96 animate-pulse bg-gray-800 rounded-lg"></div>}>
              <ProjectCard {...project} index={index} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}