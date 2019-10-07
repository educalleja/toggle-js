import treatments from './treatments';
import getConfig from './config';

let configuration;
let treats;

export function init(token, getConfiguration = getConfig) {
  configuration = getConfiguration(token);
  treats = treatments({ ...configuration });
}

export async function isEnabled(featureName, userId) {
  if (!configuration || !treats) {
    throw new Error('Toggley - You must call the init function before with your API token');
  }
  if (!userId || !featureName) {
    throw new Error('Toggley - Insufficient parameters');
  }
  return treats.isEnabledForUser(featureName, userId);
}
