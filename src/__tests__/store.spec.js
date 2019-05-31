import { getTreatmentFromStore, setStore } from '../store';

test.each([[true], [false]])(
  'should return %s when a feature is set to the same value.',
  (treatementStatus) => {
    const userId = 'user123';
    const featureName = 'featureABC';
    setStore({ featureABC: treatementStatus });
    const treatment = getTreatmentFromStore({ featureName, userId });

    expect(treatment).toBe(treatementStatus);
  },
);

it('should return false when a feature is not set', () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  setStore({ featureABC: false });
  const treatment = getTreatmentFromStore({ featureName, userId });

  expect(treatment).toBe(false);
});
