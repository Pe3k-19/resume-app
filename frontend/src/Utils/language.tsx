import { createContext, useContext, useState } from "react";
import { translations } from "../languages/translations";

type Language = keyof typeof translations;

type TranslationKey = keyof (typeof translations)["sk"];

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>("sk");

  const t = (key: TranslationKey) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }

  return context;
};
