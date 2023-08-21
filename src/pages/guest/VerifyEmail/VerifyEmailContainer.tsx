import VerifyEmail from './VerifyEmail';

import useVerifyEmailContainer from './userVerifyEmailContainer';

const VerifyEmailContainer = () => {
  const { isVerificationPassed, loading, error, showLogInLink } = useVerifyEmailContainer();

  return (
    <VerifyEmail
      isVerificationPassed={isVerificationPassed}
      loading={loading}
      error={error}
      showLogInLink={showLogInLink}
    />
  );
};

export default VerifyEmailContainer;
