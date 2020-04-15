import cards from '../../cards';
import Switcher from '../Switcher/Switcher';
import {
  HAMBURGER_LINKS,
  CARD_CATEGORIES,
  LINKS_CATEGORIES,
  MAIN_PAGE_CONTAINER,
  CATEGORY_PAGE_CONTAINER,
  TITLE_CATEGORY,
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

  createContentsToCategory(indexCard, styleCard, styleImg) {
    cards[indexCard].map((elem, index) => {
      CARD_CATEGORIES[index].innerHTML = '';
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<button class="card-body__button" style="${styleCard}"><img class="svg_button" src="src/img/rotate.svg"></button>`);
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body card_translate" style="display: none"><p class="card-text">${elem.translation}</p>`);
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body category_text" style="${styleCard}"><p class="card-text">${elem.word}</p>`);
      CARD_CATEGORIES[index].insertAdjacentHTML('afterbegin', `<img src="${elem.image}" class="categories__cards_img" style="${styleImg}">`);
    });
  }


  appendContentsToCategory(indexCard) {
    let styleCard = '';
    let styleImg = '';
    const switcher = new Switcher();
    console.log(switcher.check()) ;
    styleCard = 'display: block;';
    styleImg = 'height: 13rem;';
    if (switcher.check() === false) {
      this.createContentsToCategory(indexCard, styleCard, styleImg);
    }
    else {
      styleCard = 'display: none;';
      styleImg = 'max-height: 15rem;';
      this.createContentsToCategory(indexCard, styleCard, styleImg);
    }
  }

  openCategoryPage(link) {
    switch (link.id || link.textContent) {
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

  playingWords() {
    CARD_CATEGORIES.forEach((card) => {
      card.addEventListener('click', () => {
        const audio = new Audio(`src/audio/${card.textContent.replace(/[^A-Za-z]/g, '')}.mp3`);
        audio.play().then(() => audio.preload = 'auto');
        this.rotateListeners(card);
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
