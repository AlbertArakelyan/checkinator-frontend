import { createReducer } from '@reduxjs/toolkit';

import { getPlans } from './plan.action';

import { IPlanState } from './types';

const initialState: IPlanState = {
  list: [],
  loading: false,
  error: null,
};

const planReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPlans.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(getPlans.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getPlans.rejected, (state, action) => {
      state.error = action.error?.message as string;
      state.loading = false;
    })

    .addDefaultCase((state) => state);
});

export default planReducer;
