import { FC } from 'react';

import Header from './Header';

import { IHeaderContainerProps } from './types';

const HeaderContainer: FC<IHeaderContainerProps> = ({ accessToken }) => {
  return <Header accessToken={accessToken} />;
};

export default HeaderContainer;
