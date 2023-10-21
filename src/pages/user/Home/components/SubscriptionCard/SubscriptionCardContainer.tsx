import { FC } from 'react';

import SubscriptionCard from './SubscriptionCard';
import { SubscriptionCardFeature } from './components';

import useSubscriptionCardContainer from './useSubscriptionCardContainer';

import { ISubscriptionCardContainerProps } from './types';

const SubscriptionCardContainer: FC<ISubscriptionCardContainerProps> = ({
  variant,
  planItems,
  isActive,
  activeSubscriptionAction,
  ...props
}) => {
  const { handleActivateClick } = useSubscriptionCardContainer();

  const planItemsContent = planItems.map((planItem) => {
    return <SubscriptionCardFeature key={planItem._id} value={planItem.name} />;
  });

  const handleClick = () => {
    handleActivateClick({
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <SubscriptionCard
      variant={variant}
      plansItemsContent={planItemsContent}
      handleActivateClick={handleClick}
      isActive={isActive}
      activeSubscriptionAction={activeSubscriptionAction}
      {...props}
    />
  );
};

export default SubscriptionCardContainer;
