import { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }
  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
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
          duration={60}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [false, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
        Change component properties in the code filed on the right to try
        difference functionalities
      </p>
      <button onClick={() => setTimer(!timer)}>Pause Timer</button>
    </div>
  )
}

export default Timer;