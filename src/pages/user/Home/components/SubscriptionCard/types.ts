import React, { HTMLAttributes } from 'react';

import { VariantType, IPlanItem } from 'types';
import { UseSubscriptionCardType } from './useSubscriptionCardContainer';

export interface ISubscriptionCardContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant: VariantType;
  id: string;
  name: string;
  price: number;
  planItems: IPlanItem[];
}

export interface ISubscriptionCardProps extends Omit<ISubscriptionCardContainerProps, 'planItems'> {
  plansItemsContent: React.JSX.Element[];
  handleActivateClick: () => void;
}
