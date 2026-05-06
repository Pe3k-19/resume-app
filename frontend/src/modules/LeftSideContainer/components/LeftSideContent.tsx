import { useState, useEffect } from "preact/hooks";
import { apiFetch } from "../../../Utils/api";
import { ContactSection } from "./ContactSection";
import { EducationSection } from "./EducationSection";
import { useTranslation } from "../../../Utils/language";
import { ProgressBar } from "../../../components/ProgressBar";
import { EarthIcon } from "../../../components/Icons/EarthIcon";
import { RowComponent } from "../../../components/RowComponent";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const LeftSideContent = () => {
  const [data, setData] = useState<MeItem>();
  const { t, lang } = useTranslation();

  useEffect(() => {
    apiFetch("/me").then(setData).catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-1 text-light left-content-block">
      <ContactSection data={data} />
      <div className="mb-1 divider" />
      <EducationSection data={data} />
      {/* Languages */}
      <div className="mb-1 divider" style={{ marginTop: "4.5rem" }} />
      <RowComponent
        component={
          <IconTextComponent icon={EarthIcon} text={t("languages")} isSection />
        }
        styles={{ height: "50px" }}
      />
      {(data?.languages ?? []).map((item) => (
        <RowComponent
          component={
            <ProgressBar label={item.name[lang]} progress={item.value} />
          }
          styles={{
            height: "16px",
            marginTop: "2rem",
            alignItems: "flex-start",
          }}
        />
      ))}
    </div>
  );
};
