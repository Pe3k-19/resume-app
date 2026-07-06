import { WorkMobile } from "./WorkMobile";
import { SkillsMobile } from "./SkillsMobile";
import { LanguagesMobile } from "./LanguagesMobile";
import { useTranslation } from "../../../Utils/language";
import { SchoolIcon } from "../../../components/Icons/SchoolIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";
import { GraduationIcon } from "../../../components/Icons/GraduationIcon";
import { CertificateIcon } from "../../../components/Icons/CertificateIcon";
import { HighSchoolDetail } from "../../LeftSideContainer/components/HighSchoolDetail";
import { CertificatesDetail } from "../../LeftSideContainer/components/CertificatesDetail";

export const ContentMobile = ({ data }: { data?: MeItem }) => {
  const { t } = useTranslation();

  return (
    <div className="relative h-full text-dark">
      <div className="flex flex-col items-start bg-dark text-left text-light mobile-content-block">
        <IconTextComponent
          icon={GraduationIcon}
          text={t("education")}
          isSection
          isGold
        />
        <div className="flex flex-col gap-1 outdent">
          <IconTextComponent
            icon={SchoolIcon}
            component={() => <HighSchoolDetail data={data?.high_school} />}
            isGold
          />
          <IconTextComponent
            icon={CertificateIcon}
            component={() => (
              <div>
                {(data?.certificates ?? []).map((item) => (
                  <CertificatesDetail data={item} />
                ))}
              </div>
            )}
            isGold
          />
        </div>
      </div>
      <WorkMobile />
      <SkillsMobile />
      <LanguagesMobile data={data} />
    </div>
  );
};
