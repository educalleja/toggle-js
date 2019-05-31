import { isEnabledForUser } from './treatments';

export const isEnabled = async (featureName, userId) => isEnabledForUser({ featureName, userId });
