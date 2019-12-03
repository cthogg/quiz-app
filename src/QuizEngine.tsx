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
      </section>
      {categories !== emptyCategoryArray && (
        <CategoryList
          selectedCategoryId={selectedCategoryId}
          categories={categories}
          change={onListClick}
        />
      )}
      <div className="columns">
        <div className="column is-four-fifths-mobile is-four-fifths-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
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
      </div>
    </React.Fragment>
  );
};

export default QuizEngine;
