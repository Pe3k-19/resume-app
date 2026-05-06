import { AddressToString } from "../../../Utils/data";
import { useTranslation } from "../../../Utils/language";

export const HighSchoolDetail = ({ data }: { data?: HighSchoolItem }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col items-start gap-05 text-left">
      <span className="bold">{t("high_school")}</span>
      <span>{data?.from && data?.to ? `${data.from} - ${data.to}` : "-"}</span>
      <span>{data?.profesion?.[lang]}</span>
      <span>{data?.name?.[lang]}</span>
      <span>{AddressToString(data as AddressItem)}</span>
    </div>
  );
};
