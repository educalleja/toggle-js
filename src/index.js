import { isEnabledForUser } from './treatments';

export const isEnabled = (featureName, userId) => isEnabledForUser({ featureName, userId });
