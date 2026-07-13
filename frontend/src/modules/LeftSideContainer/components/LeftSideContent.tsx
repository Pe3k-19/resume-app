import { ContactSection } from "./ContactSection";
import { EducationSection } from "./EducationSection";
import { useTranslation } from "../../../Utils/language";
import { ProgressBar } from "../../../components/ProgressBar";
import { EarthIcon } from "../../../components/Icons/EarthIcon";
import { RowComponent } from "../../../components/RowComponent";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const LeftSideContent = ({ data }: { data?: MeItem }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col gap-1 text-light left-content-block">
      <ContactSection data={data} />
      <div className="mb-1 divider" />
      <EducationSection data={data} />
      {/* Languages */}
      <div className="mb-1 divider" style={{ marginTop: "5rem" }} />
      <RowComponent
        component={
          <IconTextComponent icon={EarthIcon} text={t("languages")} isSection />
        }
        styles={{ height: "50px" }}
      />
      {(data?.languages ?? []).map((item, idx) => (
        <RowComponent
          key={item._id}
          component={
            <ProgressBar label={item.name[lang]} progress={item.value} />
          }
          className={`language-block-${idx}`}
          styles={{ height: "16px" }}
        />
      ))}
    </div>
  );
};
