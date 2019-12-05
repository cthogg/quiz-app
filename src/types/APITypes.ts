export interface APICategory {
  id: number;
  name: string;
}

export interface APIQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface APIQuestions {
  response_code: number;
  results: Array<APIQuestion>;
}

export interface APICategories {
  trivia_categories: Array<APICategory>;
}
