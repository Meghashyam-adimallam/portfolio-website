import React from 'react';
import { Github, ExternalLink, Bot, Mic, Shield, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Research Paper Q&A Bot (GenAI)",
      description: "PDF chatbot using LangChain + FAISS + HuggingFace",
      icon: Bot,
      github: "https://github.com/Meghashyam-adimallam/Research-paper-qa-bot",
      technologies: ["LangChain", "FAISS", "HuggingFace", "Python", "NLP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Speech Emotion Recognition",
      description: "MFCC + CNN + LSTM for emotion classification",
      icon: Mic,
      github: "https://github.com/Meghashyam-adimallam/speech-emotion-recognition",
      technologies: ["MFCC", "CNN", "LSTM", "TensorFlow", "Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Anomaly Detection using SVD",
      icon: Shield,
      github: "https://github.com/Meghashyam-adimallam/Anomaly_Detection",
      technologies: ["SVD", "Anomaly Detection", "Machine Learning", "Python"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Power BI Dashboard",
      description: "Retail Sales Dashboard using slicers & KPIs",
      icon: BarChart3,
      technologies: ["Power BI", "Data Visualization", "KPIs", "Analytics"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
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
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
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
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
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