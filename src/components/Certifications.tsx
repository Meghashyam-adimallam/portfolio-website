import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/f97c5342-f8b2-401f-b7ed-59783bdd1262",
      color: "from-orange-500 to-yellow-500"
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
      title: "Deep Learning Specialization",
      issuer: "Packt via Coursera",
      link: "https://coursera.org/verify/specialization/U3HCHM3GPPYU",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and achievements in AI, Data Science, and Cloud Computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white`}>
                    <Award size={24} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {cert.issuer}
                </p>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  View Certificate
                  <ExternalLink size={16} className="ml-1" />
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