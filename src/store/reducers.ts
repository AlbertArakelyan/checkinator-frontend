import uiReducer from './ui/ui.reducer';
import userReducer from './user/user.reducer';
import planReducer from './plan/plan.reducer';

const reducers = {
  ui: uiReducer,
  user: userReducer,
  plan: planReducer,
};

export default reducers;
