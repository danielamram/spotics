import React from "react";
import CoverImage from "../CoverImage";

import "./Artist.scss";

function formatNumber(n, d) {
  let x = ("" + n).length;
  d = Math.pow(10, d);
  x -= x % 3;
  return Math.round((n * d) / Math.pow(10, x)) / d + " kMGTPE"[x / 3];
}

const Artist = ({ images, name, genres, followers, uri }) => (
  <a className="artist-history__item" href={uri}>
    <CoverImage src={images[images.length - 1].url} />
    <span className="artist__summary">
      <span className="artist_header">
        <span className="artist__name">{name}</span>
        <span className="order-number">{`${followers.total} Followers`}</span>
      </span>
      <span className="artist__genres">{genres.slice(0, 3).join(", ")}</span>
    </span>
  </a>
);

export default Artist;
