import React, { useState, useEffect } from "react";
import axios from "axios";
import QuizEngine from "./QuizEngine";
import {
  Question,
  convertBackendQuestionsToFrontendQuestions,
  Category,
  convertBackendCategoriesToFrontendCategories
} from "./frontendTypes";
import "./App.sass";

export const emptyCategoryArray = {} as Category[];
export const initialQuestions = [] as Question[];
export const initialQuestion = {} as Question;

const App: React.FC = () => {
  const [categories, setCategories] = useState(emptyCategoryArray);
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [questions, setQuestions] = useState(initialQuestions);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const CATEGORY_URL = `https://opentdb.com/api_category.php`;

    const fetchCategories = async () => {
      setIsLoading(true);
      const result = await axios(CATEGORY_URL);
      setCategories(convertBackendCategoriesToFrontendCategories(result.data));
      setIsLoading(false);
    };
    fetchCategories();
  }, [selectedCategoryId]);

  useEffect(() => {
    const QUESTION_URL = `https://opentdb.com/api.php?amount=10`;
    const QUESTION_URL_CATEGORY = `https://opentdb.com/api.php?amount=10&category=${selectedCategoryId}`;
    if (selectedCategoryId === -1) {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await axios(QUESTION_URL);
        setQuestions(convertBackendQuestionsToFrontendQuestions(result.data));
        setIsLoading(false);
      };
      fetchData();
    }

    if (selectedCategoryId !== -1) {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await axios(QUESTION_URL_CATEGORY);
        setQuestions(convertBackendQuestionsToFrontendQuestions(result.data));
        setIsLoading(false);
      };
      fetchData();
    }
  }, [selectedCategoryId]);

  return (
    <div className="App">
      <QuizEngine
        onListClick={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
        categories={categories}
        questions={questions}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
