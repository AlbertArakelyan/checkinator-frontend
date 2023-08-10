import { IUserSignInData, IUserSignUpData, AccessTokenType, IUser } from 'types';

interface IVerificationData {
  email: string;
}

export interface IUserState {
  userData: IUser | null;
  accessToken: AccessTokenType;
  verificationData: IVerificationData | null;
  isVerificationPassed: boolean;
  error: null | string;
  loading: boolean;
}

// signUp action
export type ISignUpPayloadData = IUserSignUpData;

export interface ISignUpReturnData {
  email: string;
}

// verifyEmail action
export interface IVerifyEmailPayloadData {
  token: string;
}

export interface IVerifyEmailReturnData {
  token: string;
  isEmailVerified: boolean;
}

// signIn action
export type ISignInPayloadData = IUserSignInData;

export interface ISignInReturnData {
  accessToken: string;
  userData: IUser;
}
