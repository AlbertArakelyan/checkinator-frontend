import Service from './Service';

import { request } from 'utils';

import { IResponseData } from './types';

class ActiveSubscriptionService extends Service {
  static createCheckoutSession<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'active-subscription/create-checkout-session', data);
  }

  static createActiveSubscription<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'active-subscription', data);
  }

  static getCurrentActiveSubscription<T>() {
    return request<IResponseData<T>>('GET', 'active-subscription');
  }
}

export default ActiveSubscriptionService;
