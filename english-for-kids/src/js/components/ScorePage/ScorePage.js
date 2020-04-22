import {
  SCORE_TABLE,
  SCORE_LINK,
  CATEGORY_PAGE_CONTAINER,
  SCORE_ITEMS,
  SCORE_TITLE,
  OPEN_DIFFICULT_PAGE,
  CARD_CATEGORIES,
  CLEAR_STORAGE_BUTTON,
  TITLE_CATEGORY,
} from '../../constants/constants';
import { cards, categoryNames } from '../../cards';

export default class ScorePage {
  constructor() {
    this.openScorePage = this.openScorePage.bind(this);
    this.arrWords = [];
    this.clickToSortButton = '';
    this.sortKey = 'word';
    this.train = '';
    this.correct = '';
    this.error = '';
    this.rates = '';
  }

  createWordLine(word, translation, category) {
    if (!localStorage.getItem(word)) {
      this.train = [0, 0, 0];
      this.correct = [0, 0, 0];
      this.error = [0, 0, 0];
    } else {
      this.train = JSON.parse(localStorage.getItem(word));
      this.correct = JSON.parse(localStorage.getItem(word));
      this.error = JSON.parse(localStorage.getItem(word));
    }
    this.correct[1] === 0 || this.error[2] === 0 ? this.rates = 0 : this.rates = Math.round(this.error[2] / this.correct[1] * 100);
    SCORE_ITEMS.classList.add('flex');
    SCORE_ITEMS.insertAdjacentHTML('beforeend', `<div class="score__item header_item word">${word}</div>\n
                                        <div class="score__item header_item word_categories">${category}</div>\n
                                        <div class="score__item">${translation}</div>\n
                                        <div class="score__item">${this.train[0]}</div>\n
                                        <div class="score__item">${this.correct[1]}</div>\n
                                        <div class="score__item">${this.error[2]}</div>\n
                                        <div class="score__item">${this.rates}%</div>`);
  }

  addNewProps(card, word) {
    if (localStorage.getItem(word)) {
      card.train = JSON.parse(localStorage.getItem(word))[0];
      card.correct = JSON.parse(localStorage.getItem(word))[2];
      card.error = JSON.parse(localStorage.getItem(word))[1];
      card.rates = card.correct === 0 || card.error === 0 ? 0 : Math.round(card.error / card.correct * 100);
    } else {
      card.train = 0;
      card.correct = 0;
      card.error = 0;
      card.rates = 0;
    }
    console.log(this.arrWords);
  }

  createTextInWordLine() {
    this.arrWords.map((card) => {
      const { word } = card;
      const { translation } = card;
      const { category } = card;
      this.addNewProps(card, word);
      this.createWordLine(word, translation, category);
    });
  }

  openScorePage() {
    categoryNames.map((name, index) => {
      cards[index].map((card) => {
        this.arrWords.push(card);
      });
    });
    SCORE_TABLE.addEventListener('click', (event) => {
      if (event.target.classList.contains('words')) {
        if (this.clickToSortButton === '') {
          this.sortKey = 'word';
          this.createSortedWords();
        } else {
          this.clearPageAndReverse();
        }
      } else if (event.target.classList.contains('translation')) {
        if (this.clickToSortButton === '') {
          this.sortKey = 'translation';
          this.createSortedWords();
        } else {
          this.clearPageAndReverse();
        }
      } else if (event.target.classList.contains('category')) {
        if (this.clickToSortButton === '') {
          this.sortKey = 'category';
          this.createSortedWords();
        } else {
          this.clearPageAndReverse();
        }
      } else if (event.target.classList.contains('train')) {
        if (this.clickToSortButton === '') {
          this.sortKey = 'train';
          this.createSortedWords();
        } else {
          this.clearPageAndReverse();
        }
      } else if (event.target.classList.contains('correct')) {
        if (this.clickToSortButton === '') {
          this.sortKey = 'correct';
          this.createSortedWords();
        } else {
          this.clearPageAndReverse();
        }
      } else if (event.target.classList.contains('error')) {
        if (this.clickToSortButton === '') {
          this.sortKey = 'error';
          this.createSortedWords();
        } else {
          this.clearPageAndReverse();
        }
      } else if (event.target.classList.contains('rates')) {
        if (this.clickToSortButton === '') {
          this.sortKey = 'rates';
          this.createSortedWords();
        } else {
          this.clearPageAndReverse();
        }
      }
    });
    SCORE_LINK.addEventListener('click', () => {
      this.reloadScorePage();
    });
  }

  reloadScorePage() {
    SCORE_TITLE.classList.remove('hidden');
    SCORE_TITLE.classList.add('flex');
    SCORE_TABLE.classList.remove('hidden');
    SCORE_TABLE.classList.add('flex');
    CATEGORY_PAGE_CONTAINER.style.display = 'none';
    this.createTextInWordLine();
  }


  sortArray() {
    this.arrWords.sort((a, b) => {
      const word1 = a[this.sortKey];
      const word2 = b[this.sortKey];
      if (word1 > word2) return -1;
      if (word1 < word2) return 1;
      return 0;
    });
  }

  clearPageAndReverse() {
    SCORE_ITEMS.innerHTML = '';
    if (this.clickToSortButton === 1) {
      this.arrWords.reverse();
      this.createTextInWordLine();
      this.clickToSortButton = '';
    }
  }

  createSortedWords() {
    SCORE_ITEMS.innerHTML = '';
    this.sortArray();
    this.createTextInWordLine();
    this.clickToSortButton = 1;
  }

  createDifficultPage() {
    OPEN_DIFFICULT_PAGE.addEventListener('click', () => {
      SCORE_TITLE.classList.add('hidden');
      SCORE_TITLE.classList.remove('flex');
      SCORE_TABLE.classList.add('hidden');
      SCORE_TABLE.classList.remove('flex');
      SCORE_ITEMS.innerHTML = '';
      this.sortKey = 'error';
      this.sortArray();
      const firstEightLine = this.arrWords.filter((line, index) => index <= 7 && line.error !== 0);
      CATEGORY_PAGE_CONTAINER.style.display = 'block';
      this.createContentAtDifficultPage(firstEightLine);
      this.clearStorage(firstEightLine);
    });
    this.clearStorage();
  }

  createContentAtDifficultPage(firstEightLine) {
    TITLE_CATEGORY.textContent = 'Training Difficult Words';
    firstEightLine.map((line, index) => {
      CARD_CATEGORIES[index].innerHTML = '';
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', '<button class="card-body__button"><img class="svg_button" src="src/img/other/rotate.svg"></button>');
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body card_translate" style="display: none"><p class="card-text">${line.translation}</p>`);
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body category_text"><p class="card-text">${line.word}</p>`);
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<img src="${line.image}" class="categories__cards_img">`);
    });
  }

  clearStorage(firstEightLine) {
    CLEAR_STORAGE_BUTTON.addEventListener('click', () => {
      localStorage.clear();
      SCORE_ITEMS.innerHTML = '';
      this.reloadScorePage();
      firstEightLine = [];
    });
  }
}
