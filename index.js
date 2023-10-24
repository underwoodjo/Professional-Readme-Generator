// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input

const questions = [
{
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?'
  },
{
    type: 'input',
    name: 'Description',
    message: 'Describe your project'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What installations are needed?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'How do you use this application?'
  },
  {
    type: 'input',
    name: 'Contributions',
    message: 'Who contributed to the project?'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'What are the test instructions?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['MIT', 'Apache 2.0', 'Perl']
  },
  {
    type: 'input',
    name: 'Github',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data,() =>{  
    console.log('Files are written')
})};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => { 
        writeToFile('ReadMe.md', generateMarkdown(answers))
    })
}
// Function call to initialize app
init();
