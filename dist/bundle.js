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

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzPzgyYjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/harmony-module.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const decorator = __webpack_require__(/*! ./lib/decorate */ \"./src/lib/decorate.js\");\n\nfunction build(options) {\n  options = options || {};\n\n  if (typeof options !== 'object') {\n    throw new Error('Options must be an object');\n  }\n\n  const sdk = {\n    name: options.name || 'sdk',\n    decorate: decorator.add,\n    hasDecorator: decorator.exist\n  };\n\n  return sdk;\n}\n\nmodule.exports = build;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVjb3JhdG9yID0gcmVxdWlyZSgnLi9saWIvZGVjb3JhdGUnKVxuXG5mdW5jdGlvbiBidWlsZCAob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKVxuICB9XG5cbiAgY29uc3Qgc2RrID0ge1xuICAgIG5hbWU6IG9wdGlvbnMubmFtZSB8fCAnc2RrJyxcbiAgICBkZWNvcmF0ZTogZGVjb3JhdG9yLmFkZCxcbiAgICBoYXNEZWNvcmF0b3I6IGRlY29yYXRvci5leGlzdFxuICB9XG5cbiAgcmV0dXJuIHNka1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/lib/decorate.js":
/*!*****************************!*\
  !*** ./src/lib/decorate.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ \"./src/lib/errors.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_errors__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst { SDK_ERR_DECORATOR_ALREADY_PRESENT } = _errors__WEBPACK_IMPORTED_MODULE_0__[\"codes\"];\n\nfunction decorate(instance, name, fn) {\n  if (instance.hasOwnProperty(name)) {\n    throw new SDK_ERR_DECORATOR_ALREADY_PRESENT(name);\n  }\n\n  if (fn && (typeof fn.getter === 'function' || typeof fn.setter === 'function')) {\n    Object.defineProperty(instance, name, {\n      get: fn.getter,\n      set: fn.setter\n    });\n  } else {\n    instance[name] = fn;\n  }\n}\n\nfunction decorateSDK(name, fn, dependencies) {\n  decorate(this, name, fn, dependencies);\n  return this;\n}\n\nfunction checkExistence(name) {\n  return name in this;\n}\n\nmodule.exports = {\n  add: decorateSDK,\n  exist: checkExistence\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2RlY29yYXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvZGVjb3JhdGUuanM/OTZiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgY29kZXMgfSBmcm9tICcuL2Vycm9ycydcbmNvbnN0IHsgU0RLX0VSUl9ERUNPUkFUT1JfQUxSRUFEWV9QUkVTRU5UIH0gPSBjb2Rlc1xuXG5mdW5jdGlvbiBkZWNvcmF0ZSAoaW5zdGFuY2UsIG5hbWUsIGZuKSB7XG4gIGlmIChpbnN0YW5jZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHRocm93IG5ldyBTREtfRVJSX0RFQ09SQVRPUl9BTFJFQURZX1BSRVNFTlQobmFtZSlcbiAgfVxuXG4gIGlmIChmbiAmJiAodHlwZW9mIGZuLmdldHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZm4uc2V0dGVyID09PSAnZnVuY3Rpb24nKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwgbmFtZSwge1xuICAgICAgZ2V0OiBmbi5nZXR0ZXIsXG4gICAgICBzZXQ6IGZuLnNldHRlclxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2VbbmFtZV0gPSBmblxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlU0RLIChuYW1lLCBmbiwgZGVwZW5kZW5jaWVzKSB7XG4gIGRlY29yYXRlKHRoaXMsIG5hbWUsIGZuLCBkZXBlbmRlbmNpZXMpXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIGNoZWNrRXhpc3RlbmNlIChuYW1lKSB7XG4gIHJldHVybiBuYW1lIGluIHRoaXNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogZGVjb3JhdGVTREssXG4gIGV4aXN0OiBjaGVja0V4aXN0ZW5jZVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/decorate.js\n");

/***/ }),

/***/ "./src/lib/errors.js":
/*!***************************!*\
  !*** ./src/lib/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst codes = {};\n\n/**\n * Decorator error\n */\ncreateError('BEE_SDK_ERR_DECORATOR_ALREADY_PRESENT', \"The decodator '{0}' already added!\");\n\nfunction createError(code, message, Base = Error) {\n  if (!code) throw new Error(`[Bee SDK] error code must not be empty`);\n  if (!message) throw new Error(`[Bee SDK] error message must not be empty`);\n\n  code = code.toUpperCase();\n\n  function SDKError(a, b, c) {\n    Error.captureStackTrace(this, SDKError);\n\n    this.name = `Bee SDK [${code}]`;\n    this.message = `${this.name}: ${message}`;\n\n    String.prototype.format = function () {\n      a = this;\n      for (k in arguments) {\n        a = a.replace(\"{\" + k + \"}\", arguments[k]);\n      }\n      return a;\n    };\n\n    // more performant than spread (...) operator\n    if (a && b && c) {\n      this.message = message.format(a, b, c);\n    } else if (a && b) {\n      this.message = message.format(a, b);\n    } else if (a) {\n      this.message = message.format(a);\n    } else {\n      this.message = message;\n    }\n  }\n\n  SDKError.prototype[Symbol.toStringTag] = 'error';\n  Object.setPrototypeOf(SDKError.prototype, Base.prototype);\n\n  codes[code] = SDKError;\n  return codes[code];\n}\n\nmodule.exports = {\n  codes,\n  createError\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Vycm9ycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbGliL2Vycm9ycy5qcz83MjM1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb2RlcyA9IHt9XG5cbi8qKlxuICogRGVjb3JhdG9yIGVycm9yXG4gKi9cbmNyZWF0ZUVycm9yKCdCRUVfU0RLX0VSUl9ERUNPUkFUT1JfQUxSRUFEWV9QUkVTRU5UJywgXCJUaGUgZGVjb2RhdG9yICd7MH0nIGFscmVhZHkgYWRkZWQhXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yIChjb2RlLCBtZXNzYWdlLCBCYXNlID0gRXJyb3IpIHtcbiAgaWYgKCFjb2RlKSB0aHJvdyBuZXcgRXJyb3IoYFtCZWUgU0RLXSBlcnJvciBjb2RlIG11c3Qgbm90IGJlIGVtcHR5YClcbiAgaWYgKCFtZXNzYWdlKSB0aHJvdyBuZXcgRXJyb3IoYFtCZWUgU0RLXSBlcnJvciBtZXNzYWdlIG11c3Qgbm90IGJlIGVtcHR5YClcblxuICBjb2RlID0gY29kZS50b1VwcGVyQ2FzZSgpXG4gIFxuICBmdW5jdGlvbiBTREtFcnJvciAoYSwgYiwgYykge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFNES0Vycm9yKVxuICAgIFxuICAgIHRoaXMubmFtZSA9IGBCZWUgU0RLIFske2NvZGV9XWBcbiAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLm5hbWV9OiAke21lc3NhZ2V9YFxuXG4gICAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGEgPSB0aGlzO1xuICAgICAgZm9yIChrIGluIGFyZ3VtZW50cykge1xuICAgICAgICBhID0gYS5yZXBsYWNlKFwie1wiICsgayArIFwifVwiLCBhcmd1bWVudHNba10pXG4gICAgICB9XG4gICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIC8vIG1vcmUgcGVyZm9ybWFudCB0aGFuIHNwcmVhZCAoLi4uKSBvcGVyYXRvclxuICAgIGlmIChhICYmIGIgJiYgYykge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZS5mb3JtYXQoYSwgYiwgYylcbiAgICB9IGVsc2UgaWYgKGEgJiYgYikge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZS5mb3JtYXQoYSwgYilcbiAgICB9IGVsc2UgaWYgKGEpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UuZm9ybWF0KGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBTREtFcnJvci5wcm90b3R5cGVbU3ltYm9sLnRvU3RyaW5nVGFnXSA9ICdlcnJvcidcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFNES0Vycm9yLnByb3RvdHlwZSwgQmFzZS5wcm90b3R5cGUpXG5cbiAgY29kZXNbY29kZV0gPSBTREtFcnJvclxuICByZXR1cm4gY29kZXNbY29kZV1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvZGVzLFxuICBjcmVhdGVFcnJvclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/errors.js\n");

/***/ })

/******/ });