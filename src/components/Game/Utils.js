import icons from '../../assets/icons';

export class GameMethods {
  constructor(options, cardsObj) {
    this.options = options;
    this.cardsObj = cardsObj;
    this.mixedDeckArray = [];
    this.twoTouchedCards = [];
  }

  createDeck = (setDeckToDisplay) => {
    const { cardsObj, options, mixedDeckArray } = this;
    try {
      for (let i = 0; i < options.numberOfPairs; i++) {
        mixedDeckArray.push(cardsObj[i]);
      }
      const duplicateDisplayArray = [...mixedDeckArray, ...mixedDeckArray.sort(() => 0.5 - Math.random())].sort(() => 0.5 - Math.random());
      setDeckToDisplay(() => [...duplicateDisplayArray]);
    } catch (err) {
      console.log(err);
    }
  };

  handleCardTouch = (e, setDeckToDisplay, deckToDisplay) => {
    e.preventDefault();
    try {
      const newDeck = [...deckToDisplay];
      if (this.twoTouchedCards.length <= 1) {
        this.twoTouchedCards.push([e.target.value, e.target.id]);
        e.target.classList.add('flipCard');
        e.target.children[0]?.classList.remove('hideCard');
        setTimeout(() => {
          e.target.classList.remove('flipCard');
          e.target.children[0]?.classList.add('hideCard');
        }, 1000);
        //checks if the user made 2 selection of cards
        if (this.twoTouchedCards[0] && this.twoTouchedCards[1]) {
          //checks if the user didnt select same element on dom
          const firstElemValue = this.twoTouchedCards[0][0];
          const secondElemValue = this.twoTouchedCards[1][0];
          const firstElemId = this.twoTouchedCards[0][1];
          const secondElemId = this.twoTouchedCards[1][1];
          if (firstElemId !== secondElemId) {
            if (firstElemValue !== secondElemValue) {
              //checks if the values are not equal
              this.twoTouchedCards = [];
            }
            //checks if the values are equal
            if (firstElemValue === secondElemValue) {
              newDeck.forEach((card) => {
                if (card.value === firstElemValue) {
                  card.isMatched = true;
                }
                setDeckToDisplay([...newDeck]);this.twoTouchedCards = [];
              });
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export const cardsObj = [
  { id: 1, isTouched: false, color: '#de1040', isMatched: false, value: 'bear', src: icons.bear },
  { id: 2, isTouched: false, color: '#de1040', isMatched: false, value: 'camel', src: icons.camel },
  { id: 3, isTouched: false, color: '#de1040', isMatched: false, value: 'cat', src: icons.cat },
  { id: 4, isTouched: false, color: '#de1040', isMatched: false, value: 'crab', src: icons.crab },
  { id: 5, isTouched: false, color: '#de1040', isMatched: false, value: 'dog', src: icons.dog },
  { id: 6, isTouched: false, color: '#de1040', isMatched: false, value: 'dolphin', src: icons.dolphin },
  { id: 7, isTouched: false, color: '#de1040', isMatched: false, value: 'dyno', src: icons.dyno },
  { id: 8, isTouched: false, color: '#de1040', isMatched: false, value: 'fish', src: icons.fish },
  { id: 9, isTouched: false, color: '#de1040', isMatched: false, value: 'fox', src: icons.fox },
  { id: 10, isTouched: false, color: '#de1040', isMatched: false, value: 'frog', src: icons.frog },
  { id: 11, isTouched: false, color: '#de1040', isMatched: false, value: 'heart', src: icons.heart },
  { id: 12, isTouched: false, color: '#de1040', isMatched: false, value: 'mouse', src: icons.mouse },
  { id: 13, isTouched: false, color: '#de1040', isMatched: false, value: 'panda', src: icons.panda },
  { id: 14, isTouched: false, color: '#de1040', isMatched: false, value: 'percel', src: icons.percel },
  { id: 15, isTouched: false, color: '#de1040', isMatched: false, value: 'pike', src: icons.pike },
  { id: 16, isTouched: false, color: '#de1040', isMatched: false, value: 'platypus', src: icons.platypus },
  { id: 17, isTouched: false, color: '#de1040', isMatched: false, value: 'puma', src: icons.puma },
  { id: 18, isTouched: false, color: '#de1040', isMatched: false, value: 'roac', src: icons.roac },
  { id: 19, isTouched: false, color: '#de1040', isMatched: false, value: 'shark', src: icons.shark },
  { id: 20, isTouched: false, color: '#de1040', isMatched: false, value: 'snail', src: icons.snail },
  { id: 21, isTouched: false, color: '#de1040', isMatched: false, value: 'tiger', src: icons.tiger },
];
