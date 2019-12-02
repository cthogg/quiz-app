export interface Category {
  id: number;
  name: string;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface Questions {
  response_code: number;
  results: Array<Question>;
}

export interface Categories {
  trivia_categories: Array<Category>;
}
