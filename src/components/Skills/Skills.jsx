import React from "react";
import "./Skills.css";
import { skills } from "../../data/const";
import { useLanguage } from "../../hooks/useLanguage";
import { TranslateContext } from "../../context/language";

export const Skills = () => {
  const {language, setLanguage} = useLanguage(TranslateContext)


  return (
    <>
      <div id="Skills" className="href" />
      <div id="" className="card__container">
        <div className="skill__container">
        {language === "en" ? (
          <h2>
            <b> 2.</b> Skills
          </h2>
        ) : (
          <h2>
            <b> 2.</b> Habilidades
          </h2>
        )}
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
