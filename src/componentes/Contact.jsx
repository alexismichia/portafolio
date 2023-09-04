// Contact.js
import React from "react";
import "./Contact.css"; // Importa el archivo de estilos CSS

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contacto</h2>
        <div className="social-icons">
          {/* Iconos de redes sociales */}
          <a href="mailto:alexi890@outlook.com" className="contact-button">
            <img src="/emailicon.png" alt="Correo Electrónico" />
          </a>
          <a
            href="https://wa.me/+5493471571452"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <img src="/whatsappicon.png" alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/alexis-michia/" className="contact-button">
            <img src="/linkedinicon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/alexismichia" className="contact-button">
            <img src="/githubicon.png" alt="GitHub" />
          </a>
          {/* Agrega más iconos de redes sociales según tu preferencia */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
