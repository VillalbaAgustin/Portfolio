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

   return (
      <div id="Projects" className="card__container ">
         <div className="projects__container">
            <h2>
               <b>03.</b> Projects
            </h2>
            <div className="slider__container">
               <div className="arrow">
                  <i className="bi bi-caret-left-fill"></i>
               </div>
               <div className="img">
                  <img
                     src={slides[currentIndex].url}
                     alt={slides[currentIndex].title}
                  />
               </div>
               <div className="arrow">
                  <i className="bi bi-caret-right-fill"></i>
               </div>
            </div>
         </div>
      </div>
   );
};
