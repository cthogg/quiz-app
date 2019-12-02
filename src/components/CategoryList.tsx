import React from "react";
import { Category } from "../frontendTypes";

const CategoryList: React.FC<{
  categories: Category[];
  change: Function;
  selectedCategoryId: number;
}> = ({ categories, change, selectedCategoryId }) => {
  const listItems = categories.map((category: Category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));
  return (
    <section className="section">
      <React.Fragment>
        <label htmlFor="pet-select">Choose a Category</label>
        <select
          value={selectedCategoryId}
          id="pet-select"
          onChange={e => change(e.target.value)}
        >
          {listItems}
        </select>
      </React.Fragment>
    </section>
  );
};

export default CategoryList;
