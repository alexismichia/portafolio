// Menu.js
import React from "react";
import "./Menu.css";
const Menu = ({ scrollToSection }) => {
  const handleItemClick = (section) => {
    scrollToSection(section);
  };

  return (
    <div className="menu">
      <button onClick={() => handleItemClick("about")}>Sobre mí</button>
      <button onClick={() => handleItemClick("projects")}>Proyectos</button>
      <button onClick={() => handleItemClick("contact")}>Contacto</button>
    </div>
  );
};

export default Menu;
