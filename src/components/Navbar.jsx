import { useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Courses", href: "#courses" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        Heba<span>.</span>
      </a>

      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar-socials">
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

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

export default Navbar;