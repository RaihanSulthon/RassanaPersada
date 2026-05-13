import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("rp_lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("rp_lang", lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "id" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}