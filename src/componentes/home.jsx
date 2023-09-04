// Home.js
import React from "react";
import "./Home.css"; // Importa el archivo de estilos CSS

const Home = () => {
  // Función para descargar el CV
  const handleDownloadCV = () => {
    const cvURL = process.env.PUBLIC_URL + "/Alexis%20Ariel%20Michia.pdf"; // Ruta relativa al archivo PDF en la carpeta public
    const link = document.createElement("a");
    link.href = cvURL;
    link.download = "Alexis Ariel Michia CV.pdf"; // Nombre del archivo para la descarga
    link.click();
  };

  return (
    <header className="header">
      <h1 className="header-title">Alexis Michia</h1>
      <h2 className="header-subtitle">Full-Stack Developer</h2>
      <p className="header-description">
        ¡Bienvenido a mi portafolio! Soy un apasionado desarrollador Full Stack
        con experiencia en proyectos web y aplicaciones increíbles.
      </p>
      <button className="download-button" onClick={handleDownloadCV}>
        Descargar CV
      </button>
    </header>
  );
};

export default Home;
