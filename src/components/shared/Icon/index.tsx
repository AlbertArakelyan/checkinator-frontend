import { FC } from 'react';

// Components
import { UserAstronaout } from './icons';

// Types
import { IIconProps } from './types';

export const icons = {
  'user-astronaut': UserAstronaout,
};

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};

export default Icon;
