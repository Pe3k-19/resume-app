import { useTranslation } from "../../../Utils/language";

export const CertificatesDetail = ({ data }: { data?: CertificateItem }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start gap-05 text-left subsection-block">
      <span className="bold">{t("certificates")}</span>
      <span>{data?.year ? `${data.year}` : "-"}</span>
      <span>{data?.name}</span>
      <span>{data?.source}</span>
    </div>
  );
};
