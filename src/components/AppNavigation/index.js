import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./AppNavigation.scss";

const AppNavigation = () => {
  return (
    <div className="App-navigation">
      <Link to="/app"></Link>
      <NavLink to="/explore">
        <span className="icon ion-android-star-outline" />
        <span className="navigation__label">Explore</span>
      </NavLink>
      <NavLink to="/channels">
        <span className="icon ion-android-star-outline" />
        <span className="navigation__label">Channels</span>
      </NavLink>
    </div>
  );
};

export default AppNavigation;
