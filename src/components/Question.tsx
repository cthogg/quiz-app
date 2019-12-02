import React from "react";
import he from "he";
import { Question, Answer } from "../frontendTypes";
import _ from "lodash";
const QuestionComp: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <section className="section">
      <div className="card">
        {question !== undefined && (
          <div className="card-content">
            <div className="content">
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionComp;
