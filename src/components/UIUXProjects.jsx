import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";

import "./UIUXProjects.css";

function UIUXProjects() {
  const images = [
    {
      src: "/uiux/cvision/signup.png",
      alt: "CVision Sign Up Page",
    },
    {
      src: "/uiux/cvision/login.png",
      alt: "CVision Login Page",
    },
    {
      src: "/uiux/cvision/03-dashboard.png",
      alt: "CVision Dashboard",
    },
    {
      src: "/uiux/cvision/04-cv-analysis.png",
      alt: "CVision CV Analysis Page",
    },
    {
      src: "/uiux/cvision/05-team.png",
      alt: "CVision Team Management Page",
    },
    {
      src: "/uiux/cvision/06-skill-gap.png",
      alt: "CVision Skill Gap Detection Page",
    },
    {
      src: "/uiux/cvision/07-profile.png",
      alt: "CVision Profile Page",
    },
    {
      src: "/uiux/cvision/08-settings.png",
      alt: "CVision Settings Page",
    },
  ];

  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const openImage = () => {
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  return (
    <section className="section uiux-projects" id="uiux">
      {/* SECTION HEADING */}

      <div className="section-heading">
        <p className="section-label">04 — UI/UX DESIGN</p>

        <h2>Designing experiences.</h2>

        <p className="section-description">
          A selection of UI/UX screens focused on clarity, usability,
          accessibility, and thoughtful digital experiences.
        </p>
      </div>

      {/* PROJECT TITLE */}

      <div className="uiux-gallery-title">
        <span>UI/UX PROJECT</span>

        <h3>CVision</h3>

        <p>Smart CV Analysis & Team Role Distribution System</p>
      </div>

      {/* GALLERY */}

      <div className="uiux-gallery">
        {/* PREVIOUS BUTTON */}

        <button
          className="uiux-gallery-arrow uiux-gallery-prev"
          onClick={previousImage}
          aria-label="Previous image"
        >
          <FiChevronLeft />
        </button>

        {/* SIDE IMAGE */}

        <motion.div
          className="uiux-gallery-side uiux-gallery-side-left"
          key={`left-${activeImage}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.45, x: 0 }}
          transition={{ duration: 0.35 }}
          onClick={previousImage}
        >
          <img
            src={images[
              (activeImage - 1 + images.length) % images.length
            ].src}
            alt="Previous CVision screen"
          />
        </motion.div>

        {/* MAIN IMAGE */}

        <motion.div
          className="uiux-gallery-main"
          key={images[activeImage].src}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onClick={openImage}
        >
          <img
            src={images[activeImage].src}
            alt={images[activeImage].alt}
          />

          <div className="uiux-gallery-overlay">
            <span>
              View Design
              <FiArrowUpRight />
            </span>
          </div>
        </motion.div>

        {/* SIDE IMAGE */}

        <motion.div
          className="uiux-gallery-side uiux-gallery-side-right"
          key={`right-${activeImage}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.45, x: 0 }}
          transition={{ duration: 0.35 }}
          onClick={nextImage}
        >
          <img
            src={images[(activeImage + 1) % images.length].src}
            alt="Next CVision screen"
          />
        </motion.div>

        {/* NEXT BUTTON */}

        <button
          className="uiux-gallery-arrow uiux-gallery-next"
          onClick={nextImage}
          aria-label="Next image"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* COUNTER */}

      <div className="uiux-gallery-counter">
        <span>
          {String(activeImage + 1).padStart(2, "0")}
        </span>

        <div className="uiux-gallery-line">
          <motion.div
            className="uiux-gallery-line-progress"
            animate={{
              width: `${((activeImage + 1) / images.length) * 100}%`,
            }}
            transition={{ duration: 0.35 }}
          />
        </div>

        <span>
          {String(images.length).padStart(2, "0")}
        </span>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="uiux-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              className="uiux-lightbox-content"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}

              <button
                className="uiux-lightbox-close"
                onClick={closeImage}
                aria-label="Close image"
              >
                <FiX />
              </button>

              {/* PREVIOUS */}

              <button
                className="uiux-lightbox-arrow uiux-lightbox-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>

              {/* IMAGE */}

              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
              />

              {/* NEXT */}

              <button
                className="uiux-lightbox-arrow uiux-lightbox-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>

              {/* COUNTER */}

              <div className="uiux-lightbox-counter">
                <span>
                  {String(activeImage + 1).padStart(2, "0")}
                </span>

                <span className="uiux-lightbox-divider">
                  /
                </span>

                <span>
                  {String(images.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default UIUXProjects;