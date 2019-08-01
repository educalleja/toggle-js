import 'core-js';
import 'regenerator-runtime/runtime';
import { init, isEnabled } from './package';

function getKeyFromUrl() {
  const scripts = document.getElementsByTagName('script');
  const myScript = scripts[scripts.length - 1];
  if (!myScript) {
    return null;
  }
  const keyParam = myScript.src.match(/[?|&]key=([0-9|a-z|A-Z]*)/);
  if (!keyParam) {
    return null;
  }
  return keyParam[1];
}


export default function loadInBrowser() {
  init(getKeyFromUrl());
  window.Toggley = {
    isEnabled,
  };
}

loadInBrowser();
