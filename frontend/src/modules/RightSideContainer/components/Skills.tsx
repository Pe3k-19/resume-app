import { useEffect, useState } from "preact/hooks";
import { useTranslation } from "../../../Utils/language";
import { ProgressBar } from "../../../components/ProgressBar";
import { RowComponent } from "../../../components/RowComponent";
import { BarChartIcon } from "../../../components/Icons/BarChartIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const Skills = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<SkillsGroup>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/skills/?results=20");
      const json = await res.json();
      setData({
        0: json.slice(0, 7),
        1: json.slice(7, 13),
        2: json.slice(13),
      });
    };

    fetchData();
  }, []);

  const SkillsComponents = () => {
    const components = [];
    for (let i = 0; i < 3; i++) {
      components.push(
        <div className="flex flex-col skillBlock">
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

    return <div className="flex skillsContainer">{components}</div>;
  };

  return (
    <div>
      <RowComponent
        component={
          <IconTextComponent
            icon={BarChartIcon}
            text={t("skills")}
            isSection
            isGold
          />
        }
        styles={{ marginTop: "8rem" }}
      />
      {SkillsComponents()}
    </div>
  );
};
