import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

import { Button, Input, Link } from 'components';

import { IAuthProps } from './types';
import { IUserSignUpData } from 'types';

import styles from './Auth.module.scss';

const Auth: FC<IAuthProps> = ({
  isSignUp,
  handleToggleIsSignUp,
  handleFormSubmit,
  errors,
  register,
  handleSubmit,
  verificationData,
  loading,
}) => {
  return (
    <form className={styles['auth-form']} onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className={styles['auth-form__title']}>{isSignUp ? 'Create account' : 'Log In'}</h2>
      <div className={styles['auth-form__inputs']}>
        {isSignUp && (
          <div className={styles['auth-form__form-group']}>
            <label className={styles['auth-form__label']}>First Name</label>
            <Input {...register('firstName')} error={(errors as FieldErrors<IUserSignUpData>).firstName?.message} />
          </div>
        )}
        {isSignUp && (
          <div className={styles['auth-form__form-group']}>
            <label className={styles['auth-form__label']}>Last Name</label>
            <Input {...register('lastName')} error={(errors as FieldErrors<IUserSignUpData>).lastName?.message} />
          </div>
        )}
        <div className={styles['auth-form__form-group']}>
          <label className={styles['auth-form__label']}>Email</label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
        </div>
        <div className={styles['auth-form__form-group']}>
          <label className={styles['auth-form__label']}>Password</label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
        </div>
        {isSignUp && (
          <div className={styles['auth-form__form-group']}>
            <label className={styles['auth-form__label']}>Confirm Password</label>
            <Input
              type="password"
              {...register('confirmPassword')}
              error={(errors as FieldErrors<IUserSignUpData>).confirmPassword?.message}
            />
          </div>
        )}
      </div>
      {verificationData && (
        <p className={styles['auth-form__verification-data']}>
          Verification email is sent to your email <span className="link">{verificationData.email}</span>
        </p>
      )}
      <div className={styles['auth-form__controls']}>
        <div className={styles['auth-form__controls-main']}>
          <Button disabled={loading} className={styles['auth-form__controls-btn']} variant="primary">
            Sign {isSignUp ? 'Up' : 'In'}
          </Button>
          <Button className={styles['auth-form__controls-change-mode']} type="button" onClick={handleToggleIsSignUp}>
            {isSignUp ? 'Log in' : 'Create account'}
          </Button>
        </div>
        <Link className={styles['auth-form__controls-forgot']} to="/forgot">
          Forgot passoword?
        </Link>
      </div>
    </form>
  );
};

export default Auth;
