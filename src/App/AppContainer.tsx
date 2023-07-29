import useAppContainer from './useAppContainer';

import App from './App';

const AppContainer = () => {
  const { theme } = useAppContainer();

  return <App theme={theme} />;
};

export default AppContainer;
