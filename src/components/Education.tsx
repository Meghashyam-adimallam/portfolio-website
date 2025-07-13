import React from 'react';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "University of Alabama at Birmingham (UAB)",
      degree: "Master of Science in Data Science",
      duration: "Aug 2024 – May 2026 (Expected)",
      location: "Birmingham, Alabama",
      gpa: "4.0 / 4.0",
      focus: "AI, ML, NLP, Cloud AI",
      skills: ["Python", "R", "Power BI", "SQL", "AWS", "Tableau", "Machine Learning", "Deep Learning", "NLP"],
      current: true
    },
    {
      institution: "B V Raju Institute of Technology (BVRIT)",
      degree: "B.Tech in Information Technology",
      duration: "Graduated 2024",
      location: "Hyderabad, India",
      skills: ["DSA", "OOP", "C++", "DBMS", "Operating Systems", "Python"],
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in computer science and data science
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group relative glass-morphism rounded-2xl p-8 border border-gray-200/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-slide-up ${
                edu.current ? 'ring-2 ring-indigo-500/30' : ''
              }`}
            >
              {edu.current && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} />
                    Current
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  <p className="text-xl text-indigo-600 font-semibold mb-3">
                    {edu.degree}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-2 font-semibold text-yellow-400">
                        <Star size={16} />
                        CGPA: {edu.gpa}
                      </div>
                    )}
                  </div>

                  {edu.focus && (
                    <div className="mb-4">
                      <span className="text-gray-700 font-medium">Focus: </span>
                      <span className="text-indigo-600">{edu.focus}</span>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-indigo-50 text-gray-700 rounded-full text-sm border border-indigo-200/50 hover:border-indigo-400/50 hover:bg-indigo-100 transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;