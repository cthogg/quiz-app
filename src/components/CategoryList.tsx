import React from "react";
import { Category } from "../frontendTypes";

const CategoryList: React.FC<{
  categories: Category[];
  change: Function;
}> = ({ categories, change }) => {
  const listItems = categories.map((category: Category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));
  return (
    <React.Fragment>
      <label htmlFor="pet-select">Choose a Category</label>
      <select id="pet-select" onChange={e => change(e.target.value)}>
        {listItems}
      </select>
    </React.Fragment>
  );
};

export default CategoryList;
