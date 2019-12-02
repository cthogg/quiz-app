import React, { useState, useEffect } from 'react'; import './App.css';
import axios from 'axios';
import  CategoryList  from './components/CategoryList';
import QuestionComp from './components/Question';
import QuestionsTable from './components/QuestionsTable';
import { Categories, Questions, Question } from './types';

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
          <QuestionComp question={selectedQuestion} />

        }
      </React.Fragment>
    </div >
  );
}

export default App;
