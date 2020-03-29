import React, { useState } from "react";
import { setCacheToken, getCacheToken } from "../utils/auth-cache";

export const SpotifyApiContext = React.createContext();

export const SpotifyApiProvider = ({ children }) => {
  const cacheToken = getCacheToken();
  const [token, setToken] = useState(cacheToken);

  const saveToken = newToken => {
    setCacheToken(newToken);
    setToken(newToken);
  };

  return (
    <SpotifyApiContext.Provider value={{ token, saveToken }}>
      {children}
    </SpotifyApiContext.Provider>
  );
};
