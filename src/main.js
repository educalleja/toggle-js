import 'core-js';
import 'regenerator-runtime/runtime';
import store from './store';
import treatments from './treatments';
import { toggleyApi } from './featureProviders';

export const isEnabled = async (featureName, userId) => {
  const treats = treatments(toggleyApi, store());
  return treats.isEnabledForUser({ featureName, userId });
};

if (typeof window !== 'undefined') {
  window.Toggley = { isEnabled };
}
