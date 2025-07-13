import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services - Credly",
      link: "https://www.credly.com/badges/f97c5342-f8b2-401f-b7ed-59783bdd1262",
      color: "from-orange-500 to-yellow-500",
      featured: true
    },
    {
      title: "IBM Data Science",
      issuer: "IBM via Coursera",
      link: "https://coursera.org/verify/professional-cert/5NU6G15LLFSO",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "IBM Generative AI Engineering",
      issuer: "IBM via Coursera",
      link: "https://coursera.org/verify/professional-cert/8S5WPH18L3HY",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Google Data Analytics",
      issuer: "Google via Coursera",
      link: "https://coursera.org/verify/professional-cert/RW1VZMMDARNO",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Deep Learning with Packt",
      issuer: "Packt via Coursera",
      link: "https://coursera.org/verify/specialization/U3HCHM3GPPYU",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and achievements in AI, Data Science, and Cloud Computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/30 overflow-hidden hover:scale-[1.05] animate-slide-up ${
                cert.featured ? 'lg:col-span-1 ring-2 ring-orange-400/50' : ''
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Award size={24} />
                  </div>
                  {cert.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {cert.issuer}
                </p>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-all duration-300 hover:scale-105"
                >
                  View Certificate
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;