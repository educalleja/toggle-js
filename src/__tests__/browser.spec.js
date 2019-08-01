
import { init, isEnabled } from '../package';
import loadInBrowser from '../browser';

jest.mock('../package');
jest.mock('../config');

function addScriptToDOM(src) {
  const script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
}

test.each([
  ['key=ab1234CD', 'ab1234CD'],
  ['param=1&key=ab1234cd', 'ab1234cd'],
  ['param=1&key=aBA1234cD&sec=1', 'aBA1234cD'],
])('init has been called for querystring %s with value: %s', (querystring, value) => {
  addScriptToDOM(`http://example.com/foo.js?${querystring}`);
  loadInBrowser();
  expect(init).toHaveBeenCalledWith(value);
});

test('isEnabled function is mounted in the windows object', () => {
  loadInBrowser();
  expect(global.Toggley.isEnabled).toBeDefined();
});

test.each([[true], [false]])('window.Toggley.isEnabled returns %s', async (value) => {
  isEnabled.mockImplementation(() => Promise.resolve(value));
  loadInBrowser();
  expect(await global.Toggley.isEnabled()).toBe(value);
});
