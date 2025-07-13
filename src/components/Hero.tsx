import React from 'react';
import { Download, Github, Linkedin, Mail, Trophy, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/90 backdrop-blur-sm">
                <img
                  src="/Linkedin_Profile(1).jpg"
                  alt="Megha Shyam"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Sparkles size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-4 leading-tight">
                Hi! I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Megha</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-6 font-medium">
                Aspiring AI Engineer | ML Developer | Data Scientist
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                I'm an AI & Machine Learning Engineer passionate about solving real-world problems using 
                Generative AI, NLP, and Deep Learning. I create intelligent systems, build dashboards, 
                and deploy ML models in cloud environments.
              </p>
            </div>

            {/* Career Goals */}
            <div className="glass-morphism rounded-2xl p-6 mb-8 shadow-lg border border-gray-200/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Trophy className="text-amber-500" size={20} />
                Career Goals
              </h3>
              <p className="text-gray-600 mb-4">
                I'm passionate about building intelligent systems and my goal is to work as an AI Engineer, 
                Machine Learning Engineer, Data Scientist, or Product Analyst. I love solving real-world problems 
                using Generative AI, LLMs, and ML at scale.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Engineer', 'ML Engineer', 'Data Scientist', 'Product Analyst'].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium border border-gray-300/50 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/Megha_Shyam_Updated_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                View Resume
              </a>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/megha-shyam-931327264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/90 backdrop-blur-lg text-blue-600 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 border border-gray-200/30"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Meghashyam-adimallam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/90 backdrop-blur-lg text-gray-700 rounded-xl hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 border border-gray-200/30"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:meghashyamadimalla2003@gmail.com"
                  className="p-4 bg-white/90 backdrop-blur-lg text-red-500 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 border border-gray-200/30"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;