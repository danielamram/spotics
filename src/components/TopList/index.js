import React from "react";
import Loader from "../../components/Loader";

const TopList = ({ data, error, loading, component }) => {
  window.scrollTo(0, 0);

  return (
    <React.Fragment>
      {data &&
        data.items.map(item =>
          React.cloneElement(component, { key: item.id, ...item })
        )}
      ,{loading && <Loader />}
    </React.Fragment>
  );
};

export default TopList;
