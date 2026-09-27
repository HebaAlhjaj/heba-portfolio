import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiLayers, FiMonitor } from "react-icons/fi";

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="section-label">01 — ABOUT</p>
        <h2>Building with purpose.</h2>
      </div>

      <div className="about-grid">
        {/* Main Introduction */}
        <motion.div
          className="about-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-intro">
            I'm <strong>Heba Alhjaj</strong>, a Software Engineering graduate
            with a strong interest in frontend development, UI/UX design, and
            accessible digital experiences.
          </p>

          <p>
            I enjoy turning ideas and designs into responsive, user-friendly
            interfaces. My approach combines clean code, thoughtful design,
            and attention to how people actually interact with digital
            products.
          </p>

          <p>
            I'm continuously developing my skills in React, Python, FastAPI,
            SQL, and modern web technologies while working on practical
            projects that connect frontend experiences with real backend
            systems.
          </p>

          <a href="#projects" className="about-link">
            Explore my projects
            <FiArrowUpRight />
          </a>
        </motion.div>

        {/* Info Cards */}
        <div className="about-cards">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="about-card-icon">
              <FiCode />
            </div>

            <div>
              <span>01</span>
              <h3>Frontend Development</h3>
              <p>
                Building responsive interfaces with HTML, CSS, JavaScript,
                React, and modern frontend tools.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="about-card-icon">
              <FiLayers />
            </div>

            <div>
              <span>02</span>
              <h3>UI/UX & Design</h3>
              <p>
                Creating clean user interfaces with a focus on usability,
                visual hierarchy, and accessible experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="about-card-icon">
              <FiMonitor />
            </div>

            <div>
              <span>03</span>
              <h3>Full-Stack Learning</h3>
              <p>
                Learning backend development with Python, FastAPI, SQL, and
                MySQL to build complete web applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Facts */}
      <motion.div
        className="about-facts"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <strong>2026</strong>
          <span>Software Engineering Graduate</span>
        </div>

        <div>
          <strong>React</strong>
          <span>Frontend Development</span>
        </div>

        <div>
          <strong>UI/UX</strong>
          <span>Design & User Experience</span>
        </div>

        <div>
          <strong>Jordan</strong>
          <span>Amman</span>
        </div>
      </motion.div>
    </section>
  );
}

export default About;