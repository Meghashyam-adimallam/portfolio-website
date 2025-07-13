import React from 'react';
import { Mail, Linkedin, Github, Trophy, Heart, MessageCircle } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/megha-shyam-931327264/",
      icon: Linkedin,
      color: "hover:text-blue-400 hover:bg-blue-500/20",
      description: "Professional Network"
    },
    {
      name: "GitHub",
      url: "https://github.com/Meghashyam-adimallam",
      icon: Github,
      color: "hover:text-white hover:bg-gray-500/20",
      description: "Code Repository"
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/meghashyamadimallam",
      icon: Trophy,
      color: "hover:text-cyan-400 hover:bg-cyan-500/20",
      description: "Data Science Competitions"
    },
    {
      name: "Email",
      url: "mailto:meghashyamadimalla2003@gmail.com",
      icon: Mail,
      color: "hover:text-red-400 hover:bg-red-500/20",
      description: "Direct Contact"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Let's Connect!
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-gray-700 mb-4 leading-relaxed">
              Whether you have an opportunity or just want to connect — let's chat!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I'm open to freelance projects, AI internships, and collaborations. Whether you're looking 
              for an AI engineer, have a project in mind, or just want to discuss the latest in machine 
              learning and data science, I'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Social Links Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col items-center p-8 glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/30 ${link.color} hover:scale-105 animate-slide-up`}
                >
                  <div className="p-6 rounded-full bg-gray-100 group-hover:bg-current group-hover:text-white transition-all duration-300 mb-4 group-hover:scale-110">
                    <IconComponent size={36} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-current transition-colors duration-300 mb-2">
                    {link.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {link.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 backdrop-blur-lg rounded-3xl p-12 shadow-lg border border-gray-200/30 animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
                  <MessageCircle size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Ready to collaborate?</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                I'm passionate about building intelligent systems that solve real-world problems. 
                Let's create something amazing together using the power of AI and machine learning!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:meghashyamadimalla2003@gmail.com"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Mail size={20} className="mr-2 group-hover:animate-bounce" />
                  Get In Touch
                </a>
                <a
                  href="/Megha_Shyam_Updated_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-lg text-gray-700 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200/30 hover:scale-105"
                >
                  <Trophy size={20} className="mr-2 group-hover:animate-pulse" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;