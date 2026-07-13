import { ContactMobile } from "./ContactMobile";
import { useTranslation } from "../../../Utils/language";
import { ArticleIcon } from "../../../components/Icons/ArticleIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const HeaderMobile = ({
  data,
  about,
}: {
  data?: MeItem;
  about?: AboutItem;
}) => {
  const { t, lang } = useTranslation();

  return (
    <div className="relative h-full text-dark">
      <div className="flex justify-center gap-1">
        <span className="uppercase weight-800 text-header">
          {about?.name ?? ""}
        </span>
        <span className="uppercase weight-800 text-accent text-header">
          {about?.surname ?? ""}
        </span>
      </div>
      <span className="flex justify-center uppercase weight-800 size-20 text-gray">
        {about?.position ?? ""}
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
          <span>{about?.about_text_1?.[lang]}</span>
          <span>{about?.about_text_2?.[lang]}</span>
        </div>
      </div>
    </div>
  );
};
