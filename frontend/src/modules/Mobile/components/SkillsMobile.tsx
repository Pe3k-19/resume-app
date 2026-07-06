import { useEffect, useState } from "preact/hooks";
import { apiFetch } from "../../../Utils/api";
import { useTranslation } from "../../../Utils/language";
import { DivideDataIntoColumns } from "../../../Utils/data";
import { ProgressBar } from "../../../components/ProgressBar";
import { BarChartIcon } from "../../../components/Icons/BarChartIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const SkillsMobile = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<SkillsGroup>();

  useEffect(() => {
    apiFetch("/skills/?results=20")
      .then((res) => {
        setData(DivideDataIntoColumns(res, 7, "React"));
      })
      .catch(console.error);
  }, []);

  const SkillsComponents = () => {
    const components = [];
    for (let i = 0; i < 3; i++) {
      components.push(
        <div className="flex flex-col skill-block">
          {(data?.[i] || []).map((item) => (
            <ProgressBar
              isSmall
              key={item._id}
              label={item.name}
              progress={item.value}
            />
          ))}
        </div>,
      );
    }

    return <div className="flex skills-components">{components}</div>;
  };

  return (
    <div className="flex flex-col items-start text-left bg-light mobile-content-block">
      <IconTextComponent
        icon={BarChartIcon}
        text={t("skills")}
        isSection
        isGold
      />
      {SkillsComponents()}
    </div>
  );
};
