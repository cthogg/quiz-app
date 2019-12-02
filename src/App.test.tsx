import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";
import CategoryList from "./components/CategoryList";
import QuestionsTable from "./components/QuestionsTable";
import { APICategories, APIQuestion } from "./APITypes";
import { Question } from "./frontendTypes";

const cat: APICategories = {
  trivia_categories: [
    {
      id: 343,
      name: "bob"
    }
  ]
};
it("Category List renders correctly", () => {
  const tree = renderer
    .create(
      <CategoryList categories={cat} change={() => "hi"}>
        {" "}
      </CategoryList>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const exampleResults: Question[] = [
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the Super Mario Bros. Series, what is Yoshi&#039;s scientific name?",
    answers: [
      { answer: "T. Yoshisaur Munchakoopas", isCorrect: true },
      { answer: "Yoshi", isCorrect: false },
      { answer: "T. Yoshisotop Munchakoopas", isCorrect: false },
      { answer: "Yossy", isCorrect: false },
      { answer: "Anne Boleyn", isCorrect: false }
    ]
  },
  {
    category: "History",
    difficulty: "medium",
    question: "Which of his six wives was Henry VIII married to the longest?",
    answers: [
      { answer: "Catherine of Aragon", isCorrect: true },
      { answer: "Jane Seymour", isCorrect: false },
      { answer: "Anne Boleyn", isCorrect: false },
      { answer: "Catherin Parr", isCorrect: false },
      { answer: "Anne Boleyn", isCorrect: false }
    ]
  }
];

it("Questions Table Renders Correctly", () => {
  const tree = renderer
    .create(
      <QuestionsTable onRowClick={() => null} questions={exampleResults}>
        {" "}
      </QuestionsTable>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly", () => {
  const tree = renderer.create(<App> </App>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
