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
              I am a Junior Full Stack Web Developer excited to learn and grow
              as a professional. I am familiar with web technologies such as
              HTML, CSS and JavaScript, as well as popular frameworks such as
              React on the Frontend, on the Backend side knowledge with the
              Node.Js execution environment, NoSQL database (MongoDB and
              Firebase) and SQL (PostgreSQL). Additionally, I am constantly
              learning new skills and tools to improve my knowledge in web
              application development. I consider myself an enthusiastic and
              focused worker who is ready to take up any challenge that comes my
              way.
            </p>
          ) : (
            <p>
              Soy un desarrollador web Full Stack Junior, estoy emocionado de
              aprender y crecer como profesional. Estoy familiarizado con
              tecnologías web como HTML, CSS y JavaScript, así como frameworks
              populares como React en Frontend, del lado del Backend
              conocimientos con el entorno de ejecución Node.Js, base de datos
              NoSQL (MongoDB y Firebase) y SQL (PostgreSQL). Además, estoy
              constantemente aprendiendo nuevas habilidades y herramientas para
              mejorar mis conocimientos en el desarrollo de aplicaciones web. Me
              considero un trabajador entusiasta y enfocado que está listo para
              asumir cualquier desafío que se presente en mi camino.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
