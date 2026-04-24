import { JSX } from "preact";
import { ReactNode } from "preact/compat";

declare global {
  type IconProps = JSX.IntrinsicElements["svg"];

  type IconType = ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;

  type RowItem = {
    text: string;
    icon: IconType;
    height: string;
    marginTop?: string;
    isSection?: boolean;
    component?: ReactNode;
    bgColor?: string;
  };

  type PropertyItem = {
    text: string;
    value: number;
  };
}
