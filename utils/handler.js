import { createReactive } from "./reactive";
import { isObject } from "./util";

const get = createGetter();
const set = createSetter();


function createGetter() {
  return function (target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    if (isObject(res)){
      return createReactive(res);
    }

    return res;
  }
}

function createSetter() {
  return function (target, key, value, receiver) {
    const res = Reflect(target, key, value, receiver);
    return res;
  }

}

export const proxyHandler = {
  get,
  set
}