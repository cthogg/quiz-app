import React, { useState, useEffect } from 'react'; import './App.css';
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
      {questions.results &&
        questions.results.map((question, index) =>
          <Question key={index} question={question} />
        )}
    </React.Fragment>
  );
}

const App: React.FC = () => {
  const emptyCategoryArray = {} as Categories
  const initialQuestions = {} as Questions
  const [categories, setCategories] = useState(emptyCategoryArray);
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [questions, setQuestions] = useState(initialQuestions);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios(
        `https://opentdb.com/api_category.php`,
      );
      setCategories(result.data);
      setSelectedCategoryId(result.data.trivia_categories[0])
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log('fired')
    if (selectedCategoryId !== -1) {
      const fetchData = async () => {
        const result = await axios(
          `https://opentdb.com/api.php?amount=10&category=${selectedCategoryId}`,
        );
        setQuestions(result.data);
      };
      fetchData();

    }
  }, [selectedCategoryId]);

  return (
    <div className="App">
      <React.Fragment>
        {categories !== emptyCategoryArray &&
          <CategoryList categories={categories} change={setSelectedCategoryId}> </CategoryList>}
        {questions !== initialQuestions &&
          <QuestionsList questions={questions}> </QuestionsList>
        }
      </React.Fragment>
    </div >
  );
}

export default App;
