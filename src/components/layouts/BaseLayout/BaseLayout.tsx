import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { LogginSuggesting } from './components/LoginSuggesting';

import { IBaseLayoutProps } from './types';

import styles from './BaseLayout.module.scss';

const BaseLayout: FC<IBaseLayoutProps> = ({ accessToken }) => {
  return (
    <>
      <Header accessToken={accessToken} />
      <main className={styles['main']}>{accessToken ? <Outlet /> : <LogginSuggesting />}</main>
    </>
  );
};

export default BaseLayout;
