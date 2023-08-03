import { FC } from 'react';
import { Button, Input, Link } from 'components';

import { IResetPasswordProps } from './types';

import styles from './ResetPassword.module.scss';

const ResetPassword: FC<IResetPasswordProps> = () => {
  return (
    <form className={styles['reset-form']}>
      <h2 className={styles['reset-form__title']}>Reset Password</h2>
      <div className={styles['reset-form__inputs']}>
        <div className={styles['reset-form__form-group']}>
          <label className={styles['reset-form__label']}>New Password</label>
          <Input />
        </div>
        <div className={styles['reset-form__form-group']}>
          <label className={styles['reset-form__label']}>Repeat Password</label>
          <Input />
        </div>
      </div>
      <div className={styles['reset-form__controls']}>
        <div className={styles['reset-form__controls-main']}>
          <Button className={styles['reset-form__controls-btn']} variant="primary">
            Reset
          </Button>
        </div>
        <Link className={styles['reset-form__controls-forgot']} to="/auth">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default ResetPassword;
