import 'core-js';
import 'regenerator-runtime/runtime';
import store from './store';
import treatments from './treatments';
import provider from './featureProviders';

let APIKEY;

export function init(token) {
  APIKEY = token;
}

export const isEnabled = async (featureName, userId) => {
  if (!APIKEY) {
    throw new Error('Toggley - API KEY not set. Call init function first');
  }
  const treats = treatments(provider(), store());
  return treats.isEnabledForUser(featureName, userId);
};

if (typeof window !== 'undefined') {
  window.Toggley = { isEnabled };
}
