import { HAMBURGER, HAMBURGER_LIST, HAMBURGER_NAV } from '../../constants/constants';

let clicksHamburger = 0;

export default class HamburgerMenu {
  constructor() {
    this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this);
  }

  async openHamburgerMenu() {
    if (clicksHamburger === 0) {
      const promise = new Promise(() => {
        HAMBURGER_NAV.style.display = 'block';
      });
      setTimeout(() => {
        HAMBURGER_NAV.style.transform = 'translateX(0vw)';
        HAMBURGER_LIST.style.transform = 'translateX(0vw)';
      }, 50);
      HAMBURGER.style.transform = 'rotate(90deg)';
      clicksHamburger += 1;
      await promise;
    } else {
      this.closeHamburgerMenu();
      this.onBlurHamburgerMenu();
    }
  }

  closeHamburgerMenu() {
    setTimeout(() => HAMBURGER_NAV.style.display = 'none', 300);
    HAMBURGER_NAV.style.transform = 'translateX(-75vw)';
    HAMBURGER_LIST.style.transform = 'translateX(-75vw)';
    HAMBURGER.style.transform = 'rotate(0deg)';
    clicksHamburger = 0;
  }

  onBlurHamburgerMenu() {
    console.log('blur');
    HAMBURGER_LIST.addEventListener('blur', (event) => {
      this.closeHamburgerMenu();
    }, true);
  }
}
