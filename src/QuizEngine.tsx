import React from "react";
import CategoryList from "./components/CategoryList";
import QuestionsTable from "./components/QuestionsTable";
import QuestionComp from "./components/Question";
import { emptyCategoryArray, initialQuestions, initialQuestion } from "./App";
import { Question, Category } from "./frontendTypes";

interface QuizEngineProps {
  categories: Category[];
  questions: Question[];
  selectedQuestion: Question;
  initialQuestions: Question[];
  onRowClick: Function;
  onListClick: Function;
}
const QuizEngine: React.FunctionComponent<QuizEngineProps> = ({
  categories,
  questions,
  selectedQuestion,
  onListClick,
  onRowClick
}: QuizEngineProps): JSX.Element => {
  return (
    <React.Fragment>
      {categories !== emptyCategoryArray && (
        <CategoryList categories={categories} change={onListClick}>
          {" "}
        </CategoryList>
      )}
      {questions !== initialQuestions && (
        <QuestionsTable onRowClick={onRowClick} questions={questions}>
          {" "}
        </QuestionsTable>
      )}
      {selectedQuestion !== initialQuestion && (
        <QuestionComp question={selectedQuestion} />
      )}
    </React.Fragment>
  );
};

export default QuizEngine;
