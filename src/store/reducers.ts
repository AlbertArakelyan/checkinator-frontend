import uiReducer from './ui/ui.reducer';
import userReducer from './user/user.reducer';
import planReducer from './plan/plan.reducer';
import activeSubscriptionReducer from './activeSubscription/activeSubscription.reducer';

const reducers = {
  ui: uiReducer,
  user: userReducer,
  plan: planReducer,
  activeSubscription: activeSubscriptionReducer,
};

export default reducers;
