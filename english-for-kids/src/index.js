import './sass/style.scss';

import HamburgerMenu from './js/components/Header/HamburgerMenu.js';
import Categories from './js/components/Card/Categories.js';
import Switcher from './js/components/Switcher/Switcher.js';
import PlayMode from './js/components/PlayMode/PlayMode';
import { HAMBURGER, BLACKOUT, HAMBURGER_LIST } from './js/constants/constants';
import ScorePage from './js/components/ScorePage/ScorePage.js';

const hamburger = new HamburgerMenu();
HAMBURGER.addEventListener('click', hamburger.openHamburgerMenu);
BLACKOUT.addEventListener('click', hamburger.closeHamburgerMenu);
HAMBURGER_LIST.addEventListener('click', (event) => hamburger.closeAfterClickToLinks(event));


const categories = new Categories();
categories.linksListeners();
categories.backMainPage();

const switcher = new Switcher();
switcher.playMode();

const playMode = new PlayMode();
playMode.buttonStartPlay();

const scorePage = new ScorePage();
scorePage.openScorePage();
scorePage.createDifficultPage();
