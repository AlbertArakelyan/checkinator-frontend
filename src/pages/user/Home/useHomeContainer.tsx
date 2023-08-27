import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';

import { SubscriptionCard } from './components/SubscriptionCard';

import { getPlans } from 'store/plan/plan.action';

import { selectPlansList } from 'store/plan/plan.selectors';

import { VariantType } from 'types';

import styles from './Home.module.scss';

const useHomeContainer = () => {
  const dispatch = useAppDispatch();

  const plansList = useAppSelector(selectPlansList);

  const plansListContent = plansList.map((planItem) => {
    return (
      <SubscriptionCard
        className={styles['home__subscription-card']}
        key={planItem._id}
        id={planItem._id}
        variant={planItem.color as VariantType}
        planItems={planItem.planItems}
        name={planItem.name}
        price={planItem.price}
        data-testid="subscription-card"
      />
    );
  });

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  return {
    plansListContent,
  };
};

export type UseHomeContainerType = ReturnType<typeof useHomeContainer>;

export default useHomeContainer;
