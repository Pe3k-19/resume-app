import { ErrorIcon } from "./Icons/ErrorIcon";
import { useTranslation } from "../Utils/language";

export const Error = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center loading-screen">
        <ErrorIcon width={64} height={64} color="#fca800" />
        <span className="loader-text">{t("something_went_wrong")}</span>
      </div>
    </div>
  );
};
