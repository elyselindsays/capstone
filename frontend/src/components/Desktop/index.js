import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Desktop.css';
import Journal from '../Journal';
import ParkingLot from '../ParkingLot';
// import FlagBanner from '../assets/FlagBanner';
// import icon1 from '../images/notebook-icon.jpeg';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="desktop-nameplate">
          <div className="icon-container">
            {/* <FlagBanner /> */}
          </div>
        </div>
        <h2 id="desktop-plate-text">{sessionUser.firstName}'s Desktop</h2>
        <div className="profile-button">
          <ProfileButton className="profile-button" user={sessionUser} />
          <h1>Hello {sessionUser.firstName}</h1>
        </div>
        {/* <img src={icon1} alt="notebook"></img> */}
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
      <div id="core-nav-container">
        {/* <NavLink exact to="/">Home</NavLink> */}
      </div>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;