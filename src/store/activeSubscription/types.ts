import { IActiveSubscriptionData, IActivatedSubscriptionData, IActiveSubscription } from 'types';

export interface IActiveSubscriptionState {
  activeSubscription: IActiveSubscription | null;
  error: string | null;
  loading: boolean;
}

// createCheckoutSession action
export type ICreateCheckoutSessionPayloadData = IActiveSubscriptionData;

// createActiveSubscription action
export type ICreateActiveSubscriptionPayloadData = IActivatedSubscriptionData;

// getCurrentActiveSubscription action
export type IGetCurrentActiveSubscriptionReturnData = IActiveSubscription;
