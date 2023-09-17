import { Container, Link } from 'components';

import styles from './Success.module.scss';

const Success = () => {
  return (
    <div className={styles['success']}>
      <Container>
        <div className={styles['success-content']}>
          <h2 className={styles['success__title']}>Payment Successful</h2>
          <div className={styles['success__image-container']}>
            <img className={styles['success__image']} src="/images/payment-successful-illustration.jpg" alt="success" />
          </div>
          <Link to="/" variant="primary">
            Go to home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Success;
