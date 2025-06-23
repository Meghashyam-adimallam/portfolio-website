// src/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="bg-white py-12 px-6" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Logistic Regression */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Logistic Regression Classifier</h3>
          <p className="mb-2">Built a binary classification model using logistic regression to predict purchase behavior using age and salary data. Feature scaled and handled class imbalance.</p>
          <p className="text-sm mb-3 text-gray-600">Tools: Python, Pandas, Scikit-Learn</p>
          <a href="https://github.com/Meghashyam-adimallam/logistic-regression-model" className="text-blue-600 hover:underline mr-4" target="_blank" rel="noreferrer">View Code</a>
        </div>

        {/* CNN Project */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Image Classifier using CNN</h3>
          <p className="mb-2">Trained a CNN on the CIFAR-10 dataset using Keras. Implemented dropout and pooling layers to reduce overfitting and achieved >75% accuracy.</p>
          <p className="text-sm mb-3 text-gray-600">Tools: TensorFlow, Keras, Python</p>
          <a href="https://github.com/Meghashyam-adimallam/cnn-image-classifier" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">View Code</a>
        </div>

        {/* GenAI Project */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">PDF Q&A Bot (GenAI)</h3>
          <p className="mb-2">Built a GenAI chatbot using FAISS, LangChain, and a local LLM to answer questions about uploaded PDFs in a real-time Streamlit app.</p>
          <p className="text-sm mb-3 text-gray-600">Tools: HuggingFace, Streamlit, FAISS</p>
          <a href="https://github.com/Meghashyam-adimallam/genai-pdf-qa-chatbot" className="text-blue-600 hover:underline mr-4" target="_blank" rel="noreferrer">View Code</a>
          <a href="https://genai-pdf-bot.streamlit.app" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Live Demo</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
