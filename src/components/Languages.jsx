import { motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";

function Languages() {
  const languages = [
    {
      name: "Arabic",
      level: "Native",
      description: "Native language",
    },
    {
      name: "English",
      level: "B2",
      description: "Upper-intermediate",
    },
  ];

  return (
    <section className="section languages" id="languages">
      <div className="section-heading">
        <p className="section-label">08 — LANGUAGES</p>

        <h2>Communication matters.</h2>

        <p className="section-description">
          Languages I use for communication, learning, and professional
          development.
        </p>
      </div>

      <div className="languages-grid">
        {languages.map((language, index) => (
          <motion.article
            className="language-card"
            key={language.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="language-icon">
              <FiGlobe />
            </div>

            <div className="language-content">
              <h3>{language.name}</h3>

              <span className="language-level">
                {language.level}
              </span>

              <p>{language.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Languages;

