import React from "react";
import CategoryList from "./components/CategoryList";
import QuestionComp from "./components/Question";
import { emptyCategoryArray } from "./App";
import { Question, Category } from "./frontendTypes";

interface QuizEngineProps {
  categories: Category[];
  questions: Question[];
  onListClick: Function;
  selectedCategoryId: number;
}
const QuizEngine: React.FunctionComponent<QuizEngineProps> = ({
  categories,
  questions,
  onListClick,
  selectedCategoryId
}: QuizEngineProps): JSX.Element => {
  return (
    <React.Fragment>
      <p className="is-size-2"> Quiz Pro </p>
      {categories !== emptyCategoryArray && (
        <CategoryList
          selectedCategoryId={selectedCategoryId}
          categories={categories}
          change={onListClick}
        >
          {" "}
        </CategoryList>
      )}
      <div className="columns">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
          {questions.map((question, index) => (
            <QuestionComp key={index} question={question} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizEngine;
