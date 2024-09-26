import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { getTopNav } from "../../data/const";
import { TranslateContext } from "../../context/language";
import { useLanguage, useTheme } from "../../hooks/useLanguage";
import { ThemeContext } from "../../context/theme";

export const Navbar = () => {
  const { language, setLanguage } = useLanguage(TranslateContext);
  const { theme, setTheme } = useTheme(ThemeContext);

  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu nav__hidden");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const handleChangeLanguage = () => {
    language === "es" ? setLanguage("en") : setLanguage("es");
    onToggle();
  };

  const handleChangeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    onToggle();
  };

  const onToggle = () => {
    collapse === "nav__menu nav__hidden"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu nav__hidden");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
        <header className="nav__wrapper">
          <div className="nav__container">
            <nav className="nav">
              <ul className={collapse}>
                <button
                  className="nav__link"
                  onClick={handleChangeTheme}
                >
                  {theme === "dark" ? (
                    <i class="bi bi-sun"></i>
                  ) : (
                    <i class="bi bi-moon-fill"></i>
                  )}
                </button>
                {navItems.map((item) => (
                  <li key={item.id} className="nav__item">
                    <a href={item.href} className="nav__link" onClick={onToggle}>
                      <span className="nav__number">{item.id}. </span>
                      {language === "en" ? item.label : item.etiqueta}
                    </a>
                  </li>
                ))}
                <button
                  className={language === "en" ? "nav__link" : "nav__link selected"}
                  onClick={handleChangeLanguage}
                >
                  <i className="bi bi-translate"></i>
                </button>
              </ul>
              <div className="container__toggle" onClick={onToggle}>
                <div className={toggleIcon}>
                  <div className="line__1"></div>
                  <div className="line__2"></div>
                  <div className="line__3"></div>
                </div>
              </div>
            </nav>
          </div>
        </header> 
  );
};

