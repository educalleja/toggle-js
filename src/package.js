import treatments from './treatments';
import getConfig from './config';

let config;
export function init(token, getConfiguration = getConfig) {
  config = getConfiguration(token);
}

export async function isEnabled(featureName, userId) {
  if (!config) {
    throw new Error('Toggley - You must call the init function before with your API token');
  }
  if (!userId || !featureName) {
    throw new Error('Toggley - Insufficient parameters');
  }
  const treats = treatments({ ...config });
  return treats.isEnabledForUser(featureName, userId);
}
