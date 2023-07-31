import { FC } from 'react';

import { Button, Input } from 'components';

import { IAuthProps } from './types';

import styles from './Auth.module.scss';

const Auth: FC<IAuthProps> = ({
  isSignUp,
  handleToggleIsSignUp,
  handleFormSubmit,
  errors,
  register,
  unregister,
  handleSubmit,
}) => {
  return (
    <form className={styles['auth-form']}>
      <h2 className={styles['auth-form__title']}>{isSignUp ? 'Create account' : 'Log In'}</h2>
      <div className={styles['auth-form__inputs']}>
        {isSignUp && (
          <div className={styles['auth-form__form-group']}>
            <label className={styles['auth-form__label']}>First Name</label>
            <Input />
          </div>
        )}
        {isSignUp && (
          <div className={styles['auth-form__form-group']}>
            <label className={styles['auth-form__label']}>Last Name</label>
            <Input />
          </div>
        )}
        <div className={styles['auth-form__form-group']}>
          <label className={styles['auth-form__label']}>Email</label>
          <Input />
        </div>
        <div className={styles['auth-form__form-group']}>
          <label className={styles['auth-form__label']}>Password</label>
          <Input />
        </div>
        {isSignUp && (
          <div className={styles['auth-form__form-group']}>
            <label className={styles['auth-form__label']}>Confirm Password</label>
            <Input />
          </div>
        )}
      </div>
      <div className={styles['auth-form__controls']}>
        <div className={styles['auth-form__controls-main']}>
          <Button className={styles['auth-form__controls-btn']} variant="primary">
            Sign {isSignUp ? 'Up' : 'In'}
          </Button>
          <Button className={styles['auth-form__controls-change-mode']} type="button" onClick={handleToggleIsSignUp}>
            {isSignUp ? 'Create account' : 'Log in'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Auth;
