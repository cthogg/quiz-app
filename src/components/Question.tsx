import React from 'react'
import he from 'he'
import { Question } from '../App';

const QuestionComp: React.FC<{ question: Question }> = ({ question }) => {
    return (
      <React.Fragment>
        {question.correct_answer !== undefined &&
          <React.Fragment>
  
            <p> {he.decode(question.question)} </p>
            <ul>
              <li>  <em> {question.correct_answer} </em> </li>
              {question.incorrect_answers.map((question, index) =>
                <li key={index}> {question} </li>
              )}
            </ul>
          </React.Fragment>
  
        }
  
      </React.Fragment>
    );
  }

  export default QuestionComp