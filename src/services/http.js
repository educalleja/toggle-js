import axios from 'axios';

export default {
  get: async (path, config) => axios.get(path, config),
};
