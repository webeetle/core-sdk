'use strict'

import { codes } from './errors'
const { SDK_ERR_DECORATOR_ALREADY_PRESENT } = codes

function decorate (instance, name, fn) {
  if (instance.hasOwnProperty(name)) {
    throw new SDK_ERR_DECORATOR_ALREADY_PRESENT(name)
  }

  if (fn && (typeof fn === 'function')) {
    Object.defineProperty(instance, name, {
      get: fn
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