import { useEffect, useState } from "react";
import { apiFetch } from "../../../Utils/api";
import { ContactMobile } from "./ContactMobile";
import { useTranslation } from "../../../Utils/language";
import { ArticleIcon } from "../../../components/Icons/ArticleIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const HeaderMobile = ({ data }: { data?: MeItem }) => {
  const [aboutData, setAboutData] = useState<AboutItem>();
  const { t, lang } = useTranslation();

  useEffect(() => {
    apiFetch("/abouts").then(setAboutData).catch(console.error);
  }, []);

  return (
    <div className="relative h-full text-dark">
      <div className="flex justify-center gap-1">
        <span className="uppercase weight-800 text-header">
          {aboutData?.name ?? ""}
        </span>
        <span className="uppercase weight-800 text-accent text-header">
          {aboutData?.surname ?? ""}
        </span>
      </div>
      <span className="flex justify-center uppercase weight-800 size-20 text-gray">
        {aboutData?.position ?? ""}
      </span>
      <ContactMobile data={data} />
      <div className="flex flex-col items-start text-left bg-light mobile-content-block">
        <IconTextComponent
          icon={ArticleIcon}
          text={t("about")}
          isSection
          isGold
        />
        <div className="flex flex-col gap-1 outdent">
          <span>{aboutData?.about_text_1?.[lang]}</span>
          <span>{aboutData?.about_text_2?.[lang]}</span>
        </div>
      </div>
    </div>
  );
};
