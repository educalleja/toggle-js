import toggleyAPI from '../toggleyApi';

test('Requests are done to production endpoints with headers', async () => {
  const httpLib = {
    get: jest.fn(),
  };

  const api = toggleyAPI({ httpLib });

  await api.getTreatmentsFromService({ userId: 'userABC' });

  expect(httpLib.get).toHaveBeenCalledWith('https://toggley.io/treatments/userABC', {});
});

test('Requests treatments from API', async () => {
  const httpLib = {
    get: jest.fn().mockReturnValue({
      treatment1: true,
      treatment2: false,
      treatment3: true,
    }),
  };
  const api = toggleyAPI({ getHeaders: () => ({}), httpLib });

  const treatments = await api.getTreatmentsFromService({ userId: 'user123' });

  expect(treatments).toEqual({
    treatment1: true,
    treatment2: false,
    treatment3: true,
  });
});
