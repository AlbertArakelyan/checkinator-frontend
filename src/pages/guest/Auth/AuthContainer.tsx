import Auth from './Auth';

import useAuthContainer from './useAuthContainer';

const AuthContainer = () => {
  const {
    isSignUp,
    handleFormSubmit,
    handleToggleIsSignUp,
    register,
    unregister,
    handleSubmit,
    errors,
    verificationData,
    loading,
  } = useAuthContainer();

  return (
    <Auth
      isSignUp={isSignUp}
      handleFormSubmit={handleFormSubmit}
      handleToggleIsSignUp={handleToggleIsSignUp}
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      verificationData={verificationData}
      loading={loading}
    />
  );
};

export default AuthContainer;
