import Service from './Service';

import { request } from 'utils';

import { IResponseData } from './types';

class UserService extends Service {
  static signUp<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'user/sign-up', data);
  }

  static verifyEmail<T, D>(token: D) {
    return request<IResponseData<T>>('POST', `user/verify-email/${token}`);
  }

  static signIn<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'user/sign-in', data);
  }
}

export default UserService;
