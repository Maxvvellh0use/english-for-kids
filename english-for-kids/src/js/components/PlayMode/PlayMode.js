import {
  // eslint-disable-next-line import/named
  BUTTON_PLAY,
  CARD_CATEGORIES,
  TITLE_CATEGORY,
  STARS_BLOCK,
  CATEGORY_PAGE_CONTAINER,
  WIN_BLOCK,
  LOSE_BLOCK,
  HEADER,
  ERRORS,
  HAMBURGER_LINKS,
} from '../../constants/constants';
import { categoryNames, cards } from '../../cards';
// eslint-disable-next-line import/no-cycle
import Switcher from '../Switcher/Switcher';

export default class PlayMode {
  constructor() {
    this.buttonStartPlay = this.buttonStartPlay.bind(this);
    this.nameAudio = [];
    this.clickPlay = 0;
  }

  addSvgRepeat() {
    BUTTON_PLAY.insertAdjacentHTML('afterbegin', '<img class="svg_repeat" src="src/img/other/repeat.svg">');
  }

  clearStorage() {
    BUTTON_PLAY.innerHTML = 'START PLAY';
    BUTTON_PLAY.classList.remove('repeat');
    STARS_BLOCK.innerHTML = '';
    STARS_BLOCK.style.display = 'none';
    this.nameAudio = [];
    this.clickPlay = 0;
    CARD_CATEGORIES.forEach((card) => {
      card.classList.remove('card_correct');
      card.classList.add('card_to_hover');
    });
  }

  burgerLinkNavigation() {
    HAMBURGER_LINKS.forEach((link) => {
      link.addEventListener('click', () => {
        this.clearStorage();
        STARS_BLOCK.innerHTML = '';
      });
    });
  }

  sortWords() {
    if (this.clickPlay === 0) {
      categoryNames.map((name, index) => {
        if (name === TITLE_CATEGORY.innerText) {
          this.nameAudio = [];
          cards[index].map((category) => {
            this.nameAudio.push(category.word);
          });
        }
      });
      this.nameAudio.sort(() => Math.random() - 0.5);
      this.clickPlay = 1;
    } else if (!this.nameAudio.length) {
      this.clickPlay = 0;
    }
  }

  playRandomWord() {
    const trueCard = this.nameAudio[this.nameAudio.length - 1];
    if (this.nameAudio.length) {
      this.cardsCLickPlay(trueCard);
      const audio = new Audio(`src/audio/${trueCard}.mp3`);
      audio.play().then(() => audio.preload = 'auto');
    }
    this.burgerLinkNavigation();
  }


  buttonStartPlay() {
    BUTTON_PLAY.addEventListener('click', () => {
      if (!BUTTON_PLAY.classList.contains('repeat')) {
        BUTTON_PLAY.classList.add('repeat');
        BUTTON_PLAY.innerHTML = '';
        BUTTON_PLAY.id = 'repeat';
        this.addSvgRepeat();
        this.sortWords();
        this.playRandomWord();
      } else {
        this.buttonRepeat();
      }
    });
  }


  buttonRepeat() {
    const audioError = new Audio(`src/audio/${this.nameAudio[this.nameAudio.length - 1]}.mp3`);
    audioError.play().then(() => audioError.preload = 'auto');
  }

  cardsCLickPlay() {
    CARD_CATEGORIES.forEach((card) => {
      card.addEventListener('click', (event) => {
        event.preventDefault();
        const trueCard = this.nameAudio[this.nameAudio.length - 1];
        if (this.nameAudio.length === 1) {
          this.openTotalPage();
        } else if (this.nameAudio.length && this.switcherChecked() && card.classList.contains('card_to_hover') && trueCard === card.innerText) {
          this.correctCard(card);
        } else if (trueCard !== card.innerText && this.nameAudio.length && this.switcherChecked() && card.classList.contains('card_to_hover')) {
          this.errorCard();
        }
      });
    });
  }


  correctCard(card) {
    this.nameAudio.pop();
    const audioCorrect = new Audio('src/audio/correct.mp3');
    audioCorrect.play().then(() => audioCorrect.preload = 'auto');
    const nextWord = this.nameAudio[this.nameAudio.length - 1];
    const audioNext = new Audio(`src/audio/${nextWord}.mp3`);
    audioNext.play().then(() => audioNext.preload = 'auto');
    STARS_BLOCK.insertAdjacentHTML('afterbegin', '<img class="stars_svg" src="src/img/other/star-win.svg">');
    STARS_BLOCK.style.display = 'block';
    card.classList.remove('card_to_hover');
    card.classList.add('card_correct');
  }

  errorCard() {
    const audioError = new Audio('src/audio/error.mp3');
    audioError.play().then(() => audioError.preload = 'auto');
    STARS_BLOCK.insertAdjacentHTML('beforeend', '<img class="stars_svg star_lose" src="src/img/other/star.svg">');
    STARS_BLOCK.style.display = 'block';
  }

  switcherChecked() {
    const switcher = new Switcher();
    return switcher.switcherIsChecked();
  }


  openTotalPage() {
    const starsTotal = document.querySelectorAll('.stars_svg');
    const starErrors = document.querySelectorAll('.star_lose');
    const audioSuccess = new Audio('src/audio/success.mp3');
    const audioFailure = new Audio('src/audio/failure.mp3');
    const starsTotalArray = Array.from(starsTotal);
    CATEGORY_PAGE_CONTAINER.style.display = 'none';
    const filterStarsTotalArray = starsTotalArray.filter((star) => star.classList.contains('star_lose'));
    if (filterStarsTotalArray.length) {
      audioFailure.play().then(() => audioFailure.preload = 'auto');
      WIN_BLOCK.style.display = 'none';
      LOSE_BLOCK.style.display = 'block';
      HEADER.style.display = 'none';
      ERRORS.innerHTML = `${starErrors.length} errors`;
      setTimeout(this.backToMainPage, 3400);
    } else {
      audioSuccess.play().then(() => audioSuccess.preload = 'auto');
      WIN_BLOCK.style.display = 'block';
      HEADER.style.display = 'none';
      setTimeout(this.backToMainPage, 3400);
    }
  }

  backToMainPage() {
    location.reload();
  }
}
