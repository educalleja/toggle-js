import { getTreatmentFromStore } from './store';
import { toggleyApi } from './featureProviders';

export const isEnabledForUser = async ({ featureName, userId }) => getTreatmentFromStore({
  featureProvider: toggleyApi,
  featureName,
  userId,
});
