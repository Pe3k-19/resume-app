import { Icon } from "./Icon";

type Style = {
  [key: string]: string;
};

export const RowComponent = ({
  icon,
  text,
  styles,
  isSection,
}: {
  icon: IconType;
  text: string;
  styles: Style;
  isSection?: boolean;
}) => (
  <div className="row-block" style={{ ...styles }}>
    <div className="separator" />
    <div className="row-content">
      <Icon icon={icon} isBig={isSection} />
      <span className={`text ${isSection && "section"}`}>{text}</span>
    </div>
  </div>
);
