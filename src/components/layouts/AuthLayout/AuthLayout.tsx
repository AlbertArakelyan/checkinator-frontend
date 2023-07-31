import { Outlet } from 'react-router-dom';

import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles['auth-layout']}>
      <div className={styles['auth-layout__container']}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
