import BaseLayout from './BaseLayout';

import useBaseLayoutConainer from './useBaseLayoutContainer';

const BaseLayoutContainer = () => {
  const { accessToken } = useBaseLayoutConainer();

  return <BaseLayout accessToken={accessToken} />;
};

export default BaseLayoutContainer;
