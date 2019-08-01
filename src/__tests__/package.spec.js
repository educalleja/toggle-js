import store from '../store';
import { init, isEnabled } from '../package';

beforeEach(() => {
  // sets package as initial state
  init(undefined, () => undefined);
});

test('throws exception when init is not called', async () => {
  await expect(isEnabled('a', 'b')).rejects.toEqual(new Error('Toggley - You must call the init function before with your API token'));
});

test('throws exception when only one parameter is provided', async () => {
  init('123', () => ({}));
  const result = isEnabled('a');
  await expect(result).rejects.toEqual(new Error('Toggley - Insufficient parameters'));
});

test('throws exception when no parameters are provided', async () => {
  init('123', () => ({}));
  const result = isEnabled();
  await expect(result).rejects.toEqual(new Error('Toggley - Insufficient parameters'));
});


test.each([true, false])('Returns %s when feature is set to that value', async (valueFeature) => {
  const config = jest.fn().mockImplementation(() => ({
    httpService: {
      getTreatmentsFromService: () => ({ feature123: valueFeature }),
    },
    store: store(),
  }));
  init('123', config);
  expect(await isEnabled('feature123', 'user2')).toBe(valueFeature);
});

test('Returns false when feature is not set for a user', async () => {
  const config = jest.fn().mockImplementation(() => ({
    httpService: {
      getTreatmentsFromService: () => ({ abc: true }),
    },
    store: store(),
  }));
  init('123', config);
  expect(await isEnabled('feature123', 'user2')).toBeFalsy();
});
