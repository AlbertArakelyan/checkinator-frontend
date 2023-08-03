import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { resetPasswordSchema } from 'utils';

import { IUserResetPasswordData } from 'types';

const useResetPasswordContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserResetPasswordData>({
    // eslint-disable-next-line
    // @ts-ignore
    resolver: yupResolver(resetPasswordSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};

export type UseResetPasswordContainerType = ReturnType<typeof useResetPasswordContainer>;

export default useResetPasswordContainer;
