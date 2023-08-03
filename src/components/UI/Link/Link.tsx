import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { ILinkProps } from './types';

const Link: FC<ILinkProps> = ({ variant, to, children, className = '', ...props }) => {
  return (
    <RouterLink to={to} className={`${variant ? `base-button base-button--${variant}` : ''} ${className}`} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
