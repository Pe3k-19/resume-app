import { useTranslation } from "../../../Utils/language";
import { RowComponent } from "../../../components/RowComponent";
import { ArticleIcon } from "../../../components/Icons/ArticleIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const AboutSection = ({ data }: { data?: AboutItem }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col text-left">
      <RowComponent
        component={
          <IconTextComponent
            icon={ArticleIcon}
            text={t("about")}
            isSection
            isGold
          />
        }
      />
      <div className="flex flex-col items-start text-gray right-content-block">
        <span>{data?.about_text_1?.[lang]}</span>
        <br />
        <span>{data?.about_text_2?.[lang]}</span>
      </div>
    </div>
  );
};
