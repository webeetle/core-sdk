(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {
  codes: {
    SDK_ERR_DECORATOR_ALREADY_PRESENT
  }
} = require('./errors')

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

module.exports = {
  add: decorateSDK
}
},{"./errors":2}],2:[function(require,module,exports){
const codes = {}

/**
 * Decorator error
 */
createError('BEE_SDK_ERR_DECORATOR_ALREADY_PRESENT', "The decodator '{0}' already added!")

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
},{}],3:[function(require,module,exports){
const decorator = require('./lib/decorate')

function build (options) {
  options = options || {}

  if (typeof options !== 'object') {
    throw new Error('Options must be an object')
  }

  const sdk = {
    name: options.name || 'sdk',
    decorate: decorator.add
  }

  return sdk
}

module.exports = build
},{"./lib/decorate":1}]},{},[3]);
