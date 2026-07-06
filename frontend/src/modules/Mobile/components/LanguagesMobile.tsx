import { useTranslation } from "../../../Utils/language";
import { ProgressBar } from "../../../components/ProgressBar";
import { EarthIcon } from "../../../components/Icons/EarthIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const LanguagesMobile = ({ data }: { data?: MeItem }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col items-start bg-dark text-left text-light mobile-content-block">
      <IconTextComponent
        icon={EarthIcon}
        text={t("languages")}
        isSection
        isGold
      />
      {(data?.languages ?? []).map((item, idx) => (
        <ProgressBar
          key={item._id}
          isSmall
          label={item.name[lang]}
          progress={item.value}
        />
      ))}
    </div>
  );
};
