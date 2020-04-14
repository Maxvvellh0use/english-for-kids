import cards from '../../cards';
import {
    HAMBURGER_LINKS,
    CARD_CATEGORIES,
    LINKS_CATEGORIES,
    MAIN_PAGE_CONTAINER,
    CATEGORY_PAGE_CONTAINER,
    TITLE_CATEGORY,
    CARD_BUTTON,
    CARD_BODY
} from '../../constants/constants';

export default class Categories {
  constructor() {
    this.linksListeners = this.linksListeners.bind(this);
  }

  openMainPage() {
      window.addEventListener('popstate', () => {
          CATEGORY_PAGE_CONTAINER.style.display = 'none';
          MAIN_PAGE_CONTAINER.style.display = 'block';
          TITLE_CATEGORY.innerHTML = '';
      });
  }

  appendContentsToCategory(indexCard) {
      cards[indexCard].map((elem, index) => {
          CARD_CATEGORIES[index].innerHTML = '';
          CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<button class="card-body__button"><img class="svg_button" src="src/img/rotate.svg"></button>`);
          CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body category_text"><p class="card-text">${elem.word}</p>`);
          CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<img src="${elem.image}" class="categories__cards_img">`);
          // CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body card-translate" style="display: none"><p>${elem.translation}</p>`);
      });
  }

  openCategoryPage(link) {
          switch (link.id || link.textContent ) {
              case 'Action (set A)':
                  this.appendContentsToCategory(0);
                  break;
              case 'Action (set B)':
                  this.appendContentsToCategory(1);
                  break;
              case 'Animal (set A)':
                  this.appendContentsToCategory(2);
                  break;
              case 'Animal (set B)':
                  this.appendContentsToCategory(3);
                  break;
              case 'Clothes':
                  this.appendContentsToCategory(4);
                  break;
              case 'Emotions':
                  this.appendContentsToCategory(5);
                  break;
              case 'Professions':
                  this.appendContentsToCategory(6);
                  break;
              case 'Colors':
                  this.appendContentsToCategory(7);
                  break;
              default:
                  break;
          }
      TITLE_CATEGORY.innerHTML = link.textContent;
      CATEGORY_PAGE_CONTAINER.style.display = 'block';
      MAIN_PAGE_CONTAINER.style.display = 'none';
      history.pushState({ 'page_id': 2}, 'Cards', 'index.html#');
  }


  linksListeners() {
      LINKS_CATEGORIES.forEach(link => {
          link.addEventListener('click', () => {
              this.openCategoryPage(link);
          });
      });
      HAMBURGER_LINKS.forEach(link => {
          link.addEventListener('click', () => {
              this.openCategoryPage(link);
          });
      });
      this.playingWords();
  }

  playingWords() {
      const cardText = document.querySelectorAll('.card-text');
      CARD_CATEGORIES.forEach((card, index) => {
          card.addEventListener('click', () => {
              let audio = new Audio(`src/audio/${card.textContent}.mp3`);
              audio.play().then(() => audio.preload = 'auto');
              this.rotateListeners(card);
          })
      });

  }

  rotateListeners(card) {
      const cardButtons = document.querySelectorAll('.card-body__button');
      const cardText = document.querySelectorAll('.card-text');
      const cardTranslation = document.querySelectorAll('.card-translate');
      cardButtons.forEach((button, index) => {
          button.addEventListener('click', (event) => {
              event.preventDefault();
              return this.rotateToTranslate(button, cardText, index);
          });
          button.parentElement.addEventListener('mouseleave', (event) => {
              event.preventDefault();
              return this.backRotate(button);
          })
      })
  }

  rotateToTranslate(button, cardText, index) {
      console.log(index);
      // cardText[index].style.display = 'none';
      button.style.opacity = '0';
      button.parentElement.style.transform = 'rotateY(180deg)';
  }


  backRotate(button) {
      button.style.opacity = '1';
      button.parentElement.style.transform = 'rotateY(0deg)';
  }

}
