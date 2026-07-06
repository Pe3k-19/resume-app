import { useState, useEffect } from "preact/hooks";
import { apiFetch } from "../../../Utils/api";
import { useTranslation } from "../../../Utils/language";
import { BagIcon } from "../../../components/Icons/BagIcon";
import { WorkExperience } from "../../../components/WorkExperience";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const WorkMobile = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<WorkItem[]>();

  const workItems = (data || []).map((item, idx) => (
    <WorkExperience data={item} />
  ));

  useEffect(() => {
    apiFetch("/works").then(setData).catch(console.error);
  }, []);

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
