import React from "react";
import { Navbar, Profile, Skills, Projects, Contact, Footer } from "./components";
import "./App.css";

export const App = () => {
   return (
      <div>
         <Navbar />
         <div className="containers">
               <Profile />
               <Skills />
               <Projects />
               <Contact />
         </div>
               <Footer/>
      </div>
   );
};
