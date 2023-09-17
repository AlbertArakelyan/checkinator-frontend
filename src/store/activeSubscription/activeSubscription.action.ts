import { createAsyncThunk } from '@reduxjs/toolkit';

import ActiveSubscriptionService from 'services/ActiveSubscriptionService';

import { getStripe } from 'lib/stripe';

import { CREATE_CHECKOUT_SESSION, CREATE_ACTIVE_SUBSCRIPTION } from './activeSubscription.actionTypes';

import { globalMessages } from '../../constants';

import { ICreateCheckoutSessionPayloadData, ICreateActiveSubscriptionPayloadData } from './types';

export const createCheckoutSession = createAsyncThunk<any, ICreateCheckoutSessionPayloadData>(
  CREATE_CHECKOUT_SESSION,
  async (data) => {
    try {
      const response = await ActiveSubscriptionService.createCheckoutSession<any, ICreateCheckoutSessionPayloadData>(
        data
      );

      if (!response.data?.success) {
        throw new Error(response.data.message || globalMessages.smthWentWrong);
      }

      const stripe = await getStripe();
      await stripe.redirectToCheckout({
        sessionId: response.data.data.id,
      });

      return response.data.data;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }
);

export const createActiveSubscription = createAsyncThunk<any, ICreateActiveSubscriptionPayloadData>(
  CREATE_ACTIVE_SUBSCRIPTION,
  async (data) => {
    try {
      const response = await ActiveSubscriptionService.createActiveSubscription<
        any,
        ICreateActiveSubscriptionPayloadData
      >(data);

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
