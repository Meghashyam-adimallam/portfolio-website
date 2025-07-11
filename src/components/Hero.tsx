import React from 'react';
import { Download, Github, Linkedin, Mail, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/Linkedin_Profile(1).jpg"
                  alt="Megha Shyam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                <Trophy size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi! I'm <span className="text-blue-600">Megha</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-6 font-medium">
              Aspiring AI Engineer | ML Enthusiast | Data Scientist
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              I'm an AI & Machine Learning Engineer passionate about solving real-world problems using 
              Generative AI, NLP, and Deep Learning. I create intelligent systems, build dashboards, 
              and deploy ML models in cloud environments.
            </p>

            {/* Career Goals */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Goals</h3>
              <p className="text-gray-700 mb-4">
                My goal is to build robust, scalable AI systems and contribute to impactful projects 
                in healthcare, finance, or education using modern ML and NLP techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Engineer', 'ML Engineer', 'Data Scientist', 'Product Analyst'].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/megha-shyam-931327264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Meghashyam-adimallam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:meghashyamadimalla2003@gmail.com"
                  className="p-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
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