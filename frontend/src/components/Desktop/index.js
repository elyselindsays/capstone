import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import './Desktop.css';
import OpenNotebook from '../Journal/OpenNotebook';
import * as sessionActions from '../../store/session';
import image from '../images/vecteezy_isometric-workspace-with-modern-style_217557/desk.jpg';
import PartyMode from './Party';

function Desktop({ isLoaded }) {
  const [showParty, setShowParty] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const demoLogin = () => {
    dispatch(sessionActions.login({ credential: 'ndsays@gmail.com', password: 'password' }));
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
        {/* <Timer /> */}
        <div id="open-journal">
          <OpenNotebook />
        </div>
      </div>
    );
  } else {
    splashPage = (
      <>
        <div className='overlay'></div>
        <div className='modal'>

          <NavLink to="/login">
            <button >Login</button>
          </NavLink>
          <button onClick={demoLogin}>Demo Login</button>
          <NavLink to="/signup">
            <button >Sign Up</button>
          </NavLink>
        </div>
        <div className='background'>
          <img className='background' src={image} alt="desk"></img>
        </div>
      </>
    );
  }

  return (
    <>
      {/* {showParty && <PartyMode />} */}
      <div id="desktop-container">
        {isLoaded && splashPage}
      </div>
      {/* <div id='party-container'>
        <PartyMode />
      </div> */}
    </>
  );
}

export default Desktop;