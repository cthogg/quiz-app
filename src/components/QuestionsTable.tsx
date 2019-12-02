import React from "react";
import he from "he";
import { Question } from "../frontendTypes";

const QuestionsTable: React.FC<{
  questions: Question[];
  onRowClick: Function;
}> = ({ questions, onRowClick }) => {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th> Question</th>
            <th> Category</th>
            <th> Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {questions &&
            questions.map((question, index) => (
              <tr key={index} onClick={() => onRowClick(question)}>
                <td>{he.decode(question.question)}</td>
                <td>{question.category}</td>
                <td>{question.difficulty}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default QuestionsTable;
