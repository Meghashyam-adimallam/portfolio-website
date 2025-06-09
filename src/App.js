import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <h1>Megha Shyam</h1>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="hero">
        <h2>Hello, I'm Megha 👋</h2>
        <p>Aspiring Data Scientist | AI & ML Enthusiast</p>
        <button onClick={() => window.location.href = "#projects"}>View Projects</button>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm a passionate learner with interests in AI, Machine Learning, and Data Science. Currently building projects that solve real-world problems.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

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
