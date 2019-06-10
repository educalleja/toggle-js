import store from './store';
import { isEnabledForUser } from './treatments';
import { toggleyApi } from './featureProviders';

const featuresStore = store();

export const isEnabled = async (featureName, userId) => isEnabledForUser({
  store: featuresStore,
  httpService: toggleyApi,
  featureName,
  userId,
});
