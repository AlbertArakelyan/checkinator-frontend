import { Link } from 'components';

import styles from './LogginSuggestions.module.scss';

const LoginSuggesting = () => {
  return (
    <div className={styles['login-suggesting']}>
      <h3 className={styles['login-suggesting__title']}>Hey try to log in </h3>
      <Link className={styles['login-suggesting__button']} to="/auth" variant="primary">
        Log In
      </Link>
    </div>
  );
};

export default LoginSuggesting;
