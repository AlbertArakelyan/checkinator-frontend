import { loadStripe } from '@stripe/stripe-js';

let stripePromise: any;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string);
  }

  return stripePromise;
};
