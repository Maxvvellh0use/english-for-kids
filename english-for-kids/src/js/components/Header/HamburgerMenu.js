import {
  HAMBURGER,
  HAMBURGER_LIST,
  HAMBURGER_NAV,
  BLACKOUT,
  HAMBURGER_LINES,
  HAMBURGER_LINKS,
} from '../../constants/constants';

let clicksHamburger = 0;

export default class HamburgerMenu {
  constructor() {
    this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this);
    this.openHamburgerMenu = this.openHamburgerMenu.bind(this);
    this.closeAfterClickToLinks = this.closeAfterClickToLinks.bind(this);
  }

  async openHamburgerMenu() {
    if (clicksHamburger === 0) {
      const promise = new Promise(() => {
        HAMBURGER_NAV.style.display = 'block';
        BLACKOUT.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
      setTimeout(() => {
        HAMBURGER_NAV.style.transform = 'translateX(0vw)';
        HAMBURGER_LIST.style.transform = 'translateX(0vw)';
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
      HAMBURGER_LINES[0].style.transform = 'rotate(45deg)' + 'translateY(10px)';
      HAMBURGER_LINES[2].style.transform = 'rotate(-45deg)' + 'translateY(-10px)';
      HAMBURGER_LINES[1].style.opacity = '0';
    } else {
      HAMBURGER_LINES[0].style.transform = 'rotate(0deg)' + 'translateY(0px)';
      HAMBURGER_LINES[2].style.transform = 'rotate(0deg)' + 'translateY(0px)';
      HAMBURGER_LINES[1].style.opacity = '1';
    }
  }

  closeHamburgerMenu() {
    setTimeout(() => HAMBURGER_NAV.style.display = 'none', 300);
    HAMBURGER_NAV.style.transform = 'translateX(-75vw)';
    HAMBURGER_LIST.style.transform = 'translateX(-75vw)';
    HAMBURGER.style.transform = 'rotate(0deg)';
    BLACKOUT.style.display = 'none';
    document.body.style.overflow = 'visible';
    this.transformBurger();
    clicksHamburger = 0;
  }

  closeAfterClickToLinks(event) {
    HAMBURGER_LINKS.forEach((link) => {
      if (event.target === link) {
        this.closeHamburgerMenu();
      }
    });
  }
}
