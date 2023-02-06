The tools I used for this solution are React, Typescript and React testing library. The initial solution I thought about was to check the multiples for each selected number and then filter the common multiples. That solution could work, however I found it not to be efficient. Therefore, my final solution was to get the least common multiple of the selected numbers and based on that to find the multiples. This solution is also easier to scale, as we can find the multiples of more than two numbers.
What I would have liked to improve are:

- the way the information is displayed when there are multiples, or when there are no multiples. For now I just added some information at the top of the page, however if you are on mobile you have to scroll to the top to get clarification about the multiples
- I think overall UI/UX can be improved, as is very hard to see in a glance the multiples
- the styling solution can be improved, in the sense that we can have css variables for the colors, and a more robust way of using the styles
- finding another solution for testing how the selected numbers and the multiples are displayed
- find a better solution for testing the selected numbers and multipliers, if we are to add another button in the Multiplication component, all the tests need to me amended to accomodate the new change
- rename some of the components/variables used so is much clearer when reading the code

# Which? Front-end Exercise

This repository provides information and a project boilerplate for completing the test exercise sent to candidates applying for front-end roles at Which?.

## Getting up and running

This repository provides a starting point for the test but if you'd rather start from scratch with your own setup that's fine too, as long as you complete [the exercise](#the-exercise).

We have provided a [Webpack] and [Babel] based development environment which can compile and bundle your source code. It also includes a [server] which will automatically reload your code changes in the browser.

Which? primarily uses [React] and [TypeScript] in our front-end projects but you can use vanilla JavaScript or other tools if you prefer. We have not provided any tooling to work with anything beyond vanilla JavaScript.

We have provided [Jest] to test your code which is a fully featured testing framework. It includes a test runner, assertions, and mock functions.

[react]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/
[server]: https://github.com/webpack/webpack-dev-server
[jest]: https://jestjs.io/

### Requirements

To get started you'll need to make sure you have the following software tools installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (version 12 or higher is required)
- [npm](http://npmjs.com/) (this should be installed along with Node.js)

### Installation and setup

1. Clone this Git repository and change to the new directory that has been created:

   ```sh
   git clone https://github.com/whichdigital/fe-techtest.git --depth 1
   cd fe-techtest
   ```

2. Install all of the project dependencies using npm:

   ```sh
   npm install
   ```

3. Once installed you can run the Webpack development server:

   ```sh
   npm start
   ```

   Now open [http://localhost:8080/](http://localhost:8080/) in your browser and you should see a basic HTML page.

   If you open the developer console in the browser, you should see a welcome message which confirms everything is loading and running correctly.

   To stop the server when no longer needed, you can press <kbd>ctrl</kbd> + <kbd>c</kbd> in the terminal.

4. And to run your tests use the following command:

   ```sh
   npm test
   ```

## The exercise

### Goal

We would like you to create a client-side web application to help a child understand multiplication. Your application will display a grid of numbers. When a child selects a number, the multiples of that chosen number should be highlighted.

### Functional requirements

- The application must display numbers from 1 to 144.
- When a number is clicked, all numbers which are a multiple of the chosen number must be highlighted.
- When a subsequent number is clicked, all numbers which are a multiple of the new number must be highlighted. Any numbers which are **not** multiples of the new number should no longer be highlighted.

### Visual requirements

- Each number must be within a large clickable box.
- Each number must be horizontally and vertically centered within their clickable box.
- The boxes must be laid out evenly within a grid.
- On mobile and small screen devices, one number must be displayed in each grid row.
- On tablet and middle sized devices, two numbers must be displayed in each grid row.
- On desktop and large screen devices, three numbers must be displayed in each grid row.
- The grid should have a maximum width so that the clickable boxes do not get too large.
- The grid should be horizontally centered on the screen.

### Other

We'd appreciate it if you could update this readme with additional information about your solution. Things to mention might include the tools used, alternative solutions considered, improvements you'd like to make, or things you'd do differently if you had more time.

### Criteria for assessment

Your completed test exercise will be marked according to a score sheet. We will focus on the following areas:

- That your solution meets the requirements.
- How usable your application is when using assistive technology.
- Your approach to testing the application.
- The use of responsive design.
- Clear project structure and conventions.
- How readable and understandable your code is.
- The performance of your completed application.

You won’t be assessed on the appearance of the app beyond the visual requirements and accessibility criteria.
