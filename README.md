# Quizpro

https://quizpro.netlify.com/

An app to help quiz masters generate a quiz which they can read aloud to their friends or family.

[![Netlify Status](https://api.netlify.com/api/v1/badges/53180c2e-e4d9-4657-8e3d-f2c69fb38016/deploy-status)](https://app.netlify.com/sites/mystifying-roentgen-274bc4/deploys)

## Requirements
- node (tested on version 8.15.1)
- yarn (tested on version 1.13.0)

## Commands
- install `yarn `
- run `yarn start`

## User Stories
- As a user, when I visit the page for the first time, then I can see a dropdown with a list of available categories.
- As a user, when I visit the page for the first time, then I can see 10 questions from the general knowledge category, with possible answers and the correct answer of each question highlighted.
- As a user when I click on the dropdown then I can see a list of available categories
- As a user of when I click on a category then I can see 10 questions of that category, with the correct answer of each question highlighted.

## Design Philosophy
- Testing. I find snapshot testing and easy and quick way to spot visual regressions. Also code which is easy to test is often better designed code. So it adding tests raises the bar in coding standards. 
- Automation: CI with Circle CI. Can spot regressions especially when working across the team. Husky: so you are not committing or pushing code which fails tests. Also with a VSCode Snippet. Prettier and eslint makes the sty consistent.
- Easy to change. Based on a philosophy from the Pragmatic Programmer. Why, for example, I created a conversion layer between the backend and frontend types. 
- Design System: It is good to develop and document a design system to ensure consistencies across teams. Since this project is a prototype I used Bulma CSS framework.
- Design mocks: Use Figma to draft out some ideas and give me something to work towards on the design. The simple mock developed [here](https://www.figma.com/file/WXZ09qKPbKVMOjBgP7JXHp/Quiz-Master?node-id=0%3A1) took me 10 minutes to create. 
- Documentation: If I had more time I would add some architectural decision records within the repository. ADRs. To save you looking back and asking, why do we use this library? Why was it made like this? It often forces us to take some time at least on a decision and recognising other ways.

## If I had more time
- Graceful degredation: show error if no response.
- accessibility checks with WHAT Chrome extension and add the required headers. 
- lighthouse score.
- add a better ci client for example Circle CI. At the moment it uses the command `ci:pipeline` which runs linting, typescript and unit tests before building the site.
- Add Storybook. This ensures that components are kept small.
- Write end to end tests using Cypress.


## TODO
- change the padding and margins
- remove console errors.