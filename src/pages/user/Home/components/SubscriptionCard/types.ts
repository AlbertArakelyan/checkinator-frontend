import React, { HTMLAttributes } from 'react';

import { ActiveSubscriptionAction } from 'constants/activeSubscription';

import { VariantType, IPlanItem } from 'types';

export interface ISubscriptionCardContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant: VariantType;
  id: string;
  name: string;
  price: number;
  planItems: IPlanItem[];
  isActive: boolean;
  activeSubscriptionAction?: ActiveSubscriptionAction;
}

export interface ISubscriptionCardProps extends Omit<ISubscriptionCardContainerProps, 'planItems'> {
  plansItemsContent: React.JSX.Element[];
  handleActivateClick: () => void;
}
