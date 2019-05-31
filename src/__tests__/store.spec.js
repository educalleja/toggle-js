import { getTreatmentFromStore } from '../store';

const getFeatureProvider = features => ({
  getTreatmentsFromService: () => Promise.resolve({
    ...features,
  }),
});

test.each([[true], [false]])(
  'should return %s when a feature is set to the same value.',
  async (treatementStatus) => {
    const userId = 'user123';
    const featureName = 'featureABC';
    const featureProvider = getFeatureProvider({ featureABC: treatementStatus });

    const treatment = await getTreatmentFromStore({ featureProvider, featureName, userId });

    expect(treatment).toBe(treatementStatus);
  },
);

it('should return false when a feature is not set', async () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  const featureProvider = getFeatureProvider({ featureABC: false });

  const treatment = await getTreatmentFromStore({ featureProvider, featureName, userId });

  expect(treatment).toBe(false);
});
