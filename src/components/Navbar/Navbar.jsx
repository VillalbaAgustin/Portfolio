import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { getTopNav } from "../../data/navbar";

export const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu nav__hidden");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

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
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.href} className="nav__link" onClick={onToggle}>
                  <span className="nav__number">{item.id}. </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container__toggle">
            <div className={toggleIcon} onClick={onToggle}>
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
