import { getTreatmentFromStore } from '../store';

it('should return true when a feature is set for the user', async () => {
  const userId = 'user123';
  const featureName = 'featureABC';
  const featureProvider = {
    getTreatmentsFromService: () => Promise.resolve({
      featureABC: true,
    }),
  };

  const treatment = await getTreatmentFromStore({ featureProvider, featureName, userId });

  expect(treatment).toBe(true);
});

it('should return false when a feature is set for the user to be false', async () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  const featureProvider = {
    getTreatmentsFromService: () => Promise.resolve({
      featureXYZ: false,
    }),
  };

  const treatment = await getTreatmentFromStore({ featureProvider, featureName, userId });

  expect(treatment).toBe(false);
});

it('should return false when a feature is not set', async () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  const featureProvider = {
    getTreatmentsFromService: () => Promise.resolve({
      featureABC: true,
    }),
  };

  const treatment = await getTreatmentFromStore({ featureProvider, featureName, userId });

  expect(treatment).toBe(false);
});
