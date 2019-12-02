import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import QuizEngine from "./QuizEngine";
import { APICategories, APIQuestions, APIQuestion } from "./APITypes";

export const emptyCategoryArray = {} as APICategories;
export const initialQuestions = {} as APIQuestions;
export const initialQuestion = {} as APIQuestion;

const App: React.FC = () => {
  const [categories, setCategories] = useState(emptyCategoryArray);
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(initialQuestion);
  const [isLoading, setIsLoading] = useState(false);

  const CATEGORY_URL = `https://opentdb.com/api_category.php`;
  const QUESTION_URL = `https://opentdb.com/api.php?amount=10`;
  const QUESTION_URL_CATEGORY = `https://opentdb.com/api.php?amount=10&category=${selectedCategoryId}`;
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const result = await axios(CATEGORY_URL);
      setCategories(result.data);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId === -1) {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await axios(QUESTION_URL);
        setQuestions(result.data);
        setIsLoading(false);
      };
      fetchData();
    }

    if (selectedCategoryId !== -1) {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await axios(QUESTION_URL_CATEGORY);
        setQuestions(result.data);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [selectedCategoryId]);

  return (
    <div className="App">
      {isLoading && <p> loading</p>}
      {!isLoading && (
        <QuizEngine
          onRowClick={setSelectedQuestion}
          onListClick={setSelectedCategoryId}
          categories={categories}
          selectedQuestion={selectedQuestion}
          questions={questions}
          initialQuestions={initialQuestions}
        >
          {" "}
        </QuizEngine>
      )}
    </div>
  );
};

export default App;
