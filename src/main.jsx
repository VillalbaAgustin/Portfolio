import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { TranslateProviders } from "./context/language";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranslateProviders>
      <App />
    </TranslateProviders>
  </React.StrictMode>
);
