export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface IUserSignInData {
  email: string;
  password: string;
}

export interface IUserSignUpData extends IUserSignInData {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface IUserForgotPasswordData {
  email: string;
}

export interface IUserResetPasswordData {
  newPassword: string;
  confirmPassword: string;
}
