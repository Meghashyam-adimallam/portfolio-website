import React from 'react';
import { Code, Database, Brain, Cloud, BarChart, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "R", "C++", "Git", "GitHub", "VS Code"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "TensorFlow", "PyTorch"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Science & Analytics",
      icon: BarChart,
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Power BI", "Tableau"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Cloud & Development Tools",
      icon: Cloud,
      skills: ["AWS", "Streamlit", "Hugging Face", "LangChain", "Linux", "Bash"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Development Environment",
      icon: Wrench,
      skills: ["Google Colab", "Jupyter", "VS Code", "Git", "GitHub"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical expertise across various domains of AI, ML, and Data Science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/30 p-6 hover:scale-[1.02] animate-slide-up"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-indigo-50 text-gray-700 rounded-lg border border-indigo-200/50 hover:border-indigo-400/50 hover:bg-indigo-100 hover:text-gray-800 transition-all duration-300 font-medium shadow-sm hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;