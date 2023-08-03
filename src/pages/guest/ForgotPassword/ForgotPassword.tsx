import { FC } from 'react';

import { Button, Input, Link } from 'components';

import { IForgotPasswordProps } from './types';

import styles from './ForgotPassword.module.scss';

const ForgotPassword: FC<IForgotPasswordProps> = () => {
  return (
    <form className={styles['forgot-form']}>
      <h2 className={styles['forgot-form__title']}>Forgot Password</h2>
      <div className={styles['forgot-form__inputs']}>
        <div className={styles['forgot-form__form-group']}>
          <label className={styles['forgot-form__label']}>Email</label>
          <Input />
        </div>
      </div>
      <div className={styles['forgot-form__controls']}>
        <div className={styles['forgot-form__controls-main']}>
          <Button className={styles['forgot-form__controls-btn']} variant="primary">
            Send Email
          </Button>
        </div>
        <Link className={styles['forgot-form__controls-forgot']} to="/forgot">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default ForgotPassword;
