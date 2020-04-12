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
/* harmony import */ var _js_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/constants/constants */ "./src/js/constants/constants.js");




const hamburger = new _js_components_Header_HamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["HAMBURGER"].addEventListener('click', hamburger.openHamburgerMenu);
_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["BLACKOUT"].addEventListener('click', hamburger.closeHamburgerMenu);
_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["HAMBURGER_LIST"].addEventListener('click', event => hamburger.closeAfterClickToLinks(event));



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
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["categoryPageContainer"].style.display = 'none';
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["mainPageContainer"].style.display = 'block';
      });
  }

  openCategoryPage() {
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["linksCategories"].forEach(link => {
              link.addEventListener('click', () => {
                  _constants_constants__WEBPACK_IMPORTED_MODULE_1__["categoryPageContainer"].style.display = 'block';
                  _constants_constants__WEBPACK_IMPORTED_MODULE_1__["mainPageContainer"].style.display = 'none';
                  history.pushState({ 'page_id': 2}, 'Cards', 'index.html#');
              });
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
    this.openHamburgerMenu = this.openHamburgerMenu.bind(this);
    this.closeAfterClickToLinks = this.closeAfterClickToLinks.bind(this);
  }

  async openHamburgerMenu() {
    if (clicksHamburger === 0) {
      const promise = new Promise(() => {
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.display = 'block';
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__["BLACKOUT"].style.display = 'block';
      });
      setTimeout(() => {
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.transform = 'translateX(0vw)';
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LIST"].style.transform = 'translateX(0vw)';
      }, 50);
      this.transformBurger();
      clicksHamburger += 1;
      await promise;
    } else {
      this.closeHamburgerMenu();
    }
  }

  transformBurger() {
    if (clicksHamburger === 0) {
      _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LINES"][0].style.transform = 'rotate(45deg)' + 'translateY(10px)';
      _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LINES"][2].style.transform = 'rotate(-45deg)' + 'translateY(-10px)';
      _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LINES"][1].style.opacity = '0';
    }
    else {
      _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LINES"][0].style.transform = 'rotate(0deg)' + 'translateY(0px)';
      _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LINES"][2].style.transform = 'rotate(0deg)' + 'translateY(0px)';
      _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LINES"][1].style.opacity = '1';
    }

  }

  closeHamburgerMenu() {
    setTimeout(() => _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.display = 'none', 300);
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"].style.transform = 'translateX(-75vw)';
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LIST"].style.transform = 'translateX(-75vw)';
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER"].style.transform = 'rotate(0deg)';
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["BLACKOUT"].style.display = 'none';
    this.transformBurger();
    clicksHamburger = 0;
  }

  isHamburgerMenu() {
    document.addEventListener('click', event => {
      return event.target === _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LIST"] || event.target === _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_NAV"];
    })
  }

  closeAfterClickToLinks(event) {
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__["HAMBURGER_LINKS"].forEach(link => {
      if(event.target === link) {
        this.closeHamburgerMenu()
      }
    })
  }

}


/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/*! exports provided: mainPageContainer, linksCategories, HAMBURGER, HAMBURGER_NAV, HAMBURGER_LIST, BLACKOUT, HAMBURGER_LINES, HAMBURGER_LINKS, categoryPageContainer, cardCategoriesImg, cardCategoriesText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPageContainer", function() { return mainPageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linksCategories", function() { return linksCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER", function() { return HAMBURGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_NAV", function() { return HAMBURGER_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_LIST", function() { return HAMBURGER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLACKOUT", function() { return BLACKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_LINES", function() { return HAMBURGER_LINES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_LINKS", function() { return HAMBURGER_LINKS; });
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
const BLACKOUT = document.getElementById('popup_blackout');
const HAMBURGER_LINES = document.querySelectorAll('.hamburger_line');
const HAMBURGER_LINKS = document.querySelectorAll('.hamburger_menu__list__item a');

// categoriesPage:
const categoryPageContainer = document.getElementById('category_page');
const cardCategoriesImg = document.querySelectorAll('.category-card img');
const cardCategoriesText = document.querySelectorAll('.category-card-body h5');



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYXJkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNYO0FBQ21COztBQUU1RSxzQkFBc0IsOEVBQWE7QUFDbkMsaUVBQVM7QUFDVCxnRUFBUTtBQUNSLHNFQUFjOzs7O0FBSWQsdUJBQXVCLHNFQUFVO0FBQ2pDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR2Usb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hUckI7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDNkc7QUFDN0k7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsMEVBQXFCO0FBQy9CLFVBQVUsc0VBQWlCO0FBQzNCLE9BQU87QUFDUDs7QUFFQTtBQUNBLFVBQVUsb0VBQWU7QUFDekI7QUFDQSxrQkFBa0IsMEVBQXFCO0FBQ3ZDLGtCQUFrQixzRUFBaUI7QUFDbkMscUNBQXFDLGNBQWM7QUFDbkQsZUFBZTtBQUNmLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsZUFBZTtBQUNsRixZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQUs7O0FBRVQsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBT21DOztBQUVuQzs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBYTtBQUNyQixRQUFRLDZEQUFRO0FBQ2hCLE9BQU87QUFDUDtBQUNBLFFBQVEsa0VBQWE7QUFDckIsUUFBUSxtRUFBYztBQUN0QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxvRUFBZTtBQUNyQixNQUFNLG9FQUFlO0FBQ3JCLE1BQU0sb0VBQWU7QUFDckI7QUFDQTtBQUNBLE1BQU0sb0VBQWU7QUFDckIsTUFBTSxvRUFBZTtBQUNyQixNQUFNLG9FQUFlO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGtFQUFhO0FBQ2xDLElBQUksa0VBQWE7QUFDakIsSUFBSSxtRUFBYztBQUNsQixJQUFJLDhEQUFTO0FBQ2IsSUFBSSw2REFBUTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG1FQUFjLHFCQUFxQixrRUFBYTtBQUM5RSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLG9FQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSGFtYnVyZ2VyTWVudSBmcm9tICcuL2pzL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlck1lbnUuanMnO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9qcy9jb21wb25lbnRzL0NhcmQvQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQge0hBTUJVUkdFUixCTEFDS09VVCwgSEFNQlVSR0VSX0xJU1R9IGZyb20gXCIuL2pzL2NvbnN0YW50cy9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGhhbWJ1cmdlciA9IG5ldyBIYW1idXJnZXJNZW51KCk7XHJcbkhBTUJVUkdFUi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbWJ1cmdlci5vcGVuSGFtYnVyZ2VyTWVudSk7XHJcbkJMQUNLT1VULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFtYnVyZ2VyLmNsb3NlSGFtYnVyZ2VyTWVudSk7XHJcbkhBTUJVUkdFUl9MSVNULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gaGFtYnVyZ2VyLmNsb3NlQWZ0ZXJDbGlja1RvTGlua3MoZXZlbnQpKTtcclxuXHJcblxyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9IG5ldyBDYXRlZ29yaWVzKCk7XHJcbmNhdGVnb3JpZXMuYWN0aW9uU2V0QSgpO1xyXG5jYXRlZ29yaWVzLm9wZW5NYWluUGFnZSgpO1xyXG4iLCJleHBvcnQgY29uc3QgY2FyZHMgPSBbXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnY3J5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/Qu9Cw0LrQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvY3J5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NyeS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RhbmNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YLQsNC90YbQtdCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2RhbmNlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RhbmNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZGl2ZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C90YvRgNGP0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9kaXZlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RpdmUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkcmF3JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YDQuNGB0L7QstCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9kcmF3LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RyYXcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdmaXNoJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQvtCy0LjRgtGMINGA0YvQsdGDJyxcbiAgICAgIGltYWdlOiAnaW1nL2Zpc2guanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZmlzaC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2ZseScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C70LXRgtCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9mbHkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZmx5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnaHVnJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L7QsdC90LjQvNCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9odWcuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaHVnLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnanVtcCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0YDRi9Cz0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2p1bXAuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vanVtcC5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnb3BlbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C+0YLQutGA0YvQstCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9vcGVuLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL29wZW4ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwbGF5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LjQs9GA0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3BsYXkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcGxheS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BvaW50JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQutCw0LfRi9Cy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3BvaW50LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BvaW50Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncmlkZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C10LfQtNC40YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9yaWRlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3JpZGUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdydW4nLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdC10LPQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvcnVuLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3J1bi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NpbmcnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C10YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9zaW5nLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NpbmcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdza2lwJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/RgNC+0L/Rg9GB0LrQsNGC0YwsINC/0YDRi9Cz0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3NraXAuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2tpcC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3N3aW0nLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C70LDQstCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9zd2ltLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3N3aW0ubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2NhdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60L7RgicsXG4gICAgICBpbWFnZTogJ2ltZy9jYXQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2F0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnY2hpY2snLFxuICAgICAgdHJhbnNsYXRpb246ICfRhtGL0L/Qu9GR0L3QvtC6JyxcbiAgICAgIGltYWdlOiAnaW1nL2NoaWNrLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NoaWNrLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnY2hpY2tlbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60YPRgNC40YbQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9jaGlja2VuLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NoaWNrZW4ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkb2cnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdC+0LHQsNC60LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvZG9nLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RvZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2hvcnNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQvtGI0LDQtNGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2hvcnNlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2hvcnNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGlnJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQstC40L3RjNGPJyxcbiAgICAgIGltYWdlOiAnaW1nL3BpZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9waWcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdyYWJiaXQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQutGA0L7Qu9C40LonLFxuICAgICAgaW1hZ2U6ICdpbWcvcmFiYml0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3JhYmJpdC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NoZWVwJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L7QstGG0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvc2hlZXAuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2hlZXAubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2JpcmQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9GC0LjRhtCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2JpcmQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYmlyZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zpc2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNGL0LHQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9maXNoMS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9maXNoLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZnJvZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C20LDQsdCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2Zyb2cuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZnJvZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2dpcmFmZmUnLFxuICAgICAgdHJhbnNsYXRpb246ICfQttC40YDQsNGE0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvZ2lyYWZmZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9naXJhZmZlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnbGlvbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C70LXQsicsXG4gICAgICBpbWFnZTogJ2ltZy9saW9uLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2xpb24ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdtb3VzZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C80YvRiNGMJyxcbiAgICAgIGltYWdlOiAnaW1nL21vdXNlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL21vdXNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAndHVydGxlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YfQtdGA0LXQv9Cw0YXQsCcsXG4gICAgICBpbWFnZTogJ2ltZy90dXJ0bGUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vdHVydGxlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZG9scGhpbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C00LXQu9GM0YTQuNC9JyxcbiAgICAgIGltYWdlOiAnaW1nL2RvbHBoaW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZG9scGhpbi5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnc2tpcnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRjtCx0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9za2lydC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9za2lydC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BhbnRzJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHRgNGO0LrQuCcsXG4gICAgICBpbWFnZTogJ2ltZy9wYW50cy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wYW50cy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Jsb3VzZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0LvRg9C30LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9ibG91c2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYmxvdXNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJlc3MnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C70LDRgtGM0LUnLFxuICAgICAgaW1hZ2U6ICdpbWcvZHJlc3MuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZHJlc3MubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdib290JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHQvtGC0LjQvdC+0LonLFxuICAgICAgaW1hZ2U6ICdpbWcvYm9vdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ib290Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2hpcnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNGD0LHQsNGI0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9zaGlydC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaGlydC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2NvYXQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9Cw0LvRjNGC0L4nLFxuICAgICAgaW1hZ2U6ICdpbWcvY29hdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9jb2F0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2hvZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GC0YPRhNC70LgnLFxuICAgICAgaW1hZ2U6ICdpbWcvc2hvZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaG9lLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdzYWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQs9GA0YPRgdGC0L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL3NhZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zYWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdhbmdyeScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0LXRgNC00LjRgtGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvYW5ncnkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYW5ncnkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdoYXBweScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0YfQsNGB0YLQu9C40LLRi9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL2hhcHB5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2hhcHB5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAndGlyZWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9GB0YLQsNCy0YjQuNC5JyxcbiAgICAgIGltYWdlOiAnaW1nL3RpcmVkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3RpcmVkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc3VycHJpc2VkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQtNC40LLQu9GR0L3QvdGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvc3VycHJpc2VkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3N1cnByaXNlZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NjYXJlZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C40YHQv9GD0LPQsNC90L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL3NjYXJlZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zY2FyZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzbWlsZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0LvRi9Cx0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9zbWlsZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zbWlsZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2xhdWdoJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQvNC10YUnLFxuICAgICAgaW1hZ2U6ICdpbWcvbGF1Z2guanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbGF1Z2gubXAzJyxcbiAgICB9LFxuICBdLFxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBjYXJkcztcbiIsImltcG9ydCBjYXJkcyBmcm9tICcuLi8uLi9jYXJkcyc7XG5pbXBvcnQgeyBjYXJkQ2F0ZWdvcmllc0ltZywgY2FyZENhdGVnb3JpZXNUZXh0LCBsaW5rc0NhdGVnb3JpZXMsIG1haW5QYWdlQ29udGFpbmVyLCBjYXRlZ29yeVBhZ2VDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcbmxldCBjbGlja0xpbmsgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yaWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hY3Rpb25TZXRBID0gdGhpcy5hY3Rpb25TZXRBLmJpbmQodGhpcyk7XG4gIH1cblxuICBvcGVuTWFpblBhZ2UoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgY2F0ZWdvcnlQYWdlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgbWFpblBhZ2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9wZW5DYXRlZ29yeVBhZ2UoKSB7XG4gICAgICAgICAgbGlua3NDYXRlZ29yaWVzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeVBhZ2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICBtYWluUGFnZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyAncGFnZV9pZCc6IDJ9LCAnQ2FyZHMnLCAnaW5kZXguaHRtbCMnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9KVxuICB9XG5cbiAgYWN0aW9uU2V0QSgpIHtcbiAgICAgIHRoaXMub3BlbkNhdGVnb3J5UGFnZSgpO1xuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxvYWQnLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhjYXJkc1swXS5pbWFnZSk7XG4gICAgLy8gICBjYXJkc1swXS5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gY2FyZENhdGVnb3JpZXNJbWdbaW5kZXhdLmZvckVhY2goKGNhcmRJbWcpID0+IHtcbiAgICAvLyAgICAgICBjYXJkSW1nLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8aW1nIHNyYz1cIiR7Y2FyZHNbMF0uaW1hZ2V9XCI+YCk7XG4gICAgLy8gICAgIH0pLCA0MDApO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvLyBlbHNlIHtcbiAgLy9cbiAgLy8gfVxuICBnZW5lcmF0ZUNvbnRlbnQobnVtYmVyQ2F0ZWdvcnkpIHtcbiAgICBjYXJkcy5tYXAoKGNhcmQpID0+IHtcblxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBIQU1CVVJHRVIsXG4gIEhBTUJVUkdFUl9MSVNULFxuICBIQU1CVVJHRVJfTkFWLFxuICBCTEFDS09VVCxcbiAgSEFNQlVSR0VSX0xJTkVTLFxuICBIQU1CVVJHRVJfTElOS1Ncbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmxldCBjbGlja3NIYW1idXJnZXIgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW1idXJnZXJNZW51IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jbG9zZUhhbWJ1cmdlck1lbnUgPSB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbkhhbWJ1cmdlck1lbnUgPSB0aGlzLm9wZW5IYW1idXJnZXJNZW51LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFmdGVyQ2xpY2tUb0xpbmtzID0gdGhpcy5jbG9zZUFmdGVyQ2xpY2tUb0xpbmtzLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBvcGVuSGFtYnVyZ2VyTWVudSgpIHtcbiAgICBpZiAoY2xpY2tzSGFtYnVyZ2VyID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICBIQU1CVVJHRVJfTkFWLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBCTEFDS09VVC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIEhBTUJVUkdFUl9OQVYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHZ3KSc7XG4gICAgICAgIEhBTUJVUkdFUl9MSVNULnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDB2dyknO1xuICAgICAgfSwgNTApO1xuICAgICAgdGhpcy50cmFuc2Zvcm1CdXJnZXIoKTtcbiAgICAgIGNsaWNrc0hhbWJ1cmdlciArPSAxO1xuICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZUhhbWJ1cmdlck1lbnUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFuc2Zvcm1CdXJnZXIoKSB7XG4gICAgaWYgKGNsaWNrc0hhbWJ1cmdlciA9PT0gMCkge1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoNDVkZWcpJyArICd0cmFuc2xhdGVZKDEwcHgpJztcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1syXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC00NWRlZyknICsgJ3RyYW5zbGF0ZVkoLTEwcHgpJztcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1sxXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1swXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJyArICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzJdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknICsgJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICBIQU1CVVJHRVJfTElORVNbMV0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG5cbiAgfVxuXG4gIGNsb3NlSGFtYnVyZ2VyTWVudSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IEhBTUJVUkdFUl9OQVYuc3R5bGUuZGlzcGxheSA9ICdub25lJywgMzAwKTtcbiAgICBIQU1CVVJHRVJfTkFWLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC03NXZ3KSc7XG4gICAgSEFNQlVSR0VSX0xJU1Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTc1dncpJztcbiAgICBIQU1CVVJHRVIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgQkxBQ0tPVVQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLnRyYW5zZm9ybUJ1cmdlcigpO1xuICAgIGNsaWNrc0hhbWJ1cmdlciA9IDA7XG4gIH1cblxuICBpc0hhbWJ1cmdlck1lbnUoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0ID09PSBIQU1CVVJHRVJfTElTVCB8fCBldmVudC50YXJnZXQgPT09IEhBTUJVUkdFUl9OQVY7XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlQWZ0ZXJDbGlja1RvTGlua3MoZXZlbnQpIHtcbiAgICBIQU1CVVJHRVJfTElOS1MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgIGlmKGV2ZW50LnRhcmdldCA9PT0gbGluaykge1xuICAgICAgICB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG4iLCIvL21haW5QYWdlOlxuZXhwb3J0IGNvbnN0IG1haW5QYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5fcGFnZScpO1xuZXhwb3J0IGNvbnN0IGxpbmtzQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG5cbi8vIGhhbWJ1cmdlcjpcbmV4cG9ydCBjb25zdCBIQU1CVVJHRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJyk7XG5leHBvcnQgY29uc3QgSEFNQlVSR0VSX05BViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXJfbWVudScpO1xuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUl9MSVNUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcl9saXN0Jyk7XG5leHBvcnQgY29uc3QgQkxBQ0tPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfYmxhY2tvdXQnKTtcbmV4cG9ydCBjb25zdCBIQU1CVVJHRVJfTElORVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGFtYnVyZ2VyX2xpbmUnKTtcbmV4cG9ydCBjb25zdCBIQU1CVVJHRVJfTElOS1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGFtYnVyZ2VyX21lbnVfX2xpc3RfX2l0ZW0gYScpO1xuXG4vLyBjYXRlZ29yaWVzUGFnZTpcbmV4cG9ydCBjb25zdCBjYXRlZ29yeVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnlfcGFnZScpO1xuZXhwb3J0IGNvbnN0IGNhcmRDYXRlZ29yaWVzSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWNhcmQgaW1nJyk7XG5leHBvcnQgY29uc3QgY2FyZENhdGVnb3JpZXNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWNhcmQtYm9keSBoNScpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9