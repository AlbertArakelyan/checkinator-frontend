import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../store';

import { signInSchema, signUpSchema } from 'utils';

import { signUp, signIn } from 'store/user/user.action';
import { selectVerificationData, selectLoading } from 'store/user/user.selectors';

import { IUserSignInData, IUserSignUpData } from 'types';

const useAuthContainer = () => {
  const dispatch = useAppDispatch();

  const verificationData = useAppSelector(selectVerificationData);
  const loading = useAppSelector(selectLoading);

  const [isSignUp, setIsSignUp] = useState(true);

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignInData | IUserSignUpData>({
    resolver: yupResolver(isSignUp ? signUpSchema : signInSchema),
  });

  const handleToggleIsSignUp = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleFormSubmit = (data: IUserSignInData | IUserSignUpData) => {
    if (isSignUp) {
      const sendData = data as IUserSignUpData;
      dispatch(signUp(sendData));
    } else {
      const sendData = data as IUserSignInData;
      dispatch(signIn(sendData));
    }
  };

  useEffect(() => {
    if (!isSignUp) {
      unregister('confirmPassword');
      unregister('firstName');
      unregister('lastName');
    }
  }, [isSignUp]);

  return {
    isSignUp,
    register,
    unregister,
    handleSubmit,
    errors,
    handleToggleIsSignUp,
    handleFormSubmit,
    verificationData,
    loading,
  };
};

export type UseAuthContainerType = Omit<ReturnType<typeof useAuthContainer>, 'unregister'>;

export default useAuthContainer;
