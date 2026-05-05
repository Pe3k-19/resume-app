import { useEffect, useState } from "preact/hooks";
import { useTranslation } from "../../../Utils/language";
import { BagIcon } from "../../../components/Icons/BagIcon";
import { RowComponent } from "../../../components/RowComponent";
import { WorkExperience } from "../../../components/WorkExperience";
import { IconTextComponent } from "../../../components/IconTextComponent";

const MARGIN_TOP_BASE = [1, 11, 8.8];

export const WorkSection = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<WorkItem[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/works");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  const workItems = (data || []).map((item, idx) => (
    <RowComponent
      key={item._id}
      component={<WorkExperience data={item} />}
      styles={{
        height: "16px",
        alignItems: "flex-start",
        marginTop: `${MARGIN_TOP_BASE[idx]}rem`,
      }}
    />
  ));

  return (
    <div className="flex-column flex-a-start">
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
