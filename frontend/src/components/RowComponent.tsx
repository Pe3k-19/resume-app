import { ReactNode } from "preact/compat";
import { CSSProperties } from "preact";

export const RowComponent = ({
  component,
  styles,
}: {
  component: ReactNode;
  styles: CSSProperties;
}) => (
  <div className="row-block" style={{ ...styles }}>
    <div className="separator" />
    {component}
  </div>
);
