import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { TranslateProviders } from "./context/language";
import { ThemeProviders } from "./context/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranslateProviders>
      <ThemeProviders>
        <App/>
      </ThemeProviders>
    </TranslateProviders>
  </React.StrictMode>
);
