import { isEnabledForUser } from './treatments';

const isEnabled = (featureName, userId) => isEnabledForUser({ featureName, userId });

export default {
  isEnabled,
};
