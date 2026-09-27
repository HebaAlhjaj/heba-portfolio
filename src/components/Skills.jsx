
import { motion } from "framer-motion";
import {
  FiCode,
  FiPenTool,
  FiDatabase,
  FiHeart,
} from "react-icons/fi";

function Skills() {
  const skillGroups = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "Responsive Design",
        "JavaScript",
        "React",
        "Bootstrap",
      ],
    },

    {
      icon: <FiPenTool />,
      title: "UI/UX & Design",
      skills: [
        "Figma",
        "Canva",
        "Adobe Illustrator",
        "Wireframing",
        "User Interface Design",
      ],
    },

    {
      icon: <FiHeart />,
      title: "Accessibility",
      skills: [
        "Accessible Interfaces",
        "Universal Design",
        "Responsive Layouts",
        "Accessibility Principles",
      ],
    },

    {
      icon: <FiDatabase />,
      title: "Backend & Database",
      skills: [
        "Python",
        "FastAPI",
        "SQL",
        "MySQL",
        "Database Design",
      ],
    },
  ];

  return (
    <section className="section skills" id="skills">
      <div className="section-heading">
        <p className="section-label">02 — SKILLS</p>

        <h2>Tools I work with.</h2>

        <p className="section-description">
          Technologies and tools I use while building digital
          experiences and developing my software engineering skills.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="skill-icon">
              {group.icon}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

