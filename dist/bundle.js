/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/decorate */ \"./src/lib/decorate.js\");\n/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/logger */ \"./src/lib/logger.js\");\n\n\n\n\n\nfunction SDK(options) {\n  options = options || {};\n\n  if (typeof options !== 'object') {\n    throw new Error('Options must be an object');\n  }\n\n  // Instance Fastify components\n  const logger = Object(_lib_logger__WEBPACK_IMPORTED_MODULE_1__[\"createLogger\"])(options);\n\n  const sdk = {\n    name: options.name || 'sdk',\n    decorate: _lib_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add,\n    hasDecorator: _lib_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exist,\n    // expose the log instance\n    log: logger\n  };\n\n  return sdk;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SDK);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBkZWNvcmF0b3IgZnJvbSAnLi9saWIvZGVjb3JhdGUnXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICcuL2xpYi9sb2dnZXInXG5cbmZ1bmN0aW9uIFNESyAob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKVxuICB9XG5cbiAgLy8gSW5zdGFuY2UgRmFzdGlmeSBjb21wb25lbnRzXG4gIGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcihvcHRpb25zKVxuXG4gIGNvbnN0IHNkayA9IHtcbiAgICBuYW1lOiBvcHRpb25zLm5hbWUgfHwgJ3NkaycsXG4gICAgZGVjb3JhdGU6IGRlY29yYXRvci5hZGQsXG4gICAgaGFzRGVjb3JhdG9yOiBkZWNvcmF0b3IuZXhpc3QsXG4gICAgLy8gZXhwb3NlIHRoZSBsb2cgaW5zdGFuY2VcbiAgICBsb2c6IGxvZ2dlclxuICB9XG5cbiAgcmV0dXJuIHNka1xufVxuXG5leHBvcnQgZGVmYXVsdCBTREsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/lib/decorate.js":
/*!*****************************!*\
  !*** ./src/lib/decorate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ \"./src/lib/errors.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_errors__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst { SDK_ERR_DECORATOR_ALREADY_PRESENT } = _errors__WEBPACK_IMPORTED_MODULE_0__[\"codes\"];\n\nfunction decorate(instance, name, fn) {\n  if (instance.hasOwnProperty(name)) {\n    throw new SDK_ERR_DECORATOR_ALREADY_PRESENT(name);\n  }\n\n  if (fn && (typeof fn.getter === 'function' || typeof fn.setter === 'function')) {\n    Object.defineProperty(instance, name, {\n      get: fn.getter,\n      set: fn.setter\n    });\n  } else {\n    instance[name] = fn;\n  }\n}\n\nfunction decorateSDK(name, fn, dependencies) {\n  decorate(this, name, fn, dependencies);\n  return this;\n}\n\nfunction checkExistence(name) {\n  return name in this;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  add: decorateSDK,\n  exist: checkExistence\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2RlY29yYXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvZGVjb3JhdGUuanM/OTZiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgY29kZXMgfSBmcm9tICcuL2Vycm9ycydcbmNvbnN0IHsgU0RLX0VSUl9ERUNPUkFUT1JfQUxSRUFEWV9QUkVTRU5UIH0gPSBjb2Rlc1xuXG5mdW5jdGlvbiBkZWNvcmF0ZSAoaW5zdGFuY2UsIG5hbWUsIGZuKSB7XG4gIGlmIChpbnN0YW5jZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHRocm93IG5ldyBTREtfRVJSX0RFQ09SQVRPUl9BTFJFQURZX1BSRVNFTlQobmFtZSlcbiAgfVxuXG4gIGlmIChmbiAmJiAodHlwZW9mIGZuLmdldHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZm4uc2V0dGVyID09PSAnZnVuY3Rpb24nKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwgbmFtZSwge1xuICAgICAgZ2V0OiBmbi5nZXR0ZXIsXG4gICAgICBzZXQ6IGZuLnNldHRlclxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2VbbmFtZV0gPSBmblxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlU0RLIChuYW1lLCBmbiwgZGVwZW5kZW5jaWVzKSB7XG4gIGRlY29yYXRlKHRoaXMsIG5hbWUsIGZuLCBkZXBlbmRlbmNpZXMpXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIGNoZWNrRXhpc3RlbmNlIChuYW1lKSB7XG4gIHJldHVybiBuYW1lIGluIHRoaXNcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGQ6IGRlY29yYXRlU0RLLFxuICBleGlzdDogY2hlY2tFeGlzdGVuY2Vcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/decorate.js\n");

/***/ }),

/***/ "./src/lib/errors.js":
/*!***************************!*\
  !*** ./src/lib/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst codes = {};\n\n/**\n * Decorator error\n */\ncreateError('BEE_SDK_ERR_DECORATOR_ALREADY_PRESENT', \"The decodator '{0}' already added!\");\n\n/**\n * Logger error\n */\ncreateError('BEE_SDK_ERR_LOG_LEVEL_NOT_EXIST', \"The log level '{0}' does not exist!\");\n\nfunction createError(code, message, Base = Error) {\n  if (!code) throw new Error(`[Bee SDK] error code must not be empty`);\n  if (!message) throw new Error(`[Bee SDK] error message must not be empty`);\n\n  code = code.toUpperCase();\n\n  function SDKError(a, b, c) {\n    Error.captureStackTrace(this, SDKError);\n\n    this.name = `Bee SDK [${code}]`;\n    this.message = `${this.name}: ${message}`;\n\n    String.prototype.format = function () {\n      a = this;\n      for (k in arguments) {\n        a = a.replace(\"{\" + k + \"}\", arguments[k]);\n      }\n      return a;\n    };\n\n    // more performant than spread (...) operator\n    if (a && b && c) {\n      this.message = message.format(a, b, c);\n    } else if (a && b) {\n      this.message = message.format(a, b);\n    } else if (a) {\n      this.message = message.format(a);\n    } else {\n      this.message = message;\n    }\n  }\n\n  SDKError.prototype[Symbol.toStringTag] = 'error';\n  Object.setPrototypeOf(SDKError.prototype, Base.prototype);\n\n  codes[code] = SDKError;\n  return codes[code];\n}\n\nmodule.exports = {\n  codes,\n  createError\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Vycm9ycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbGliL2Vycm9ycy5qcz83MjM1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb2RlcyA9IHt9XG5cbi8qKlxuICogRGVjb3JhdG9yIGVycm9yXG4gKi9cbmNyZWF0ZUVycm9yKCdCRUVfU0RLX0VSUl9ERUNPUkFUT1JfQUxSRUFEWV9QUkVTRU5UJywgXCJUaGUgZGVjb2RhdG9yICd7MH0nIGFscmVhZHkgYWRkZWQhXCIpXG5cbi8qKlxuICogTG9nZ2VyIGVycm9yXG4gKi9cbmNyZWF0ZUVycm9yKCdCRUVfU0RLX0VSUl9MT0dfTEVWRUxfTk9UX0VYSVNUJywgXCJUaGUgbG9nIGxldmVsICd7MH0nIGRvZXMgbm90IGV4aXN0IVwiKVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvciAoY29kZSwgbWVzc2FnZSwgQmFzZSA9IEVycm9yKSB7XG4gIGlmICghY29kZSkgdGhyb3cgbmV3IEVycm9yKGBbQmVlIFNES10gZXJyb3IgY29kZSBtdXN0IG5vdCBiZSBlbXB0eWApXG4gIGlmICghbWVzc2FnZSkgdGhyb3cgbmV3IEVycm9yKGBbQmVlIFNES10gZXJyb3IgbWVzc2FnZSBtdXN0IG5vdCBiZSBlbXB0eWApXG5cbiAgY29kZSA9IGNvZGUudG9VcHBlckNhc2UoKVxuXG4gIGZ1bmN0aW9uIFNES0Vycm9yIChhLCBiLCBjKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgU0RLRXJyb3IpXG5cbiAgICB0aGlzLm5hbWUgPSBgQmVlIFNESyBbJHtjb2RlfV1gXG4gICAgdGhpcy5tZXNzYWdlID0gYCR7dGhpcy5uYW1lfTogJHttZXNzYWdlfWBcblxuICAgIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBhID0gdGhpcztcbiAgICAgIGZvciAoayBpbiBhcmd1bWVudHMpIHtcbiAgICAgICAgYSA9IGEucmVwbGFjZShcIntcIiArIGsgKyBcIn1cIiwgYXJndW1lbnRzW2tdKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICAvLyBtb3JlIHBlcmZvcm1hbnQgdGhhbiBzcHJlYWQgKC4uLikgb3BlcmF0b3JcbiAgICBpZiAoYSAmJiBiICYmIGMpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UuZm9ybWF0KGEsIGIsIGMpXG4gICAgfSBlbHNlIGlmIChhICYmIGIpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UuZm9ybWF0KGEsIGIpXG4gICAgfSBlbHNlIGlmIChhKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlLmZvcm1hdChhKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgU0RLRXJyb3IucHJvdG90eXBlW1N5bWJvbC50b1N0cmluZ1RhZ10gPSAnZXJyb3InXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihTREtFcnJvci5wcm90b3R5cGUsIEJhc2UucHJvdG90eXBlKVxuXG4gIGNvZGVzW2NvZGVdID0gU0RLRXJyb3JcbiAgcmV0dXJuIGNvZGVzW2NvZGVdXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb2RlcyxcbiAgY3JlYXRlRXJyb3Jcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/errors.js\n");

/***/ }),

/***/ "./src/lib/logger.js":
/*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
/*! exports provided: now, createLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"now\", function() { return now; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLogger\", function() { return createLogger; });\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ \"./src/lib/errors.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_errors__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst { BEE_SDK_ERR_LOG_LEVEL_NOT_EXIST } = _errors__WEBPACK_IMPORTED_MODULE_0__[\"codes\"];\n\nconst emojiLog = {\n  warn: '⚠️',\n  info: '✨',\n  error: '🚨',\n  trace: '🔍'\n};\n\nconst logLevel = {\n  warn: 1,\n  info: 2,\n  error: 3,\n  trace: 4\n};\n\nfunction now() {\n  var now = new Date();\n  return now.toLocaleString();\n}\n\nfunction Logger(opts) {\n  const level = opts.logLevel || 'info';\n\n  if (Object.keys(logLevel).indexOf(level) === -1) {\n    throw new BEE_SDK_ERR_LOG_LEVEL_NOT_EXIST(level);\n  }\n\n  this.level = logLevel[level];\n  const fl = {};\n  for (let l in logLevel) {\n    Object.assign(fl, {\n      [l]: function (msg) {\n        if (this.level >= logLevel[l]) {\n          console[l](`${emojiLog[l]} ${now} ${msg}`);\n        }\n      }\n    });\n  }\n\n  return {\n    log: Object.assign({}, ...fl)\n  };\n}\n\nfunction createLogger(opts) {\n  return new Logger(opts);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2xvZ2dlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbGliL2xvZ2dlci5qcz9lZDBmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBjb2RlcyB9IGZyb20gJy4vZXJyb3JzJ1xuY29uc3QgeyBCRUVfU0RLX0VSUl9MT0dfTEVWRUxfTk9UX0VYSVNUIH0gPSBjb2Rlc1xuXG5jb25zdCBlbW9qaUxvZyA9IHtcbiAgd2FybjogJ+KaoO+4jycsXG4gIGluZm86ICfinKgnLFxuICBlcnJvcjogJ/CfmqgnLFxuICB0cmFjZTogJ/CflI0nXG59XG5cbmNvbnN0IGxvZ0xldmVsID0ge1xuICB3YXJuOiAxLFxuICBpbmZvOiAyLFxuICBlcnJvcjogMyxcbiAgdHJhY2U6IDRcbn1cblxuZnVuY3Rpb24gbm93ICgpIHtcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKClcbiAgcmV0dXJuIG5vdy50b0xvY2FsZVN0cmluZygpXG59XG5cbmZ1bmN0aW9uIExvZ2dlciAob3B0cykge1xuICBjb25zdCBsZXZlbCA9IG9wdHMubG9nTGV2ZWwgfHwgJ2luZm8nXG5cbiAgaWYgKE9iamVjdC5rZXlzKGxvZ0xldmVsKS5pbmRleE9mKGxldmVsKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgQkVFX1NES19FUlJfTE9HX0xFVkVMX05PVF9FWElTVChsZXZlbClcbiAgfVxuXG4gIHRoaXMubGV2ZWwgPSBsb2dMZXZlbFtsZXZlbF1cbiAgY29uc3QgZmwgPSB7fVxuICBmb3IgKGxldCBsIGluIGxvZ0xldmVsKSB7XG4gICAgT2JqZWN0LmFzc2lnbihmbCwge1xuICAgICAgW2xdOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsID49IGxvZ0xldmVsW2xdKSB7XG4gICAgICAgICAgY29uc29sZVtsXShgJHtlbW9qaUxvZ1tsXX0gJHtub3d9ICR7bXNnfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2c6IE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAuLi5mbFxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIgKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBMb2dnZXIob3B0cylcbn1cblxuZXhwb3J0IHtcbiAgbm93LFxuICBjcmVhdGVMb2dnZXJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/logger.js\n");

/***/ })

/******/ });