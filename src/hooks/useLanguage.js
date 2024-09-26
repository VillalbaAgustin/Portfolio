import { useContext } from "react";
import { TranslateContext } from "../context/language";
import { ThemeContext } from "../context/theme";

export const useLanguage = () => useContext(TranslateContext);
export const useTheme = () => useContext(ThemeContext);