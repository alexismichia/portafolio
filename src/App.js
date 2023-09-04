// App.js
import React, { useRef } from "react";
import "./App.css";
import Menu from "./componentes/Menu";
import About from "./componentes/About"; // Importa el componente About
import Projects from "./componentes/Projects";
import Contact from "./componentes/Contact";
import Home from "./componentes/home";
function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Menu scrollToSection={scrollToSection} />
      <div>
      <Home/>
      </div>
      
      <div ref={aboutRef}>
        <About /> {/* Agrega el componente About aquí */}
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
