import httpLib from '../services/http';
import toggleyAPI from './toggleyApi';

export default function (KEY) {
  return {
    ...toggleyAPI(KEY, httpLib),
  };
}
