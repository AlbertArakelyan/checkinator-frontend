import { useSelector } from 'react-redux';

import { selectAccessToken } from '../../../store/user/user.selectors';

import { IUseBaseLayoutContainerReturnData } from './types';

const useBaseLayoutContainer = (): IUseBaseLayoutContainerReturnData => {
  const accessToken = useSelector(selectAccessToken);

  return {
    accessToken,
  };
};

export default useBaseLayoutContainer;
