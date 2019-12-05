import { APIQuestions, APICategories } from "./APITypes";
import he from "he";

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

export interface Category {
  id: number;
  name: string;
}

const convertBackedAnswersToFrontendAnswers = (
  backendAnswers: string[],
  isCorrect = false
): Answer[] => {
  return backendAnswers.map(answer => ({
    answer: he.decode(answer),
    isCorrect: isCorrect
  }));
};

export const convertBackendQuestionsToFrontendQuestions = (
  questions: APIQuestions
): Question[] => {
  return questions.results.map(question => ({
    question: he.decode(question.question),
    category: he.decode(question.category),
    difficulty: he.decode(question.difficulty),
    answers: convertBackedAnswersToFrontendAnswers(
      question.incorrect_answers
    ).concat(
      convertBackedAnswersToFrontendAnswers([question.correct_answer], true)
    )
  }));
};

export const convertBackendCategoriesToFrontendCategories = (
  categories: APICategories
): Category[] => {
  return categories.trivia_categories.map(category => ({
    ...category
  }));
};
