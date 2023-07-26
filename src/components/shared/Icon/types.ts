import { icons } from './index';

export type IconsType = typeof icons;

export interface IIconComponentProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export interface IIconProps extends IIconComponentProps {
  name: keyof IconsType;
}
