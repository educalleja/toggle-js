

export default function ({ httpService, store }) {
  async function isEnabledForUser(featureName, userId) {
    if (!store.isLoaded()) {
      const newFeatures = await httpService.getTreatmentsFromService(userId);
      store.setStore(newFeatures);
    }

    return store.getTreatmentFromStore(featureName);
  }

  return {
    isEnabledForUser,
  };
}
