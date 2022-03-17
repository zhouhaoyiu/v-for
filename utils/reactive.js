import { proxyHandler } from './handler';
import { isObject } from './util';

export function createReactive(data) {
  return createReactiveData(data, proxyHandler);
}

function createReactiveData(data, proxyHandler) {
  if (!isObject(data)) {
    return data;
  }
  return new Proxy(data, proxyHandler);
}