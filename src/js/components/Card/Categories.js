import cards from '../../cards';
import { cardCategoriesImg, cardCategoriesText, linksCategories, mainPageContainer, categoryPageContainer } from '../../constants/constants';
let clickLink = 0;

export default class Categories {
  constructor() {
    this.actionSetA = this.actionSetA.bind(this);
  }

  openMainPage() {
      window.addEventListener('popstate', () => {
          categoryPageContainer.style.display = 'none';
          mainPageContainer.style.display = 'block';
      });
  }

  openCategoryPage() {
      mainPageContainer.addEventListener('click', event => {
          linksCategories.forEach(link => {
              categoryPageContainer.style.display = 'block';
              mainPageContainer.style.display = 'none';
          });
          history.pushState({ 'page_id': 2}, 'Cards', 'index.html#');
      })
  }

  actionSetA() {
      this.openCategoryPage();
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
