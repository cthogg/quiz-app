import React from 'react'
import { Categories, Category } from '../App';

const CategoryList: React.FC<{ categories: Categories, change: Function }> = ({ categories, change }) => {
    const triviaCategories = categories.trivia_categories
    const listItems = triviaCategories.map((category: Category) =>
      <option key={category.id} value={category.id}>{category.name}</option>
    );
    return (
      <React.Fragment>
        <label htmlFor="pet-select">Choose a Category</label>
        <select id="pet-select" onChange={e => change(e.target.value)} >
          {listItems}
        </select>
      </React.Fragment>
    );
  }

  export default CategoryList