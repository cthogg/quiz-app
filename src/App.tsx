import React, { useState, useEffect } from 'react'; import './App.css';
import { allQuestions } from './categories'
import axios from 'axios';

interface Category {
  id: number,
  name: string
}

interface Question {
  "category": string,
  "type": string,
  "difficulty": string,
  "question": string
  "correct_answer": string
  "incorrect_answers": Array<string>
}

interface Questions {
  "response_code": number,
  "results": Array<Question>
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

const Question: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <React.Fragment>
      <p> {question.question} </p>
      <ul>
        <li>  <em> {question.correct_answer} </em> </li>
        {question.incorrect_answers.map((question, index) =>
          <li key={index}> {question} </li>
        )}
      </ul>
    </React.Fragment>
  );
}

const QuestionsList: React.FC<{ questions: Questions }> = ({ questions }) => {
  return (
    <React.Fragment>
      {questions.results.map((question, index) =>
        <Question key={index} question={question} />
      )}
    </React.Fragment>
  );
}

const App: React.FC = () => {
  const emptyCategoryArray = {} as Categories
  const [categories, setCategories] = useState(emptyCategoryArray);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios(
        `https://opentdb.com/api_category.php`,
      );
      console.log('result.data:', result.data)
      setCategories(result.data)
    };
    fetchCategories();
  }, []);
  console.log(categories)

  return (
    <div className="App">
      {categories !== emptyCategoryArray &&
        <React.Fragment>
          <CategoryList categories={categories}> </CategoryList>
          <QuestionsList questions={allQuestions}> </QuestionsList>
        </React.Fragment>
      }
    </div >
  );
}

export default App;
