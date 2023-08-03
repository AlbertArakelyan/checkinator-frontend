import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { forgotPasswordSchema } from 'utils';

import { IUserForgotPasswordData } from 'types';

const useForgotPasswordContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForgotPasswordData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};

export type UseForgotPasswordContainerType = ReturnType<typeof useForgotPasswordContainer>;

export default useForgotPasswordContainer;
