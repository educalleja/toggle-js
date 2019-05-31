let store = {};

const transformPayloadToStore = payload => payload || {};

const loadStore = ({ featureProvider, userId }) => {
  const payload = featureProvider.getTreatmentsFromService({ userId });
  store = transformPayloadToStore(payload);
};

export const getTreatmentFromStore = ({ featureProvider, featureName, userId }) => {
  loadStore({ featureProvider, userId });
  return store[featureName] || false;
};
