import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProviders({ children }) {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
