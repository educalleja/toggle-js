import http from '../services/http';

const URI = 'https://toggley.io';

const getAuthHeaders = () => ({
  Authorization: 'Bearer AbCdEf123456',
});

const getConfig = () => ({
  headers: {
    ...getAuthHeaders(),
  },
});

export const getTreatmentsFromService = async ({ userId }) => http.get(`${URI}/treatments/${userId}`, getConfig());
