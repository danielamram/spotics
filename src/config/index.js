const config = {
  API_URL: "https://api.spotify.com/v1",
  SPOTIFY_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
  SPOTIFY_AUTH_SCOPES:
    "user-read-recently-played user-top-read playlist-modify-public",
  SPOTIFY_CLIENT_ID: "234209308d63454e98086248bb6a530a",
  SPOTIFY_CLIENT_SECRET: "4d0d0bf3a5f043b19a48a9d93264c811",
  CALLBACK_URL: `${window.location.origin}/callback`,

  // Default Country used for artists top track query
  // https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks/
  // This could be dynamic, but userinfo for instance does not include this information
  DEFAULT_COUNTRY_CODE: "IL"
};

export default config;
