import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Courses from "./components/Courses";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

import "./App.css";
import UIUXProjects from "./components/UIUXProjects";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <UIUXProjects />
        <Experience />
        <Courses />
        <Education />
        <Languages />
        <Contact />
      </main>
    </>
  );
}

export default App;

