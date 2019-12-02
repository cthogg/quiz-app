import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import CategoryList  from './components/CategoryList';
import QuestionsTable from './components/QuestionsTable';
import { Categories, Question } from './types';

const cat: Categories = {
  trivia_categories: [{
  id: 343,
  name: 'bob'}]}
it('Category List renders correctly', () => {
  const tree = renderer
    .create(<CategoryList categories={cat} change={()=>'hi'}>   </CategoryList>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const exampleResults: Question[] = [{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"In the Super Mario Bros. Series, what is Yoshi&#039;s scientific name?","correct_answer":"T. Yoshisaur Munchakoopas","incorrect_answers":["Yoshi","T. Yoshisotop Munchakoopas","Yossy"]},{"category":"History","type":"multiple","difficulty":"medium","question":"Which of his six wives was Henry VIII married to the longest?","correct_answer":"Catherine of Aragon","incorrect_answers":["Anne Boleyn","Jane Seymour","Catherine Parr"]}]

it('Questions Table Renders Correctly', () => {
  const tree = renderer
    .create(<QuestionsTable onRowClick={()=> null} questions={{response_code: 0, results:exampleResults }}> </QuestionsTable>   )
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
