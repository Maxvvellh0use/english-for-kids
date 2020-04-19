import { SCORE_ITEMS, SCORE_TABLE } from '../../constants/constants';
import { cards, categoryNames } from '../../cards';

export default class ScorePage {
  constructor() {

  }

  createWordLine(word, name) {
    SCORE_TABLE.insertAdjacentHTML('beforeend', `<div class="score__item header_item word">${word}</div>\n
                                        <div class="score__item header_item word_categories">${name}</div>\n
                                        <div class="score__item"></div>\n
                                        <div class="score__item"></div>\n
                                        <div class="score__item"></div>\n
                                        <div class="score__item"></div>\n
                                        <div class="score__item"></div>`);
  }

  createTextInWordLine() {
    categoryNames.map((name, index) => {
      cards[index].map((card, index) => {
        const word = card.word;
        this.createWordLine(word, name);
      });
    });
  }
}
