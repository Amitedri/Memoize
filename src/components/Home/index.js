import React from 'react';
import './Home.css';
import logo from '../../assets/Logo.png';

const Home = (props) => {
  console.log(props);
  const [showPopup, setShowPupup] = React.useState(false);
  const [levelSelection, setLevelSelection] = React.useState({ numberOfPairs: 10 });

  const handleMenuDisplay = () => {
    setShowPupup((prevState) => !prevState);
  };

  const handleGameStart = () => {
    console.log(levelSelection);
    sessionStorage.setItem('level', levelSelection.numberOfPairs);
    props.history.push('/play');
    return;
  };

  React.useEffect(() => {
    //capture the selection from the dropdown
    const options = document.querySelectorAll('.options');
    const levelButton = document.querySelector('#levelSelection');
    options.forEach((option) => {
      option.addEventListener('click', (e) => {
        const elementValue = e.target.getAttribute('value');
        setLevelSelection({ numberOfPairs: elementValue });
        handleMenuDisplay();
        levelButton.textContent = e.target.textContent;
        return;
      });
    });
  }, []);
  return (
    <div className="mainContainer">
      <div className="headers">
        <h1>memoize</h1>
        <h2 id="subHeader">Memory game</h2>
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="levelPopup" style={showPopup ? null : { display: 'none' }}>
        <span className="options" value="10">
          Relax
        </span>
        <span className="options" value="15">
          Sharp
        </span>
        <span className="options" value="15">
          Has Skills
        </span>
      </div>
      <div className="buttonsContainer">
        <button className="levelSelection" id="levelSelection" onClick={handleMenuDisplay}>
          Choose Level
        </button>
        <button className="startGame" onClick={handleGameStart}>
          START GAME
        </button>
      </div>
    </div>
  );
};

export default Home;
