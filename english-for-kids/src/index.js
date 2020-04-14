import HamburgerMenu from './js/components/Header/HamburgerMenu.js';
import Categories from "./js/components/Card/Categories";
import {HAMBURGER,BLACKOUT, HAMBURGER_LIST} from "./js/constants/constants";

const hamburger = new HamburgerMenu();
HAMBURGER.addEventListener('click', hamburger.openHamburgerMenu);
BLACKOUT.addEventListener('click', hamburger.closeHamburgerMenu);
HAMBURGER_LIST.addEventListener('click', event => hamburger.closeAfterClickToLinks(event));



const categories = new Categories();
categories.linksListeners();
categories.openMainPage();
