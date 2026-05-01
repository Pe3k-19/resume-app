import { useTranslation } from "../../../Utils/language";

export const CertificatesDetail = ({ data }: { data?: CertificateItem }) => {
  const { t } = useTranslation();

  return (
    <div className="row-detail">
      <span className="bold">{t("certificates")}</span>
      <span>{data?.year ? `${data.year}` : "-"}</span>
      <span>{data?.name}</span>
    </div>
  );
};
