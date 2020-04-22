import { cards, categoryNames } from '../../cards';
import Switcher from '../Switcher/Switcher';
import {
  HAMBURGER_LINKS,
  CARD_CATEGORIES,
  LINKS_CATEGORIES,
  MAIN_PAGE_CONTAINER,
  CATEGORY_PAGE_CONTAINER,
  TITLE_CATEGORY,
  SCORE_TABLE,
  SCORE_ITEMS,
  MAIN_PAGE,
  SCORE_TITLE,
} from '../../constants/constants';

export default class Categories {
  constructor() {
    this.openMainPage = this.openMainPage.bind(this);
    this.linksListeners = this.linksListeners.bind(this);
  }

  openMainPage() {
    CATEGORY_PAGE_CONTAINER.classList.add('hidden');
    MAIN_PAGE_CONTAINER.style.display = 'block';
    TITLE_CATEGORY.innerHTML = '';
  }

  backMainPage() {
    window.addEventListener('popstate', () => {
      location.reload();
    });
    MAIN_PAGE.addEventListener('click', () => {
      location.reload();
    });
  }

  createContentsToCategory(indexCard, styleImg) {
    cards[indexCard].map((elem, index) => {
      CARD_CATEGORIES[index].innerHTML = '';
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', '<button class="card-body__button"><img class="svg_button" src="src/img/other/rotate.svg"></button>');
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body card_translate" style="display: none"><p class="card-text">${elem.translation}</p>`);
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body category_text"><p class="card-text">${elem.word}</p>`);
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<img src="${elem.image}" class="categories__cards_img" style="${styleImg}">`);
    });
  }


  appendContentsToCategory(indexCard) {
    let styleImg = '';
    const switcher = new Switcher();
    if (!switcher.switcherIsChecked()) {
      styleImg = 'transform: scaleY(1) translateY(0px);';
      this.createContentsToCategory(indexCard, styleImg);
    } else {
      styleImg = 'transform: scaleY(1.5) translateY(25px)';
      this.createContentsToCategory(indexCard, styleImg);
    }
  }

  openCategoryPage(link) {
    categoryNames.map((name, index) => {
      if (name === link.id || name === link.innerText) {
        this.appendContentsToCategory(index);
      }
    });
    SCORE_TITLE.classList.add('hidden');
    SCORE_TITLE.classList.remove('flex');
    SCORE_ITEMS.classList.add('hidden');
    SCORE_ITEMS.classList.remove('flex');
    SCORE_TABLE.classList.add('hidden');
    SCORE_TABLE.classList.remove('flex');
    TITLE_CATEGORY.innerHTML = link.innerText;
    CATEGORY_PAGE_CONTAINER.style.display = 'block';
    MAIN_PAGE_CONTAINER.style.display = 'none';
    history.pushState({ page_id: 2 }, 'Cards', 'index.html#');
  }

  linksListeners() {
    LINKS_CATEGORIES.forEach((link, index) => {
      link.addEventListener('click', () => {
        HAMBURGER_LINKS.forEach((activeLink) => {
          activeLink.classList.remove('active_link');
        });
        HAMBURGER_LINKS[index].classList.add('active_link');
        this.openCategoryPage(link);
      });
    });

    HAMBURGER_LINKS.forEach((link) => {
      link.addEventListener('click', () => {
        HAMBURGER_LINKS.forEach((activeLink) => {
          activeLink.classList.remove('active_link');
        });
        link.classList.add('active_link');
        this.openCategoryPage(link);
      });
    });
    this.playingWords();
  }

  localStorageAdd(word, train, correct, error) {
    if (localStorage.getItem(word)) {
      const score = JSON.parse(localStorage.getItem(word));
      score[0] += train;
      score[1] += correct;
      score[2] += error;
      localStorage.setItem(word, JSON.stringify(score));
    } else {
      const score = [train, correct, error];
      localStorage.setItem(word, JSON.stringify(score));
    }
  }

  playingWords() {
    const switcher = new Switcher();
    CARD_CATEGORIES.forEach((card) => {
      card.addEventListener('click', () => {
        if (!switcher.switcherIsChecked()) {
          const word = card.textContent.replace(/[^A-Za-z]/g, '');
          const audio = new Audio(`src/audio/${word}.mp3`);
          audio.play().then(() => audio.preload = 'auto');
          this.rotateListeners(card);
          this.localStorageAdd(word, 1, 0, 0);
        }
      });
    });
  }

  rotateListeners() {
    const cardButtons = document.querySelectorAll('.card-body__button');
    const cardText = document.querySelectorAll('.category_text');
    const cardTranslation = document.querySelectorAll('.card_translate');
    cardButtons.forEach((button, index) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        return this.rotateToTranslate(button, cardText, index, cardTranslation);
      });
      button.parentElement.addEventListener('mouseleave', (event) => {
        event.preventDefault();
        return this.backRotate(button, cardText, index, cardTranslation);
      });
    });
  }

  rotateToTranslate(button, cardText, index, cardTranslation) {
    cardText[index].style.display = 'none';
    cardTranslation[index].style.display = 'block';
    button.style.opacity = '0';
    button.parentElement.style.transform = 'rotateY(180deg)';
    cardTranslation[index].style.transform = 'rotateY(-180deg)';
  }


  backRotate(button, cardText, index, cardTranslation) {
    cardText[index].style.display = 'block';
    cardTranslation[index].style.display = 'none';
    button.style.opacity = '1';
    if (button.parentElement) {
      button.parentElement.style.transform = 'rotateY(0deg)';
    }
  }
}
