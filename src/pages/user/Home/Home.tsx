import { FC } from 'react';
import { Container } from 'components';
import { SubscriptionCard } from './components/SubscriptionCard';

import { IHomeProps } from './types';

import styles from './Home.module.scss';

const Home: FC<IHomeProps> = ({ plansListContent }) => {
  return (
    <div className={styles['home']}>
      <Container>
        <div className={styles['home-content']}>
          <h2 className={styles['home__title']}>Choose your subscription</h2>
          <div className={styles['home__subscription-cards']}>{plansListContent}</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
