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
      audioSrc: 'audio/engineer.mp3',
    },
    {
      word: 'writer',
      translation: 'писатель',
      image: 'src/img/writer.jpg',
      audioSrc: 'audio/writer.mp3',
    },
    {
      word: 'actor',
      translation: 'актер',
      image: 'src/img/actor.jpg',
      audioSrc: 'audio/actor.mp3',
    },
    {
      word: 'designer',
      translation: 'дизайнер',
      image: 'src/img/designer.jpg',
      audioSrc: 'audio/designer.mp3',
    },
    {
      word: 'doctor',
      translation: 'врач',
      image: 'src/img/doctor.jpg',
      audioSrc: 'audio/doctor.mp3',
    },
    {
      word: 'lawyer',
      translation: 'юрист',
      image: 'src/img/lawyer.jpg',
      audioSrc: 'audio/lawyer.mp3',
    },
    {
      word: 'driver',
      translation: 'водитель',
      image: 'src/img/driver.jpg',
      audioSrc: 'audio/driver.mp3',
    },
    {
      word: 'builder',
      translation: 'строитель',
      image: 'src/img/builder.jpg',
      audioSrc: 'audio/builder.mp3',
    },
  ],
  [
    {
      word: 'yellow',
      translation: 'желтый',
      image: 'src/img/yellow.jpg',
      audioSrc: 'audio/yellow.mp3',
    },
    {
      word: 'green',
      translation: 'зеленый',
      image: 'src/img/green.jpg',
      audioSrc: 'audio/green.mp3',
    },
    {
      word: 'blue',
      translation: 'синий',
      image: 'src/img/blue.jpg',
      audioSrc: 'audio/blue.mp3',
    },
    {
      word: 'gray',
      translation: 'серый',
      image: 'src/img/gray.jpg',
      audioSrc: 'audio/gray.mp3',
    },
    {
      word: 'red',
      translation: 'красный',
      image: 'src/img/red.jpg',
      audioSrc: 'audio/red.mp3',
    },
    {
      word: 'orange',
      translation: 'оранжевый',
      image: 'src/img/orange.jpg',
      audioSrc: 'audio/orange.mp3',
    },
    {
      word: 'pink',
      translation: 'розовый',
      image: 'src/img/pink.jpg',
      audioSrc: 'audio/pink.mp3',
    },
    {
      word: 'black',
      translation: 'черный',
      image: 'src/img/black.jpg',
      audioSrc: 'audio/black.mp3',
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
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"][index].insertAdjacentHTML('afterbegin', `<button class="card-body__button"><img class="svg_button" src="src/img/rotate.svg"></button>`);
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"][index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body category_text"><p class="card-text">${elem.word}</p>`);
          _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"][index].insertAdjacentHTML('afterbegin', `<img src="${elem.image}" class="categories__cards_img">`);
          // CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body card-translate" style="display: none"><p>${elem.translation}</p>`);
      });
  }

  openCategoryPage(link) {
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
      this.playingWords();
  }

  playingWords() {
      const cardText = document.querySelectorAll('.card-text');
      _constants_constants__WEBPACK_IMPORTED_MODULE_1__["CARD_CATEGORIES"].forEach((card, index) => {
          card.addEventListener('click', () => {
              let audio = new Audio(`src/audio/${card.textContent}.mp3`);
              audio.play().then(() => audio.preload = 'auto');
              this.rotateListeners(card);
          })
      });

  }

  rotateListeners(card) {
      const cardButtons = document.querySelectorAll('.card-body__button');
      const cardText = document.querySelectorAll('.card-text');
      const cardTranslation = document.querySelectorAll('.card-translate');
      cardButtons.forEach((button, index) => {
          button.addEventListener('click', (event) => {
              event.preventDefault();
              return this.rotateToTranslate(button, cardText, index);
          });
          button.parentElement.addEventListener('mouseleave', (event) => {
              event.preventDefault();
              return this.backRotate(button);
          })
      })
  }

  rotateToTranslate(button, cardText, index) {
      console.log(index);
      // cardText[index].style.display = 'none';
      button.style.opacity = '0';
      button.parentElement.style.transform = 'rotateY(180deg)';
  }


  backRotate(button) {
      button.style.opacity = '1';
      button.parentElement.style.transform = 'rotateY(0deg)';
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
/*! exports provided: MAIN_PAGE_CONTAINER, LINKS_CATEGORIES, HAMBURGER, HAMBURGER_NAV, HAMBURGER_LIST, BLACKOUT, HAMBURGER_LINES, HAMBURGER_LINKS, CATEGORY_PAGE_CONTAINER, CARD_CATEGORIES, CARD_BODY, TITLE_CATEGORY */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_BODY", function() { return CARD_BODY; });
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
const CARD_BODY = document.querySelectorAll('.category_card_body');
const TITLE_CATEGORY = document.getElementById('header_title');






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYXJkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNYO0FBQ21COztBQUU1RSxzQkFBc0IsOEVBQWE7QUFDbkMsaUVBQVM7QUFDVCxnRUFBUTtBQUNSLHNFQUFjOzs7O0FBSWQsdUJBQXVCLHNFQUFVO0FBQ2pDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR2Usb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RackI7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFVRzs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsNEVBQXVCO0FBQ2pDLFVBQVUsd0VBQW1CO0FBQzdCLFVBQVUsbUVBQWM7QUFDeEIsT0FBTztBQUNQOztBQUVBO0FBQ0EsTUFBTSw4Q0FBSztBQUNYLFVBQVUsb0VBQWU7QUFDekIsVUFBVSxvRUFBZTtBQUN6QixVQUFVLG9FQUFlLHlIQUF5SCxVQUFVO0FBQzVKLFVBQVUsb0VBQWUsc0RBQXNELFdBQVc7QUFDMUYsMEpBQTBKLGlCQUFpQjtBQUMzSyxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQWM7QUFDcEIsTUFBTSw0RUFBdUI7QUFDN0IsTUFBTSx3RUFBbUI7QUFDekIseUJBQXlCLGNBQWM7QUFDdkM7OztBQUdBO0FBQ0EsTUFBTSxxRUFBZ0I7QUFDdEI7QUFDQTtBQUNBLFdBQVc7QUFDWCxPQUFPO0FBQ1AsTUFBTSxvRUFBZTtBQUNyQjtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG9FQUFlO0FBQ3JCO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFBO0FBT21DOztBQUVuQzs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBYTtBQUNyQixRQUFRLDZEQUFRO0FBQ2hCLE9BQU87QUFDUDtBQUNBLFFBQVEsa0VBQWE7QUFDckIsUUFBUSxtRUFBYztBQUN0QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxvRUFBZTtBQUNyQixNQUFNLG9FQUFlO0FBQ3JCLE1BQU0sb0VBQWU7QUFDckI7QUFDQTtBQUNBLE1BQU0sb0VBQWU7QUFDckIsTUFBTSxvRUFBZTtBQUNyQixNQUFNLG9FQUFlO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGtFQUFhO0FBQ2xDLElBQUksa0VBQWE7QUFDakIsSUFBSSxtRUFBYztBQUNsQixJQUFJLDhEQUFTO0FBQ2IsSUFBSSw2REFBUTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG1FQUFjLHFCQUFxQixrRUFBYTtBQUM5RSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLG9FQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4X2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhhbWJ1cmdlck1lbnUgZnJvbSAnLi9qcy9jb21wb25lbnRzL0hlYWRlci9IYW1idXJnZXJNZW51LmpzJztcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vanMvY29tcG9uZW50cy9DYXJkL0NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHtIQU1CVVJHRVIsQkxBQ0tPVVQsIEhBTUJVUkdFUl9MSVNUfSBmcm9tIFwiLi9qcy9jb25zdGFudHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBoYW1idXJnZXIgPSBuZXcgSGFtYnVyZ2VyTWVudSgpO1xyXG5IQU1CVVJHRVIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW1idXJnZXIub3BlbkhhbWJ1cmdlck1lbnUpO1xyXG5CTEFDS09VVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbWJ1cmdlci5jbG9zZUhhbWJ1cmdlck1lbnUpO1xyXG5IQU1CVVJHRVJfTElTVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGhhbWJ1cmdlci5jbG9zZUFmdGVyQ2xpY2tUb0xpbmtzKGV2ZW50KSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSBuZXcgQ2F0ZWdvcmllcygpO1xyXG5jYXRlZ29yaWVzLmxpbmtzTGlzdGVuZXJzKCk7XHJcbmNhdGVnb3JpZXMub3Blbk1haW5QYWdlKCk7XHJcbiIsImV4cG9ydCBjb25zdCBjYXJkcyA9IFtcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdjcnknLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C70LDQutCw0YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvY3J5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NyeS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RhbmNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YLQsNC90YbQtdCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9kYW5jZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kYW5jZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RpdmUnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvdGL0YDRj9GC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RpdmUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZGl2ZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RyYXcnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNC40YHQvtCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9kcmF3LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RyYXcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdmaXNoJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQvtCy0LjRgtGMINGA0YvQsdGDJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9maXNoLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Zpc2gubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdmbHknLFxuICAgICAgdHJhbnNsYXRpb246ICfQu9C10YLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2ZseS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9mbHkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdodWcnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtCx0L3QuNC80LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9odWcuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaHVnLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnanVtcCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0YDRi9Cz0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9qdW1wLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2p1bXAubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ29wZW4nLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtGC0LrRgNGL0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL29wZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vb3Blbi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BsYXknLFxuICAgICAgdHJhbnNsYXRpb246ICfQuNCz0YDQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3BsYXkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcGxheS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BvaW50JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQutCw0LfRi9Cy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9wb2ludC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wb2ludC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3JpZGUnLFxuICAgICAgdHJhbnNsYXRpb246ICfQtdC30LTQuNGC0YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3JpZGUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcmlkZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3J1bicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0LXQs9Cw0YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvcnVuLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3J1bi5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NpbmcnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C10YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvc2luZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaW5nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2tpcCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0YDQvtC/0YPRgdC60LDRgtGMLCDQv9GA0YvQs9Cw0YLRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvc2tpcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9za2lwLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc3dpbScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LvQsNCy0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zd2ltLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3N3aW0ubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2NhdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60L7RgicsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvY2F0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NhdC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2NoaWNrJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YbRi9C/0LvRkdC90L7QuicsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvY2hpY2suanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2hpY2subXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdjaGlja2VuJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LrRg9GA0LjRhtCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9jaGlja2VuLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NoaWNrZW4ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkb2cnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdC+0LHQsNC60LAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RvZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kb2cubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdob3JzZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C70L7RiNCw0LTRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvaG9yc2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vaG9yc2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwaWcnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdCy0LjQvdGM0Y8nLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3BpZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9waWcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdyYWJiaXQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQutGA0L7Qu9C40LonLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3JhYmJpdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9yYWJiaXQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaGVlcCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C+0LLRhtCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zaGVlcC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaGVlcC5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnYmlyZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0YLQuNGG0LAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2JpcmQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYmlyZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zpc2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNGL0LHQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZmlzaDEuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZmlzaC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zyb2cnLFxuICAgICAgdHJhbnNsYXRpb246ICfQttCw0LHQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZnJvZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9mcm9nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZ2lyYWZmZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C20LjRgNCw0YTQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZ2lyYWZmZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9naXJhZmZlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnbGlvbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C70LXQsicsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvbGlvbi5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9saW9uLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnbW91c2UnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvNGL0YjRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvbW91c2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbW91c2UubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICd0dXJ0bGUnLFxuICAgICAgdHJhbnNsYXRpb246ICfRh9C10YDQtdC/0LDRhdCwJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy90dXJ0bGUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vdHVydGxlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZG9scGhpbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C00LXQu9GM0YTQuNC9JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9kb2xwaGluLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RvbHBoaW4ubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ3NraXJ0JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0Y7QsdC60LAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3NraXJ0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NraXJ0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGFudHMnLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdGA0Y7QutC4JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9wYW50cy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wYW50cy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Jsb3VzZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0LvRg9C30LrQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYmxvdXNlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Jsb3VzZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RyZXNzJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/Qu9Cw0YLRjNC1JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9kcmVzcy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kcmVzcy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Jvb3QnLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdC+0YLQuNC90L7QuicsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYm9vdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ib290Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2hpcnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNGD0LHQsNGI0LrQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvc2hpcnQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2hpcnQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdjb2F0JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/QsNC70YzRgtC+JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9jb2F0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NvYXQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaG9lJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YLRg9GE0LvQuCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvc2hvZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaG9lLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdzYWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQs9GA0YPRgdGC0L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zYWQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2FkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYW5ncnknLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdC10YDQtNC40YLRi9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9hbmdyeS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9hbmdyeS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2hhcHB5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHRh9Cw0YHRgtC70LjQstGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2hhcHB5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2hhcHB5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAndGlyZWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9GB0YLQsNCy0YjQuNC5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy90aXJlZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby90aXJlZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3N1cnByaXNlZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0LTQuNCy0LvRkdC90L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9zdXJwcmlzZWQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc3VycHJpc2VkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2NhcmVkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LjRgdC/0YPQs9Cw0L3QvdGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL3NjYXJlZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zY2FyZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzbWlsZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0LvRi9Cx0LrQsCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvc21pbGUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc21pbGUubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdsYXVnaCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0LzQtdGFJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9sYXVnaC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9sYXVnaC5tcDMnLFxuICAgIH0sXG4gIF0sXG5cblxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2VuZ2luZWVyJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LjQvdC20LXQvdC10YAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2VuZ2luZWVyLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2VuZ2luZWVyLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnd3JpdGVyJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/QuNGB0LDRgtC10LvRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvd3JpdGVyLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3dyaXRlci5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2FjdG9yJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LDQutGC0LXRgCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYWN0b3IuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYWN0b3IubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkZXNpZ25lcicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C00LjQt9Cw0LnQvdC10YAnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2Rlc2lnbmVyLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Rlc2lnbmVyLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZG9jdG9yJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LLRgNCw0YcnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2RvY3Rvci5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kb2N0b3IubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdsYXd5ZXInLFxuICAgICAgdHJhbnNsYXRpb246ICfRjtGA0LjRgdGCJyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9sYXd5ZXIuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbGF3eWVyLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJpdmVyJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LLQvtC00LjRgtC10LvRjCcsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZHJpdmVyLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RyaXZlci5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2J1aWxkZXInLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdGC0YDQvtC40YLQtdC70YwnLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2J1aWxkZXIuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYnVpbGRlci5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAneWVsbG93JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LbQtdC70YLRi9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy95ZWxsb3cuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8veWVsbG93Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZ3JlZW4nLFxuICAgICAgdHJhbnNsYXRpb246ICfQt9C10LvQtdC90YvQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvZ3JlZW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZ3JlZW4ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdibHVlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQuNC90LjQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYmx1ZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ibHVlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZ3JheScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0LXRgNGL0LknLFxuICAgICAgaW1hZ2U6ICdzcmMvaW1nL2dyYXkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZ3JheS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3JlZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60YDQsNGB0L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9yZWQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcmVkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnb3JhbmdlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L7RgNCw0L3QttC10LLRi9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9vcmFuZ2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vb3JhbmdlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGluaycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0L7Qt9C+0LLRi9C5JyxcbiAgICAgIGltYWdlOiAnc3JjL2ltZy9waW5rLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BpbmsubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdibGFjaycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GH0LXRgNC90YvQuScsXG4gICAgICBpbWFnZTogJ3NyYy9pbWcvYmxhY2suanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYmxhY2subXAzJyxcbiAgICB9LFxuICBdLFxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBjYXJkcztcbiIsImltcG9ydCBjYXJkcyBmcm9tICcuLi8uLi9jYXJkcyc7XHJcbmltcG9ydCB7XHJcbiAgICBIQU1CVVJHRVJfTElOS1MsXHJcbiAgICBDQVJEX0NBVEVHT1JJRVMsXHJcbiAgICBMSU5LU19DQVRFR09SSUVTLFxyXG4gICAgTUFJTl9QQUdFX0NPTlRBSU5FUixcclxuICAgIENBVEVHT1JZX1BBR0VfQ09OVEFJTkVSLFxyXG4gICAgVElUTEVfQ0FURUdPUlksXHJcbiAgICBDQVJEX0JVVFRPTixcclxuICAgIENBUkRfQk9EWVxyXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxpbmtzTGlzdGVuZXJzID0gdGhpcy5saW5rc0xpc3RlbmVycy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1haW5QYWdlKCkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICBDQVRFR09SWV9QQUdFX0NPTlRBSU5FUi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgTUFJTl9QQUdFX0NPTlRBSU5FUi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgIFRJVExFX0NBVEVHT1JZLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFwcGVuZENvbnRlbnRzVG9DYXRlZ29yeShpbmRleENhcmQpIHtcclxuICAgICAgY2FyZHNbaW5kZXhDYXJkXS5tYXAoKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBDQVJEX0NBVEVHT1JJRVNbaW5kZXhdLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgQ0FSRF9DQVRFR09SSUVTW2luZGV4XS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGJ1dHRvbiBjbGFzcz1cImNhcmQtYm9keV9fYnV0dG9uXCI+PGltZyBjbGFzcz1cInN2Z19idXR0b25cIiBzcmM9XCJzcmMvaW1nL3JvdGF0ZS5zdmdcIj48L2J1dHRvbj5gKTtcclxuICAgICAgICAgIENBUkRfQ0FURUdPUklFU1tpbmRleF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY2F0ZWdvcnlfY2FyZF9ib2R5IGNhdGVnb3J5X3RleHRcIj48cCBjbGFzcz1cImNhcmQtdGV4dFwiPiR7ZWxlbS53b3JkfTwvcD5gKTtcclxuICAgICAgICAgIENBUkRfQ0FURUdPUklFU1tpbmRleF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxpbWcgc3JjPVwiJHtlbGVtLmltYWdlfVwiIGNsYXNzPVwiY2F0ZWdvcmllc19fY2FyZHNfaW1nXCI+YCk7XHJcbiAgICAgICAgICAvLyBDQVJEX0NBVEVHT1JJRVNbaW5kZXhdLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGNhdGVnb3J5X2NhcmRfYm9keSBjYXJkLXRyYW5zbGF0ZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjxwPiR7ZWxlbS50cmFuc2xhdGlvbn08L3A+YCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNhdGVnb3J5UGFnZShsaW5rKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGxpbmsuaWQgfHwgbGluay50ZXh0Q29udGVudCApIHtcclxuICAgICAgICAgICAgICBjYXNlICdBY3Rpb24gKHNldCBBKSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDApO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdBY3Rpb24gKHNldCBCKSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDEpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdBbmltYWwgKHNldCBBKSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDIpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdBbmltYWwgKHNldCBCKSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDMpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdDbG90aGVzJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250ZW50c1RvQ2F0ZWdvcnkoNCk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ0Vtb3Rpb25zJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250ZW50c1RvQ2F0ZWdvcnkoNSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ1Byb2Zlc3Npb25zJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250ZW50c1RvQ2F0ZWdvcnkoNik7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ0NvbG9ycyc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGVudHNUb0NhdGVnb3J5KDcpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgVElUTEVfQ0FURUdPUlkuaW5uZXJIVE1MID0gbGluay50ZXh0Q29udGVudDtcclxuICAgICAgQ0FURUdPUllfUEFHRV9DT05UQUlORVIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIE1BSU5fUEFHRV9DT05UQUlORVIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyAncGFnZV9pZCc6IDJ9LCAnQ2FyZHMnLCAnaW5kZXguaHRtbCMnKTtcclxuICB9XHJcblxyXG5cclxuICBsaW5rc0xpc3RlbmVycygpIHtcclxuICAgICAgTElOS1NfQ0FURUdPUklFUy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5DYXRlZ29yeVBhZ2UobGluayk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIEhBTUJVUkdFUl9MSU5LUy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5DYXRlZ29yeVBhZ2UobGluayk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucGxheWluZ1dvcmRzKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5aW5nV29yZHMoKSB7XHJcbiAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtdGV4dCcpO1xyXG4gICAgICBDQVJEX0NBVEVHT1JJRVMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKGBzcmMvYXVkaW8vJHtjYXJkLnRleHRDb250ZW50fS5tcDNgKTtcclxuICAgICAgICAgICAgICBhdWRpby5wbGF5KCkudGhlbigoKSA9PiBhdWRpby5wcmVsb2FkID0gJ2F1dG8nKTtcclxuICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxpc3RlbmVycyhjYXJkKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHJvdGF0ZUxpc3RlbmVycyhjYXJkKSB7XHJcbiAgICAgIGNvbnN0IGNhcmRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtYm9keV9fYnV0dG9uJyk7XHJcbiAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtdGV4dCcpO1xyXG4gICAgICBjb25zdCBjYXJkVHJhbnNsYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC10cmFuc2xhdGUnKTtcclxuICAgICAgY2FyZEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUb1RyYW5zbGF0ZShidXR0b24sIGNhcmRUZXh0LCBpbmRleCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhY2tSb3RhdGUoYnV0dG9uKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByb3RhdGVUb1RyYW5zbGF0ZShidXR0b24sIGNhcmRUZXh0LCBpbmRleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgIC8vIGNhcmRUZXh0W2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVkoMTgwZGVnKSc7XHJcbiAgfVxyXG5cclxuXHJcbiAgYmFja1JvdGF0ZShidXR0b24pIHtcclxuICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVZKDBkZWcpJztcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XG4gIEhBTUJVUkdFUixcbiAgSEFNQlVSR0VSX0xJU1QsXG4gIEhBTUJVUkdFUl9OQVYsXG4gIEJMQUNLT1VULFxuICBIQU1CVVJHRVJfTElORVMsXG4gIEhBTUJVUkdFUl9MSU5LU1xufSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxubGV0IGNsaWNrc0hhbWJ1cmdlciA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlck1lbnUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudSA9IHRoaXMuY2xvc2VIYW1idXJnZXJNZW51LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuSGFtYnVyZ2VyTWVudSA9IHRoaXMub3BlbkhhbWJ1cmdlck1lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWZ0ZXJDbGlja1RvTGlua3MgPSB0aGlzLmNsb3NlQWZ0ZXJDbGlja1RvTGlua3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5IYW1idXJnZXJNZW51KCkge1xuICAgIGlmIChjbGlja3NIYW1idXJnZXIgPT09IDApIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgIEhBTUJVUkdFUl9OQVYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIEJMQUNLT1VULnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgSEFNQlVSR0VSX05BVi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwdncpJztcbiAgICAgICAgSEFNQlVSR0VSX0xJU1Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHZ3KSc7XG4gICAgICB9LCA1MCk7XG4gICAgICB0aGlzLnRyYW5zZm9ybUJ1cmdlcigpO1xuICAgICAgY2xpY2tzSGFtYnVyZ2VyICs9IDE7XG4gICAgICBhd2FpdCBwcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlSGFtYnVyZ2VyTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zZm9ybUJ1cmdlcigpIHtcbiAgICBpZiAoY2xpY2tzSGFtYnVyZ2VyID09PSAwKSB7XG4gICAgICBIQU1CVVJHRVJfTElORVNbMF0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg0NWRlZyknICsgJ3RyYW5zbGF0ZVkoMTBweCknO1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzJdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTQ1ZGVnKScgKyAndHJhbnNsYXRlWSgtMTBweCknO1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzFdLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgSEFNQlVSR0VSX0xJTkVTWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknICsgJ3RyYW5zbGF0ZVkoMHB4KSc7XG4gICAgICBIQU1CVVJHRVJfTElORVNbMl0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKScgKyAndHJhbnNsYXRlWSgwcHgpJztcbiAgICAgIEhBTUJVUkdFUl9MSU5FU1sxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICB9XG5cbiAgY2xvc2VIYW1idXJnZXJNZW51KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gSEFNQlVSR0VSX05BVi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnLCAzMDApO1xuICAgIEhBTUJVUkdFUl9OQVYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTc1dncpJztcbiAgICBIQU1CVVJHRVJfTElTVC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNzV2dyknO1xuICAgIEhBTUJVUkdFUi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICBCTEFDS09VVC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMudHJhbnNmb3JtQnVyZ2VyKCk7XG4gICAgY2xpY2tzSGFtYnVyZ2VyID0gMDtcbiAgfVxuXG4gIGlzSGFtYnVyZ2VyTWVudSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIHJldHVybiBldmVudC50YXJnZXQgPT09IEhBTUJVUkdFUl9MSVNUIHx8IGV2ZW50LnRhcmdldCA9PT0gSEFNQlVSR0VSX05BVjtcbiAgICB9KVxuICB9XG5cbiAgY2xvc2VBZnRlckNsaWNrVG9MaW5rcyhldmVudCkge1xuICAgIEhBTUJVUkdFUl9MSU5LUy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgaWYoZXZlbnQudGFyZ2V0ID09PSBsaW5rKSB7XG4gICAgICAgIHRoaXMuY2xvc2VIYW1idXJnZXJNZW51KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cbiIsIi8vbWFpblBhZ2U6XG5leHBvcnQgY29uc3QgTUFJTl9QQUdFX0NPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluX3BhZ2UnKTtcbmV4cG9ydCBjb25zdCBMSU5LU19DQVRFR09SSUVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfbWFpbicpO1xuXG4vLyBoYW1idXJnZXI6XG5leHBvcnQgY29uc3QgSEFNQlVSR0VSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpO1xuZXhwb3J0IGNvbnN0IEhBTUJVUkdFUl9OQVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyX21lbnUnKTtcbmV4cG9ydCBjb25zdCBIQU1CVVJHRVJfTElTVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXJfbGlzdCcpO1xuZXhwb3J0IGNvbnN0IEJMQUNLT1VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwX2JsYWNrb3V0Jyk7XG5leHBvcnQgY29uc3QgSEFNQlVSR0VSX0xJTkVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhbWJ1cmdlcl9saW5lJyk7XG5leHBvcnQgY29uc3QgSEFNQlVSR0VSX0xJTktTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhbWJ1cmdlcl9tZW51X19saXN0X19pdGVtIGEnKTtcblxuLy8gY2F0ZWdvcmllc1BhZ2U6XG5leHBvcnQgY29uc3QgQ0FURUdPUllfUEFHRV9DT05UQUlORVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnlfcGFnZScpO1xuZXhwb3J0IGNvbnN0IENBUkRfQ0FURUdPUklFUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX2NhdGVnb3J5Jyk7XG5leHBvcnQgY29uc3QgQ0FSRF9CT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5X2NhcmRfYm9keScpO1xuZXhwb3J0IGNvbnN0IFRJVExFX0NBVEVHT1JZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl90aXRsZScpO1xuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9