import { getTreatmentFromStore } from '../store';

it('should return true when a feature is set for the user', () => {
  const userId = 'user123';
  const featureName = 'featureABC';
  const featureProvider = {
    getTreatmentsFromService: () => ({
      featureABC: true,
    }),
  };

  const treatment = getTreatmentFromStore({ featureProvider, featureName, userId });

  expect(treatment).toBe(true);
});

it('should return false when a feature is set for the user to be false', () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  const featureProvider = {
    getTreatmentsFromService: () => ({
      featureXYZ: false,
    }),
  };

  const treatment = getTreatmentFromStore({ featureProvider, featureName, userId });

  expect(treatment).toBe(false);
});

it('should return false when a feature is not set', () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  const featureProvider = {
    getTreatmentsFromService: () => ({
      featureABC: true,
    }),
  };

  const treatment = getTreatmentFromStore({ featureProvider, featureName, userId });

  expect(treatment).toBe(false);
});
