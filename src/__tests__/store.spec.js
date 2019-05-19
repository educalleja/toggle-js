import { toggleyApi } from '../featureProviders';
import { getTreatmentFromStore } from '../store';

jest.mock('../featureProviders');

it('should return true when a feature is set for the user', () => {
  const userId = 'user123';
  const featureName = 'featureABC';
  toggleyApi.getTreatmentsFromService.mockReturnValue({
    featureABC: true,
  });

  const treatment = getTreatmentFromStore({ featureName, userId });

  expect(treatment).toBe(true);
});

it('should return false when a feature is set for the user to be false', () => {
  const userId = 'user123';
  const featureName = 'featureXYZ';
  toggleyApi.getTreatmentsFromService.mockReturnValue({
    featureABC: false,
  });

  const treatment = getTreatmentFromStore({ featureName, userId });

  expect(treatment).toBe(false);
});

it('should only call once the service when requesting for two features', () => {
  const userId = 'user123';
  const featureName = 'featureABC';
  toggleyApi.getTreatmentsFromService.mockReturnValue({
    featureABC: false,
  });

  getTreatmentFromStore({ featureName, userId });
  getTreatmentFromStore({ featureName: 'second', userId });

  expect(toggleyApi.getTreatmentsFromService).toHaveBeenCalledTimes(1);
});
