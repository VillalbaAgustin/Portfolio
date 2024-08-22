import { createContext, useState } from "react";

export const TranslateContext = createContext();

export function TranslateProviders({ children }) {
  const [language, setLanguage] = useState("en");
  return (
    <TranslateContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
}
