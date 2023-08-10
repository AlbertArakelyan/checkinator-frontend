import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

import { signUp, verifyEmail, signIn } from './user.action';

import { IUserState } from './types';

const initialState: IUserState = {
  userData: null,
  accessToken: store.get('accessToken'),
  verificationData: null,
  isVerificationPassed: false,
  error: null,
  loading: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUp.fulfilled, (state, action) => {
      state.verificationData = action.payload;
      state.error = null;
      state.loading = false;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message as string;
    })
    .addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    })

    .addCase(verifyEmail.fulfilled, (state, action) => {
      state.isVerificationPassed = action.payload.isEmailVerified;
      state.error = null;
      state.loading = false;
    })
    .addCase(verifyEmail.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    .addCase(verifyEmail.rejected, (state, action) => {
      state.error = action.error?.message as string;
      state.loading = false;
    })

    .addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userData = action.payload.userData;
      state.error = null;
      state.loading = false;
    })
    .addCase(signIn.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.error = action.error?.message as string;
      state.loading = false;
    })
    .addDefaultCase((state) => state);
});

export default userReducer;
