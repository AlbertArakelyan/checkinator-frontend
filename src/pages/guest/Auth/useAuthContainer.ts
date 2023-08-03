import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signInSchema, signUpSchema } from 'utils';

import { IUserSignInData, IUserSignUpData } from 'types';

const useAuthContainer = () => {
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
      console.log(sendData);
    } else {
      const sendData = data as IUserSignInData;
      console.log(sendData);
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
  };
};

export type UseAuthContainerType = ReturnType<typeof useAuthContainer>;

export default useAuthContainer;
