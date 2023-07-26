import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { VariantType } from 'types';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
}
