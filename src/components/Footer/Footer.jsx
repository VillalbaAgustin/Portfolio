import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer__container">
      <span>Designed & Built by Villalba Agustín</span>
      <div className="redes__container">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/agustin-villalba-611260163/"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="mailto:villalba.4gustin@gmail.com" target="_blank">
          <i className="bi bi-envelope"></i>
        </a>
        <a aria-label="Chat on WhatsApp" href="https://wa.me/3413504558">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/agus_villalba99" target="_blank">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};
