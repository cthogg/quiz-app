import React from "react";
import he from "he";
import { Question, Answer } from "../types/frontendTypes";
import _ from "lodash";
const QuestionComp: React.FC<{
  question: Question;
  questionNumber: number;
}> = ({ question, questionNumber }) => {
  const letterArray: string[] = "ABCDEFGHIJKL".split("");
  return (
    <section className="section">
      <div className="card">
        {question !== undefined && (
          <div className="card-content">
            <div className="content">
              <p>
                {" "}
                {questionNumber}.&nbsp;{he.decode(question.question)}{" "}
              </p>
              <ul>
                {_.shuffle(question.answers).map(
                  (answer: Answer, index: number) => {
                    return answer.isCorrect ? (
                      <li key={index}>
                        {" "}
                        {letterArray[index]} <em> {answer.answer} </em>{" "}
                      </li>
                    ) : (
                      <li key={index}>
                        {" "}
                        {letterArray[index]} {answer.answer}{" "}
                      </li>
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
