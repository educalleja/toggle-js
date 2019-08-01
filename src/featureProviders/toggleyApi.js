const SERVICE_URL = 'https://toggley.io';

export default function toggleyAPI(KEY, httpLib) {
  const getAuthHeaders = () => ({
    Authorization: `Bearer ${KEY}`,
  });

  const getTreatmentsFromService = async userId => httpLib.get(`${SERVICE_URL}/treatments/${userId}`, { headers: getAuthHeaders() });

  return {
    getTreatmentsFromService,
  };
}
