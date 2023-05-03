import React, { useState } from "react";
import "./Projects.css";

const slides = [
  {
    url: "./projects/CalendarAppLogin.JPG",
    title: "CalendarApp",
    description: "Hola Mundo",
    href: "https://calendar-backend-production-6d29.up.railway.app",
    hrefGit: "https://github.com/VillalbaAgustin/Calendar.git",
  },
  {
    url: "./projects/GifApp.JPG",
    title: "GifApp",
    description: "Hola Mundo",
    href: "https://villalbaagustin.github.io/react-gifexpertapp/",
    hrefGit: "https://github.com/VillalbaAgustin/react-gifexpertapp.git",
  },
  {
    url: "./projects/JournalApp.JPG",
    title: "JournalApp",
    description: "Hola Mundo",
    href: "https://journal-app-neon-eight.vercel.app/auth/login",
    hrefGit: "https://github.com/VillalbaAgustin/JournalApp.git",
  },
  {
    url: "./projects/MovieApp.JPG",
    title: "MovieApp",
    description: "Hola Mundo",
    href: "https://villalbaagustin.github.io/movie-react/",
    hrefGit: "https://github.com/VillalbaAgustin/movie-react.git",
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(3);

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
          <h2>
            <b>3.</b> Projects
          </h2>
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
