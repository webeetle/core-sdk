'use strict'

import { codes } from './errors'
const { BEE_SDK_ERR_FN_NOT_VALID } = codes

const fpStackTracePattern = /at\s{1}(?:.*\.)?plugin\s{1}.*\n\s*(.*)/
const fileNamePattern = /(\w*(\.\w*)*)\..*/

function plugin (fn, options = {}) {
  if (typeof fn.default !== 'undefined') { // Support for 'export default' behaviour in transpiled ECMAScript module
    fn = fn.default
  }

  if (typeof fn !== 'function') {
    throw new BEE_SDK_ERR_FN_NOT_VALID(typeof fn)
  }

  if (typeof options !== 'object' || Array.isArray(options) || options === null) {
    throw new TypeError('The options object should be an object')
  }

  if (!options.name) {
    options.name = checkName(fn)
  }

  fn[Symbol.for('sdk.display-name')] = options.name
  fn[Symbol.for('plugin-meta')] = options

  return fn
}

function checkName (fn) {
  if (fn.name.length > 0) return fn.name

  try {
    throw new Error('anonymous function')
  } catch (e) {
    return extractPluginName(e.stack)
  }
}

function extractPluginName (stack) {
  const m = stack.match(fpStackTracePattern)

  // get last section of path and match for filename
  return m ? m[1].split(/[/\\]/).slice(-1)[0].match(fileNamePattern)[1] : 'anonymous'
}

export default plugin