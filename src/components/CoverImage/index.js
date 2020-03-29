import React from "react";

import "./CoverImage.scss";

const CoverImage = ({ src }) => (
  <span className="track__cover" style={{ backgroundImage: `url(${src})` }} />
);

export default CoverImage;
