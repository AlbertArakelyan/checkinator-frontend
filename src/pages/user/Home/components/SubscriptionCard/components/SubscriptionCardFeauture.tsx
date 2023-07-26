import { FC } from 'react';

import { Icon } from 'components';

import { ISubscriptionCardFeatureProps } from './types';

import styles from './SubscriptionCardFeauture.module.scss';

const SubscriptionCardFeature: FC<ISubscriptionCardFeatureProps> = ({ value }) => {
  return (
    <li className={styles['subscription-card-feature']}>
      <Icon color="#059669" name="check-mark" />
      <span className={styles['subscription-card-feature__value']}>{value}</span>
    </li>
  );
};

export default SubscriptionCardFeature;
