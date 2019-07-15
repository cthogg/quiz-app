import React, { useState, useEffect } from 'react'; import './App.css';
import axios from 'axios';
var he = require('he');

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


export const CategoryList: React.FC<{ categories: Categories, change: Function }> = ({ categories, change }) => {
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

export const Question: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <React.Fragment>
      {question.correct_answer !== undefined &&
        <React.Fragment>

          <p> {he.decode(question.question)} </p>
          <ul>
            <li>  <em> {question.correct_answer} </em> </li>
            {question.incorrect_answers.map((question, index) =>
              <li key={index}> {question} </li>
            )}
          </ul>
        </React.Fragment>

      }

    </React.Fragment>
  );
}

const QuestionsTable: React.FC<{ questions: Questions, onRowClick: Function }> = ({ questions, onRowClick }) => {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th> Question</th>
            <th> Category</th>
            <th> Difficulty</th>

          </tr>
        </thead>
        <tbody>
          {questions.results &&
            questions.results.map((question, index) =>
              <tr key={index} onClick={() => onRowClick(question)}>
                <td>{he.decode(question.question)}</td>
                <td>{question.category}</td>
                <td>{question.difficulty}</td>
              </tr>
            )}

        </tbody>
      </table>

    </React.Fragment>
  );
}

const App: React.FC = () => {
  const emptyCategoryArray = {} as Categories
  const initialQuestions = {} as Questions
  const initialQuestion = {} as Question
  const [categories, setCategories] = useState(emptyCategoryArray);
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(initialQuestion);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios(
        `https://opentdb.com/api_category.php`,
      );
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId === -1) {
      const fetchData = async () => {
        const result = await axios(
          `https://opentdb.com/api.php?amount=10`,
        );
        setQuestions(result.data);
      };
      fetchData();

    }

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
          <QuestionsTable onRowClick={setSelectedQuestion} questions={questions}> </QuestionsTable>
        }
        {selectedQuestion !== initialQuestion &&
          <Question question={selectedQuestion} />

        }
      </React.Fragment>
    </div >
  );
}

export default App;
