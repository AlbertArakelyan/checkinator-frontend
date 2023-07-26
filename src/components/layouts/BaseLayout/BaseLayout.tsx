import { Outlet } from 'react-router-dom';

import { Header } from 'components';

import styles from './BaseLayout.module.scss';

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <main className={styles['main']}>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
