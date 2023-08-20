import { HTMLAttributes } from 'react';

import { VariantType } from 'types';

export interface ISubscriptionCardContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant: VariantType;
}

export type ISubscriptionCardProps = ISubscriptionCardContainerProps;
