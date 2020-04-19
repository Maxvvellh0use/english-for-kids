import { SCORE_ITEMS, SCORE_TABLE, SCORE_LINK, CATEGORY_PAGE_CONTAINER } from '../../constants/constants';
import { cards, categoryNames } from '../../cards';

export default class ScorePage {
  constructor() {
    this.openScorePage = this.openScorePage.bind(this);
  }

  createWordLine(word, name, translation) {
    SCORE_TABLE.insertAdjacentHTML('beforeend', `<div class="score__item header_item word">${word}</div>\n
                                        <div class="score__item header_item word_categories">${name}</div>\n
                                        <div class="score__item">${translation}</div>\n
                                        <div class="score__item">0</div>\n
                                        <div class="score__item">0</div>\n
                                        <div class="score__item">0</div>\n
                                        <div class="score__item">0</div>`);
  }

  createTextInWordLine() {
    categoryNames.map((name, index) => {
      cards[index].map((card) => {
        const {word} = card;
        const {translation} = card;
        this.createWordLine(word, name, translation);
      });
    });
  }

  openScorePage() {
    SCORE_LINK.addEventListener('click', () => {
      SCORE_TABLE.classList.remove('hidden');
      SCORE_TABLE.classList.add('flex');
      CATEGORY_PAGE_CONTAINER.style.display = 'none';
      this.createTextInWordLine();
    })
  }
}
