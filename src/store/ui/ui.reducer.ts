import { createReducer } from '@reduxjs/toolkit';

import { changeTheme } from './ui.actions';

import { IUIState } from './types';

const initialState: IUIState = {
  theme: 'light',
};

const uiReducer = createReducer(initialState, (buider) => {
  buider
    .addCase(changeTheme, (state, action) => {
      state.theme = action.payload;
    })
    .addDefaultCase((state) => state);
});

export default uiReducer;
