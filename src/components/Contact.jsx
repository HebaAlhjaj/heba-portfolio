
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <p className="section-label">09 — CONTACT</p>

        <h2>Let's build something together.</h2>

        <p className="section-description">
          I'm open to junior opportunities, internships, and projects where
          I can learn, contribute, and grow as a software engineer.
        </p>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-item">
            <div className="contact-icon">
              <FiMail />
            </div>

            <div>
              <span>Email</span>
              <a href="mailto:YOUR_EMAIL@example.com">
              alhjajalaa2003@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FiPhone />
            </div>

            <div>
              <span>Phone</span>
              <a href="tel:YOUR_PHONE">0772308513</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FiMapPin />
            </div>

            <div>
              <span>Location</span>
              <p>Amman, Jordan</p>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/HebaAlhjaj"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/heba-alhjaj-814047285?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="contact-card-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h3>Let's talk.</h3>

          <p>
            Whether it's a frontend project, UI/UX design, or a software
            development opportunity, I'd be happy to connect.
          </p>

          <a
            className="contact-button"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Get in Touch
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

