import { ReactNode } from "preact/compat";
import { Icon } from "./Icon";

export const IconTextComponent = ({
  icon,
  text,
  component,
  isSection,
  isGold,
}: {
  icon: IconType;
  text: string;
  component?: () => ReactNode;
  isSection?: boolean;
  isGold?: boolean;
}) => {
  return (
    <div className="row-content">
      <Icon icon={icon} isBig={isSection} isGold={isGold} />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <span className={`text ${isSection && "section"}`}>{text}</span>
        <div>{component && component()}</div>
      </div>
    </div>
  );
};
