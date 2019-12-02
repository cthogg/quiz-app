# Quizmaster App
- An app to help quizmasters generate a quiz.

[![Netlify Status](https://api.netlify.com/api/v1/badges/53180c2e-e4d9-4657-8e3d-f2c69fb38016/deploy-status)](https://app.netlify.com/sites/mystifying-roentgen-274bc4/deploys)

## Commands
- install `yarn `
- run `yarn start`

## What it shows
- Dropdown that enables a user to select a category. 
- If the category is selected or changed fetch a number of questions from the API and display the following information in a table: the question itself, the category and the difficulty. 
- A user should be able to select a question by clicking on it so he/she can see the entire questionand the associated answers.
- I decided to use Typescript as a nice exercise for me.

## If I had more time
- add eslint and typescript checks to ci. 
- add backend sanitizer for better types.
- Add 'any' to the choose a category dropdown and make this show at default.
- Abbreviating any information that is too long. 
- For this the question should be displayed on another page that shows the question and the possible answers with the correct answer being highlighted.
- Splitting up the components into separate things. 
- Improving the styles (e.g highlighted row, cusor to pointer on the table)
- Decoding the question data from the api at source rather than at the end to have only one place where the `he` dependency is.
- Write tests in React Testing Library and Cypress.
- Randomise the answers (at the moment the correct answer is always highlighted) 
- Change the favicon and page title
- adding eslint and prettier.7
- add a better ci client for example Circle CI. At the moment it uses the netlify command yarn test:ci && yarn build
- accessibility
- lighthouse score.
- look at bug in incorrect_answers.map JoJo&#039;s Bizarre Adventure 
- show if no response.