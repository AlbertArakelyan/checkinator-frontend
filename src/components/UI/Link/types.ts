import { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import { VariantType } from 'types';

export interface ILinkProps extends PropsWithChildren, LinkProps {
  variant?: VariantType;
}
