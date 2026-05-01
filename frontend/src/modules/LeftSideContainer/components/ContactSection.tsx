import { AddressToString } from "../../../Utils/data";
import { useTranslation } from "../../../Utils/language";
import { MailIcon } from "../../../components/Icons/MailIcon";
import { UserIcon } from "../../../components/Icons/UserIcon";
import { PhoneIcon } from "../../../components/Icons/PhoneIcon";
import { RowComponent } from "../../../components/RowComponent";
import { MapPinIcon } from "../../../components/Icons/MapPinIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const ContactSection = ({ data }: { data?: MeItem }) => {
  const { t } = useTranslation();

  return (
    <>
      <RowComponent
        component={
          <IconTextComponent icon={UserIcon} text={t("contact_me")} isSection />
        }
        styles={{ height: "50px" }}
      />
      <RowComponent
        component={
          <IconTextComponent icon={PhoneIcon} text={data?.phone ?? ""} />
        }
        styles={{ height: "16px", marginTop: "1.5rem" }}
      />
      <RowComponent
        component={
          <IconTextComponent icon={MailIcon} text={data?.email ?? ""} />
        }
        styles={{ height: "16px", marginTop: "1rem" }}
      />
      <RowComponent
        component={
          <IconTextComponent
            icon={MapPinIcon}
            component={() => AddressToString(data as AddressItem)}
          />
        }
        styles={{ height: "16px", marginTop: "1rem" }}
      />
    </>
  );
};
