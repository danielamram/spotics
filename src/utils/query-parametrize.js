function queryParametrize(url, query) {
  let queryParametrizedUrl = url;

  if (typeof query === "object") {
    queryParametrizedUrl +=
      "?" +
      Object.keys(query)
        .map(k => {
          return encodeURIComponent(k) + "=" + encodeURIComponent(query[k]);
        })
        .join("&");
  }

  return queryParametrizedUrl;
}

export default queryParametrize;
