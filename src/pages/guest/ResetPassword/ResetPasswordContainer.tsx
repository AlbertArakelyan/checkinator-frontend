import ResetPassword from './ResetPassword';

import useResetPasswordContainer from './useResetPasswordContainer';

const ResetPasswordContainer = () => {
  const { register, handleSubmit, errors } = useResetPasswordContainer();

  return <ResetPassword register={register} handleSubmit={handleSubmit} errors={errors} />;
};

export default ResetPasswordContainer;
