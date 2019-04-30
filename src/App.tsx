import React from 'react';
import './App.css';
import { categories } from './categories'

interface Category {
  id: number,
  name: string
}

interface Categories {
  "trivia_categories": Array<Category>
}


const CategoryList: React.FC<{ categories: Categories }> = ({ categories }) => {
  const triviaCategories = categories.trivia_categories
  const listItems = triviaCategories.map((category: Category) =>
    // Correct! Key should be specified inside the array.
    <option key={category.id} value={category.name}>{category.name}</option>
  );
  return (
    <React.Fragment>
      <label htmlFor="pet-select">Choose a Category</label>
      <select id="pet-select">
        {listItems}
      </select>
    </React.Fragment>
  );
}

const App: React.FC = () => {
  return (
    <div className="App">
      <CategoryList categories={categories}> </CategoryList>
    </div>
  );
}

export default App;
