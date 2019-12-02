import React from "react";
import CategoryList from "./components/CategoryList";
import QuestionComp from "./components/Question";
import { emptyCategoryArray } from "./App";
import { Question, Category } from "./frontendTypes";

interface QuizEngineProps {
  categories: Category[];
  questions: Question[];
  onListClick: Function;
}
const QuizEngine: React.FunctionComponent<QuizEngineProps> = ({
  categories,
  questions,
  onListClick
}: QuizEngineProps): JSX.Element => {
  return (
    <React.Fragment>
      {categories !== emptyCategoryArray && (
        <CategoryList categories={categories} change={onListClick}>
          {" "}
        </CategoryList>
      )}
      {questions.map((question, index) => (
        <QuestionComp key={index} question={question} />
      ))}
    </React.Fragment>
  );
};

export default QuizEngine;
