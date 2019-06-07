const SERVICE_URL = 'https://toggley.io';

export default function toggleyAPI({ httpLib }) {
  const getTreatmentsFromService = async ({ userId }) => httpLib.get(`${SERVICE_URL}/treatments/${userId}`, {});

  return {
    getTreatmentsFromService,
  };
}
