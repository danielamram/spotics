import React, { useContext, useEffect } from "react";
import Loader from "../components/Loader";
import { SpotifyApiContext } from "../context/SpotifyApiContext";
import { useHistory } from "react-router-dom";
import getToken from "../utils/spotify-api";

const Callback = () => {
  const { saveToken } = useContext(SpotifyApiContext);
  const history = useHistory();

  useEffect(() => {
    const fetchToken = async () => {
      const { data } = await getToken();

      if (data.access_token) {
        saveToken(data.access_token);
        history.push("/");
      } else {
        history.push("/login");
      }
    };

    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Loader />;
};

export default Callback;
