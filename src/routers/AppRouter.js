import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";


export default function AppRouter() {
  return (
    <Router>
        <div>
          <Switch>
            <Route
              path="/auth"
              component={ AuthRouter }
            />

            <Route
              path="/"
              component={ JournalScreen }
            />

            <Redirect to="/" />

          </Switch>
        </div>
    </Router>
  );
}
