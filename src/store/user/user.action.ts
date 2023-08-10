import { createAsyncThunk } from '@reduxjs/toolkit';
import store from 'store';

import UserService from 'services/UserService';

import { SIGN_UP, VERIFY_EMAIL, SIGN_IN } from './user.actionTypes';

import { globalMessages } from '../../constants';

import {
  ISignUpPayloadData,
  ISignUpReturnData,
  IVerifyEmailPayloadData,
  IVerifyEmailReturnData,
  ISignInPayloadData,
  ISignInReturnData,
} from './types';

export const signUp = createAsyncThunk<ISignUpReturnData, ISignUpPayloadData>(SIGN_UP, async (data) => {
  try {
    const response = await UserService.signUp<ISignUpReturnData, ISignUpPayloadData>(data);

    if (!response.data?.success) {
      throw new Error(response.data.message || globalMessages.smthWentWrong);
    }

    return response.data.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
});

export const verifyEmail = createAsyncThunk<IVerifyEmailReturnData, IVerifyEmailPayloadData>(
  VERIFY_EMAIL,
  async (data) => {
    try {
      const response = await UserService.verifyEmail<IVerifyEmailReturnData, string>(data.token);

      if (!response.data?.success) {
        throw new Error(response.data.message || globalMessages.smthWentWrong);
      }

      return response.data.data;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }
);

export const signIn = createAsyncThunk<ISignInReturnData, ISignInPayloadData>(SIGN_IN, async (data) => {
  try {
    const response = await UserService.signIn<ISignInReturnData, ISignInPayloadData>(data);

    if (!response.data?.success) {
      throw new Error(response.data.message || globalMessages.smthWentWrong);
    }

    store.set('accessToken', response.data.data.accessToken);

    return response.data.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
});
