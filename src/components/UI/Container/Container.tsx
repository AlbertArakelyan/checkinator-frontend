import { FC } from 'react';

import { IContainerProps } from './types';

const Container: FC<IContainerProps> = ({ children, fluid, className, ...props }) => {
  return (
    <div className={`${fluid ? 'container-fluid' : 'container'} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
