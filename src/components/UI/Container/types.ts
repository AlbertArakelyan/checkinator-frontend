import { PropsWithChildren, HTMLAttributes } from 'react';

export interface IContainerProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}
