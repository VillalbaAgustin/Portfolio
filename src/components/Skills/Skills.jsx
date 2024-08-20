import React from "react";
import "./Skills.css";
import { skills } from "../../data/navbar";

export const Skills = () => {
  return (
    <>
      <div id="Skills" className="href" />
      <div id="" className="card__container">
        <div className="skill__container">
          <h2>
            <b>2.</b> Skills
          </h2>
          <div className="logos__container">
            {skills.map((skill, i) => (
              <div className="logo" key={i}>
                <img src={skill.image} alt={skill.alt} />
                <div className="overlay">
                  <a href={skill.link} target="_blank" className="link">
                    {skill.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
