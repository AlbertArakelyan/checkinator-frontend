import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container, Avatar, Button } from 'components';

import { IHeaderProps } from './types';

import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({ accessToken }) => {
  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header-content']}>
          <Link className={styles['header__logo']} to="/">
            <div className={styles['header__logo-image-wrapper']}>
              <img className={styles['header__logo-image']} src="/images/logo.png" width={32} alt="Checkinator" />
            </div>
            <h1 className={styles['header__title']}>Checkinator</h1>
          </Link>
          <nav className={styles['header__nav']}>
            {accessToken ? <Avatar /> : <Button variant="secondary">Sign in</Button>}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
