import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// ✅ Import photo
import MukundPhoto from "./images/mukund.jpeg";

function App() {
  // ✅ Clean query params
  useEffect(() => {
    if (window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // ✅ Smooth scroll
  const scrollToSummary = () => {
    const section = document.getElementById("summary");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      {/* Hero Section */}
      <motion.header
        className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center position-relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* ✅ Profile Photo */}
        <img
          src={MukundPhoto}
          alt="Mukund Madhav"
          className="profile-img mb-3"
        />

        <h1 className="fw-bold display-3">Mukund Madhav (ムクンド・マダブ)</h1>
        <p className="lead mb-3">
          Bilingual Fullstack Developer | PHP | MYSQL | SQL | Cake PHP | Laravel
          | HTML | CSS | Javascript | Bootstrap | React.JS | Redux | Next.js |
          React Native | Joomla
        </p>

        {/* ✅ Contact Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          {/* Email */}
          <a
            href="mailto:mukund1252001@gmail.com"
            className="btn btn-light btn-lg shadow-sm"
          >
            <FaEnvelope className="me-2" /> Email
          </a>

          {/* Call */}
          <a href="tel:+916205680645" className="btn btn-primary btn-lg shadow-sm">
            <FaPhone className="me-2" /> Call
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917091059028?text=Hi%20Mukund%2C%20I%20saw%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg shadow-sm whatsapp-btn"
          >
            <FaWhatsapp className="me-2" /> WhatsApp
          </a>
        </div>

        {/* ✅ Hand Gesture Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          onClick={scrollToSummary}
        >
          <span className="scroll-text">Scroll Down</span>
          <div className="hand-gesture">👇</div>
        </motion.div>
      </motion.header>

      <div className="container py-5">
        {/* Summary */}
        <motion.section
          id="summary"
          className="glass-card p-4 mb-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">🚀 Professional Summary</h2>
          <p>
            Throughout my career, I have demonstrated strong problem-solving
            skills, a commitment to clean and maintainable code, and the ability
            to work effectively in collaborative environments. I am passionate
            about leveraging my full-stack expertise to bridge the gap between
            business requirements and technical solutions, ensuring projects are
            delivered on time with the highest quality. My focus is always on
            innovation, efficiency, and creating digital solutions that add
            value and drive growth.
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
            <div className="col-md-4 col-sm-6 col-12">
              <li>JavaScript, ReactJS, Redux</li>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <li>NextJS, React Native, HTML, CSS, Bootstrap</li>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <li>PHP, MySQL, CakePHP, Laravel, Joomla</li>
            </div>
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
          <p className="experience-date">June 2022 – Present</p>
          <ul>
            <li>Mentored junior developers and conducted code reviews.</li>
            <li>Integrated APIs reducing system errors by 30%.</li>
            <li>Optimized React performance (30% faster load).</li>
            <li>
              Developed and deployed scalable web applications using PHP,
              Laravel, and MySQL, improving efficiency and reliability.
            </li>
            <li>
              Implemented responsive UI designs with React.js, Next.js, and
              Bootstrap, enhancing user experience across devices.
            </li>
            <li>
              Automated database queries and optimized SQL performance, reducing
              load time and improving application speed.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver end-to-end
              solutions, ensuring alignment with business requirements.
            </li>
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
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project-card p-3">
                <h5>Product Distribution System</h5>
                <p>React JS, Redux, Redux-Saga</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project-card p-3">
                <h5>Shop-Mall</h5>
                <p>NextJS, Redux, Redux-Saga, PHP, MySQL, Laravel</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project-card p-3">
                <h5>EMSGO</h5>
                <p>PHP, MySQL, CakePHP</p>
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
        <a href="tel:+916205680645" className="text-white mx-2">
          <FaPhone size={24} />
        </a>
        <a
          href="https://wa.me/917091059028?text=Hi%20Mukund%2C%20I%20saw%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaWhatsapp size={24} />
        </a>
      </footer>
    </div>
  );
}

export default App;
