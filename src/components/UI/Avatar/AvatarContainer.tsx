import { FC } from 'react';

import Avatar from './Avatar';

import { IAvatarContainerProps } from './types';

const AvatarContainer: FC<IAvatarContainerProps> = ({ src }) => {
  return <Avatar />;
};

export default AvatarContainer;
