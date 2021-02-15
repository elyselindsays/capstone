import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import './Desktop.css';
import JournalList from '../Journal';
import ParkingLot from '../ParkingLot';
import OpenJournal from '../Journal/OpenJournal';
import Timer from './Timer';
import { addNewJournal, getUserJournals } from '../../store/journals';
import * as sessionActions from '../../store/session';
import image from '../images/vecteezy_isometric-workspace-with-modern-style_217557/desk.jpg';
// import PartyMode from './Party';

function Desktop({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const demoLogin = (e) => {
    // e.preventDefault();
    dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }));
  }

  let splashPage;
  if (sessionUser) {
    splashPage = (
      <div id="desktop">
        <div id="desktop-nameplate">
          <div id="desktop-plate-text">{sessionUser.firstName}'s Desktop</div>
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
        <div id="open-journal">
          <OpenJournal />
        </div>

        <Timer />
      </div>
    );
  } else {
    splashPage = (
      <>
        <div className='overlay'></div>
        <div className='modal'>
          <LoginFormModal />
          <button onClick={demoLogin}>Demo Login</button>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div className='background'>
          <img className='background' src={image} alt="desk"></img>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="desktop-container">
        {isLoaded && splashPage}
      </div>
    </>
  );
}

export default Desktop;