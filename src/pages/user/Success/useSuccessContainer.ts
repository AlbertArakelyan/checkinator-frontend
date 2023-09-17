import { useEffect } from 'react';
import { useAppDispatch } from '../../../store';

import { useQuery } from 'hooks';

import { createActiveSubscription } from 'store/activeSubscription/activeSubscription.action';

const useSuccessContainer = () => {
  const dispatch = useAppDispatch();
  const query = useQuery();

  const planId = query.get('planId');

  useEffect(() => {
    if (planId) {
      dispatch(createActiveSubscription({ planId }));
    }
  }, []);
};

export default useSuccessContainer;
