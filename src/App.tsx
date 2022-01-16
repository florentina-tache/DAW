import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import MainNavigation from "./components/Navigation/MainNavigation";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <MainNavigation />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
