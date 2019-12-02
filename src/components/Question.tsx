import React from "react";
import he from "he";
import { Question } from "../types";
import _ from "lodash";
const QuestionComp: React.FC<{ question: Question }> = ({ question }) => {
  const incorrectAnswers = question.incorrect_answers.map(a => ({
    answer: a,
    isCorrect: false
  }));
  const correctAnswer = { answer: question.correct_answer, isCorrect: true };
  const allQuestions = incorrectAnswers.concat(correctAnswer);
  return (
    <React.Fragment>
      {question.correct_answer !== undefined && (
        <React.Fragment>
          <p> {he.decode(question.question)} </p>
          <ul>
            {_.shuffle(allQuestions).map((question, index) => {
              return question.isCorrect ? (
                <em>
                  {" "}
                  <li key={index}> {question.answer} </li>{" "}
                </em>
              ) : (
                <li key={index}> {question.answer} </li>
              );
            })}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default QuestionComp;
