import {
  SCORE_TABLE, SCORE_LINK, CATEGORY_PAGE_CONTAINER,
} from '../../constants/constants';
import { cards, categoryNames } from '../../cards';

export default class ScorePage {
  constructor() {
    this.openScorePage = this.openScorePage.bind(this);
  }

  createWordLine(word, name, translation) {
    let train = '';
    let correct = '';
    let error = '';
    if (!localStorage.getItem(word)) {
      train = [0, 0, 0];
      correct = [0, 0, 0];
      error = [0, 0, 0];
    } else {
      train = JSON.parse(localStorage.getItem(word));
      correct = JSON.parse(localStorage.getItem(word));
      error = JSON.parse(localStorage.getItem(word));
    }
    SCORE_TABLE.insertAdjacentHTML('beforeend', `<div class="score__item header_item word">${word}</div>\n
                                        <div class="score__item header_item word_categories">${name}</div>\n
                                        <div class="score__item">${translation}</div>\n
                                        <div class="score__item">${train[0]}</div>\n
                                        <div class="score__item">${correct[1]}</div>\n
                                        <div class="score__item">${error[2]}</div>\n
                                        <div class="score__item">0</div>`);
  }

  createTextInWordLine() {
    categoryNames.map((name, index) => {
      cards[index].map((card) => {
        const { word } = card;
        const { translation } = card;
        this.createWordLine(word, name, translation);
      });
    });
  }

  openScorePage(word) {
    SCORE_LINK.addEventListener('click', () => {
      SCORE_TABLE.classList.remove('hidden');
      SCORE_TABLE.classList.add('flex');
      CATEGORY_PAGE_CONTAINER.style.display = 'none';
      this.createTextInWordLine();
    });
  }
}
