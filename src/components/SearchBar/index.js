import React from "react";
import "./SearchBar.scss";

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default ({ handleSearch }) => {
  const onChange = text => {
    handleSearch(text);
  };

  const onChangeDebounce = debounce(onChange, 400);

  return (
    <div className="search">
      <input
        onChange={e => onChangeDebounce(e.target.value)}
        className="search__input"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};
