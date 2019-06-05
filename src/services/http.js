import axios from 'axios';

export default {
  get: async (path, options) => axios.get(path, options),
};
