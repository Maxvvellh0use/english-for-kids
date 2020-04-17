import {
  // eslint-disable-next-line import/named
  SWITCHER, BUTTON_PLAY, CARD_BODY_MAIN_PAGE, HAMBURGER_NAV, STARS_BLOCK,
} from '../../constants/constants';
import PlayMode from "../PlayMode/PlayMode";

export default class Switcher {
  constructor() {
    this.playMode = this.playMode.bind(this);
    this.check = this.check.bind(this);
  }

  check() {
    return SWITCHER.checked === true;
  }

  playMode() {
    SWITCHER.addEventListener('change', () => {
      const cardCategoryImages = document.querySelectorAll('.categories__cards_img');
      if (this.check()) {
        this.switcherChecked(cardCategoryImages);
      } else {
       this.switcherNotChecked(cardCategoryImages);
      }
    });
  }

  switcherChecked(cardCategoryImages) {
    BUTTON_PLAY.style.display = 'block';
    HAMBURGER_NAV.classList.add('menu_play');
    STARS_BLOCK.style.display = 'none';
    cardCategoryImages.forEach((image) => {
      image.style.transform = 'scaleY(1.5)' + 'translateY(25px)';
    });
    CARD_BODY_MAIN_PAGE.forEach((cardMain) => {
      cardMain.classList.add('card_body_play');
      cardMain.parentElement.classList.add('card_play');
    });
  }

  switcherNotChecked(cardCategoryImages) {
    cardCategoryImages.forEach((image) => {
      image.style.transform = 'scaleY(1)' + 'translateY(0px)';
    });
    BUTTON_PLAY.style.display = 'none';
    HAMBURGER_NAV.classList.remove('menu_play');
    BUTTON_PLAY.classList.remove('repeat');
    BUTTON_PLAY.innerHTML = 'START PLAY';
    STARS_BLOCK.style.display = 'none';
    STARS_BLOCK.innerHTML = '';
    CARD_BODY_MAIN_PAGE.forEach((cardMain) => {
      cardMain.classList.remove('card_body_play');
      cardMain.parentElement.classList.remove('card_play');
    });
  }
}
