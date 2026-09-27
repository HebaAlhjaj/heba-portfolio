import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiX, FiAward } from "react-icons/fi";

function Courses() {
  const courses = [
    {
      title: "Programming With Java",
      organization: "IEEE Computer Society",
      type: "Course",
      image: "/certificates/java.jpg",
    },
    {
      title: "UI/UX Design",
      organization: "Gaming Lab",
      type: "Course",
      image: "/certificates/uiux.jpg",
    },
    {
      title: "Introduction to Python",
      organization: "IEEE Hashemite University",
      type: "Course",
      image: "/certificates/python.jpg",
    },
    {
      title: "Biomedical Simulation Using Unity 3D",
      organization: "BioMed Sequd",
      type: "Training",
      image: "/certificates/unity.jpg",
    },
    {
      title: "Game Development",
      organization: "Eventek",
      type: "Course",
      image: "/certificates/game-development.jpg",
    },
    {
      title: "Arduino 99",
      organization: "IEEE",
      type: "Course",
      image: "/certificates/arduino.jpg",
    },
    {
      title: "Full Stack Web Development",
      organization: "Jordan Computer Society",
      type: "Training",
      image: "/certificates/full-stack.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <section className="section courses" id="courses">
      <div className="section-heading">
        <p className="section-label">06 — COURSES & TRAINING</p>

        <h2>Always learning.</h2>

        <p className="section-description">
          Courses and practical training that helped me build my technical
          and design skills.
        </p>
      </div>

      <div className="courses-wrapper">
        <button
          className="courses-arrow courses-arrow-left"
          onClick={prevSlide}
          aria-label="Previous certificate"
        >
          <FiArrowLeft />
        </button>

        <div className="courses-track">
          {courses.map((course, index) => {
            const position =
              (index - current + courses.length) % courses.length;

            const isActive = position === 0;
            const isNext = position === 1;
            const isPrev = position === courses.length - 1;

            if (!isActive && !isNext && !isPrev) return null;

            return (
              <motion.article
                key={course.title}
                className={`course-card ${
                  isActive ? "active" : "side-card"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  scale: isActive ? 1 : 0.88,
                  x: isPrev ? "-38%" : isNext ? "38%" : "0%",
                  zIndex: isActive ? 3 : 1,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                onClick={() => {
                  if (isActive) {
                    setSelectedCertificate(course);
                  } else if (isNext) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                }}
              >
                <div className="certificate-image-wrapper">
                  <img
                    src={course.image}
                    alt={`${course.title} certificate`}
                    className="certificate-image"
                  />

                  <div className="certificate-overlay">
                    <span>View Certificate</span>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta">
                    <span className="course-type">
                      <FiAward />
                      {course.type}
                    </span>
                  </div>

                  <h3>{course.title}</h3>

                  <p>{course.organization}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <button
          className="courses-arrow courses-arrow-right"
          onClick={nextSlide}
          aria-label="Next certificate"
        >
          <FiArrowRight />
        </button>
      </div>

      <div className="courses-counter">
        <span>
          {String(current + 1).padStart(2, "0")}
        </span>

        <div className="counter-line">
          <div
            className="counter-progress"
            style={{
              width: `${((current + 1) / courses.length) * 100}%`,
            }}
          />
        </div>

        <span>
          {String(courses.length).padStart(2, "0")}
        </span>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="certificate-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="certificate-close"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate"
              >
                <FiX />
              </button>

              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
              />

              <div className="modal-info">
                <span>{selectedCertificate.type}</span>

                <h3>{selectedCertificate.title}</h3>

                <p>{selectedCertificate.organization}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Courses;

