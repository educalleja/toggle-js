import httpLib from '../services/http';
import toggleyAPI from './toggleyApi';

export default () => ({
  ...toggleyAPI(httpLib),
});
