import React from "react";
import he from "he";
import { Question, Answer } from "../types/frontendTypes";
import _ from "lodash";
const QuestionComp: React.FC<{
  question: Question;
  questionNumber: number;
}> = ({ question, questionNumber }) => {
  const letterArray: string[] = "ABCDEFGHIJKL".split("");
  const [isAnswerTrue, setIsAnswerTrue] = React.useState<null | boolean>(null);
  const borderColorKey = {
    null: "black",
    true: "green",
    false: "red"
  };
  const borderStyle = (isAnswerTrue: null | boolean) => {
    if (isAnswerTrue === null) {
      return "blue";
    }
    if (isAnswerTrue === true) {
      return "green";
    }
    if (isAnswerTrue === false) {
      return "red";
    }
  };

  return (
    <section className={"questionCard"}>
      <div
        className="card"
        style={{ border: `2px solid ${borderStyle(isAnswerTrue)}` }}
      >
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
                      <li key={index} onClick={() => setIsAnswerTrue(true)}>
                        {" "}
                        {letterArray[index]}{" "}
                        <em className="has-text-weight-bold">
                          {" "}
                          {answer.answer}{" "}
                        </em>{" "}
                      </li>
                    ) : (
                      <li key={index} onClick={() => setIsAnswerTrue(false)}>
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
