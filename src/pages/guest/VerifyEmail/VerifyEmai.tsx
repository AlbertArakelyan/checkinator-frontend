import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Loader } from 'components';

import { IVerifyEmailProps } from './types';

import styles from './VerifyEmail.module.scss';

const VerifyEmail: FC<IVerifyEmailProps> = ({ isVerificationPassed, loading, showLogInLink }) => {
  return (
    <div className={styles['verify-email']}>
      <h2 className={styles['verify-email__title']}>Verify Email</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles['verify-email__details']}>
          {isVerificationPassed && <p className={styles['verify-email__info']}>Email verified successfully.</p>}
          {showLogInLink && (
            <Link className={styles['verify-email__link']} to="/auth">
              Log in
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
