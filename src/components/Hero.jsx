
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiCode,
  FiLayers,
  FiMousePointer,
} from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-grid"></div>

      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>

      {/* Main Content */}
      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          HEBA
          <br />
          <span>ALHJAJ.</span>
        </motion.h1>

        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span></span>
        
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          I build clean, responsive, and accessible digital experiences
          while combining frontend development with thoughtful UI/UX design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
            <FiArrowUpRight />
          </a>

          <a href="#contact" className="btn btn-secondary">
            Let's Talk
            <FiArrowUpRight />
          </a>

          <a
            href="https://github.com/HebaAlhjaj"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FiGithub />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* =================================================
          HERO VISUAL
      ================================================= */}

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {/* Available Badge */}
        <motion.div
          className="floating-badge badge-top"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        {/* Main Code Card */}
        <div className="hero-card">
          <div className="hero-card-top">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>portfolio.dev</span>
          </div>

          <div className="hero-card-body">
            <div className="code-line muted">
              <span>01</span>
              <span>
                <em>const</em> developer =
              </span>
            </div>

            <div className="code-line">
              <span>02</span>
              <span className="code-name">
                "Heba Alhjaj"
              </span>
            </div>

            <div className="code-line">
              <span>03</span>
              <span>
                <em>skills:</em> [
              </span>
            </div>

            <div className="code-line indent">
              <span>04</span>
              <span>"React", "UI/UX",</span>
            </div>

            <div className="code-line indent">
              <span>05</span>
              <span>"FastAPI", "MySQL"</span>
            </div>

            <div className="code-line">
              <span>06</span>
              <span>]</span>
            </div>

            <div className="code-line">
              <span>07</span>
              <span>{"};"}</span>
            </div>

            {/* Blinking Cursor */}
            <motion.div
              className="code-cursor"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Card Footer */}
          <div className="hero-card-footer">
            <div>
              <FiCode />
              <span>Frontend</span>
            </div>

            <div>
              <FiLayers />
              <span>UI / UX</span>
            </div>

            <div>
              <FiMousePointer />
              <span>Accessible</span>
            </div>
          </div>
        </div>

        {/* Floating React Card */}
        <motion.div
          className="floating-mini-card mini-card-one"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiCode />

          <div>
            <strong>React</strong>
            <small>Frontend</small>
          </div>
        </motion.div>

        {/* Floating Project Card */}
        <motion.div
          className="floating-mini-card mini-card-two"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="mini-number">02</span>

          <div>
            <strong>SAHMS</strong>
            <small>Featured Project</small>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;
