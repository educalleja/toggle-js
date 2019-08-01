import toggleyAPI from '../toggleyApi';

test('Requests treatments from API', async () => {
  const httpLib = {
    get: jest.fn().mockReturnValue({
      treatment1: true,
      treatment2: false,
      treatment3: true,
    }),
  };
  const api = toggleyAPI('TESTKEY', httpLib);

  const treatments = await api.getTreatmentsFromService('user123');

  expect(treatments).toEqual({
    treatment1: true,
    treatment2: false,
    treatment3: true,
  });
});

test('Requests are done to production endpoints with headers', async () => {
  const httpLib = {
    get: jest.fn(),
  };

  const api = toggleyAPI('TESTKEY', httpLib);

  await api.getTreatmentsFromService('userABC');

  expect(httpLib.get).toHaveBeenCalledWith('https://toggley.io/treatments/userABC', { headers: { Authorization: 'Bearer TESTKEY' } });
});
