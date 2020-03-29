import React from "react";
import CoverImage from "../CoverImage";

import "./Track.scss";

export default ({ album, uri, name, artists, duration_ms, ...props }) => (
  <a className="track" href={uri}>
    <CoverImage src={album.images[2].url} />
    <span className="track_ctr">
      <span className="track_header">
        <span className="track_name">{name}</span>
        <span className="track_time">
          {new Date(duration_ms).toISOString().slice(14, 19)}
        </span>
      </span>
      <span className="track_artist">{artists[0].name}</span>
    </span>
  </a>
);
