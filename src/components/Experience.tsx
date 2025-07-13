import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: "MQS Technologies Pvt Ltd",
    role: "Market Research Analyst Intern",
    location: "Hyderabad, India",
    duration: "May 2024 – Jun 2024",
    contributions: [
      "Conducted comprehensive market & competitor research",
      "Created engaging promotional content for marketing campaigns",
      "Performed data analysis for strategic campaign planning"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience and internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group glass-morphism rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/30 hover:scale-[1.02] animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Briefcase size={28} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {experience.company}
                </h3>
                <p className="text-xl text-indigo-600 font-semibold mb-3">
                  {experience.role}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Key Contributions:</h4>
                  <ul className="space-y-3">
                    {experience.contributions.map((contribution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;