import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";
import Desktop from "./components/Desktop";
import Journal from "./components/Journal";
import OpenJournal from "./components/Journal/OpenJournal";
// import Header from './features/header/Header'
import TodoList from './components/List'
import Template from "./components/Templates";
// import Footer from './features/footer/Footer'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (


    // if user isn't logged in, buttons for login & signup & demo login

    // if user is logged in, show desktop with {firstName's desktop}

    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <Desktop isLoaded={isLoaded} />
          </Route>
          <Route path="/journal">
            <OpenJournal />
          </Route>
          {/* <Route path="/journals">
            <Journal />
          </Route> */}
          {/* <Route path='/journals'>
            <Journal />
          </Route> */}
          {/* <section className="medium-container"> */}
          {/* <h2>Todos</h2> */}
          {/* <div className="todoapp"> */}
          {/* <Header /> */}
          <Route path="/list">

            <Template />
          </Route>
          {/* <Footer /> */}
          {/* </div> */}
          {/* </section> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
