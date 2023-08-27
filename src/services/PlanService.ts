import Service from './Service';

import { request } from 'utils';

import { IResponseData } from './types';

class PlanService extends Service {
  static getPlans<T>() {
    return request<IResponseData<T>>('GET', 'plan');
  }
}

export default PlanService;
