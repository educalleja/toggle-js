import { init, isEnabled } from '../main';
import provider from '../featureProviders';

jest.mock('../featureProviders');

beforeEach(() => {
  init(undefined);
});

test('throws exception when token is not provided', async () => {
  expect(isEnabled()).rejects.toEqual(new Error('Toggley - API KEY not set. Call init function first'));
});

test.each([true, false])('Returns %s when feature is set to that value', async (valueFeature) => {
  provider.mockImplementation(() => ({
    getTreatmentsFromService: () => ({ feature1234: valueFeature }),
  }));
  init('TESTAPIKEY');
  const result = await isEnabled('feature1234', 'userId1');
  expect(result).toBe(valueFeature);
});

test('Returns false when feature is not set for a user', async () => {
  provider.mockImplementation(() => ({
    getTreatmentsFromService: () => ({}),
  }));
  init('TESTAPIKEY');
  const result = await isEnabled('feature1234', 'userId1');
  expect(result).toBeFalsy();
});
