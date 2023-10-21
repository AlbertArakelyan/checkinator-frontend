import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';

import { SubscriptionCard } from './components/SubscriptionCard';

import { getPlans } from 'store/plan/plan.action';
import { getCurrentActiveSubscription } from 'store/activeSubscription/activeSubscription.action';

import { selectPlansList } from 'store/plan/plan.selectors';

import { ActiveSubscriptionAction } from 'constants/activeSubscription';

import { VariantType } from 'types';

import styles from './Home.module.scss';

const useHomeContainer = () => {
  const dispatch = useAppDispatch();

  const plansList = useAppSelector(selectPlansList);
  const { activeSubscription } = useAppSelector((state) => state.activeSubscription);

  const activeSubscriptionIndex = plansList.findIndex((planItem) => planItem._id === activeSubscription?.planId);

  const plansListContent = plansList.map((planItem, index) => {
    const activeSubscriptionAction =
      !activeSubscription || activeSubscriptionIndex === index
        ? undefined
        : activeSubscriptionIndex < index
        ? ActiveSubscriptionAction.UPGRADE
        : ActiveSubscriptionAction.DOWNGRADE;

    return (
      <SubscriptionCard
        className={styles['home__subscription-card']}
        key={planItem._id}
        id={planItem._id}
        variant={planItem.color as VariantType}
        planItems={planItem.planItems}
        name={planItem.name}
        price={planItem.price}
        isActive={planItem._id === activeSubscription?.planId}
        activeSubscriptionAction={activeSubscriptionAction}
        data-testid="subscription-card"
      />
    );
  });

  useEffect(() => {
    dispatch(getPlans());
    dispatch(getCurrentActiveSubscription());
  }, []);

  return {
    plansListContent,
  };
};

export type UseHomeContainerType = ReturnType<typeof useHomeContainer>;

export default useHomeContainer;
