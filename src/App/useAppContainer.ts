import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store';

import { changeTheme } from 'store/ui/ui.actions';

import { getPreferredTheme } from 'utils';

const useAppContainer = () => {
  const dispatch = useAppDispatch();

  const { theme } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();

    if (theme !== preferredTheme) {
      dispatch(changeTheme(preferredTheme));
    }
  }, []);

  return {
    theme,
  };
};

export default useAppContainer;
