const SERVICE_URL = 'https://toggley.educalleja.es';

export default function toggleyAPI(KEY, httpLib) {
  function getAuthHeaders() {
    return {
      Authorization: `Bearer ${KEY}`,
    };
  }

  async function getTreatmentsFromService(userId) {
    return httpLib.get(`${SERVICE_URL}/treatments/${userId}`, { headers: getAuthHeaders() });
  }

  return {
    getTreatmentsFromService,
  };
}
