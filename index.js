// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const managerQuestions = require('./utils/managerQuestions');
const Manager = require("./lib/Manager")

const team = []
// TODO: Create an array of questions for user input
//create 4 enquiere, manager, enginerr, intern, options - add new member -engineer, intern or none
//require each class, create your own isntance from class, add it to var array of all meembers, pass this variable to generate html
// const managerQuestions = [
//     {
//         type: 'input',
//         message: 'What is your Name?',
//         name: 'name',
//       },
//       {
//           type: 'input',
//           name: 'id',
//           message: 'What is your ID?',
//         },
//         {
//           type: 'input',
//           name: 'email',
//           message: 'What is your email?',
//         },
//         {
//           type: 'list',
//           name: 'role',
//           message: 'What is your role?',
//           choices: [
//               'Manager',
//               'Engineer',
//               'Intern',
//               'None',
//           ]
//         },
//         {
//           type: 'input',
//           name: 'github',
//           message: 'What is your github?',
//         },
//         {
//           type: 'input',
//           name: 'school',
//           message: 'What school did you go to?',
//         },
//         {
//           type: 'input',
//           name: 'githubUsername',
//           message: 'What is your Github username?',
//         },
// ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, function(err){
        err ? console.error(err) : console.log('Success!')});
}

// TODO: Create a function to initialize app
function init() {

  //addManager function call
  addManager()

  
  //   inquirer
  //   .prompt(questions)
  //   .then((response) => {

  //       console.log("Now generating your index.html ...");
  //       writeToFile("/dist/index.html", generateHTML(response))
  // });
}

function addManager() {

  inquirer
  .prompt(managerQuestions)
  .then((response) => {
      const newManager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
      )
  // return newManager;
    team.push(newManager)
    console.log(team)
    nextQuestion()

      // console.log("Now generating your index.html ...");
      // writeToFile("/dist/index.html", generateHTML(response))
});
}

function nextQuestion() {
  console.log('Next Question');
  // prompt that asks to run addEngineer() addIntern() or finishTeam()
}

// Function call to initialize app
init();
