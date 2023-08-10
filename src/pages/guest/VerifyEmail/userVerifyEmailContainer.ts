import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';

import { verifyEmail } from 'store/user/user.action';
import { selectIsVerificationPassed, selectLoading, selectError } from 'store/user/user.selectors';

const useVerifyEmailContainer = () => {
  const dispatch = useAppDispatch();

  const isVerificationPassed = useAppSelector(selectIsVerificationPassed);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const { token } = useParams();

  const showLogInLink = isVerificationPassed || error;

  useEffect(() => {
    if (token) {
      dispatch(verifyEmail({ token }));
    } else {
      // Some message
    }
  }, []);

  return {
    isVerificationPassed,
    loading,
    error,
    showLogInLink,
  };
};

export type UseVerifyEmailContainerType = ReturnType<typeof useVerifyEmailContainer>;

export default useVerifyEmailContainer;
