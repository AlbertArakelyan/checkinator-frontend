import { createAction } from '@reduxjs/toolkit';

import { CHANGE_THEME } from './ui.actionTypes';

import { ThemeType } from 'types';

export const changeTheme = createAction<ThemeType>(CHANGE_THEME);
