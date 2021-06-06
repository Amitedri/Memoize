import React from 'react';
import './Player.css';
import music from './Theta.mp3';
import musicIcon from './musical-note.svg';
const Player = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  React.useEffect(() => {
    const audio = document.querySelector('audio');
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);
  return (
    <div className="playerContainer">
      <audio>
        <source src={music} type="audio/mpeg" />
      </audio>
      <img src={musicIcon} alt='' onClick={() => setIsPlaying((prevState) => !prevState)} />
    </div>
  );
};

export default Player;
