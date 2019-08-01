import httpLib from '../services/http';
import toggleyAPI from './toggleyApi';

export default KEY => ({
  ...toggleyAPI(KEY, httpLib),
});
