import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Desktop from "./components/Desktop";
import Template from "./components/Templates";
import OpenJournal from "./components/Journal/OpenJournal";
import Notes from "./components/Templates/Notes";
import Stickies from './components/images/Stickies';
import SinglePage from "./components/Journal/SinglePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <>
          <Route exact path="/" >
            <Desktop isLoaded={isLoaded} />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route path="/journals/:journalId">
            <OpenJournal />
          </Route> */}
          {/* <Route path="/journals/:journalId/:pageId">
            <SinglePage />
          </Route> */}
        </>

      )}
    </>
  );
}

export default App;
