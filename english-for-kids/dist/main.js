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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_Header_HamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/Header/HamburgerMenu.js */ \"./src/js/components/Header/HamburgerMenu.js\");\n/* harmony import */ var _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/constants/constants.js */ \"./src/js/constants/constants.js\");\n\r\n\r\n\r\nconst hamburger = new _js_components_Header_HamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"HAMBURGER\"].addEventListener('click', hamburger.openHamburgerMenu.bind(hamburger));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/components/Header/HamburgerMenu.js":
/*!***************************************************!*\
  !*** ./src/js/components/Header/HamburgerMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HamburgerMenu; });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ \"./src/js/constants/constants.js\");\n\r\n\r\nlet clicksHamburger = 0;\r\n\r\nclass HamburgerMenu {\r\n    constructor() {\r\n        this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this);\r\n    }\r\n    async openHamburgerMenu() {\r\n        if (clicksHamburger === 0) {\r\n            let promise = new Promise(() => {\r\n                _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER_NAV\"].style.display = 'block';\r\n            });\r\n            setTimeout(() => {\r\n                _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER_NAV\"].style.transform = 'translateX(0vw)';\r\n                _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER_LIST\"].style.transform = 'translateX(0vw)';\r\n            }, 50);\r\n            _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER\"].style.transform = 'rotate(90deg)';\r\n            clicksHamburger += 1;\r\n            await promise;\r\n        }\r\n        else {\r\n            this.closeHamburgerMenu();\r\n            this.onBlurHamburgerMenu();\r\n        }\r\n    }\r\n    closeHamburgerMenu() {\r\n        setTimeout(() => _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER_NAV\"].style.display = 'none', 300);\r\n        _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER_NAV\"].style.transform = 'translateX(-75vw)';\r\n        _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER_LIST\"].style.transform = 'translateX(-75vw)';\r\n        _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER\"].style.transform = 'rotate(0deg)';\r\n        clicksHamburger = 0;\r\n    };\r\n\r\n    onBlurHamburgerMenu() {\r\n        console.log('blur');\r\n        _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"HAMBURGER_LIST\"].addEventListener('blur', event => {\r\n            this.closeHamburgerMenu();\r\n        }, true);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/Header/HamburgerMenu.js?");

/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/*! exports provided: HAMBURGER, HAMBURGER_NAV, HAMBURGER_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HAMBURGER\", function() { return HAMBURGER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HAMBURGER_NAV\", function() { return HAMBURGER_NAV; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HAMBURGER_LIST\", function() { return HAMBURGER_LIST; });\nconst HAMBURGER = document.getElementById('hamburger');\r\nconst HAMBURGER_NAV = document.getElementById('hamburger_menu');\r\nconst HAMBURGER_LIST = document.getElementById('hamburger_list');\r\n\n\n//# sourceURL=webpack:///./src/js/constants/constants.js?");

/***/ })

/******/ });