import { useTranslation } from "../Utils/language";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();

  return (
    <div className="absolute flex items-center justify-center language-container">
      <button disabled={lang === "sk"} onClick={() => setLang("sk")}>
        SK
      </button>
      <div className="flex items-center justify-center text-dark separator">
        |
      </div>
      <button disabled={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
};
