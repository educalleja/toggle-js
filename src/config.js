import store from './store';
import provider from './featureProviders';


export default function getConfig(token) {
  return {
    httpService: provider(token),
    store: store(),
  };
}
