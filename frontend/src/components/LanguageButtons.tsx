import { useTranslation } from "../Utils/language";

export const LanguageButtons = () => {
  const { lang, setLang } = useTranslation();

  return (
    <div className="flex justify-center gap-05 mb-1 language-container">
      <button disabled={lang === "sk"} onClick={() => setLang("sk")}>
        SK
      </button>
      <button disabled={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
};
