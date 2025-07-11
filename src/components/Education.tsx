import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "University of Alabama at Birmingham (UAB)",
      degree: "Master of Science in Data Science",
      duration: "Expected Graduation: May 2026",
      location: "Birmingham, AL",
      gpa: "4.0 / 4.0",
      skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Power BI", "Tableau", "SQL", "R", "Cloud (AWS)"],
      current: true
    },
    {
      institution: "B V Raju Institute of Technology (BVRIT)",
      degree: "B.Tech in Computer Science",
      duration: "Graduated: 2024",
      location: "Hyderabad, India",
      skills: ["Python", "C++", "DSA", "OOP", "DBMS", "Operating Systems"],
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in computer science and data science
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-r ${
                edu.current 
                  ? 'from-blue-50 to-purple-50 border-blue-200' 
                  : 'from-gray-50 to-blue-50 border-gray-200'
              } rounded-xl p-8 border-2 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {edu.current && (
                <div className="absolute top-4 right-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Current
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-3">
                    {edu.degree}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="font-semibold text-green-600">
                        CGPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-300 transition-colors duration-200"
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