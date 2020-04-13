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
categories.linksListeners();
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
      image: 'src/img/cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'src/img/dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'src/img/dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'src/img/draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'src/img/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'src/img/fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'src/img/hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'src/img/jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'src/img/open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'src/img/play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'src/img/point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'src/img/ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'src/img/run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'src/img/sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'src/img/skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'src/img/swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'src/img/cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'src/img/chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'src/img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'src/img/dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'src/img/horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'src/img/pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'src/img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'src/img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'src/img/bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'src/img/fish1.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'src/img/frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'src/img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'src/img/lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'src/img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'src/img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'src/img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'src/img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'src/img/pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'src/img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'src/img/dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'src/img/boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'src/img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'src/img/coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'src/img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'src/img/sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'src/img/angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'src/img/happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'src/img/tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'src/img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'src/img/scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'src/img/smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'src/img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],





  [
    {
      word: 'engineer',
      translation: 'инженер',
      image: 'src/img/engineer.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'writer',
      translation: 'писатель',
      image: 'src/img/writer.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'actor',
      translation: 'актер',
      image: 'src/img/actor.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'designer ',
      translation: 'дизайнер',
      image: 'src/img/designer.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'doctor',
      translation: 'врач',
      image: 'src/img/doctor.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'lawyer',
      translation: 'юрист',
      image: 'src/img/lawyer.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'driver',
      translation: 'водитель',
      image: 'src/img/driver.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'builder',
      translation: 'строитель',
      image: 'src/img/builder.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
  [
    {
      word: 'yellow',
      translation: 'желтый',
      image: 'src/img/yellow.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'green',
      translation: 'зеленый',
      image: 'src/img/green.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'blue',
      translation: 'синий',
      image: 'src/img/blue.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'gray',
      translation: 'серый',
      image: 'src/img/gray.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'red',
      translation: 'красный',
      image: 'src/img/red.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'orange',
      translation: 'оранжевый',
      image: 'src/img/orange.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'pink',
      translation: 'розовый',
      image: 'src/img/pink.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'black',
      translation: 'черный',
      image: 'src/img/black.jpg',
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
    this.linksListeners = this.linksListeners.bind(this);
  }

  openMainPage() {
      window.addEventListener('popstate', () => {
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_PAGE_CONTAINER"].style.display = 'none';
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["MAIN_PAGE_CONTAINER"].style.display = 'block';
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["TITLE_CATEGORY"].innerHTML = '';
      });
  }

  appendContentsToCategory(indexCard) {
      _cards__WEBPACK_IMPORTED_MODULE_0__["default"][indexCard].map((elem, index) => {
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"][index].innerHTML = '';
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"][index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body"><p class="card-text">${elem.word}</p>`);
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"][index].insertAdjacentHTML('afterbegin', `<img src="${elem.image}" class="categories__cards_img">`)

      });
  }

  openCategoryPage(link) {
      console.log(link.textContent);
          switch (link.id || link.textContent ) {
              case 'Action (set A)':
                  this.appendContentsToCategory(0);
                  break;
              case 'Action (set B)':
                  this.appendContentsToCategory(1);
                  break;
              case 'Animal (set A)':
                  this.appendContentsToCategory(2);
                  break;
              case 'Animal (set B)':
                  this.appendContentsToCategory(3);
                  break;
              case 'Clothes':
                  this.appendContentsToCategory(4);
                  break;
              case 'Emotions':
                  this.appendContentsToCategory(5);
                  break;
              case 'Professions':
                  this.appendContentsToCategory(6);
                  break;
              case 'Colors':
                  this.appendContentsToCategory(7);
                  break;
              default:
                  break;
          }
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["TITLE_CATEGORY"].innerHTML = link.textContent;
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_PAGE_CONTAINER"].style.display = 'block';
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["MAIN_PAGE_CONTAINER"].style.display = 'none';
      history.pushState({ 'page_id': 2}, 'Cards', 'index.html#');
  }


  linksListeners() {
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
      this.playingWords()
  }

  playingWords() {
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"].forEach(card => {
          card.addEventListener('click', () => {
              let audio = new Audio(`src/audio/${card.textContent}.mp3`);
              audio.play().then(() => audio.preload = 'auto');
              console.log(card.textContent);
          })
      })
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
/*! exports provided: MAIN_PAGE_CONTAINER, LINKS_CATEGORIES, HAMBURGER, HAMBURGER_NAV, HAMBURGER_LIST, BLACKOUT, HAMBURGER_LINES, HAMBURGER_LINKS, CATEGORY_PAGE_CONTAINER, CARD_CATEGORIES, TITLE_CATEGORY */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CATEGORIES", function() { return CARD_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_CATEGORY", function() { return TITLE_CATEGORY; });
//mainPage:
const MAIN_PAGE_CONTAINER = document.getElementById('main_page');
const LINKS_CATEGORIES = document.querySelectorAll('.card_main');

// hamburger:
const HAMBURGER = document.getElementById('hamburger');
const HAMBURGER_NAV = document.getElementById('hamburger_menu');
const HAMBURGER_LIST = document.getElementById('hamburger_list');
const BLACKOUT = document.getElementById('popup_blackout');
const HAMBURGER_LINES = document.querySelectorAll('.hamburger_line');
const HAMBURGER_LINKS = document.querySelectorAll('.hamburger_menu__list__item a');

// categoriesPage:
const CATEGORY_PAGE_CONTAINER = document.getElementById('category_page');
const CARD_CATEGORIES = document.querySelectorAll('.card_category');
// export const CARD_CATEGORIES_TEXT = document.querySelectorAll('.category-card-body p');
const TITLE_CATEGORY = document.getElementById('header_title');




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYXJkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNYO0FBQ21COztBQUU1RSxzQkFBc0IsOEVBQWE7QUFDbkMsaUVBQVM7QUFDVCxnRUFBUTtBQUNSLHNFQUFjOzs7O0FBSWQsdUJBQXVCLHNFQUFVO0FBQ2pDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsSUFBSSxvRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNBOztBQUVQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTtBQUNQO0FBQ08iLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSGFtYnVyZ2VyTWVudSBmcm9tICcuL2pzL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlck1lbnUuanMnO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9qcy9jb21wb25lbnRzL0NhcmQvQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQge0hBTUJVUkdFUixCTEFDS09VVCwgSEFNQlVSR0VSX0xJU1R9IGZyb20gXCIuL2pzL2NvbnN0YW50cy9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGhhbWJ1cmdlciA9IG5ldyBIYW1idXJnZXJNZW51KCk7XHJcbkhBTUJVUkdFUi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbWJ1cmdlci5vcGVuSGFtYnVyZ2VyTWVudSk7XHJcbkJMQUNLT1VULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFtYnVyZ2VyLmNsb3NlSGFtYnVyZ2VyTWVudSk7XHJcbkhBTUJVUkdFUl9MSVNULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gaGFtYnVyZ2VyLmNsb3NlQWZ0ZXJDbGlja1RvTGlua3MoZXZlbnQpKTtcclxuXHJcblxyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9IG5ldyBDYXRlZ29yaWVzKCk7XHJcbmNhdGVnb3JpZXMubGlua3NMaXN0ZW5lcnMoKTtcclxuY2F0ZWdvcmllcy5vcGVuTWFpblBhZ2UoKTtcclxuIiwiZXhwb3J0IGNvbnN0IGNhcmRzID0gW1xuICBbXG4gICAge1xuICAgICAgd29yZDogJ2NyeScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LvQsNC60LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9jcnkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY3J5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZGFuY2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgtCw0L3RhtC10LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RhbmNlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RhbmNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZGl2ZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C90YvRgNGP0YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZGl2ZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kaXZlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJhdycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0LjRgdC+0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RyYXcuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZHJhdy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zpc2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfQu9C+0LLQuNGC0Ywg0YDRi9Cx0YMnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2Zpc2guanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZmlzaC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2ZseScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C70LXRgtCw0YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZmx5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2ZseS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2h1ZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C+0LHQvdC40LzQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2h1Zy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9odWcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdqdW1wJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/RgNGL0LPQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2p1bXAuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vanVtcC5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnb3BlbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C+0YLQutGA0YvQstCw0YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvb3Blbi5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9vcGVuLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGxheScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C40LPRgNCw0YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvcGxheS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wbGF5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncG9pbnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9C60LDQt9GL0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3BvaW50LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BvaW50Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncmlkZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C10LfQtNC40YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvcmlkZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9yaWRlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncnVuJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHQtdCz0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9ydW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcnVuLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2luZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LXRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zaW5nLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NpbmcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdza2lwJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/RgNC+0L/Rg9GB0LrQsNGC0YwsINC/0YDRi9Cz0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9za2lwLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NraXAubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzd2ltJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/Qu9Cw0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3N3aW0uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc3dpbS5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnY2F0JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LrQvtGCJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9jYXQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2F0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnY2hpY2snLFxuICAgICAgdHJhbnNsYXRpb246ICfRhtGL0L/Qu9GR0L3QvtC6JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9jaGljay5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9jaGljay5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2NoaWNrZW4nLFxuICAgICAgdHJhbnNsYXRpb246ICfQutGD0YDQuNGG0LAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2NoaWNrZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2hpY2tlbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RvZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0L7QsdCw0LrQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZG9nLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RvZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2hvcnNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQvtGI0LDQtNGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9ob3JzZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ob3JzZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BpZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0LLQuNC90YzRjycsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvcGlnLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BpZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3JhYmJpdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60YDQvtC70LjQuicsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvcmFiYml0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3JhYmJpdC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NoZWVwJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L7QstGG0LAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3NoZWVwLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NoZWVwLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdiaXJkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/RgtC40YbQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYmlyZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9iaXJkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZmlzaCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0YvQsdCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9maXNoMS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9maXNoLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZnJvZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C20LDQsdCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9mcm9nLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Zyb2cubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdnaXJhZmZlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LbQuNGA0LDRhNCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9naXJhZmZlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2dpcmFmZmUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdsaW9uJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQtdCyJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9saW9uLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2xpb24ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdtb3VzZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C80YvRiNGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9tb3VzZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9tb3VzZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3R1cnRsZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GH0LXRgNC10L/QsNGF0LAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3R1cnRsZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby90dXJ0bGUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkb2xwaGluJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LTQtdC70YzRhNC40L0nLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RvbHBoaW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZG9scGhpbi5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnc2tpcnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRjtCx0LrQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvc2tpcnQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2tpcnQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwYW50cycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0YDRjtC60LgnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3BhbnRzLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BhbnRzLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYmxvdXNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHQu9GD0LfQutCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9ibG91c2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYmxvdXNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJlc3MnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C70LDRgtGM0LUnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RyZXNzLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RyZXNzLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYm9vdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0L7RgtC40L3QvtC6JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9ib290LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Jvb3QubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaGlydCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0YPQsdCw0YjQutCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zaGlydC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaGlydC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2NvYXQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9Cw0LvRjNGC0L4nLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2NvYXQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY29hdC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3Nob2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgtGD0YTQu9C4JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zaG9lLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3Nob2UubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ3NhZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cz0YDRg9GB0YLQvdGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3NhZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zYWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdhbmdyeScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0LXRgNC00LjRgtGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2FuZ3J5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2FuZ3J5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnaGFwcHknLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdGH0LDRgdGC0LvQuNCy0YvQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvaGFwcHkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaGFwcHkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICd0aXJlZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0YHRgtCw0LLRiNC40LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3RpcmVkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3RpcmVkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc3VycHJpc2VkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQtNC40LLQu9GR0L3QvdGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3N1cnByaXNlZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zdXJwcmlzZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzY2FyZWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQuNGB0L/Rg9Cz0LDQvdC90YvQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvc2NhcmVkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NjYXJlZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NtaWxlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQu9GL0LHQutCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zbWlsZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zbWlsZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2xhdWdoJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQvNC10YUnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2xhdWdoLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2xhdWdoLm1wMycsXG4gICAgfSxcbiAgXSxcblxuXG5cblxuXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnZW5naW5lZXInLFxuICAgICAgdHJhbnNsYXRpb246ICfQuNC90LbQtdC90LXRgCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZW5naW5lZXIuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2FkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnd3JpdGVyJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/QuNGB0LDRgtC10LvRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvd3JpdGVyLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2FuZ3J5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYWN0b3InLFxuICAgICAgdHJhbnNsYXRpb246ICfQsNC60YLQtdGAJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9hY3Rvci5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9oYXBweS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Rlc2lnbmVyICcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C00LjQt9Cw0LnQvdC10YAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2Rlc2lnbmVyLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3RpcmVkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZG9jdG9yJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LLRgNCw0YcnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RvY3Rvci5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zdXJwcmlzZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdsYXd5ZXInLFxuICAgICAgdHJhbnNsYXRpb246ICfRjtGA0LjRgdGCJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9sYXd5ZXIuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2NhcmVkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJpdmVyJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LLQvtC00LjRgtC10LvRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZHJpdmVyLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NtaWxlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYnVpbGRlcicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0YLRgNC+0LjRgtC10LvRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYnVpbGRlci5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9sYXVnaC5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAneWVsbG93JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LbQtdC70YLRi9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy95ZWxsb3cuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2FkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZ3JlZW4nLFxuICAgICAgdHJhbnNsYXRpb246ICfQt9C10LvQtdC90YvQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZ3JlZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYW5ncnkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdibHVlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQuNC90LjQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYmx1ZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9oYXBweS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2dyYXknLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdC10YDRi9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9ncmF5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3RpcmVkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncmVkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LrRgNCw0YHQvdGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3JlZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zdXJwcmlzZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdvcmFuZ2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtGA0LDQvdC20LXQstGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL29yYW5nZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zY2FyZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwaW5rJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YDQvtC30L7QstGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3BpbmsuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc21pbGUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdibGFjaycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GH0LXRgNC90YvQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYmxhY2suanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbGF1Z2gubXAzJyxcbiAgICB9LFxuICBdLFxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBjYXJkcztcbiIsImltcG9ydCBjYXJkcyBmcm9tICcuLi8uLi9jYXJkcyc7XG5pbXBvcnQge1xuICAgIEhBTUJVUkdFUl9MSU5LUyxcbiAgICBDQVJEX0NBVEVHT1JJRVMsXG4gICAgTElOS1NfQ0FURUdPUklFUyxcbiAgICBNQUlOX1BBR0VfQ09OVEFJTkVSLFxuICAgIENBVEVHT1JZX1BBR0VfQ09OVEFJTkVSLFxuICAgIFRJVExFX0NBVEVHT1JZXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xubGV0IGNsaWNrTGluayA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpbmtzTGlzdGVuZXJzID0gdGhpcy5saW5rc0xpc3RlbmVycy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb3Blbk1haW5QYWdlKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICAgIENBVEVHT1JZX1BBR0VfQ09OVEFJTkVSLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgTUFJTl9QQUdFX0NPTlRBSU5FUi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBUSVRMRV9DQVRFR09SWS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KGluZGV4Q2FyZCkge1xuICAgICAgY2FyZHNbaW5kZXhDYXJkXS5tYXAoKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgQ0FSRF9DQVRFR09SSUVTW2luZGV4XS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBDQVJEX0NBVEVHT1JJRVNbaW5kZXhdLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhdGVnb3J5X2NhcmRfYm9keVwiPjxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+JHtlbGVtLndvcmR9PC9wPmApO1xuICAgICAgICAgIENBUkRfQ0FURUdPUklFU1tpbmRleF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxpbWcgc3JjPVwiJHtlbGVtLmltYWdlfVwiIGNsYXNzPVwiY2F0ZWdvcmllc19fY2FyZHNfaW1nXCI+YClcblxuICAgICAgfSk7XG4gIH1cblxuICBvcGVuQ2F0ZWdvcnlQYWdlKGxpbmspIHtcbiAgICAgIGNvbnNvbGUubG9nKGxpbmsudGV4dENvbnRlbnQpO1xuICAgICAgICAgIHN3aXRjaCAobGluay5pZCB8fCBsaW5rLnRleHRDb250ZW50ICkge1xuICAgICAgICAgICAgICBjYXNlICdBY3Rpb24gKHNldCBBKSc6XG4gICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnRzVG9DYXRlZ29yeSgwKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdBY3Rpb24gKHNldCBCKSc6XG4gICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnRzVG9DYXRlZ29yeSgxKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdBbmltYWwgKHNldCBBKSc6XG4gICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnRzVG9DYXRlZ29yeSgyKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdBbmltYWwgKHNldCBCKSc6XG4gICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnRzVG9DYXRlZ29yeSgzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdDbG90aGVzJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDQpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ0Vtb3Rpb25zJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDUpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ1Byb2Zlc3Npb25zJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDYpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ0NvbG9ycyc6XG4gICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENvbnRlbnRzVG9DYXRlZ29yeSg3KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgVElUTEVfQ0FURUdPUlkuaW5uZXJIVE1MID0gbGluay50ZXh0Q29udGVudDtcbiAgICAgIENBVEVHT1JZX1BBR0VfQ09OVEFJTkVSLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgTUFJTl9QQUdFX0NPTlRBSU5FUi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyAncGFnZV9pZCc6IDJ9LCAnQ2FyZHMnLCAnaW5kZXguaHRtbCMnKTtcbiAgfVxuXG5cbiAgbGlua3NMaXN0ZW5lcnMoKSB7XG4gICAgICBMSU5LU19DQVRFR09SSUVTLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuQ2F0ZWdvcnlQYWdlKGxpbmspO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBIQU1CVVJHRVJfTElOS1MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9wZW5DYXRlZ29yeVBhZ2UobGluayk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGxheWluZ1dvcmRzKClcbiAgfVxuXG4gIHBsYXlpbmdXb3JkcygpIHtcbiAgICAgIENBUkRfQ0FURUdPUklFUy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhgc3JjL2F1ZGlvLyR7Y2FyZC50ZXh0Q29udGVudH0ubXAzYCk7XG4gICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKS50aGVuKCgpID0+IGF1ZGlvLnByZWxvYWQgPSAnYXV0bycpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkLnRleHRDb250ZW50KTtcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBIQU1CVVJHRVIsXG4gIEhBTUJVUkdFUl9MSVNULFxuICBIQU1CVVJHRVJfTkFWLFxuICBCTEFDS09VVCxcbiAgSEFNQlVSR0VSX0xJTkVTLFxuICBIQU1CVVJHRVJfTElOS1Ncbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmxldCBjbGlja3NIYW1idXJnZXIgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW1idXJnZXJNZW51IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jbG9zZUhhbWJ1cmdlck1lbnUgPSB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbkhhbWJ1cmdlck1lbnUgPSB0aGlzLm9wZW5IYW1idXJnZXJNZW51LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFmdGVyQ2xpY2tUb0xpbmtzID0gdGhpcy5jbG9zZUFmdGVyQ2xpY2tUb0xpbmtzLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBvcGVuSGFtYnVyZ2VyTWVudSgpIHtcbiAgICBpZiAoY2xpY2tzSGFtYnVyZ2VyID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICBIQU1CVVJHRVJfTkFWLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBCTEFDS09VVC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIEhBTUJVUkdFUl9OQVYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHZ3KSc7XG4gICAgICAgIEhBTUJVUkdFUl9MSVNULnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDB2dyknO1xuICAgICAgfSwgNTApO1xuICAgICAgdGhpcy50cmFuc2Zvcm1CdXJnZXIoKTtcbiAgICAgIGNsaWNrc0hhbWJ1cmdlciArPSAxO1xuICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZUhhbWJ1cmdlck1lbnUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFuc2Zvcm1CdXJnZXIoKSB7XG4gICAgaWYgKGNsaWNrc0hhbWJ1cmdlciA9PT0gMCkge1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoNDVkZWcpJyArICd0cmFuc2xhdGVZKDEwcHgpJztcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1syXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC00NWRlZyknICsgJ3RyYW5zbGF0ZVkoLTEwcHgpJztcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1sxXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1swXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJyArICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzJdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknICsgJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICBIQU1CVVJHRVJfTElORVNbMV0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG5cbiAgfVxuXG4gIGNsb3NlSGFtYnVyZ2VyTWVudSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IEhBTUJVUkdFUl9OQVYuc3R5bGUuZGlzcGxheSA9ICdub25lJywgMzAwKTtcbiAgICBIQU1CVVJHRVJfTkFWLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC03NXZ3KSc7XG4gICAgSEFNQlVSR0VSX0xJU1Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTc1dncpJztcbiAgICBIQU1CVVJHRVIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgQkxBQ0tPVVQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLnRyYW5zZm9ybUJ1cmdlcigpO1xuICAgIGNsaWNrc0hhbWJ1cmdlciA9IDA7XG4gIH1cblxuICBpc0hhbWJ1cmdlck1lbnUoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0ID09PSBIQU1CVVJHRVJfTElTVCB8fCBldmVudC50YXJnZXQgPT09IEhBTUJVUkdFUl9OQVY7XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlQWZ0ZXJDbGlja1RvTGlua3MoZXZlbnQpIHtcbiAgICBIQU1CVVJHRVJfTElOS1MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgIGlmKGV2ZW50LnRhcmdldCA9PT0gbGluaykge1xuICAgICAgICB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG4iLCIvL21haW5QYWdlOlxuZXhwb3J0IGNvbnN0IE1BSU5fUEFHRV9DT05UQUlORVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbl9wYWdlJyk7XG5leHBvcnQgY29uc3QgTElOS1NfQ0FURUdPUklFUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX21haW4nKTtcblxuLy8gaGFtYnVyZ2VyOlxuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKTtcbmV4cG9ydCBjb25zdCBIQU1CVVJHRVJfTkFWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcl9tZW51Jyk7XG5leHBvcnQgY29uc3QgSEFNQlVSR0VSX0xJU1QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyX2xpc3QnKTtcbmV4cG9ydCBjb25zdCBCTEFDS09VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cF9ibGFja291dCcpO1xuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUl9MSU5FUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYW1idXJnZXJfbGluZScpO1xuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUl9MSU5LUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYW1idXJnZXJfbWVudV9fbGlzdF9faXRlbSBhJyk7XG5cbi8vIGNhdGVnb3JpZXNQYWdlOlxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX1BBR0VfQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5X3BhZ2UnKTtcbmV4cG9ydCBjb25zdCBDQVJEX0NBVEVHT1JJRVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9jYXRlZ29yeScpO1xuLy8gZXhwb3J0IGNvbnN0IENBUkRfQ0FURUdPUklFU19URVhUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWNhcmQtYm9keSBwJyk7XG5leHBvcnQgY29uc3QgVElUTEVfQ0FURUdPUlkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyX3RpdGxlJyk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==