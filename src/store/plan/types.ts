import { IPlan } from 'types';

export interface IPlanState {
  list: IPlan[];
  loading: boolean;
  error: null | string;
}

// getPlans action
export type GetPlansReturnDataType = IPlan[];
