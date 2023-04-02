import React from "react";
import { Navbar } from "./components/Navbar";

export const App = () => {
   return (
      <>
         <Navbar/>
         <div>
            <h2>
               <b>01.</b> Profile
            </h2>
         </div>
         <div>
            <h2>
               <b>02.</b> Projects
            </h2>
         </div>
         <div>
            <h2>
               <b>03.</b> Get in touch
            </h2>
         </div>
      </>
   );
};
