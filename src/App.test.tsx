import React from 'react';
import ReactDOM from 'react-dom';
import App, { CategoryList } from './App';
import renderer from 'react-test-renderer';
import { categories } from './categories';

const cat = {
  trivia_categories: [{
  id: 343,
  name: 'bob'}]}
it('Category List renders correctly', () => {
  const tree = renderer
    .create(<CategoryList categories={cat} change={()=>'hi'}>   </CategoryList>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly', () => {
  const tree = renderer
    .create(<App>   </App>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
