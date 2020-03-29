import React, { useEffect, useContext } from "react";
import serialize from "../utils/serilaize";
import { SpotifyApiContext } from "../context/SpotifyApiContext";

const BASE_URL = "https://api.spotify.com/v1";

export default (url, options, mapFunc) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const { token } = useContext(SpotifyApiContext);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch(BASE_URL + url + serialize(options || {}), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else if (!res.ok) {
          setError({ status: res.status, message: res.statusText });
        } else {
          setData(mapFunc ? mapFunc(data) : data);
          setError(null);
        }
      } catch (e) {
        setLoading(false);
        setError(e);
        setData(null);
      }
    }

    if (url && token) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, token]);

  return { data, loading, error };
};
