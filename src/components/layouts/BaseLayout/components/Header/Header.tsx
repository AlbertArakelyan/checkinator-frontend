import { Container, Avatar } from 'components';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header-content']}>
          <h1 className={styles['heaer__title']}>Checkinator</h1>
          <nav className={styles['header__nav']}>
            <Avatar />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
