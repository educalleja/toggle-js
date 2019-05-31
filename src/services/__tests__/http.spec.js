import axios from 'axios';
import http from '../http';

jest.mock('axios');

test('GET', async () => {
  axios.get = jest.fn().mockReturnValue({
    username: 'user1234',
  });
  const response = await http.get('https://example.com/myPlan');

  expect(axios.get).toHaveBeenCalledWith('https://example.com/myPlan', undefined);
  expect(response).toEqual({
    username: 'user1234',
  });
});
