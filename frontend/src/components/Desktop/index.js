import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Desktop.css';
import Journal from '../Journal';
import ParkingLot from '../ParkingLot';
import OpenJournal from '../Journal/OpenJournal';
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


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [timer, setTimer] = useState(false)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="desktop-nameplate">
          <div className="icon-container">
          </div>
        </div>
        <h2 id="desktop-plate-text">{sessionUser.firstName}'s Desktop</h2>
        {/* <div className="profile-button">
          <ProfileButton className="profile-button" user={sessionUser} />
          <h1>Hello {sessionUser.firstName}</h1>
        </div> */}
        {/* <OpenJournal /> */}
        <Journal />
        <ParkingLot />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
      <div className="App">
        <h1>
          CountdownCircleTimer
        <br />
        React Component
      </h1>
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying={timer}
            duration={60}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [false, 1000]}
          // initialRemainingTime={200}
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
      <div id="core-nav-container">
      </div>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;