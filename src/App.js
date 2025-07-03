// File: src/App.js
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 shadow-md px-6 py-4 flex justify-between items-center transition-all">
        <h1 className="text-white text-xl font-bold">Megha Shyam</h1>
        <div className="flex items-center space-x-4">
          <a href="#about" className="text-white hover:text-pink-400 transition">About</a>
          <a href="#projects" className="text-white hover:text-pink-400 transition">Projects</a>
          <a href="#certifications" className="text-white hover:text-pink-400 transition">Certifications</a>
          <a href="#contact" className="text-white hover:text-pink-400 transition">Contact</a>
          <a href="https://github.com/Meghashyam-adimallam" target="_blank" rel="noreferrer" className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">Resume</a>
          <button onClick={toggleTheme} className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">Toggle Theme</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#1f0036] via-[#2b1b52] to-[#1a1a2e] text-white pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Hi, I'm Megha 👋</h1>
        <p className="text-lg md:text-xl max-w-xl animate-fadeIn delay-200">
          A Data Science graduate student passionate about Machine Learning, Deep Learning, and Generative AI. I build smart solutions to real problems.
        </p>
        <a href="#projects">
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition">View Projects</button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-[#0e0e0e] text-black dark:text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Megha Shyam"
              className="rounded-2xl w-64 h-64 object-cover border-4 border-pink-500 shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm Megha Shyam, a Master's student in Data Science at UAB with a passion for Machine Learning, Deep Learning, and Generative AI.
              I love solving real-world problems through intelligent, data-driven solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I’ve worked on fraud detection, computer vision, GenAI chatbots, and dashboards. I enjoy building end-to-end ML pipelines and deploying AI applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="animate-slideUp py-16 bg-white dark:bg-[#121212] text-black dark:text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {[{
              title: 'Logistic Regression Classifier',
              desc: 'Predict customer purchase behavior using logistic regression.',
              code: 'https://github.com/Meghashyam-adimallam/logistic-regression-model'
            },
            {
              title: 'Image Classifier using CNN',
              desc: 'Classify CIFAR-10 images using a CNN built in Keras.',
              code: 'https://github.com/Meghashyam-adimallam/cnn-image-classifier'
            },
            {
              title: 'Research Paper Q&A Bot (GenAI)',
              desc: 'Streamlit chatbot that answers questions from uploaded research PDFs using FAISS, LangChain, and HuggingFace LLMs.',
              code: 'https://github.com/Meghashyam-adimallam/Research-paper-qa-bot',
              demo: 'https://meghashyam-adimallam-research-paper-qa-bot.streamlit.app'
            },
            {
              title: 'Credit Card Fraud Detection',
              desc: 'Detect fraudulent transactions using anomaly detection and SVD.',
              code: 'https://github.com/Meghashyam-adimallam/CreditCard-Fraud-Detection'
            },
            {
              title: 'Covid-19 Dashboard',
              desc: 'Interactive dashboard using Plotly Dash to visualize Covid stats.',
              code: '#'
            },
            {
              title: 'Portfolio Website',
              desc: 'This responsive portfolio is built with React + Tailwind.',
              code: 'https://github.com/Meghashyam-adimallam/portfolio-website'
            }
          ].map((proj, i) => (
            <div key={i} className="project-card hover:shadow-pink-500/30 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm mb-3 text-gray-800 dark:text-gray-300">{proj.desc}</p>
              {proj.code && <a href={proj.code} className="text-blue-500 dark:text-blue-400 mr-3" target="_blank" rel="noreferrer">View Code</a>}
              {proj.demo && <a href={proj.demo} className="text-blue-500 dark:text-blue-400" target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-white dark:bg-[#121212] text-black dark:text-white px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'IBM Data Science Professional Certificate',
              platform: 'Coursera',
              link: 'https://coursera.org/verify/professional-cert/5NU6G15LLFSO'
            },
            {
              title: 'IBM Generative AI Engineering Certificate',
              platform: 'Coursera',
              link: 'https://coursera.org/verify/professional-cert/8S5WPH18L3HY'
            },
            {
              title: 'Google Data Analytics Certificate',
              platform: 'Coursera',
              link: 'https://coursera.org/verify/professional-cert/RW1VZMMDARNO'
            },
            {
              title: 'Deep Learning with Real-World Projects',
              platform: 'Coursera / Packt',
              link: 'https://coursera.org/verify/specialization/U3HCHM3GPPYU'
            },
            {
              title: 'AWS Certified Cloud Practitioner',
              platform: 'Credly',
              link: 'https://www.credly.com/badges/f97c5342-f8b2-401f-b7ed-59783bdd1262/linked_in?t=swtolx'
            }
          ].map((cert, i) => (
            <div key={i} className="project-card hover:shadow-pink-500/30 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm mb-3 text-gray-800 dark:text-gray-300">Issued by {cert.platform}</p>
              <a href={cert.link} className="text-blue-500 dark:text-blue-400" target="_blank" rel="noreferrer">Verify Certificate</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center bg-white dark:bg-[#0e0e0e] text-black dark:text-white">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Email: meghashyamadimalla2003@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" className="text-blue-500 dark:text-blue-400" target="_blank" rel="noreferrer">Megha Shyam</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-6">
        <p>© 2025 Megha Shyam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
