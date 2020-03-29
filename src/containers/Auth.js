import React from "react";
import config from "../config";
import queryParametrize from "../utils/query-parametrize";

const Login = () => {
  const authorizeUser = () => {
    const loginOpts = {
      client_id: config.SPOTIFY_CLIENT_ID,
      redirect_uri: config.CALLBACK_URL,
      scope: config.SPOTIFY_AUTH_SCOPES,
      response_type: "code"
    };
    const loginUrl = queryParametrize(config.SPOTIFY_AUTHORIZE_URL, loginOpts);

    window.location.href = loginUrl;
  };

  return <button onClick={authorizeUser}>Sign in with Spotify</button>;
};

export default Login;
