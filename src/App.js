// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Transparent Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 shadow-md transition-all px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Megha Shyam</h1>
        <div className="space-x-6">
          <a href="#about" className="text-white hover:text-pink-400 transition">About</a>
          <a href="#projects" className="text-white hover:text-pink-400 transition">Projects</a>
          <a href="#contact" className="text-white hover:text-pink-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#1f0036] via-[#2b1b52] to-[#1a1a2e] text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Hi, I'm Megha 👋
        </h1>
        <p className="text-lg md:text-xl max-w-xl animate-fadeIn delay-200">
          A Data Science graduate student with a passion for Machine Learning, Deep Learning, and Generative AI. I build smart things that solve real problems.
        </p>
        <button
          onClick={() => window.location.href = "#projects"}
          className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition"
        >
          View Projects
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="animate-slideUp">
        <h2>About Me</h2>
        <p>
          I'm a passionate learner with interests in AI, Machine Learning, and Data Science. Currently building projects that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="animate-slideUp">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Logistic Regression Classifier</h3>
          <p>Built a binary classification model to predict customer purchase behavior using logistic regression with age and salary features. Feature scaled and class balanced.</p>
          <a href="https://github.com/Meghashyam-adimallam/logistic-regression-model" target="_blank" rel="noreferrer">View Code</a>
        </div>

        <div className="project-card">
          <h3>Image Classifier using CNN</h3>
          <p>Trained a CNN on CIFAR-10 dataset using Keras. Implemented dropout and pooling layers to reduce overfitting and improve accuracy.</p>
          <a href="https://github.com/Meghashyam-adimallam/cnn-image-classifier" target="_blank" rel="noreferrer">View Code</a>
        </div>

        <div className="project-card">
          <h3>PDF Q&A Chatbot (GenAI)</h3>
          <p>Built a GenAI chatbot using FAISS, LangChain, and a local LLM that answers user questions about uploaded research PDFs in real-time.</p>
          <a href="https://github.com/Meghashyam-adimallam/genai-pdf-qa-chatbot" target="_blank" rel="noreferrer">View Code</a>
          <a href="https://genai-pdf-bot.streamlit.app" target="_blank" rel="noreferrer">Live Demo</a>
        </div>

        <div className="project-card">
          <h3>Credit Card Fraud Detection</h3>
          <p>Used anomaly detection techniques and SVD to identify fraudulent transactions in an imbalanced dataset.</p>
        </div>

        <div className="project-card">
          <h3>Covid-19 Dashboard</h3>
          <p>Built an interactive dashboard with Plotly Dash to visualize Covid-19 spread and vaccination stats worldwide.</p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This very portfolio is a React-based website with modern styling and sections for projects, resume, and contact.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: meghashyamadimalla2003@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noreferrer">Megha Shyam</a></p>
      </section>

      <footer>
        <p>© 2025 Megha Shyam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
