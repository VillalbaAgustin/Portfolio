import React, { useContext, useEffect } from "react";
import {
  Navbar,
  Profile,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";
import "./App.css";
import { TranslateContext } from "./context/language";

export const App = () => {
  const {language, setLanguage} = useContext(TranslateContext)
  useEffect(() => {

  }, [language])
  
  return (
    <div>
      <Navbar />
      <div className="containers">
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
