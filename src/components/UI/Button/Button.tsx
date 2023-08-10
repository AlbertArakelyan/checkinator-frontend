import { FC } from 'react';

import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({ variant, className = '', children, isLoading, ...props }) => {
  return (
    <button
      className={`base-button base-button--${variant} ${isLoading ? 'base-button--isLoading' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
