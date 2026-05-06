import { ReactNode } from "preact/compat";
import { CSSProperties } from "preact";

export const RowComponent = ({
  component,
  styles,
}: {
  component: ReactNode;
  styles?: CSSProperties;
}) => (
  <div
    className="flex items-center gap-2 relative row-block"
    style={{ ...styles }}
  >
    <div className="h-full relative bg-accent separator" />
    {component}
  </div>
);
