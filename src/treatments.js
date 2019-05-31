import { getTreatmentFromStore, setStore } from './store';
import { toggleyApi } from './featureProviders';

export const isEnabledForUser = async ({ featureName, userId }) => {
  setStore(await toggleyApi.getTreatmentsFromService({ userId }));
  return getTreatmentFromStore({
    featureProvider: toggleyApi,
    featureName,
    userId,
  });
};
