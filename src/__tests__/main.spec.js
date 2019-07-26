import { isEnabled } from '../main';
import provider from '../featureProviders';

jest.mock('../featureProviders');

test.each([true, false])('Returns %s when feature is set to that value', async (valueFeature) => {
  provider.mockImplementation(() => ({
    getTreatmentsFromService: () => ({ feature1234: valueFeature }),
  }));
  const result = await isEnabled('feature1234', 'userId1');
  expect(result).toBe(valueFeature);
});

test('Returns false when feature is not set for a user', async () => {
  provider.mockImplementation(() => ({
    getTreatmentsFromService: () => ({}),
  }));
  const result = await isEnabled('feature1234', 'userId1');
  expect(result).toBeFalsy();
});
