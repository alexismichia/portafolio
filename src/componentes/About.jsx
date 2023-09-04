// About.js
import React from "react";
import "./About.css"; // Importa el archivo de estilos CSS

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h2>Sobre mí</h2>
          <p>
            Soy un apasionado <strong>Full Stack Developer</strong> con una amplia experiencia en proyectos individuales y colaborativos. Mi trayectoria incluye roles como <strong>Freelancer y Full Stack Developer</strong>, lo que me ha permitido desarrollar habilidades esenciales como el trabajo en equipo, el pensamiento crítico y la responsabilidad.
          </p>
          <p>
            Mi especialización abarca tanto el <strong>Front-end</strong> como el <strong>Back-end</strong>. Estoy versado en metodologías ágiles, el uso de GIT para el control de versiones, estructuras de datos, algoritmos y diversos frameworks CSS. Poseo una sólida experiencia en el desarrollo de aplicaciones Front End y Back End, así como en la arquitectura de datos, utilizando tecnologías como <strong>Typescript</strong>, <strong>JavaScript</strong> y <strong>PHP</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
