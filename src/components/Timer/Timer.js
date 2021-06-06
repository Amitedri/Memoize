import React from 'react';
import './Timer.css';
const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [intrevalId, setIntrevalId] = React.useState('');
  React.useEffect(() => {
    if (!intrevalId) {
      const intreval = setInterval(() => {
        setSeconds((second) => second + 1);
      }, 1000);
      setIntrevalId(() => intreval);
    }
    if (seconds > 59) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
  }, [seconds,intrevalId]);

  const TimerDisplay = () => {
    return <span>{minutes < 1 ? seconds : `${minutes}:${seconds < 9 ? `0${seconds}` : seconds}`}</span>;
  };
  return (
    <div className="timerContainer">
      <div className="timerDisplay">
        <TimerDisplay />
      </div>
    </div>
  );
};

export default Timer;
