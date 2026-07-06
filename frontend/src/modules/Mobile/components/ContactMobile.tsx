import { AddressToString } from "../../../Utils/data";
import { MailIcon } from "../../../components/Icons/MailIcon";
import { PhoneIcon } from "../../../components/Icons/PhoneIcon";
import { MapPinIcon } from "../../../components/Icons/MapPinIcon";
import { IconTextComponent } from "../../../components/IconTextComponent";

export const ContactMobile = ({ data }: { data?: MeItem }) => (
  <section className="flex flex-col contact-section">
    <IconTextComponent icon={PhoneIcon} text={data?.phone ?? ""} isGold />
    <IconTextComponent icon={MailIcon} text={data?.email ?? ""} isGold />
    <IconTextComponent icon={MapPinIcon} text={AddressToString(data)} isGold />
  </section>
);
