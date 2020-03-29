import React from "react";
import AppNavigation from "../../components/AppNavigation";
import Explore from "../Explore";
import Channels from "../Channels";
import { Route } from "react-router-dom";
import "./AppView.scss";

const AppView = () => {
  return (
    <div className="App">
      <div className="App-container">
        <AppNavigation />
        <div className="App-content">
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/channels" component={Channels} />
        </div>
      </div>
    </div>
  );
};

export default AppView;
