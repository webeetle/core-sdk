'use strict'

const codes = {}

/**
 * Decorator error
 */
createError('BEE_SDK_ERR_DECORATOR_ALREADY_PRESENT', "The decodator '{0}' already added!")
createError('BEE_SDK_ERR_CLIENT_ALREADY_PRESENT', "The client '{0}' already present!")

/**
 * Logger error
 */
createError('BEE_SDK_ERR_LOG_LEVEL_NOT_EXIST', "The log level '{0}' does not exist!")

function createError (code, message, Base = Error) {
  if (!code) throw new Error(`[Bee SDK] error code must not be empty`)
  if (!message) throw new Error(`[Bee SDK] error message must not be empty`)

  code = code.toUpperCase()
  function SDKError (a, b, c) {
    Error.captureStackTrace(this, SDKError)

    this.name = `Bee SDK [${code}]`
    this.message = `${this.name}: ${message}`

    String.prototype.format = function() {
      a = this;
      for (k in arguments) {
        a = a.replace("{" + k + "}", arguments[k])
      }
      return a
    }

    // more performant than spread (...) operator
    if (a && b && c) {
      this.message = message.format(a, b, c)
    } else if (a && b) {
      this.message = message.format(a, b)
    } else if (a) {
      this.message = message.format(a)
    } else {
      this.message = message
    }
  }

  SDKError.prototype[Symbol.toStringTag] = 'error'
  Object.setPrototypeOf(SDKError.prototype, Base.prototype)

  codes[code] = SDKError
  return codes[code]
}

module.exports = {
  codes,
  createError
}