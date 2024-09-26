import React, { useEffect } from "react";
import {
  Navbar,
  Profile,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";
import "./App.css";
// import { TranslateContext } from "./context/language";
import { useLanguage, useTheme } from "./hooks/useLanguage";

export const App = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  useEffect(() => {}, [language, theme]);

  return (
    <div className="app" data-theme = {theme} >
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
