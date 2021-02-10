import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Desktop from "./components/Desktop";
import Template from "./components/Templates";
import OpenJournal from "./components/Journal/OpenJournal";
import HTMLFlipBook from "react-pageflip";

function MyBook(props) {
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <Desktop isLoaded={isLoaded} />
            <MyBook />
          </Route>
          <Route path="/list">
            <Template />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/:journalId">
            <OpenJournal />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
