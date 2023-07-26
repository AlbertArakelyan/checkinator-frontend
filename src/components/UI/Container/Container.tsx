import { FC } from 'react';

import { IContainerProps } from './types';

const Container: FC<IContainerProps> = ({ children, fluid, className, ...props }) => {
  return (
    <div className={`${fluid ? 'container' : 'container-fluid'} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
