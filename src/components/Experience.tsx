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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience and internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Briefcase size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {experience.company}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-3">
                  {experience.role}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {experience.contributions.map((contribution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{contribution}</span>
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