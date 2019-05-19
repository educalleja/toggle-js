import { toggleyApi } from '../featureProviders';
import { getTreatmentFromStore } from '../store';

jest.mock('../featureProviders');

it('should return true when a feature is set for the user', () => {
  toggleyApi.getTreatmentsFromService.mockReturnValue({
    featureABC: true,
  });

  const treatment = getTreatmentFromStore({
    featureName: 'featureABC',
    userId: 'user123',
  });

  expect(treatment).toBe(true);
});
