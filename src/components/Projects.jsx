import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "SAHMS",
      subtitle: "Smart Accessible Hospital Management System",
      description:
        "A smart hospital management system designed around accessibility and universal design, connecting hospital operations with inclusive digital experiences.",
      role: "Full-Stack Developer",
      stack: ["React", "FastAPI", "Python", "MySQL", "Recharts"],
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
      github: "https://github.com/HebaAlhjaj/Hospital",
      demo: "#",
    },

    {
      id: 2,
      title: "NovaTech",
      subtitle: "Modern Technology Company Platform",
      description:
        "A modern full-stack technology platform with authentication, content management, customer dashboard, services management, and customer request workflows.",
      role: "Full-Stack Developer",
      stack: ["React", "FastAPI", "Python", "MySQL", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      github: "https://github.com/HebaAlhjaj/VOLTIX-Task-2",
      demo: "#",
    },

    {
      id: 3,
      title: "CVision",
      subtitle: "AI-Powered Team Role Matching Platform",
      description:
        "An AI-powered platform that analyzes team members' CVs, evaluates skills and experience, and supports software development teams with role matching and skill gap analysis.",
      role: "Frontend & AI Integration Developer",
      stack: [
        "React",
        "JavaScript",
        "Vite",
        "React Router",
        "REST API",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      github: "https://github.com/HebaAlhjaj/CVision-Frontend",
      demo: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="projects-label">03 — SELECTED WORK</span>

            <h2>
              Projects that
              <br />
              <span>solve real problems.</span>
            </h2>
          </div>

          <p>
            A selection of projects where I combine development, interface
            design, and problem-solving to build useful digital experiences.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">
                  <a
                    href={project.demo}
                    className="project-view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>View Project</span>
                    <FiArrowUpRight />
                  </a>
                </div>

                <div className="project-number">
                  0{index + 1}
                </div>
              </div>

              <div className="project-content">
                <div className="project-main">
                  <span className="project-type">
                    {project.role}
                  </span>

                  <h3>{project.title}</h3>

                  <h4>{project.subtitle}</h4>

                  <p>{project.description}</p>

                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>
                        <FiCode />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                    <span>GitHub</span>
                    <FiArrowUpRight />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;