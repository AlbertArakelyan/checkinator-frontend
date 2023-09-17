import { useAppDispatch } from '../../../../../store';

import { createCheckoutSession } from 'store/activeSubscription/activeSubscription.action';

import { IActiveSubscriptionData } from 'types';

const useSubscriptionCardContainer = () => {
  const dispatch = useAppDispatch();

  const handleActivateClick = (data: IActiveSubscriptionData) => {
    dispatch(createCheckoutSession(data));
  };

  return {
    handleActivateClick,
  };
};

export type UseSubscriptionCardType = ReturnType<typeof useSubscriptionCardContainer>;

export default useSubscriptionCardContainer;
