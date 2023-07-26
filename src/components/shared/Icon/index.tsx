import { FC } from 'react';

// Components
import { UserAstronaout, CheckMark } from './icons';

// Types
import { IIconProps } from './types';

export const icons = {
  'user-astronaut': UserAstronaout,
  'check-mark': CheckMark,
};

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};

export default Icon;
