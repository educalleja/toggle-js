import http from '../services/http';

const SERVICE_URL = 'https://toggley.io';

const getAuthHeaders = () => ({
  Authorization: 'Bearer AbCdEf123456',
});

const getConfig = () => ({
  headers: {
    ...getAuthHeaders(),
  },
});

export const getTreatmentsFromService = async ({ userId }) => http.get(`${SERVICE_URL}/treatments/${userId}`, getConfig());
