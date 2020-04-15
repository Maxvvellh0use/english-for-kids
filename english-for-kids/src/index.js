import './sass/style.scss';
import HamburgerMenu from './js/components/Header/HamburgerMenu.js';
import Categories from './js/components/Card/Categories.js';
import Switcher from './js/components/Switcher/Switcher.js';
import { HAMBURGER, BLACKOUT, HAMBURGER_LIST } from './js/constants/constants';

const hamburger = new HamburgerMenu();
HAMBURGER.addEventListener('click', hamburger.openHamburgerMenu);
BLACKOUT.addEventListener('click', hamburger.closeHamburgerMenu);
HAMBURGER_LIST.addEventListener('click', (event) => hamburger.closeAfterClickToLinks(event));


const categories = new Categories();
categories.linksListeners();
categories.openMainPage();

const switcher = new Switcher();
switcher.playMode();
