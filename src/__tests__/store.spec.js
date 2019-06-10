// import { getTreatmentFromStore, setStore, isStoreLoaded } from '../store';
import store from '../store';

test.each([[true], [false]])(
  'should return %s when a feature is set to the same value.',
  (treatementStatus) => {
    const userId = 'user123';
    const featureName = 'featureABC';
    const myStore = store();

    myStore.setStore({ featureABC: treatementStatus });
    const treatment = myStore.getTreatmentFromStore({ featureName, userId });

    expect(treatment).toBe(treatementStatus);
  },
);

it('should return false when a feature is not set', () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  const myStore = store();

  myStore.setStore({ featureABC: false });
  const treatment = myStore.getTreatmentFromStore({ featureName, userId });

  expect(treatment).toBe(false);
});

it('should return false when store has not been loaded', () => {
  const myStore = store();
  expect(myStore.isLoaded()).toBeFalsy();
});

it('should return true when store has been loaded', () => {
  const myStore = store();
  myStore.setStore({ a: true });
  expect(myStore.isLoaded()).toBeTruthy();
});
