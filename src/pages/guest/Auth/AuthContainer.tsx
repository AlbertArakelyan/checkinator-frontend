import Auth from './Auth';

import useAuthContainer from './useAuthContainer';

const AuthContainer = () => {
  const { isSignUp, handleFormSubmit, handleToggleIsSignUp, register, unregister, handleSubmit, errors } =
    useAuthContainer();

  return (
    <Auth
      isSignUp={isSignUp}
      handleFormSubmit={handleFormSubmit}
      handleToggleIsSignUp={handleToggleIsSignUp}
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      unregister={unregister}
    />
  );
};

export default AuthContainer;
