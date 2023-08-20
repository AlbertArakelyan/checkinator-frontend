import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/cofigureStore';

const userState = (state: RootState) => state.user;

export const selectVerificationData = createSelector(userState, ({ verificationData }) => verificationData);
export const selectLoading = createSelector(userState, ({ loading }) => loading);
export const selectIsVerificationPassed = createSelector(userState, ({ isVerificationPassed }) => isVerificationPassed);
export const selectError = createSelector(userState, ({ error }) => error);
export const selectAccessToken = createSelector(userState, ({ accessToken }) => accessToken);
