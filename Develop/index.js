// TODO: Include packages needed for this application
const genMark = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');
// generateMarkdown, fs, inquirer@8.2.4


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter the title for your project.',
    name: 'title'
  },
  {
    type: 'editor',
    message: 'Provide a short description. NOTE: Save the file when finished!',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Define the current status.',
    name: 'status'
  },
  {
    type: 'input',
    message: 'Enter any installation instructions.',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Provide any usage information.',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'Select a license type.',
    name: 'license',
    choices: ['Apache', 'MIT', 'BSD', 'Unlicensed'],
  },
  {
    type: 'input',
    message: 'Provide any contributing guidelines for other developers.',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'Provide any test instructions for the users.',
    name: 'test'
  },
  {
    type: 'input',
    message: 'List the authors of this project.',
    name: 'author'
  },
  {
    type: 'input',
    message: 'Also, list any acknowledgments for this project.',
    name: ''
  },
  {
    type: 'input',
    message: 'Provide your GitHub username.',
    name: 'username'
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // return the writeFile method using fileName and data being passed in
}


// TODO: Create a function to initialize app
function init() {

    // inquirer goes in here -> questions passed as argument --- .then call back function (writeToFile(){}) will will use generateMarkdown as data source --- pass data from inquirer into this!! how is spread operator to be used in this?
}

// Function call to initialize app
init();