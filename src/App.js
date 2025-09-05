import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <motion.header
        className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="fw-bold display-3">Mukund Madhav</h1>
        <p className="lead mb-3">
          Frontend Developer | React | JavaScript | PHP
        </p>
        <div>
          <a href="mailto:mukund1252001@gmail.com" className="btn btn-light btn-lg shadow-sm">
            <FaEnvelope className="me-2" /> Contact Me
          </a>
        </div>
      </motion.header>

      <div className="container py-5">
        {/* Summary */}
        <motion.section
          className="glass-card p-4 mb-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">🚀 Professional Summary</h2>
          <p>
            A passionate frontend developer specializing in JavaScript
            technologies. Ever eager to learn new things and work outside of my
            comfort zone.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="glass-card p-4 mb-5"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">💡 Skills & Expertise</h2>
          <div className="row">
            <div className="col-md-4"><li>JavaScript, ReactJS, Redux</li></div>
            <div className="col-md-4"><li>NextJS, React Native</li></div>
            <div className="col-md-4"><li>PHP, MySQL, CakePHP</li></div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          className="glass-card p-4 mb-5"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">💼 Experience</h2>
          <h5>Software Developer | Unikaihatsu Software Pvt Ltd</h5>
          <p className="text-muted">June 2022 – Present</p>
          <ul>
            <li>Mentored junior developers and conducted code reviews.</li>
            <li>Integrated APIs reducing system errors by 30%.</li>
            <li>Optimized React performance (30% faster load).</li>
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section
          className="glass-card p-4 mb-5"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">🛠️ Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="project-card p-3">
                <h5>Product Distribution System</h5>
                <p>React JS, Redux, Redux-Saga</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-card p-3">
                <h5>Shop-Mall</h5>
                <p>NextJS, Redux, Redux-Saga</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-card p-3">
                <h5>EMSGO</h5>
                <p>React Native, Redux, Socket.IO</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="text-center text-white py-4">
        <p>© 2025 Mukund Madhav</p>
        <a href="https://github.com/mukundmadhav12" className="text-white mx-2">
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mukund-madhav-8647221b1"
          className="text-white mx-2"
        >
          <FaLinkedin size={24} />
        </a>
      </footer>
    </div>
  );
}

export default App;
