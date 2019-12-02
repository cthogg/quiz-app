import React from "react";
import he from "he";
import _ from "lodash";
import { Question } from "../frontendTypes";
const QuestionComp: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <React.Fragment>
      {question !== undefined && (
        <React.Fragment>
          <p> {he.decode(question.question)} </p>
          <ul>
            {_.shuffle(question.answers).map((answer, index) => {
              return answer.isCorrect ? (
                <em>
                  {" "}
                  <li key={index}> {answer.answer} </li>{" "}
                </em>
              ) : (
                <li key={index}> {answer.answer} </li>
              );
            })}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default QuestionComp;
