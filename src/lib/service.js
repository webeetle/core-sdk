'use strict'

import { codes } from './errors'
const { BEE_SDK_ERR_FN_NOT_VALID } = codes

function addService(instance, name, fn) {
  if (typeof fn.default !== 'undefined') {
    fn = fn.default
  }

  const serviceName = (typeof name !== 'function') ? name : fn.name
  fn = (typeof fn !== 'undefined') ? fn : name

  if (typeof fn !== 'function') {
    throw new BEE_SDK_ERR_FN_NOT_VALID(typeof fn)
  }

  fn(instance, serviceName)
}

function addS (name, fn) {
  addService(this, name, fn)
  return this
}

export default {
  add: addS
}