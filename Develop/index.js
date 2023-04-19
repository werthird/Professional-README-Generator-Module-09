// TODO: Include packages needed for this application
const genMark = require('./utils/generateMarkdown.js');
const questions = require('./utils/questions.js');
const fs = require('fs');
const inquirer = require('inquirer');
// generateMarkdown, fs, inquirer@8.2.4


// // TODO: Create an array of questions for user input
// const questions = [
//   {
//     type: 'input',
//     message: 'Enter the title for your project.',
//     name: 'title'
//   }
// ];



// TODO: Create a function to write README file
function writeToFile(answers) {
  fs.writeFile('README.md', genMark(answers), (err) =>
    err ? console.log(err) :console.log('Success!')
  );
    // return the writeFile method using fileName and data being passed in
}


// TODO: Create a function to initialize app
function init() {

    // inquirer goes in here -> questions passed as argument --- .then call back function (writeToFile(){}) will will use generateMarkdown as data source --- pass data from inquirer into this!! how is spread operator to be used in this?

  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile(answers);
  })
}

// Function call to initialize app
init();