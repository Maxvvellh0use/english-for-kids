import HamburgerMenu from './js/components/Header/HamburgerMenu.js';
import Categories from "./js/components/Card/Categories";
import {HAMBURGER} from './js/constants/constants.js';
import {linksCategories} from "./js/constants/constants";

const hamburger = new HamburgerMenu();
HAMBURGER.addEventListener('click', hamburger.openHamburgerMenu.bind(hamburger));


const categories = new Categories();
categories.actionSetA();
categories.openMainPage();
