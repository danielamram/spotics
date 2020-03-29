export function setCacheToken(token) {
  localStorage.setItem("accessToken", token);
}

export function getCacheToken() {
  return localStorage.getItem("accessToken");
}
