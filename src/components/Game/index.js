import React from 'react';
import './Game.css';
import { GameMethods, cardsObj } from './Utils';
import Timer from '../Timer/Timer';
import Player from '../Player/';
import refreshIcon from './refresh.svg'
const Game = () => {
  const [deckToDisplay, setDeckToDisplay] = React.useState([]);
  const [cardsData] = React.useState(cardsObj);
  const [options] = React.useState({ numberOfPairs: sessionStorage.getItem('level') });
  const GameUtils = React.useMemo(() => new GameMethods(options, cardsData), [cardsData, options]);

  React.useEffect(() => {
    try {
      GameUtils.createDeck(setDeckToDisplay);
    } catch (err) {
      console.log(err);
    }
  }, []);


  const DisplayCards = ({ deck }) => {
    try {
      return deck.map((card, index) => {
        if (deck.length < 1) {
          return;
        }
        return (
          <button
            key={index}
            className={card.isMatched ? 'card matched' : 'card'}
            onClick={(e) => GameUtils.handleCardTouch(e, setDeckToDisplay, deckToDisplay)}
            value={card.value}
            style={{ backgroundColor: `${card.color}` }}
            id={index}
          >
            <img className={card.isMatched ? '' : 'hideCard'} src={card.src} alt={'something nice'} />
          </button>
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
  const ReshuffleButton = () => {
    return (
      <div className="reshuffle" onClick={() => window.location.reload()}>
        <img src={refreshIcon} alt/>
      </div>
    );
  };
  return (
    <>
      <div className="controllers">
        <Timer />
        <ReshuffleButton />
        <Player />
      </div>
      <div className="cardsGrid">
        <DisplayCards deck={deckToDisplay} />
      </div>
    </>
  );
};

export default Game;
