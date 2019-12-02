import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Categories, Questions, Question } from "./types";
import QuizEngine from "./QuizEngine";

export const emptyCategoryArray = {} as Categories;
export const initialQuestions = {} as Questions;
export const initialQuestion = {} as Question;

const App: React.FC = () => {
  const [categories, setCategories] = useState(emptyCategoryArray);
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(initialQuestion);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios(`https://opentdb.com/api_category.php`);
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId === -1) {
      const fetchData = async () => {
        const result = await axios(`https://opentdb.com/api.php?amount=10`);
        setQuestions(result.data);
      };
      fetchData();
    }

    if (selectedCategoryId !== -1) {
      const fetchData = async () => {
        const result = await axios(
          `https://opentdb.com/api.php?amount=10&category=${selectedCategoryId}`
        );
        setQuestions(result.data);
      };
      fetchData();
    }
  }, [selectedCategoryId]);

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
