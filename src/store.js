let store = {};

export const getTreatmentFromStore = ({ featureName }) => store[featureName] || false;

export const setStore = (newStore) => {
  store = newStore;
};
