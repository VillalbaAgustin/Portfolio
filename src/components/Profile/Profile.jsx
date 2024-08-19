import React, { useEffect, useState } from "react";
import "animate.css";

import "./Profile.css";

export const Profile = () => {
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
        <h2>
          <b> 1.</b> Profile
        </h2>
        <div className="profile__container">
          <img src="./assets/profile2.jpg" alt="imgProfile" />
          <p>
            Hello world!, I am a Full Stack Web Developer who is just starting
            out in the tech industry and excited to learn and grow as a
            professional. I'm familiar with web technologies such as HTML, CSS,
            and JavaScript, as well as popular framework such as React.
            Additionally, I'm constantly learning new skills and tools to
            improve my knowledge in web application development. I consider
            myself an enthusiastic and focused worker who is ready to take on
            any challenge that comes my way.
          </p>
        </div>
      </div>
    </div>
  );
};
