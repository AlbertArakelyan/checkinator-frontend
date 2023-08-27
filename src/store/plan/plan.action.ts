import { createAsyncThunk } from '@reduxjs/toolkit';

import PlanService from 'services/PlanService';

import { GET_PLANS } from './plan.actionTypes';

import { GetPlansReturnDataType } from './types';

import { globalMessages } from 'constants/messages';

export const getPlans = createAsyncThunk<GetPlansReturnDataType>(GET_PLANS, async () => {
  try {
    const response = await PlanService.getPlans<GetPlansReturnDataType>();

    if (!response.data?.success) {
      throw new Error(response.data.message || globalMessages.smthWentWrong);
    }

    return response.data.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
});
