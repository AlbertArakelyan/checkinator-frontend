import BaseLayout from './BaseLayout';

import useBaseLayoutContainer from './useBaseLayoutContainer';

const BaseLayoutContainer = () => {
  const { accessToken } = useBaseLayoutContainer();

  return <BaseLayout accessToken={accessToken} />;
};

export default BaseLayoutContainer;
