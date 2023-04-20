// Array of questions for user input
const questions = [
  {//PROJECT NAME
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    initial: 'Project Title'
  },
  {//DESCRIPTION
    type: 'editor',
    message: 'Provide a short description. NOTE: Save the file when finished!',
    name: 'description'
  },
  {//STATUS LIST
    type: 'list',
    message: 'What is your projects current status?',
    name: 'status',
    choices: ['Upcoming', 'Pending', 'Active', 'MVP', 'Completed', 'On Hold', 'Canceled'],
  },
  {//GITHUB REPO
    type: 'input',
    message: 'What is the full URL like to the projects GitHub Repo?',
    name: 'github'
  },
  {//DEPLOYED SITE
    type: 'input',
    message: 'Provide the full URL to the finished deployed site.',
    name: 'webpage'
  },
  {//INSTALLATION
    type: 'input',
    message: 'Provide any special installation instructions.',
    name: 'installation'
  },
  {//USAGE
    type: 'editor',
    message: 'Give a brief walk through on how to use your site. NOTE: Make sure to save!',
    name: 'usage'
  },
  {//LICENSE
    type: 'list',
    message: 'Select a license type.',
    name: 'license',
    choices: ['Apache', 'MIT', 'BSD', 'Unlicense'],
  },
  {//CONTRIBUTING
    type: 'input',
    message: 'Provide any contributing guidelines for other developers.',
    name: 'contributing'
  },
  {//TESTS
    type: 'input',
    message: 'Provide any test instructions for the users.',
    name: 'test'
  },
  {//CONTRIBUTERS
    type: 'input',
    message: 'List the authors of this project.',
    name: 'contributors'
  },
  {//ACKNOWLEDGEMENTS
    type: 'input',
    message: 'Also, list any acknowledgments or third part resources for this project.',
    name: 'acknowledgements'
  },
  {//GITHUB USERNAME
    type: 'input',
    message: 'Provide your GitHub username, to link to your profile.',
    name: 'username'
  },
  {//EMAIL
    type: 'input',
    message: 'Enter the email you want others to contact you with.',
    name: 'email'
  },
];

module.exports = questions;