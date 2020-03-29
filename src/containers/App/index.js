import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SpotifyApiProvider } from "../../context/SpotifyApiContext";
import Auth from "../Auth";
import Callback from "../Callback";
import AppView from "../AppView";

const App = () => {
  return (
    <SpotifyApiProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route exact path="/callback" component={Callback} />
          <Route path="/" component={AppView} />
        </Switch>
      </BrowserRouter>
    </SpotifyApiProvider>
  );
};

export default App;
