'use strict'

import { codes } from './errors'
const { SDK_ERR_DECORATOR_ALREADY_PRESENT } = codes

function decorate (instance, name, fn) {
  if (instance.hasOwnProperty(name)) {
    throw new SDK_ERR_DECORATOR_ALREADY_PRESENT(name)
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

function decorateSDK (name, fn, dependencies) {
  decorate(this, name, fn, dependencies)
  return this
}

function checkExistence (name) {
  return name in this
}

module.exports = {
  add: decorateSDK,
  exist: checkExistence
}