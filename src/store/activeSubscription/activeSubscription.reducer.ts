import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

const activeSubscriptionReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state) => state);
});

export default activeSubscriptionReducer;
