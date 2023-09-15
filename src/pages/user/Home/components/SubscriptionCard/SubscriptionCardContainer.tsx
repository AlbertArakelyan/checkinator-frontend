import { FC } from 'react';

import SubscriptionCard from './SubscriptionCard';
import { SubscriptionCardFeature } from './components';

import { ISubscriptionCardContainerProps } from './types';

const SubscriptionCardContainer: FC<ISubscriptionCardContainerProps> = ({ variant, planItems, ...props }) => {
  const planItemsContent = planItems.map((planItem) => {
    return <SubscriptionCardFeature key={planItem._id} value={planItem.name} />;
  });

  return <SubscriptionCard variant={variant} plansItemsContent={planItemsContent} {...props} />;
};

export default SubscriptionCardContainer;
