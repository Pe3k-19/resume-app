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
    <div className="flex gap-05">
      <Icon icon={icon} isBig={isSection} isGold={isGold} />
      <div className="flex flex-col items-start justify-center">
        {text && (
          <span className={`${isSection && "bold uppercase size-24"}`}>
            {text}
          </span>
        )}
        {component && <div className="component">{component()}</div>}
      </div>
    </div>
  );
};
