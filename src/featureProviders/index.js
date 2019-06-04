import axios from 'axios';
import toggleyAPI from './toggleyApi';

export const toggleyApi = {
  getTreatmentsFromService: () => {
    const api = toggleyAPI({ httpLib: axios });
    return api.getTreatmentsFromService();
  },
};
