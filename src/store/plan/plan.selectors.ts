import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/cofigureStore';

const planState = (state: RootState) => state.plan;

export const selectPlansList = createSelector(planState, ({ list }) => list);
