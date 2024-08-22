import React, { useState } from "react";
import "./Projects.css";
import { slides } from "../../data/const";
import { useLanguage } from "../../hooks/useLanguage";
import { TranslateContext } from "../../context/language";

export const Projects = () => {
  const {language, setLanguage} = useLanguage(TranslateContext)
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div id="Projects" className="href" />
      <div id="" className="card__container ">
        <div className="projects__container">
        {language === "en" ? (
          <h2>
            <b> 3.</b> Projects
          </h2>
        ) : (
          <h2>
            <b> 3.</b> Projectos
          </h2>
        )}
          <div className="slider__container">
            <div className="arrow">
              <i className="bi bi-chevron-left" onClick={goToPrevious}></i>
            </div>
            <div className="img">
              <img
                src={slides[currentIndex].url}
                alt={slides[currentIndex].title}
              />
            </div>
            <div className="arrow">
              <i className="bi bi-chevron-right" onClick={goToNext}></i>
            </div>
          </div>
          <div className="dot__container">
            <a
              className="href__git"
              target="_blank"
              href={slides[currentIndex].hrefGit}
            >
              <i className="bi bi-github"></i>
            </a>
            {slides.map((slide, slideIndex) => (
              <div
                className={currentIndex === slideIndex ? "active__dot" : "dot"}
                onClick={() => goToSlide(slideIndex)}
                key={slideIndex}
              >
                <i className="bi bi-dot"></i>
              </div>
            ))}
            <a
              className="href__page"
              target="_blank"
              href={slides[currentIndex].href}
            >
              <i className="bi bi-link"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
