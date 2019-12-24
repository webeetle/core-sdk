'use strict'

import { codes } from './errors'
const { BEE_SDK_ERR_DECORATOR_ALREADY_PRESENT } = codes

function decorate (instance, name, fn) {
  if (Object.prototype.hasOwnProperty.call(instance, name)) {
    throw new BEE_SDK_ERR_DECORATOR_ALREADY_PRESENT(name)
  }

  if (fn && (typeof fn.getter === 'function' || typeof fn.setter === 'function')) {
    Object.defineProperty(instance, name, {
      get: fn.getter,
      set: fn.setter
    })
  } else {
    instance[name] = fn
  }
}

function decorateSDK (name, fn) {
  decorate(this, name, fn)
  this.log.info(`SKD - Decorator '${name}' added to sdk`)
  return this
}

function checkExistence (name) {
  return name in this
}

export default {
  add: decorateSDK,
  exist: checkExistence
}
