import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

import styles from './BaseLayout.module.scss';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
