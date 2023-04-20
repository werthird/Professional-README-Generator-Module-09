//Included packages needed for this application
const genMark = require('./utils/generateMarkdown.js');
const questions = require('./utils/questions.js');
const fs = require('fs');
const inquirer = require('inquirer');


// Function to write README file
function writeToFile(answers) {
  fs.writeFile('README.md', genMark(answers), (err) =>
    err ? console.log(err) :console.log('Success!')
  );
}


// Function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile(answers);
  })
}


// Function call to initialize app
init();