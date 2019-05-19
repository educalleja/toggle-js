import { getTreatmentFromStore } from './store';

export const isEnabledForUser = ({ featureName, userId }) => getTreatmentFromStore({
  featureName,
  userId,
});
