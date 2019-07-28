import 'core-js';
import 'regenerator-runtime/runtime';
import store from './store';
import treatments from './treatments';
import provider from './featureProviders';

// import { init, isEnabled } from 'Toggley'
// init('ZZ');
// isEnabled('a', 'b');


// cdn
// script src="blabla.com/bundle.js?token=XXXXXX"
// window.Toogley.isEnabled('a', 'b');
let APIKEY;

export function init(token) {
  APIKEY = token;
}

export async function isEnabled(featureName, userId) {
  if (!APIKEY) {
    throw new Error('Toggley - API KEY not set. Call init function first');
  }
  const treats = treatments(provider(), store());
  return treats.isEnabledForUser(featureName, userId);
}

if (typeof window !== 'undefined') {
  window.Toggley = { isEnabled };
}
