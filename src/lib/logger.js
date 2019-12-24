'use strict'

import { codes } from './errors'
const { BEE_SDK_ERR_LOG_LEVEL_NOT_EXIST } = codes

const emojiLog = {
  warn: '⚠️',
  info: '✨',
  error: '🚨',
  trace: '🔍'
}

const logLevel = {
  warn: 1,
  info: 2,
  error: 3,
  trace: 4
}

function now () {
  var now = new Date()
  return now.toLocaleString()
}

function Logger (opts) {
  const level = opts.logLevel || 'error'

  if (Object.keys(logLevel).indexOf(level) === -1) {
    throw new BEE_SDK_ERR_LOG_LEVEL_NOT_EXIST(level)
  }

  this.level = logLevel[level]
  const fl = {}
  for (const l of Object.keys(logLevel)) {
    Object.assign(fl, {
      [l]: msg => {
        if (this.level <= logLevel[l]) {
          console[l](`${emojiLog[l]}\t${now()} - ${msg}`)
        }
      }
    })
  }

  return fl
}

function createLogger (opts) {
  return new Logger(opts)
}

export {
  now,
  createLogger
}
