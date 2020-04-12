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
    // this.openCategoryPage = this.openCategoryPage(this);
  }

  openMainPage() {
      window.addEventListener('popstate', () => {
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_PAGE_CONTAINER"].style.display = 'none';
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["MAIN_PAGE_CONTAINER"].style.display = 'block';
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["TITLE_CATEGORY"].innerHTML = '';
      });
  }

  openCategoryPage(link) {
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["TITLE_CATEGORY"].innerHTML = link.textContent;
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_PAGE_CONTAINER"].style.display = 'block';
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["MAIN_PAGE_CONTAINER"].style.display = 'none';
      history.pushState({ 'page_id': 2}, 'Cards', 'index.html#');
  }


  actionSetA() {
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["LINKS_CATEGORIES"].forEach(link => {
          link.addEventListener('click', () => {
              this.openCategoryPage(link);
          });
      });
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["HAMBURGER_LINKS"].forEach(link => {
          link.addEventListener('click', () => {
              this.openCategoryPage(link);
          });
      });


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
/*! exports provided: MAIN_PAGE_CONTAINER, LINKS_CATEGORIES, HAMBURGER, HAMBURGER_NAV, HAMBURGER_LIST, BLACKOUT, HAMBURGER_LINES, HAMBURGER_LINKS, CATEGORY_PAGE_CONTAINER, CARD_CATEGORIES_IMG, CARD_CATEGORIES_TEXT, TITLE_CATEGORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_PAGE_CONTAINER", function() { return MAIN_PAGE_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINKS_CATEGORIES", function() { return LINKS_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER", function() { return HAMBURGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_NAV", function() { return HAMBURGER_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_LIST", function() { return HAMBURGER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLACKOUT", function() { return BLACKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_LINES", function() { return HAMBURGER_LINES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAMBURGER_LINKS", function() { return HAMBURGER_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_PAGE_CONTAINER", function() { return CATEGORY_PAGE_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CATEGORIES_IMG", function() { return CARD_CATEGORIES_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CATEGORIES_TEXT", function() { return CARD_CATEGORIES_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_CATEGORY", function() { return TITLE_CATEGORY; });
//mainPage:
const MAIN_PAGE_CONTAINER = document.getElementById('main_page');
const LINKS_CATEGORIES = document.querySelectorAll('.card');

// hamburger:
const HAMBURGER = document.getElementById('hamburger');
const HAMBURGER_NAV = document.getElementById('hamburger_menu');
const HAMBURGER_LIST = document.getElementById('hamburger_list');
const BLACKOUT = document.getElementById('popup_blackout');
const HAMBURGER_LINES = document.querySelectorAll('.hamburger_line');
const HAMBURGER_LINKS = document.querySelectorAll('.hamburger_menu__list__item a');

// categoriesPage:
const CATEGORY_PAGE_CONTAINER = document.getElementById('category_page');
const CARD_CATEGORIES_IMG = document.querySelectorAll('.category-card img');
const CARD_CATEGORIES_TEXT = document.querySelectorAll('.category-card-body h5');
const TITLE_CATEGORY = document.getElementById('header_title');



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYXJkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNYO0FBQ21COztBQUU1RSxzQkFBc0IsOEVBQWE7QUFDbkMsaUVBQVM7QUFDVCxnRUFBUTtBQUNSLHNFQUFjOzs7O0FBSWQsdUJBQXVCLHNFQUFVO0FBQ2pDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR2Usb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hUckI7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFTRztBQUNuQzs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLDRFQUF1QjtBQUNqQyxVQUFVLHdFQUFtQjtBQUM3QixVQUFVLG1FQUFjO0FBQ3hCLE9BQU87QUFDUDs7QUFFQTtBQUNBLE1BQU0sbUVBQWM7QUFDcEIsTUFBTSw0RUFBdUI7QUFDN0IsTUFBTSx3RUFBbUI7QUFDekIseUJBQXlCLGNBQWM7QUFDdkM7OztBQUdBO0FBQ0EsTUFBTSxxRUFBZ0I7QUFDdEI7QUFDQTtBQUNBLFdBQVc7QUFDWCxPQUFPO0FBQ1AsTUFBTSxvRUFBZTtBQUNyQjtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGVBQWU7QUFDbEYsWUFBWTtBQUNaLFVBQVU7QUFDVixRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFLOztBQUVULEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQU9tQzs7QUFFbkM7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQWE7QUFDckIsUUFBUSw2REFBUTtBQUNoQixPQUFPO0FBQ1A7QUFDQSxRQUFRLGtFQUFhO0FBQ3JCLFFBQVEsbUVBQWM7QUFDdEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sb0VBQWU7QUFDckIsTUFBTSxvRUFBZTtBQUNyQixNQUFNLG9FQUFlO0FBQ3JCO0FBQ0E7QUFDQSxNQUFNLG9FQUFlO0FBQ3JCLE1BQU0sb0VBQWU7QUFDckIsTUFBTSxvRUFBZTtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixrRUFBYTtBQUNsQyxJQUFJLGtFQUFhO0FBQ2pCLElBQUksbUVBQWM7QUFDbEIsSUFBSSw4REFBUztBQUNiLElBQUksNkRBQVE7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixtRUFBYyxxQkFBcUIsa0VBQWE7QUFDOUUsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSxvRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleF9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIYW1idXJnZXJNZW51IGZyb20gJy4vanMvY29tcG9uZW50cy9IZWFkZXIvSGFtYnVyZ2VyTWVudS5qcyc7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuL2pzL2NvbXBvbmVudHMvQ2FyZC9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7SEFNQlVSR0VSLEJMQUNLT1VULCBIQU1CVVJHRVJfTElTVH0gZnJvbSBcIi4vanMvY29uc3RhbnRzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaGFtYnVyZ2VyID0gbmV3IEhhbWJ1cmdlck1lbnUoKTtcclxuSEFNQlVSR0VSLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFtYnVyZ2VyLm9wZW5IYW1idXJnZXJNZW51KTtcclxuQkxBQ0tPVVQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW1idXJnZXIuY2xvc2VIYW1idXJnZXJNZW51KTtcclxuSEFNQlVSR0VSX0xJU1QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBoYW1idXJnZXIuY2xvc2VBZnRlckNsaWNrVG9MaW5rcyhldmVudCkpO1xyXG5cclxuXHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gbmV3IENhdGVnb3JpZXMoKTtcclxuY2F0ZWdvcmllcy5hY3Rpb25TZXRBKCk7XHJcbmNhdGVnb3JpZXMub3Blbk1haW5QYWdlKCk7XHJcbiIsImV4cG9ydCBjb25zdCBjYXJkcyA9IFtcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdjcnknLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C70LDQutCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9jcnkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY3J5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZGFuY2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgtCw0L3RhtC10LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvZGFuY2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZGFuY2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkaXZlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L3Ri9GA0Y/RgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2RpdmUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZGl2ZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RyYXcnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNC40YHQvtCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2RyYXcuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZHJhdy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zpc2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfQu9C+0LLQuNGC0Ywg0YDRi9Cx0YMnLFxuICAgICAgaW1hZ2U6ICdpbWcvZmlzaC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9maXNoLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZmx5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQtdGC0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2ZseS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9mbHkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdodWcnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtCx0L3QuNC80LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2h1Zy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9odWcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdqdW1wJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/RgNGL0LPQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvanVtcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9qdW1wLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdvcGVuJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L7RgtC60YDRi9Cy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL29wZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vb3Blbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BsYXknLFxuICAgICAgdHJhbnNsYXRpb246ICfQuNCz0YDQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvcGxheS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wbGF5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncG9pbnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9C60LDQt9GL0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvcG9pbnQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcG9pbnQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdyaWRlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LXQt9C00LjRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3JpZGUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcmlkZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3J1bicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0LXQs9Cw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9ydW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcnVuLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2luZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LXRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3NpbmcuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2luZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NraXAnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9GA0L7Qv9GD0YHQutCw0YLRjCwg0L/RgNGL0LPQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvc2tpcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9za2lwLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc3dpbScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LvQsNCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3N3aW0uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc3dpbS5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnY2F0JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LrQvtGCJyxcbiAgICAgIGltYWdlOiAnaW1nL2NhdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9jYXQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdjaGljaycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GG0YvQv9C70ZHQvdC+0LonLFxuICAgICAgaW1hZ2U6ICdpbWcvY2hpY2suanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2hpY2subXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdjaGlja2VuJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LrRg9GA0LjRhtCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2NoaWNrZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2hpY2tlbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RvZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0L7QsdCw0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9kb2cuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZG9nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnaG9yc2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfQu9C+0YjQsNC00YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvaG9yc2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaG9yc2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwaWcnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdCy0LjQvdGM0Y8nLFxuICAgICAgaW1hZ2U6ICdpbWcvcGlnLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BpZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3JhYmJpdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60YDQvtC70LjQuicsXG4gICAgICBpbWFnZTogJ2ltZy9yYWJiaXQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcmFiYml0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2hlZXAnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtCy0YbQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9zaGVlcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaGVlcC5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnYmlyZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0YLQuNGG0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvYmlyZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9iaXJkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZmlzaCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0YvQsdCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2Zpc2gxLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Zpc2gubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdmcm9nJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LbQsNCx0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvZnJvZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9mcm9nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZ2lyYWZmZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C20LjRgNCw0YTQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9naXJhZmZlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2dpcmFmZmUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdsaW9uJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQtdCyJyxcbiAgICAgIGltYWdlOiAnaW1nL2xpb24uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbGlvbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ21vdXNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LzRi9GI0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvbW91c2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbW91c2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICd0dXJ0bGUnLFxuICAgICAgdHJhbnNsYXRpb246ICfRh9C10YDQtdC/0LDRhdCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3R1cnRsZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby90dXJ0bGUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkb2xwaGluJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LTQtdC70YzRhNC40L0nLFxuICAgICAgaW1hZ2U6ICdpbWcvZG9scGhpbi5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kb2xwaGluLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdza2lydCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GO0LHQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3NraXJ0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NraXJ0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGFudHMnLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdGA0Y7QutC4JyxcbiAgICAgIGltYWdlOiAnaW1nL3BhbnRzLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BhbnRzLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYmxvdXNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHQu9GD0LfQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2Jsb3VzZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ibG91c2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkcmVzcycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LvQsNGC0YzQtScsXG4gICAgICBpbWFnZTogJ2ltZy9kcmVzcy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kcmVzcy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Jvb3QnLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdC+0YLQuNC90L7QuicsXG4gICAgICBpbWFnZTogJ2ltZy9ib290LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Jvb3QubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaGlydCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0YPQsdCw0YjQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3NoaXJ0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NoaXJ0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnY29hdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LDQu9GM0YLQvicsXG4gICAgICBpbWFnZTogJ2ltZy9jb2F0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NvYXQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaG9lJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YLRg9GE0LvQuCcsXG4gICAgICBpbWFnZTogJ2ltZy9zaG9lLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3Nob2UubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ3NhZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cz0YDRg9GB0YLQvdGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvc2FkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NhZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2FuZ3J5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQtdGA0LTQuNGC0YvQuScsXG4gICAgICBpbWFnZTogJ2ltZy9hbmdyeS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9hbmdyeS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2hhcHB5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHRh9Cw0YHRgtC70LjQstGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvaGFwcHkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaGFwcHkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICd0aXJlZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0YHRgtCw0LLRiNC40LknLFxuICAgICAgaW1hZ2U6ICdpbWcvdGlyZWQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vdGlyZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzdXJwcmlzZWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9C00LjQstC70ZHQvdC90YvQuScsXG4gICAgICBpbWFnZTogJ2ltZy9zdXJwcmlzZWQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc3VycHJpc2VkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2NhcmVkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LjRgdC/0YPQs9Cw0L3QvdGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvc2NhcmVkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NjYXJlZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NtaWxlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQu9GL0LHQutCwJyxcbiAgICAgIGltYWdlOiAnaW1nL3NtaWxlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NtaWxlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnbGF1Z2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdC80LXRhScsXG4gICAgICBpbWFnZTogJ2ltZy9sYXVnaC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9sYXVnaC5tcDMnLFxuICAgIH0sXG4gIF0sXG5dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNhcmRzO1xuIiwiaW1wb3J0IGNhcmRzIGZyb20gJy4uLy4uL2NhcmRzJztcbmltcG9ydCB7XG4gICAgSEFNQlVSR0VSX0xJTktTLFxuICAgIENBUkRfQ0FURUdPUklFU19JTUcsXG4gICAgQ0FSRF9DQVRFR09SSUVTX1RFWFQsXG4gICAgTElOS1NfQ0FURUdPUklFUyxcbiAgICBNQUlOX1BBR0VfQ09OVEFJTkVSLFxuICAgIENBVEVHT1JZX1BBR0VfQ09OVEFJTkVSLFxuICAgIFRJVExFX0NBVEVHT1JZXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xubGV0IGNsaWNrTGluayA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFjdGlvblNldEEgPSB0aGlzLmFjdGlvblNldEEuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLm9wZW5DYXRlZ29yeVBhZ2UgPSB0aGlzLm9wZW5DYXRlZ29yeVBhZ2UodGhpcyk7XG4gIH1cblxuICBvcGVuTWFpblBhZ2UoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgQ0FURUdPUllfUEFHRV9DT05UQUlORVIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBNQUlOX1BBR0VfQ09OVEFJTkVSLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIFRJVExFX0NBVEVHT1JZLmlubmVySFRNTCA9ICcnO1xuICAgICAgfSk7XG4gIH1cblxuICBvcGVuQ2F0ZWdvcnlQYWdlKGxpbmspIHtcbiAgICAgIFRJVExFX0NBVEVHT1JZLmlubmVySFRNTCA9IGxpbmsudGV4dENvbnRlbnQ7XG4gICAgICBDQVRFR09SWV9QQUdFX0NPTlRBSU5FUi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIE1BSU5fUEFHRV9DT05UQUlORVIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsgJ3BhZ2VfaWQnOiAyfSwgJ0NhcmRzJywgJ2luZGV4Lmh0bWwjJyk7XG4gIH1cblxuXG4gIGFjdGlvblNldEEoKSB7XG4gICAgICBMSU5LU19DQVRFR09SSUVTLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuQ2F0ZWdvcnlQYWdlKGxpbmspO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBIQU1CVVJHRVJfTElOS1MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9wZW5DYXRlZ29yeVBhZ2UobGluayk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubG9hZCcsICgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGNhcmRzWzBdLmltYWdlKTtcbiAgICAvLyAgIGNhcmRzWzBdLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBjYXJkQ2F0ZWdvcmllc0ltZ1tpbmRleF0uZm9yRWFjaCgoY2FyZEltZykgPT4ge1xuICAgIC8vICAgICAgIGNhcmRJbWcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxpbWcgc3JjPVwiJHtjYXJkc1swXS5pbWFnZX1cIj5gKTtcbiAgICAvLyAgICAgfSksIDQwMCk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8vIGVsc2Uge1xuICAvL1xuICAvLyB9XG4gIGdlbmVyYXRlQ29udGVudChudW1iZXJDYXRlZ29yeSkge1xuICAgIGNhcmRzLm1hcCgoY2FyZCkgPT4ge1xuXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEhBTUJVUkdFUixcbiAgSEFNQlVSR0VSX0xJU1QsXG4gIEhBTUJVUkdFUl9OQVYsXG4gIEJMQUNLT1VULFxuICBIQU1CVVJHRVJfTElORVMsXG4gIEhBTUJVUkdFUl9MSU5LU1xufSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxubGV0IGNsaWNrc0hhbWJ1cmdlciA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlck1lbnUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudSA9IHRoaXMuY2xvc2VIYW1idXJnZXJNZW51LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuSGFtYnVyZ2VyTWVudSA9IHRoaXMub3BlbkhhbWJ1cmdlck1lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWZ0ZXJDbGlja1RvTGlua3MgPSB0aGlzLmNsb3NlQWZ0ZXJDbGlja1RvTGlua3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5IYW1idXJnZXJNZW51KCkge1xuICAgIGlmIChjbGlja3NIYW1idXJnZXIgPT09IDApIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgIEhBTUJVUkdFUl9OQVYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIEJMQUNLT1VULnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgSEFNQlVSR0VSX05BVi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwdncpJztcbiAgICAgICAgSEFNQlVSR0VSX0xJU1Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHZ3KSc7XG4gICAgICB9LCA1MCk7XG4gICAgICB0aGlzLnRyYW5zZm9ybUJ1cmdlcigpO1xuICAgICAgY2xpY2tzSGFtYnVyZ2VyICs9IDE7XG4gICAgICBhd2FpdCBwcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zZm9ybUJ1cmdlcigpIHtcbiAgICBpZiAoY2xpY2tzSGFtYnVyZ2VyID09PSAwKSB7XG4gICAgICBIQU1CVVJHRVJfTElORVNbMF0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg0NWRlZyknICsgJ3RyYW5zbGF0ZVkoMTBweCknO1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzJdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTQ1ZGVnKScgKyAndHJhbnNsYXRlWSgtMTBweCknO1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzFdLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknICsgJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICBIQU1CVVJHRVJfTElORVNbMl0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKScgKyAndHJhbnNsYXRlWSgwcHgpJztcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1sxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICB9XG5cbiAgY2xvc2VIYW1idXJnZXJNZW51KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gSEFNQlVSR0VSX05BVi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnLCAzMDApO1xuICAgIEhBTUJVUkdFUl9OQVYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTc1dncpJztcbiAgICBIQU1CVVJHRVJfTElTVC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNzV2dyknO1xuICAgIEhBTUJVUkdFUi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICBCTEFDS09VVC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMudHJhbnNmb3JtQnVyZ2VyKCk7XG4gICAgY2xpY2tzSGFtYnVyZ2VyID0gMDtcbiAgfVxuXG4gIGlzSGFtYnVyZ2VyTWVudSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIHJldHVybiBldmVudC50YXJnZXQgPT09IEhBTUJVUkdFUl9MSVNUIHx8IGV2ZW50LnRhcmdldCA9PT0gSEFNQlVSR0VSX05BVjtcbiAgICB9KVxuICB9XG5cbiAgY2xvc2VBZnRlckNsaWNrVG9MaW5rcyhldmVudCkge1xuICAgIEhBTUJVUkdFUl9MSU5LUy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgaWYoZXZlbnQudGFyZ2V0ID09PSBsaW5rKSB7XG4gICAgICAgIHRoaXMuY2xvc2VIYW1idXJnZXJNZW51KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cbiIsIi8vbWFpblBhZ2U6XG5leHBvcnQgY29uc3QgTUFJTl9QQUdFX0NPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluX3BhZ2UnKTtcbmV4cG9ydCBjb25zdCBMSU5LU19DQVRFR09SSUVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcblxuLy8gaGFtYnVyZ2VyOlxuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKTtcbmV4cG9ydCBjb25zdCBIQU1CVVJHRVJfTkFWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcl9tZW51Jyk7XG5leHBvcnQgY29uc3QgSEFNQlVSR0VSX0xJU1QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyX2xpc3QnKTtcbmV4cG9ydCBjb25zdCBCTEFDS09VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cF9ibGFja291dCcpO1xuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUl9MSU5FUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYW1idXJnZXJfbGluZScpO1xuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUl9MSU5LUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYW1idXJnZXJfbWVudV9fbGlzdF9faXRlbSBhJyk7XG5cbi8vIGNhdGVnb3JpZXNQYWdlOlxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX1BBR0VfQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5X3BhZ2UnKTtcbmV4cG9ydCBjb25zdCBDQVJEX0NBVEVHT1JJRVNfSU1HID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWNhcmQgaW1nJyk7XG5leHBvcnQgY29uc3QgQ0FSRF9DQVRFR09SSUVTX1RFWFQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktY2FyZC1ib2R5IGg1Jyk7XG5leHBvcnQgY29uc3QgVElUTEVfQ0FURUdPUlkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyX3RpdGxlJyk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=