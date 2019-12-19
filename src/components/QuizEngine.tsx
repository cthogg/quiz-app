import React from "react";
import CategoryList from "./CategoryList";
import QuestionComp from "./Question";
import { emptyCategoryArray } from "../App";
import { Question, Category } from "../types/frontendTypes";

interface QuizEngineProps {
  categories: Category[];
  questions: Question[];
  onListClick: Function;
  selectedCategoryId: number;
  isLoading: boolean;
}
const QuizEngine: React.FunctionComponent<QuizEngineProps> = ({
  categories,
  questions,
  onListClick,
  selectedCategoryId,
  isLoading
}: QuizEngineProps): JSX.Element => {
  return (
    <React.Fragment>
      <section className="section">
        <p className="is-size-2"> Quiz Pro </p>
        <p> Answer the questions below </p>
      </section>
      {categories !== emptyCategoryArray && (
        <CategoryList
          selectedCategoryId={selectedCategoryId}
          categories={categories}
          change={onListClick}
        />
      )}
      <div className="column">
        {isLoading && <section className="section"> loading</section>}
        {!isLoading && (
          <span>
            {questions.map((question, index) => (
              <QuestionComp
                key={index}
                question={question}
                questionNumber={index + 1}
              />
            ))}{" "}
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

export default QuizEngine;
