import { useTranslation } from "../../../Utils/language";
import { ProgressBar } from "../../../components/ProgressBar";
import { RowComponent } from "../../../components/RowComponent";
import { BarChartIcon } from "../../../components/Icons/BarChartIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const Skills = ({ data }: { data?: SkillsGroup }) => {
  const { t } = useTranslation();

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
