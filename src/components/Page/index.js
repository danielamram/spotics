import React from "react";

import "./Page.scss";

const Page = props => {
  const { imageSrc, title, headerComponent, children } = props;

  return (
    <div className="list-page">
      <div
        style={{ backgroundImage: `url(${imageSrc})` }}
        className="list-page__image"
      />
      {headerComponent}
      <h1 className="list-page__title">{title}</h1>
      <div className="list-page__content">
        <div className="list-page__list">{children}</div>
      </div>
    </div>
  );
};

export default Page;
