import { ThemeType } from 'types';

const getPreferredTheme = (): ThemeType => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return isDark ? 'dark' : 'light';
};

export default getPreferredTheme;
