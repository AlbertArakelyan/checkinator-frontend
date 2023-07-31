import ForgotPassword from './ForgotPassword';

import useForgotPasswordContainer from './useForgotPassordContainer';

const ForgotPasswordContainer = () => {
  const { register, handleSubmit, errors } = useForgotPasswordContainer();

  return <ForgotPassword register={register} handleSubmit={handleSubmit} errors={errors} />;
};

export default ForgotPasswordContainer;
