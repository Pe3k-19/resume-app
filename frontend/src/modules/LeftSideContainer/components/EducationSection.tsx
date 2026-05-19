import { HighSchoolDetail } from "./HighSchoolDetail";
import { useTranslation } from "../../../Utils/language";
import { CertificatesDetail } from "./CertificatesDetail";
import { RowComponent } from "../../../components/RowComponent";
import { SchoolIcon } from "../../../components/Icons/SchoolIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";
import { GraduationIcon } from "../../../components/Icons/GraduationIcon";
import { CertificateIcon } from "../../../components/Icons/CertificateIcon";

export const EducationSection = ({ data }: { data?: MeItem }) => {
  const { t } = useTranslation();

  return (
    <>
      <RowComponent
        component={
          <IconTextComponent
            icon={GraduationIcon}
            text={t("education")}
            isSection
          />
        }
        styles={{ height: "50px" }}
      />
      <RowComponent
        component={
          <IconTextComponent
            icon={SchoolIcon}
            component={() => <HighSchoolDetail data={data?.high_school} />}
          />
        }
        styles={{
          height: "16px",
          alignItems: "flex-start",
          marginTop: "0.5rem",
        }}
      />
      <RowComponent
        component={
          <IconTextComponent
            icon={CertificateIcon}
            component={() => (
              <div>
                {(data?.certificates ?? []).map((item) => (
                  <CertificatesDetail data={item} />
                ))}
              </div>
            )}
          />
        }
        className="certificate-row"
        styles={{
          height: "16px",
          alignItems: "flex-start",
        }}
      />
    </>
  );
};
