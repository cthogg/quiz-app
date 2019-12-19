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
  const [
    lastAnswerAnswered,
    setLastAnswerAnswered
  ] = React.useState<null | Answer>(null);

  const borderStyle = (isAnswerTrue: null | boolean) => {
    if (isAnswerTrue === null) {
      return "grey";
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
                {_.sortBy(question.answers, q => q.answer).map(
                  (answer: Answer, index: number) => {
                    const onClickFunction = () => {
                      setIsAnswerTrue(answer.isCorrect);
                      setLastAnswerAnswered(answer);
                    };
                    const answerWasLastClicked = answer === lastAnswerAnswered;
                    return (
                      <li
                        className={`answer ${
                          answerWasLastClicked ? "answered" : ""
                        }`}
                        key={index}
                        onClick={onClickFunction}
                      >
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
