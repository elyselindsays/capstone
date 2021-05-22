import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Desktop from "./components/Desktop";
import LoginForm from "./components/LoginFormModal/LoginForm";
import Sysufs from "./components/SYSUFS/Sysufs";


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

          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/sysufs">
            <Sysufs />
          </Route>


        </>

      )}
    </>
  );
}

export default App;
