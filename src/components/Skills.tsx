import React from 'react';
import { Code, Database, Brain, Cloud, BarChart, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "R", "C++"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "NLP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Visualization",
      icon: BarChart,
      skills: ["Power BI", "Tableau"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS", "Streamlit", "Git", "VS Code", "Google Colab"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical skills and expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 font-medium shadow-sm"
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