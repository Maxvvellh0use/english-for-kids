import cards from '../../cards';
import {
    HAMBURGER_LINKS,
    CARD_CATEGORIES_IMG,
    CARD_CATEGORIES_TEXT,
    LINKS_CATEGORIES,
    MAIN_PAGE_CONTAINER,
    CATEGORY_PAGE_CONTAINER,
    TITLE_CATEGORY
} from '../../constants/constants';
let clickLink = 0;

export default class Categories {
  constructor() {
    this.actionSetA = this.actionSetA.bind(this);
    // this.openCategoryPage = this.openCategoryPage(this);
  }

  openMainPage() {
      window.addEventListener('popstate', () => {
          CATEGORY_PAGE_CONTAINER.style.display = 'none';
          MAIN_PAGE_CONTAINER.style.display = 'block';
          TITLE_CATEGORY.innerHTML = '';
      });
  }

  openCategoryPage(link) {
      TITLE_CATEGORY.innerHTML = link.textContent;
      CATEGORY_PAGE_CONTAINER.style.display = 'block';
      MAIN_PAGE_CONTAINER.style.display = 'none';
      history.pushState({ 'page_id': 2}, 'Cards', 'index.html#');
  }


  actionSetA() {
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


    // window.addEventListener('onload', () => {
    //   console.log(cards[0].image);
    //   cards[0].map((card, index) => {
    //     setTimeout(() => cardCategoriesImg[index].forEach((cardImg) => {
    //       cardImg.insertAdjacentHTML('afterbegin', `<img src="${cards[0].image}">`);
    //     }), 400);
    //   });
    // });
  }

  // else {
  //
  // }
  generateContent(numberCategory) {
    cards.map((card) => {

    });
  }
}
