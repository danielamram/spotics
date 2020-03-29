import React from "react";
import "./Categories.scss";

export default ({ categories, onClick }) => (
  <ul className="categories_ctr">
    {categories.map((category, index) => (
      <li className="category" onClick={() => onClick(index)} key={index}>
        <h3 className="category_title">{category.name}</h3>
      </li>
    ))}
  </ul>
);
