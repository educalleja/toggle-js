export const isEnabledForUser = async ({
  store, httpService, featureName, userId,
}) => {
  if (!store.isLoaded()) {
    const newFeatures = await httpService.getTreatmentsFromService({ userId });
    store.setStore(newFeatures);
  }

  return store.getTreatmentFromStore({ featureName });
};
