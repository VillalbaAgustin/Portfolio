import React from "react";

export const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">
               Navbar
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            {/* <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="offcanvas"
               data-bs-target="#offcanvasNavbar"
               aria-controls="offcanvasNavbar"
            >
               <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#">
                     Inicio
                  </a>
                  <a className="nav-link" href="#">
                     Características
                  </a>
                  <a className="nav-link" href="#">
                     Precios
                  </a>
                  <a className="nav-link disabled">Deshabilitado</a>
               </div>
            </div>
         </div>
      </nav>
   );
};
