import React from 'react';
import { Mail, Linkedin, Github, Trophy } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/megha-shyam-931327264/",
      icon: Linkedin,
      color: "hover:text-blue-600 hover:bg-blue-50"
    },
    {
      name: "GitHub",
      url: "https://github.com/Meghashyam-adimallam",
      icon: Github,
      color: "hover:text-gray-900 hover:bg-gray-50"
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/meghashyamadimallam",
      icon: Trophy,
      color: "hover:text-cyan-600 hover:bg-cyan-50"
    },
    {
      name: "Email",
      url: "mailto:meghashyamadimalla2003@gmail.com",
      icon: Mail,
      color: "hover:text-red-600 hover:bg-red-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${link.color} group`}
                >
                  <div className="p-4 rounded-full bg-gray-50 group-hover:bg-current group-hover:text-white transition-all duration-300 mb-4">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-current transition-colors duration-300">
                    {link.name}
                  </h3>
                </a>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to collaborate?</h3>
              <p className="text-gray-700 mb-6">
                Whether you're looking for an AI engineer, have a project in mind, or just want to connect, 
                I'd love to hear from you!
              </p>
              <a
                href="mailto:meghashyamadimalla2003@gmail.com"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;