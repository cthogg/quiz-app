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

const convertBackedAnswersToFrontendAnswers = (
  backendAnswers: string[],
  isCorrect = false
): Answer[] => {
  return backendAnswers.map(answer => ({
    answer: answer,
    isCorrect: isCorrect
  }));
};

export const convertBackendQuestionsToFrontendQuestions = (
  questions: APIQuestions
): Question[] => {
  return questions.results.map(question => ({
    question: question.question,
    category: question.category,
    difficulty: question.difficulty,
    answers: convertBackedAnswersToFrontendAnswers(
      question.incorrect_answers
    ).concat(convertBackedAnswersToFrontendAnswers([question.correct_answer]))
  }));
};
