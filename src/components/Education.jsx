import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";

function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Software Engineering",
      university: "The Hashemite University",
      location: "Zarqa, Jordan",
      date: "2022 – 2026",
      description:
        "Studied software engineering with a focus on software development, web technologies, databases, user interface design, and software engineering principles.",
    },
  ];

  return (
    <section className="section education" id="education">
      <div className="section-heading">
        <p className="section-label">07 — EDUCATION</p>

        <h2>My academic journey.</h2>

        <p className="section-description">
          My academic background in software engineering and technology.
        </p>
      </div>

      <div className="education-list">
        {education.map((item, index) => (
          <motion.article
            className="education-card"
            key={item.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="education-icon">
              <FiBookOpen />
            </div>

            <div className="education-content">
              <span className="education-label">Bachelor's Degree</span>

              <h3>{item.degree}</h3>

              <h4>{item.university}</h4>

              <div className="education-meta">
                <span>
                  <FiCalendar />
                  {item.date}
                </span>

                <span>
                  <FiMapPin />
                  {item.location}
                </span>
              </div>

              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;

