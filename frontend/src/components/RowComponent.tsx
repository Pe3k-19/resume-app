import { ReactNode } from "preact/compat";
import { CSSProperties } from "preact";

export const RowComponent = ({
  component,
  styles,
  className,
}: {
  component: ReactNode;
  styles?: CSSProperties;
  className?: string;
}) => (
  <div
    className={`flex items-center relative row-block ${className || ""}`}
    style={{ ...styles }}
  >
    <div className="h-full relative bg-accent separator" />
    {component}
  </div>
);
