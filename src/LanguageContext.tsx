import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from "react";
import i18n from "./i18n"; // ✅ import đúng (đã export default)

export type Language = "vi" | "en" | "es";


interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "vi",
  setLang: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved as Language) || "vi";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang); // tự động đổi ngôn ngữ khi thay đổi
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
