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
          <a href="https://github.com/Meghashyam-adimallam" target="_blank" rel="noreferrer" className="text-white hover:text-pink-400 transition">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-white hover:text-pink-400 transition">Resume</a>
          <button onClick={toggleTheme} className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">Toggle</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#121212] text-white pt-24">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">Megha Shyam</h1>
        <p className="text-lg md:text-xl max-w-xl text-gray-400">Turning data into impactful, intelligent solutions using ML, DL, and GenAI.</p>
        <a href="#projects">
          <button className="mt-8 px-8 py-3 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700 transition">View Projects</button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-[#0e0e0e] text-black dark:text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm a passionate Data Science grad student at UAB. I specialize in machine learning, deep learning, and GenAI.
          </p>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-left inline-block">
            <li>🎓 MS in Data Science @ UAB</li>
            <li>🧠 Skilled in ML, DL, LLMs, RAG & GenAI tools</li>
            <li>💻 Strong in Python, Pandas, SQL, HuggingFace, Streamlit</li>
            <li>🚀 Focused on building real-world AI applications</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-[#121212] text-black dark:text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              desc: 'Chatbot to answer questions from PDFs using FAISS, LangChain, HuggingFace.',
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
              desc: 'This site — built with React and Tailwind CSS.',
              code: 'https://github.com/Meghashyam-adimallam/portfolio-website'
            }
          ].map((proj, i) => (
            <div key={i} className="project-card">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{proj.desc}</p>
              <div className="flex gap-4">
                {proj.code && <a href={proj.code} className="text-blue-500 dark:text-blue-400" target="_blank" rel="noreferrer">Code</a>}
                {proj.demo && <a href={proj.demo} className="text-blue-500 dark:text-blue-400" target="_blank" rel="noreferrer">Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white dark:bg-[#0e0e0e] text-black dark:text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
              title: 'IBM Data Science Certificate',
              platform: 'Coursera',
              link: 'https://coursera.org/verify/professional-cert/5NU6G15LLFSO'
            },
            {
              title: 'IBM Generative AI Certificate',
              platform: 'Coursera',
              link: 'https://coursera.org/verify/professional-cert/8S5WPH18L3HY'
            },
            {
              title: 'Google Data Analytics Certificate',
              platform: 'Coursera',
              link: 'https://coursera.org/verify/professional-cert/RW1VZMMDARNO'
            },
            {
              title: 'Deep Learning w/ Projects',
              platform: 'Coursera/Packt',
              link: 'https://coursera.org/verify/specialization/U3HCHM3GPPYU'
            },
            {
              title: 'AWS Cloud Practitioner',
              platform: 'Credly',
              link: 'https://www.credly.com/badges/f97c5342-f8b2-401f-b7ed-59783bdd1262/linked_in?t=swtolx'
            }
          ].map((cert, i) => (
            <div key={i} className="project-card">
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Issued by {cert.platform}</p>
              <a href={cert.link} className="text-blue-500 dark:text-blue-400" target="_blank" rel="noreferrer">Verify</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-[#121212] text-center text-black dark:text-white px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-2">Email: <a href="mailto:meghashyamadimalla2003@gmail.com" className="text-blue-600 dark:text-blue-400">meghashyamadimalla2003@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" className="text-blue-600 dark:text-blue-400" target="_blank" rel="noreferrer">Megha Shyam</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>© 2025 Megha Shyam. Built with React + Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
