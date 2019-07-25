import { isEnabled } from '../entrypoint';
import { toggleyApi } from '../featureProviders';

jest.mock('../featureProviders');

test.each([true, false])('Returns %s when feature is set to that value', async (valueFeature) => {
  toggleyApi.getTreatmentsFromService = jest.fn().mockReturnValue({
    feature1234: valueFeature,
  });
  const result = await isEnabled('feature1234', 'userId1');
  expect(result).toBe(valueFeature);
});

test('Returns false when feature is not set for a user', async () => {
  toggleyApi.getTreatmentsFromService = jest.fn().mockReturnValue({
    feature1234: false,
  });
  const result = await isEnabled('feature1234', 'userId1');
  expect(result).toBeFalsy();
});
