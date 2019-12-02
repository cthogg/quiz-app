import React from "react";
import he from "he";
import { Question, Answer } from "../frontendTypes";
import _ from "lodash";
const QuestionComp: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <React.Fragment>
      {question !== undefined && (
        <React.Fragment>
          <p> {he.decode(question.question)} </p>
          <ul>
            {_.shuffle(question.answers).map(
              (answer: Answer, index: number) => {
                return answer.isCorrect ? (
                  <em key={index}>
                    {" "}
                    <li> {answer.answer} </li>{" "}
                  </em>
                ) : (
                  <li key={index}> {answer.answer} </li>
                );
              }
            )}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default QuestionComp;
