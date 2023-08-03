import { FC } from 'react';

import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({ variant, className = '', children, ...props }) => {
  return (
    <button className={`base-button base-button--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
