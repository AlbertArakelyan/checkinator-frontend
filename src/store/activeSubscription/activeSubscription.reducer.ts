import { createReducer } from '@reduxjs/toolkit';

import { getCurrentActiveSubscription } from './activeSubscription.action';

import { IActiveSubscriptionState } from './types';

const initialState: IActiveSubscriptionState = {
  activeSubscription: null,
  error: null,
  loading: false,
};

const activeSubscriptionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCurrentActiveSubscription.fulfilled, (state, action) => {
      state.activeSubscription = action.payload;
      state.error = null;
      state.loading = false;
    })
    .addCase(getCurrentActiveSubscription.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    .addCase(getCurrentActiveSubscription.rejected, (state, action) => {
      state.error = action.error?.message as string;
      state.loading = false;
    })

    .addDefaultCase((state) => state);
});

export default activeSubscriptionReducer;
