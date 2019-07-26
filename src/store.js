export default () => {
  let store = {};
  let isLoaded = false;

  const getTreatmentFromStore = featureName => store[featureName] || false;

  const setStore = (newStore) => {
    store = newStore;
    isLoaded = true;
  };

  return {
    getTreatmentFromStore,
    setStore,
    isLoaded: () => isLoaded,
  };
};
