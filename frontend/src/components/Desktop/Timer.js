import { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Time's Up!</div>;
  }
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{`${minutes}:${seconds}`}</div>
      <div className="text">minutes</div>
    </div>
  );
};

const Timer = () => {
  const [timer, setTimer] = useState(false)
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={timer}
          duration={1500}
          isLinearGradient={true}
          colors={[["#23CEFD", 0.33], ["#FB25E7", 0.33]]}
          onComplete={() => [false, 1000]}
          trailColor={"white"}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      {timer && (
        <button onClick={() => setTimer(!timer)}>Start Timer</button>
      )}
      {!timer && (
        <button onClick={() => setTimer(!timer)}>Pause Timer</button>
      )}
    </div>
  )
}

export default Timer;