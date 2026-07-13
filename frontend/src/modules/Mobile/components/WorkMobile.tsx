import { useTranslation } from "../../../Utils/language";
import { BagIcon } from "../../../components/Icons/BagIcon";
import { WorkExperience } from "../../../components/WorkExperience";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const WorkMobile = ({ data }: { data?: WorkItem[] }) => {
  const { t } = useTranslation();

  const workItems = (data || []).map((item) => (
    <WorkExperience key={item._id} data={item} />
  ));

  return (
    <div className="flex flex-col items-start text-left bg-white mobile-content-block">
      <IconTextComponent
        icon={BagIcon}
        text={t("work_experience")}
        isSection
        isGold
      />
      <div className="flex flex-col gap-1 outdent">{workItems}</div>
    </div>
  );
};
