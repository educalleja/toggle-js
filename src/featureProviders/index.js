import httpLib from '../services/http';
import toggleyAPI from './toggleyApi';

export const toggleyApi = {
  getTreatmentsFromService: async () => {
    const api = toggleyAPI({ httpLib });
    return api.getTreatmentsFromService();
  },
};
