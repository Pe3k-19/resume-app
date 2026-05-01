import { useTranslation } from "../Utils/language";

export const LanguageButtons = () => {
  const { lang, setLang } = useTranslation();

  return (
    <div className="language-buttons">
      <button
        className="text"
        disabled={lang === "sk"}
        onClick={() => setLang("sk")}
      >
        SK
      </button>
      <button
        className="text"
        disabled={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
};
