import { Button } from 'components/UI';

import styles from './LogginSuggestions.module.scss';

const LoginSuggesting = () => {
  return (
    <div className={styles['login-suggesting']}>
      <h3 className={styles['login-suggesting__title']}>Hey try to log in </h3>
      <Button className={styles['login-suggesting__button']}>Log In</Button>
    </div>
  );
};

export default LoginSuggesting;
