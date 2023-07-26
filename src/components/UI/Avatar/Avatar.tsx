import { FC } from 'react';

import { Icon } from 'components';

import { IAvatarProps } from './types';

import styles from './Avatar.module.scss';

const Avatar: FC<IAvatarProps> = ({ src }) => {
  return (
    <div className={styles['avatar-container']}>
      {src ? <img className={styles['avatar']} src={src} alt="avatar" /> : <Icon name="user-astronaut" />}
    </div>
  );
};

export default Avatar;
