export default function () {
  let store = {};
  let isLoaded = false;

  function setStore(newStore) {
    store = newStore;
    isLoaded = true;
  }

  return {
    setStore,
    getTreatmentFromStore: featureName => store[featureName] || false,
    isLoaded: () => isLoaded,
  };
}
