import { FC } from 'react';

import { Container, Avatar, Button } from 'components';

import { IHeaderProps } from './types';

import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({ accessToken }) => {
  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header-content']}>
          {/*TODO: explore why Link is not working*/}
          <div className={styles['header__logo']}>
            <div className={styles['header__logo-image-wrapper']}>
              <img className={styles['header__logo-image']} src="/images/logo.png" width={32} alt="Checkinator" />
            </div>
            <h1 className={styles['header__title']}>Checkinator</h1>
          </div>
          <nav className={styles['header__nav']}>
            {accessToken ? <Avatar /> : <Button variant="secondary">Sign in</Button>}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
