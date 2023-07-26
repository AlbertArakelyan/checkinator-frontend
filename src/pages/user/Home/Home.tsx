import { Container } from 'components';
import { SubscriptionCard } from './components/SubscriptionCard';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['home']}>
      <Container>
        <div className={styles['home-content']}>
          <h2 className={styles['home__title']}>Choose your subscription</h2>
          <div className={styles['home__subscription-cards']}>
            <SubscriptionCard variant="primary" className={styles['home__subscription-card']} />
            <SubscriptionCard variant="secondary" className={styles['home__subscription-card']} />
            <SubscriptionCard variant="primary" className={styles['home__subscription-card']} />
            <SubscriptionCard variant="secondary" className={styles['home__subscription-card']} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
