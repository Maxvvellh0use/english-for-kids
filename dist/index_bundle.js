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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_Header_HamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/Header/HamburgerMenu.js */ "./src/js/components/Header/HamburgerMenu.js");
/* harmony import */ var _js_components_Card_Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/Card/Categories */ "./src/js/components/Card/Categories.js");
/* harmony import */ var _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/constants/constants.js */ "./src/js/constants/constants.js");





const hamburger = new _js_components_Header_HamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_2__["HAMBURGER"].addEventListener('click', hamburger.openHamburgerMenu.bind(hamburger));


const categories = new _js_components_Card_Categories__WEBPACK_IMPORTED_MODULE_1__["default"]();
categories.actionSetA();
categories.openMainPage();


/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/*! exports provided: cards, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
const cards = [
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
];


/* harmony default export */ __webpack_exports__["default"] = (cards);


/***/ }),

/***/ "./src/js/components/Card/Categories.js":
/*!**********************************************!*\
  !*** ./src/js/components/Card/Categories.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cards */ "./src/js/cards.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/constants */ "./src/js/constants/constants.js");


let clickLink = 0;

class Categories {
  constructor() {
    this.actionSetA = this.actionSetA.bind(this);
  }

  openMainPage() {
      window.addEventListener('popstate', () => {
          console.log('lala');
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["categoryPageContainer"].style.display = 'none';
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["mainPageContainer"].style.display = 'block';
      });
      // history.replaceState({ 'page_id': 1}, 'Cards', 'main');
  }

  openCategoryPage() {
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["mainPageContainer"].addEventListener('click', event => {
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["linksCategories"].forEach(link => {
              _constants_constants__WEBPACK_IMPORTED_MODULE_1__["categoryPageContainer"].style.display = 'block';
              _constants_constants__WEBPACK_IMPORTED_MODULE_1__["mainPageContainer"].style.display = 'none';
          });
          history.pushState({ 'page_id': 2}, 'Cards', 'index.html#');
      })
  }

  actionSetA() {
      this.openCategoryPage();
    // window.addEventListener('onload', () => {
    //   console.log(cards[0].image);
    //   cards[0].map((card, index) => {
    //     setTimeout(() => cardCategoriesImg[index].forEach((cardImg) => {
    //       cardImg.insertAdjacentHTML('afterbegin', `<img src="${cards[0].image}">`);
    //     }), 400);
    //   });
    // });
  }

  // else {
  //
  // }
  generateContent(numberCategory) {
    _cards__WEBPACK_IMPORTED_MODULE_0__["default"].map((card) => {

    });
  }
}


/***/ }),

/***/ "./src/js/components/Header/HamburgerMenu.js":
/*!***************************************************!*\
  !*** ./src/js/components/Header/HamburgerMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HamburgerMenu; });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ "./src/js/constants/constants.js");


let clicksHamburger = 0;

class HamburgerMenu {
  constructor() {
    this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this);
  }

  async openHamburgerMenu() {
    if (clicksHamburger === 0) {
      const promise = new Promise(() => {
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.display = 'block';
      });
      setTimeout(() => {
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.transform = 'translateX(0vw)';
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LIST"].style.transform = 'translateX(0vw)';
      }, 50);
      _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER"].style.transform = 'rotate(90deg)';
      clicksHamburger += 1;
      await promise;
    } else {
      this.closeHamburgerMenu();
      this.onBlurHamburgerMenu();
    }
  }

  closeHamburgerMenu() {
    setTimeout(() => _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.display = 'none', 300);
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.transform = 'translateX(-75vw)';
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LIST"].style.transform = 'translateX(-75vw)';
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER"].style.transform = 'rotate(0deg)';
    clicksHamburger = 0;
  }

  onBlurHamburgerMenu() {
    console.log('blur');
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LIST"].addEventListener('blur', (event) => {
      this.closeHamburgerMenu();
    }, true);
  }
}


/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/*! exports provided: mainPageContainer, linksCategories, HAMBURGER, HAMBURGER_NAV, HAMBURGER_LIST, categoryPageContainer, cardCategoriesImg, cardCategoriesText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPageContainer", function() { return mainPageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linksCategories", function() { return linksCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER", function() { return HAMBURGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_NAV", function() { return HAMBURGER_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_LIST", function() { return HAMBURGER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryPageContainer", function() { return categoryPageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardCategoriesImg", function() { return cardCategoriesImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardCategoriesText", function() { return cardCategoriesText; });
//mainPage:
const mainPageContainer = document.getElementById('main_page');
const linksCategories = document.querySelectorAll('.card');

// hamburger:
const HAMBURGER = document.getElementById('hamburger');
const HAMBURGER_NAV = document.getElementById('hamburger_menu');
const HAMBURGER_LIST = document.getElementById('hamburger_list');
// categoriesPage:
const categoryPageContainer = document.getElementById('category_page');
const cardCategoriesImg = document.querySelectorAll('.category-card img');
const cardCategoriesText = document.querySelectorAll('.category-card-body h5');



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYXJkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNYO0FBQ0g7QUFDRzs7QUFFekQsc0JBQXNCLDhFQUFhO0FBQ25DLG9FQUFTOzs7QUFHVCx1QkFBdUIsc0VBQVU7QUFDakM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHZSxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaFRyQjtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUM2RztBQUM3STs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBFQUFxQjtBQUMvQixVQUFVLHNFQUFpQjtBQUMzQixPQUFPO0FBQ1AsK0JBQStCLGNBQWM7QUFDN0M7O0FBRUE7QUFDQSxNQUFNLHNFQUFpQjtBQUN2QixVQUFVLG9FQUFlO0FBQ3pCLGNBQWMsMEVBQXFCO0FBQ25DLGNBQWMsc0VBQWlCO0FBQy9CLFdBQVc7QUFDWCw2QkFBNkIsY0FBYztBQUMzQyxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGVBQWU7QUFDbEYsWUFBWTtBQUNaLFVBQVU7QUFDVixRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFLOztBQUVULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFxRjs7QUFFckY7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBYTtBQUNyQixPQUFPO0FBQ1A7QUFDQSxRQUFRLGtFQUFhO0FBQ3JCLFFBQVEsbUVBQWM7QUFDdEIsT0FBTztBQUNQLE1BQU0sOERBQVM7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGtFQUFhO0FBQ2xDLElBQUksa0VBQWE7QUFDakIsSUFBSSxtRUFBYztBQUNsQixJQUFJLDhEQUFTO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtRUFBYztBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4X2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhhbWJ1cmdlck1lbnUgZnJvbSAnLi9qcy9jb21wb25lbnRzL0hlYWRlci9IYW1idXJnZXJNZW51LmpzJztcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vanMvY29tcG9uZW50cy9DYXJkL0NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHtIQU1CVVJHRVJ9IGZyb20gJy4vanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7bGlua3NDYXRlZ29yaWVzfSBmcm9tIFwiLi9qcy9jb25zdGFudHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBoYW1idXJnZXIgPSBuZXcgSGFtYnVyZ2VyTWVudSgpO1xyXG5IQU1CVVJHRVIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW1idXJnZXIub3BlbkhhbWJ1cmdlck1lbnUuYmluZChoYW1idXJnZXIpKTtcclxuXHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gbmV3IENhdGVnb3JpZXMoKTtcclxuY2F0ZWdvcmllcy5hY3Rpb25TZXRBKCk7XHJcbmNhdGVnb3JpZXMub3Blbk1haW5QYWdlKCk7XHJcbiIsImV4cG9ydCBjb25zdCBjYXJkcyA9IFtcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdjcnknLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C70LDQutCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9jcnkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY3J5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZGFuY2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgtCw0L3RhtC10LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvZGFuY2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZGFuY2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkaXZlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L3Ri9GA0Y/RgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2RpdmUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZGl2ZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RyYXcnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNC40YHQvtCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2RyYXcuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZHJhdy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zpc2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfQu9C+0LLQuNGC0Ywg0YDRi9Cx0YMnLFxuICAgICAgaW1hZ2U6ICdpbWcvZmlzaC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9maXNoLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZmx5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQtdGC0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2ZseS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9mbHkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdodWcnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtCx0L3QuNC80LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2h1Zy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9odWcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdqdW1wJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/RgNGL0LPQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvanVtcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9qdW1wLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdvcGVuJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L7RgtC60YDRi9Cy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL29wZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vb3Blbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BsYXknLFxuICAgICAgdHJhbnNsYXRpb246ICfQuNCz0YDQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvcGxheS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wbGF5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncG9pbnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9C60LDQt9GL0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvcG9pbnQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcG9pbnQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdyaWRlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LXQt9C00LjRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3JpZGUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcmlkZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3J1bicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0LXQs9Cw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9ydW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcnVuLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2luZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LXRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3NpbmcuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2luZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NraXAnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9GA0L7Qv9GD0YHQutCw0YLRjCwg0L/RgNGL0LPQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvc2tpcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9za2lwLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc3dpbScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LvQsNCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3N3aW0uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc3dpbS5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnY2F0JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LrQvtGCJyxcbiAgICAgIGltYWdlOiAnaW1nL2NhdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9jYXQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdjaGljaycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GG0YvQv9C70ZHQvdC+0LonLFxuICAgICAgaW1hZ2U6ICdpbWcvY2hpY2suanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2hpY2subXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdjaGlja2VuJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LrRg9GA0LjRhtCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2NoaWNrZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2hpY2tlbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RvZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0L7QsdCw0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9kb2cuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZG9nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnaG9yc2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfQu9C+0YjQsNC00YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvaG9yc2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaG9yc2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwaWcnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdCy0LjQvdGM0Y8nLFxuICAgICAgaW1hZ2U6ICdpbWcvcGlnLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BpZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3JhYmJpdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60YDQvtC70LjQuicsXG4gICAgICBpbWFnZTogJ2ltZy9yYWJiaXQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcmFiYml0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2hlZXAnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtCy0YbQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9zaGVlcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaGVlcC5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnYmlyZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0YLQuNGG0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvYmlyZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9iaXJkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZmlzaCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0YvQsdCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2Zpc2gxLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Zpc2gubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdmcm9nJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LbQsNCx0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvZnJvZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9mcm9nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZ2lyYWZmZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C20LjRgNCw0YTQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9naXJhZmZlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2dpcmFmZmUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdsaW9uJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQtdCyJyxcbiAgICAgIGltYWdlOiAnaW1nL2xpb24uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbGlvbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ21vdXNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LzRi9GI0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvbW91c2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbW91c2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICd0dXJ0bGUnLFxuICAgICAgdHJhbnNsYXRpb246ICfRh9C10YDQtdC/0LDRhdCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3R1cnRsZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby90dXJ0bGUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkb2xwaGluJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LTQtdC70YzRhNC40L0nLFxuICAgICAgaW1hZ2U6ICdpbWcvZG9scGhpbi5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kb2xwaGluLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdza2lydCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GO0LHQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3NraXJ0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NraXJ0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGFudHMnLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdGA0Y7QutC4JyxcbiAgICAgIGltYWdlOiAnaW1nL3BhbnRzLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BhbnRzLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYmxvdXNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHQu9GD0LfQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2Jsb3VzZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ibG91c2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkcmVzcycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LvQsNGC0YzQtScsXG4gICAgICBpbWFnZTogJ2ltZy9kcmVzcy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kcmVzcy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Jvb3QnLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdC+0YLQuNC90L7QuicsXG4gICAgICBpbWFnZTogJ2ltZy9ib290LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Jvb3QubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaGlydCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0YPQsdCw0YjQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3NoaXJ0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NoaXJ0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnY29hdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LDQu9GM0YLQvicsXG4gICAgICBpbWFnZTogJ2ltZy9jb2F0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NvYXQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaG9lJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YLRg9GE0LvQuCcsXG4gICAgICBpbWFnZTogJ2ltZy9zaG9lLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3Nob2UubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ3NhZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cz0YDRg9GB0YLQvdGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvc2FkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NhZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2FuZ3J5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQtdGA0LTQuNGC0YvQuScsXG4gICAgICBpbWFnZTogJ2ltZy9hbmdyeS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9hbmdyeS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2hhcHB5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHRh9Cw0YHRgtC70LjQstGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvaGFwcHkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaGFwcHkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICd0aXJlZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0YHRgtCw0LLRiNC40LknLFxuICAgICAgaW1hZ2U6ICdpbWcvdGlyZWQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vdGlyZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzdXJwcmlzZWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9C00LjQstC70ZHQvdC90YvQuScsXG4gICAgICBpbWFnZTogJ2ltZy9zdXJwcmlzZWQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc3VycHJpc2VkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2NhcmVkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LjRgdC/0YPQs9Cw0L3QvdGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvc2NhcmVkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NjYXJlZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NtaWxlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQu9GL0LHQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3NtaWxlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NtaWxlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnbGF1Z2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdC80LXRhScsXG4gICAgICBpbWFnZTogJ2ltZy9sYXVnaC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9sYXVnaC5tcDMnLFxuICAgIH0sXG4gIF0sXG5dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRzO1xuIiwiaW1wb3J0IGNhcmRzIGZyb20gJy4uLy4uL2NhcmRzJztcbmltcG9ydCB7IGNhcmRDYXRlZ29yaWVzSW1nLCBjYXJkQ2F0ZWdvcmllc1RleHQsIGxpbmtzQ2F0ZWdvcmllcywgbWFpblBhZ2VDb250YWluZXIsIGNhdGVnb3J5UGFnZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xubGV0IGNsaWNrTGluayA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFjdGlvblNldEEgPSB0aGlzLmFjdGlvblNldEEuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9wZW5NYWluUGFnZSgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbGFsYScpO1xuICAgICAgICAgIGNhdGVnb3J5UGFnZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIG1haW5QYWdlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSk7XG4gICAgICAvLyBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7ICdwYWdlX2lkJzogMX0sICdDYXJkcycsICdtYWluJyk7XG4gIH1cblxuICBvcGVuQ2F0ZWdvcnlQYWdlKCkge1xuICAgICAgbWFpblBhZ2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgbGlua3NDYXRlZ29yaWVzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgIGNhdGVnb3J5UGFnZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgbWFpblBhZ2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7ICdwYWdlX2lkJzogMn0sICdDYXJkcycsICdpbmRleC5odG1sIycpO1xuICAgICAgfSlcbiAgfVxuXG4gIGFjdGlvblNldEEoKSB7XG4gICAgICB0aGlzLm9wZW5DYXRlZ29yeVBhZ2UoKTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25sb2FkJywgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coY2FyZHNbMF0uaW1hZ2UpO1xuICAgIC8vICAgY2FyZHNbMF0ubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IGNhcmRDYXRlZ29yaWVzSW1nW2luZGV4XS5mb3JFYWNoKChjYXJkSW1nKSA9PiB7XG4gICAgLy8gICAgICAgY2FyZEltZy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGltZyBzcmM9XCIke2NhcmRzWzBdLmltYWdlfVwiPmApO1xuICAgIC8vICAgICB9KSwgNDAwKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgLy8gZWxzZSB7XG4gIC8vXG4gIC8vIH1cbiAgZ2VuZXJhdGVDb250ZW50KG51bWJlckNhdGVnb3J5KSB7XG4gICAgY2FyZHMubWFwKChjYXJkKSA9PiB7XG5cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSEFNQlVSR0VSLCBIQU1CVVJHRVJfTElTVCwgSEFNQlVSR0VSX05BViB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5sZXQgY2xpY2tzSGFtYnVyZ2VyID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFtYnVyZ2VyTWVudSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2xvc2VIYW1idXJnZXJNZW51ID0gdGhpcy5jbG9zZUhhbWJ1cmdlck1lbnUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5IYW1idXJnZXJNZW51KCkge1xuICAgIGlmIChjbGlja3NIYW1idXJnZXIgPT09IDApIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgIEhBTUJVUkdFUl9OQVYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBIQU1CVVJHRVJfTkFWLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDB2dyknO1xuICAgICAgICBIQU1CVVJHRVJfTElTVC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwdncpJztcbiAgICAgIH0sIDUwKTtcbiAgICAgIEhBTUJVUkdFUi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICBjbGlja3NIYW1idXJnZXIgKz0gMTtcbiAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VIYW1idXJnZXJNZW51KCk7XG4gICAgICB0aGlzLm9uQmx1ckhhbWJ1cmdlck1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUhhbWJ1cmdlck1lbnUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBIQU1CVVJHRVJfTkFWLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScsIDMwMCk7XG4gICAgSEFNQlVSR0VSX05BVi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNzV2dyknO1xuICAgIEhBTUJVUkdFUl9MSVNULnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC03NXZ3KSc7XG4gICAgSEFNQlVSR0VSLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgIGNsaWNrc0hhbWJ1cmdlciA9IDA7XG4gIH1cblxuICBvbkJsdXJIYW1idXJnZXJNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCdibHVyJyk7XG4gICAgSEFNQlVSR0VSX0xJU1QuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZUhhbWJ1cmdlck1lbnUoKTtcbiAgICB9LCB0cnVlKTtcbiAgfVxufVxuIiwiLy9tYWluUGFnZTpcbmV4cG9ydCBjb25zdCBtYWluUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluX3BhZ2UnKTtcbmV4cG9ydCBjb25zdCBsaW5rc0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuXG4vLyBoYW1idXJnZXI6XG5leHBvcnQgY29uc3QgSEFNQlVSR0VSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpO1xuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUl9OQVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyX21lbnUnKTtcbmV4cG9ydCBjb25zdCBIQU1CVVJHRVJfTElTVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXJfbGlzdCcpO1xuLy8gY2F0ZWdvcmllc1BhZ2U6XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5X3BhZ2UnKTtcbmV4cG9ydCBjb25zdCBjYXJkQ2F0ZWdvcmllc0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1jYXJkIGltZycpO1xuZXhwb3J0IGNvbnN0IGNhcmRDYXRlZ29yaWVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1jYXJkLWJvZHkgaDUnKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==