// Projects.js
import React from "react";
 // Importa la imagen del icono de GitHub
import "./Projects.css"; // Importa el archivo de estilos CSS

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="projects-list">
          <div className="project">
            <h3>DOGS</h3>
            <p>
              Diseñé y desarrollé una aplicación de Razas de perros que incluye
              autenticación, búsquedas, filtrados combinados, ordenamientos
              ademas de un paginado.
            </p>
            <p>Tecnologías utilizadas:</p>
            <ul>
              <li>Frontend: React, Redux, HTML, CSS, JavaScript</li>
              <li>Backend: React, Redux, HTML, JavaScript</li>
              <li>Base de datos: PostgreSQL, Sequelize</li>
            </ul>
            <a
              href="https://github.com/alexismichia/PI-Dogs.git"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <img src="/githubicon.png" alt="GitHub" style={{ width: '30px', height: '30px' }} /> {/* Muestra el icono de GitHub */}
              Dogs
            </a>
          </div>
          <div className="project">
            <h3>FOOTBALLCENTRALL</h3>
            <p>
              Página web sobre fútbol que incluye estadísticas, competiciones, una
              tienda, filtros, detalles de equipos, registro de usuarios, autenticación
              de terceros y más.
            </p>
            <p>Tecnologías utilizadas:</p>
            <ul>
              <li>Frontend: React, Redux, HTML, CSS, JavaScript</li>
              <li>Backend: React, Redux, HTML, JavaScript</li>
              <li>Base de datos: PostgreSQL, Sequelize</li>
            </ul>
            <a
              href="https://github.com/stars/alexismichia/lists/football-central"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <img src="/githubicon.png" alt="GitHub" style={{ width: '30px', height: '30px' }} />{/* Muestra el icono de GitHub */}
              Football Central
            </a>
          </div>
          {/* Agrega más proyectos aquí */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
