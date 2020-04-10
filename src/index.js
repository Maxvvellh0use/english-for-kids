import HamburgerMenu from './js/components/Header/HamburgerMenu.js';
import {HAMBURGER} from './js/constants/constants.js';

const hamburger = new HamburgerMenu();
HAMBURGER.addEventListener('click', hamburger.openHamburgerMenu.bind(hamburger));