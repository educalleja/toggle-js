import treatments from '../treatments';
import store from '../store';

test.each([true, false])('Gets %s treatments', async (treatmentValue) => {
  const httpService = {
    getTreatmentsFromService: () => ({
      abc: treatmentValue,
    }),
  };
  const treats = treatments(httpService, store());
  const result = await treats.isEnabledForUser('abc', 123);

  expect(result).toBe(treatmentValue);
});

test('Gets false for undefined treatments', async () => {
  const httpService = {
    getTreatmentsFromService: () => ({}),
  };
  const treats = treatments(httpService, store());

  const result = await treats.isEnabledForUser('UNDEFINEDTREATMENT', 123);

  expect(result).toBeFalsy();
});

test('Calls API only once for a given feature and userId', async () => {
  const httpService = {
    getTreatmentsFromService: jest.fn().mockReturnValue({ abc: true }),
  };
  const treats = treatments(httpService, store());

  for (let i = 0; i < 50; i += 1) {
    await treats.isEnabledForUser('abc', 123); // eslint-disable-line no-await-in-loop
  }

  expect(httpService.getTreatmentsFromService).toHaveBeenCalledTimes(1);
});
