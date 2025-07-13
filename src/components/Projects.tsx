import React from 'react';
import { Github, ExternalLink, Bot, Mic, Shield, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Research Paper Q&A Bot (GenAI)",
      description: "PDF chatbot using LangChain + FAISS + HuggingFace for intelligent document querying and analysis",
      icon: Bot,
      github: "https://github.com/Meghashyam-adimallam/Research-paper-qa-bot",
      technologies: ["LangChain", "FAISS", "HuggingFace", "Python", "NLP", "Generative AI"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Speech Emotion Recognition",
      description: "MFCC + CNN + LSTM for emotion classification with advanced deep learning techniques",
      icon: Mic,
      github: "https://github.com/Meghashyam-adimallam/speech-emotion-recognition",
      technologies: ["MFCC", "CNN", "LSTM", "TensorFlow", "Python", "Audio Processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Anomaly Detection using SVD for identifying fraudulent transactions with high accuracy",
      icon: Shield,
      github: "https://github.com/Meghashyam-adimallam/Anomaly_Detection",
      technologies: ["SVD", "Anomaly Detection", "Machine Learning", "Python", "Data Science"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Power BI Retail Dashboard",
      description: "Interactive Retail Sales Dashboard using slicers & KPIs for comprehensive business analytics",
      icon: BarChart3,
      technologies: ["Power BI", "Data Visualization", "KPIs", "Analytics", "Business Intelligence"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in AI, Machine Learning, and Data Science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/30 overflow-hidden hover:scale-[1.02] animate-slide-up"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-50 text-gray-700 rounded-full text-sm border border-indigo-200/50 hover:border-indigo-400/50 hover:bg-indigo-100 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.github && (
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;