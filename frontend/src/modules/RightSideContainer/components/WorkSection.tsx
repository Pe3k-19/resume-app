import { useTranslation } from "../../../Utils/language";
import { BagIcon } from "../../../components/Icons/BagIcon";
import { RowComponent } from "../../../components/RowComponent";
import { WorkExperience } from "../../../components/WorkExperience";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const WorkSection = ({ data }: { data?: WorkItem[] }) => {
  const { t } = useTranslation();

  const workItems = (data || []).map((item, idx) => (
    <RowComponent
      key={item._id}
      component={<WorkExperience data={item} />}
      className={`work-block-${idx}`}
    />
  ));

  return (
    <div>
      <RowComponent
        component={
          <IconTextComponent
            icon={BagIcon}
            text={t("work_experience")}
            isSection
            isGold
          />
        }
      />
      {workItems}
    </div>
  );
};
