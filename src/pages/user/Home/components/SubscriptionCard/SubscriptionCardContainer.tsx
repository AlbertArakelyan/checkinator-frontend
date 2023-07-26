import { FC } from 'react';

import SubscriptionCard from './SubscriptionCard';

import { ISubscriptionCardContainerProps } from './types';

const SubscriptionCardContainer: FC<ISubscriptionCardContainerProps> = ({ variant, ...props }) => {
  return <SubscriptionCard variant={variant} {...props} />;
};

export default SubscriptionCardContainer;
