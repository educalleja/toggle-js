import 'core-js';
import 'regenerator-runtime/runtime';
import store from './store';
import treatments from './treatments';
import provider from './featureProviders';

export const isEnabled = async (featureName, userId) => {
  const treats = treatments(provider(), store());
  return treats.isEnabledForUser(featureName, userId);
};

if (typeof window !== 'undefined') {
  window.Toggley = { isEnabled };
}
