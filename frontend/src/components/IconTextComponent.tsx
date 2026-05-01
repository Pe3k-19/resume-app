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
  text?: string;
  component?: () => ReactNode;
  isSection?: boolean;
  isGold?: boolean;
}) => {
  return (
    <div className="row-content">
      <Icon icon={icon} isBig={isSection} isGold={isGold} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        {text && <span className={`${isSection && "section"}`}>{text}</span>}
        {component && <div style={{ marginTop: "0.15rem" }}>{component()}</div>}
      </div>
    </div>
  );
};
