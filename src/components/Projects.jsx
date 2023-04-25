import React, { useState } from "react";
import "./Projects.css";

const slides = [
   {
      url: "./projects/CalendarAppLogin.JPG",
      title: "CalendarApp",
      description: "Hola Mundo",
   },
   {
      url: "./projects/GifApp.JPG",
      title: "GifApp",
      description: "Hola Mundo",
   },
   {
      url: "./projects/JournalApp.JPG",
      title: "JournalApp",
      description: "Hola Mundo",
   },
   {
      url: "./projects/MovieApp.JPG",
      title: "MovieApp",
      description: "Hola Mundo",
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
      <div id="Projects" className="href"/>
      <div id="" className="card__container ">
         <div className="projects__container">
            <h2>
               <b>3.</b> Projects
            </h2>
            <div className="slider__container">
               <div className="arrow">
                  <i
                     className="bi bi-caret-left-fill"
                     onClick={goToPrevious}
                  ></i>
               </div>
               <div className="img">
                  <img
                     src={slides[currentIndex].url}
                     alt={slides[currentIndex].title}
                  />
               </div>
               <div className="arrow">
                  <i className="bi bi-caret-right-fill" onClick={goToNext}></i>
               </div>
            </div>
            <div className="dot__container">
               {slides.map((slide, slideIndex) => (
                  <div
                     className={
                        currentIndex === slideIndex ? "active__dot" : "dot"
                     }
                     onClick={() => goToSlide(slideIndex)}
                     key={slideIndex}
                  >
                     <i className="bi bi-dot"></i>
                  </div>
               ))}
            </div>
         </div>
      </div>
      </>
   );
};
