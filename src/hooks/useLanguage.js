import { useContext } from "react";
import { TranslateContext } from "../context/language";

export const useLanguage = () => useContext(TranslateContext);