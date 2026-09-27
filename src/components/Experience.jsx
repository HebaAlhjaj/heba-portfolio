import { motion } from "framer-motion";
import { FiArrowUpRight, FiBriefcase, FiCode } from "react-icons/fi";

function Experience() {
  const experiences = [
    {
      id: 1,
      period: "2026",
      type: "Internship",
      title: "Full-Stack Developer Intern",
      company: "NovaTech",
      location: "Remote",
      description:
        "Worked on a modern technology company platform, contributing to both frontend development and backend integration.",
      responsibilities: [
        "Built responsive React interfaces with modern UI interactions.",
        "Integrated frontend components with FastAPI REST APIs.",
        "Worked with authentication, content management, services, and customer workflows.",
        "Connected application features with MySQL database operations.",
      ],
      technologies: [
        "React",
        "JavaScript",
        "FastAPI",
        "Python",
        "MySQL",
      ],
    },

    {
      id: 2,
      period: "2026",
      type: "Training",
      title: "Full-Stack Web Development Trainee",
      company: "Jordan Computer Society",
      location: "Amman, Jordan",
      description:
        "Completed practical training focused on building responsive websites and strengthening frontend development fundamentals.",
      responsibilities: [
        "Built responsive web pages using HTML, CSS, and JavaScript.",
        "Worked with Bootstrap to create responsive layouts.",
        "Practiced translating designs into functional web interfaces.",
        "Improved problem-solving and development workflow under time constraints.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="experience-label">
              04 — EXPERIENCE
            </span>

            <h2>
              Learning by
              <br />
              <span>building real things.</span>
            </h2>
          </div>

          <p>
            Practical experience through internships, training, and
            hands-on software projects.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={experience.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <div className="experience-number">
                0{index + 1}
              </div>

              <div className="experience-main">
                <div className="experience-top">
                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>{experience.title}</h3>

                    <div className="experience-company">
                      <FiBriefcase />
                      <span>{experience.company}</span>
                      <span className="experience-dot">•</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-details">
                  <div className="experience-responsibilities">
                    <span className="experience-subtitle">
                      What I worked on
                    </span>

                    {experience.responsibilities.map(
                      (item, i) => (
                        <div
                          className="experience-point"
                          key={i}
                        >
                          <FiArrowUpRight />
                          <span>{item}</span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="experience-tech">
                    <span className="experience-subtitle">
                      Technologies
                    </span>

                    <div className="experience-tech-list">
                      {experience.technologies.map((tech) => (
                        <span key={tech}>
                          <FiCode />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;