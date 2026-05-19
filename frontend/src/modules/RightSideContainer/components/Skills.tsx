import { useEffect, useState } from "preact/hooks";
import { apiFetch } from "../../../Utils/api";
import { useTranslation } from "../../../Utils/language";
import { ProgressBar } from "../../../components/ProgressBar";
import { RowComponent } from "../../../components/RowComponent";
import { BarChartIcon } from "../../../components/Icons/BarChartIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const Skills = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<SkillsGroup>();

  useEffect(() => {
    apiFetch("/skills/?results=20")
      .then((res) => {
        setData({
          0: res.slice(0, 7),
          1: res.slice(7, 13),
          2: res.slice(13),
        });
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
    <div className="skills-Container">
      <RowComponent
        component={
          <IconTextComponent
            icon={BarChartIcon}
            text={t("skills")}
            isSection
            isGold
          />
        }
      />
      {SkillsComponents()}
    </div>
  );
};
