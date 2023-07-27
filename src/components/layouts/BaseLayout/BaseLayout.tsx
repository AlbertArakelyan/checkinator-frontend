import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

import { IBaseLayoutProps } from './types';

import styles from './BaseLayout.module.scss';

const BaseLayout: FC<IBaseLayoutProps> = ({ accessToken }) => {
  return (
    <>
      <Header />
      <main className={styles['main']}>{accessToken ? <Outlet /> : <div>Maybe wanna login</div>}</main>
    </>
  );
};

export default BaseLayout;
