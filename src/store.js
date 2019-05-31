let store = {};

const transformPayloadToStore = payload => payload;

const loadStore = async ({ featureProvider, userId }) => {
  const payload = await featureProvider.getTreatmentsFromService({ userId });
  store = transformPayloadToStore(payload);
};

export const getTreatmentFromStore = async ({ featureProvider, featureName, userId }) => {
  await loadStore({ featureProvider, userId });
  return store[featureName] || false;
};
