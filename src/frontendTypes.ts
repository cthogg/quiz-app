import { APIQuestions } from "./APITypes";

export interface Answer {
  answer: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  category: string;
  difficulty: string;
  answers: Answer[];
}

const convertBackendQuestionsToFrontendQuestions = (
  questions: APIQuestions
) => {
  return true;
};
