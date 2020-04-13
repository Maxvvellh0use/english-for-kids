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
          CARD_CATEGORIES_IMG[index].innerHTML = '';
          CARD_CATEGORIES_IMG[index].insertAdjacentHTML('afterbegin', `<div class="card-body category_card_body"><p class="card-text">${elem.word}</p>`);
          CARD_CATEGORIES_IMG[index].insertAdjacentHTML('afterbegin', `<img src="${elem.image}" class="categories__cards_img">`)

      });
  }

  openCategoryPage(link) {
      console.log(link.textContent);
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


          // CARD_CATEGORIES_IMG.append(`<img src="${imagesArr}>`);

          // imagesArr[1].map((img, indx) => {
          //     return CARD_CATEGORIES_IMG[indx].append(`<img src="${img}>`);
          // });

          // cardsMap.map((elem, indexCard) => {
          //     CARD_CATEGORIES_IMG[0].append(`<img src="${elem}>"`);
          // });

      //     cards[index].map((card,indCard) => {
      //         // console.log(card)
      //         // card.map(img => CARD_CATEGORIES_IMG[indLin].append(`<img src="${img.image}>"`))
      //         // console.log(card.image);
      //         // CARD_CATEGORIES_IMG[indLin].append(`<img src="${card[indCard].image}>"`);
      //     })
      // });
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
