import { isEnabledForUser } from '../treatments';
import store from '../store';

test.each([true, false])('Gets %s treatments', async (treatmentValue) => {
  const httpService = {
    getTreatmentsFromService: () => ({
      abc: treatmentValue,
    }),
  };

  const result = await isEnabledForUser({
    store: store(),
    httpService,
    featureName: 'abc',
    userId: 123,
  });

  expect(result).toBe(treatmentValue);
});

test('Gets false for undefined treatments', async () => {
  const httpService = {
    getTreatmentsFromService: () => ({}),
  };

  const result = await isEnabledForUser({
    store: store(),
    httpService,
    featureName: 'UNDEFINEDTREATMENT',
    userId: 123,
  });

  expect(result).toBeFalsy();
});

test('Gets the same result when called multiple times without calling API multiple times', async () => {
  const httpService = {
    getTreatmentsFromService: jest.fn().mockReturnValueOnce({ abc: true }),
  };
  const results = [];
  const storage = store();

  for (let i = 0; i < 50; i += 1) {
    await isEnabledForUser({ // eslint-disable-line no-await-in-loop
      store: storage,
      httpService,
      featureName: 'abc',
      userId: 123,
    });
  }
  const treatments = await Promise.all(results);

  expect(treatments.filter(treatment => !treatment)).toEqual([]);
  expect(httpService.getTreatmentsFromService).toHaveBeenCalledTimes(1);
});
