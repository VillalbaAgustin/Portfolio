import React, { useEffect, useState } from "react";
import "animate.css";

import "./Profile.css";
import { useLanguage } from "../../hooks/useLanguage";
import { TranslateContext } from "../../context/language";

export const Profile = () => {
  const { language, setLanguage } = useLanguage(TranslateContext);
  const [animationTop, setAnimationTop] = useState("card__container");

  window.onscroll = function () {
    var y = window.scrollY;
    y === 0
      ? setAnimationTop("card__container animate__animated animate__headShake")
      : setAnimationTop("card__container");
    // console.log(window.scrollY);
  };
  // console.log(window.scrollY);

  return (
    <div className={animationTop}>
      <div id="Profile" className="profile">
        {language === "en" ? (
          <h2>
            <b> 1.</b> Profile
          </h2>
        ) : (
          <h2>
            <b> 1.</b> Perfil
          </h2>
        )}
        <div className="profile__container">
          <img src="./img/Profile.jpg" alt="imgProfile" />
          {language === "en" ? (
            <p>
              Hello world!, I'm Villalba Agustin I am a Full Stack Web Developer
              who is just starting out in the tech industry and excited to learn
              and grow as a professional. I'm familiar with web technologies
              such as HTML, CSS, and JavaScript, as well as popular framework
              such as React. Additionally, I'm constantly learning new skills
              and tools to enhance my knowledge in web application development.
              I consider myself an enthusiastic and focused worker who is ready
              to take on any challenge that comes my way.
            </p>
          ) : (
            <p>
              ¡Hola mundo! Soy
              Villalba Agustín, un Desarrollador Web Full Stack que recién
              comienza en la industria tecnológica y está emocionado por
              aprender y crecer como profesional. Estoy familiarizado con
              tecnologías web como HTML, CSS y JavaScript, así como con marcos
              populares como React. Además, estoy constantemente aprendiendo
              nuevas habilidades y herramientas para mejorar mis conocimientos
              en el desarrollo de aplicaciones web. Me considero un trabajador
              entusiasta y enfocado, listo para asumir cualquier desafío que se
              presente en mi camino.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
