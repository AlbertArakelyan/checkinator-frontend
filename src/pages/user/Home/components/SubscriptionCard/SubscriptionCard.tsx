import { FC } from 'react';

import { Button } from 'components';
import { SubscriptionCardFeature } from './components';

import { ISubscriptionCardProps } from './types';

import styles from './SubscriptionCard.module.scss';

const SubscriptionCard: FC<ISubscriptionCardProps> = ({ variant, className = '', ...props }) => {
  return (
    <div
      className={`${styles['subscription-card']} ${styles[`subscription-card--${variant}`]} ${className}`}
      {...props}
    >
      <div className={styles['subscription-card__info']}>
        <h3 className={`${styles['subscription-card__title']} ${styles[`subscription-card__title--${variant}`]}`}>
          Basic Plan
        </h3>
        <div className={styles['subscription-card__details']}>
          <div className={styles['subscription-card__amount']}>
            <span className={styles['subscription-card__value']}>10$</span>
            <span className={styles['subscription-card__currency']}>/ month</span>
          </div>
          <span className={styles['subscription-card__frequency']}>Billed monthly</span>
          <Button className={styles['subscription-card__button']} variant={variant}>
            Acitvate
          </Button>
        </div>
      </div>
      <ul className={styles['subscription-card__features']}>
        <SubscriptionCardFeature value="Happiness" />
        <SubscriptionCardFeature value="Happiness" />
        <SubscriptionCardFeature value="Happiness" />
        <SubscriptionCardFeature value="Happiness" />
        <SubscriptionCardFeature value="Happiness" />
        <SubscriptionCardFeature value="Happiness" />
      </ul>
    </div>
  );
};

export default SubscriptionCard;
