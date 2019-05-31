import http from '../../services/http';
import { getTreatmentsFromService } from '../toggleyApi';

jest.mock('http');

test('Requests are done to production endpoints', async () => {
  http.get = jest.fn();
  await getTreatmentsFromService({ userId: 'userABC' });
  expect(http.get).toHaveBeenCalledWith('https://toggley.io/treatments/userABC', {
    headers: { Authorization: 'Bearer AbCdEf123456' },
  });
});

test('Requests treatments from API', async () => {
  http.get = jest.fn().mockReturnValue({
    treatment1: true,
    treatment2: false,
    treatment3: true,
  });
  const treatments = await getTreatmentsFromService({ userId: 'user123' });

  expect(treatments).toEqual({
    treatment1: true,
    treatment2: false,
    treatment3: true,
  });
});
