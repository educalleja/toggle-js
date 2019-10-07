import httpLib from '../services/http';
import educallejaAPI from './educalleja.es';

export default function (KEY) {
  return {
    ...educallejaAPI(KEY, httpLib),
  };
}
