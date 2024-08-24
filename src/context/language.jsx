import { createContext, useState } from "react";

export const TranslateContext = createContext();

export function TranslateProviders({ children }) {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState('dark')

  return (
    <TranslateContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </TranslateContext.Provider>
  );
}
