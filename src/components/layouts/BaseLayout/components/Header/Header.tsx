import { FC } from 'react';

import { Container, Avatar, Button } from 'components';

import { IHeaderProps } from './types';

import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({ accessToken }) => {
  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header-content']}>
          <h1 className={styles['heaer__title']}>Checkinator</h1>
          <nav className={styles['header__nav']}>
            {accessToken ? <Avatar /> : <Button variant="secondary">Sign in</Button>}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
