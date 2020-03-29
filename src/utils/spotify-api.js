import axios from "axios";
import qs from "querystring";
import config from "../config";

const SPOTIFY_URL = "https://accounts.spotify.com/api";

function getToken() {
  const params = new URLSearchParams(document.location.search);
  const code = params.get("code");

  const data = {
    grant_type: "authorization_code",
    code,
    redirect_uri: config.CALLBACK_URL,
    client_id: config.SPOTIFY_CLIENT_ID,
    client_secret: config.SPOTIFY_CLIENT_SECRET
  };

  return axios.post(`${SPOTIFY_URL}/token`, qs.stringify(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

export default getToken;
