export interface IActiveSubscriptionData {
  name: string;
  id: string;
  price: number;
}

export interface IActivatedSubscriptionData {
  planId: string;
}

export interface IActiveSubscription {
  _id: string;
  userId: string;
  planId: string;
  expireDate: Date;
  created_at: Date;
  updated_at: Date;
}
