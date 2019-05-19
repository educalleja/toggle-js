import { toggleyApi } from './featureProviders';

let store = {};
let isStoreLoaded = false;

const transformPayloadToStore = payload => payload;

const loadStore = (featureProvider, { userId }) => {
  const payload = featureProvider.getTreatmentsFromService({ userId });
  store = transformPayloadToStore(payload);
  isStoreLoaded = true;
};

export const getTreatmentFromStore = ({ featureName, userId }) => {
  if (!isStoreLoaded) {
    loadStore(toggleyApi, { userId });
  }
  return store[featureName] || false;
};
