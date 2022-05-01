// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const managerQuestions = require("./utils/managerQuestions");
const Manager = require("./lib/Manager");

const engineerQuestions = require("./utils/engineerQuestions");
const Engineer = require("./lib/Engineer");

const internQuestions = require("./utils/internQuestions");
const Intern = require("./lib/Intern");

const nextQuestion = require("./utils/nextQuestion");


const team = [] //array that I push team members to
// TODO: Create an array of questions for user input
//create 4 enquiere, manager, enginerr, intern, options - add new member -engineer, intern or none
//require each class, create your own isntance from class, add it to var array of all meembers, pass this variable to generate html

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, function(err){
        err ? console.error(err) : console.log('Success!')});
}

// TODO: Create a function to initialize app
function init() {
  //addManager function call
  addManager()
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
    team.push(newManager);
    console.log(team);
    nextTeamMember();


});
}

function addEngineer() {

  inquirer
  .prompt(engineerQuestions)
  .then((response) => {
    const newEngineer = new Engineer (
      response.name,
      response.id,
      response.email,
      response.github
    )
    team.push(newEngineer);
    console.log(team);
    nextTeamMember();
  });
}

  function addIntern () {
    
    inquirer
    .prompt(internQuestions)
    .then((response) => {
    const newIntern = new Intern (
      response.name,
      response.id,
      response.email,
      response.school
    )
    team.push(newIntern);
    console.log(team);
    nextTeamMember();
  });
  }

    function finishTeam () {

      console.log("Now generating your index.html ...");
      writeToFile("/dist/index.html", generateHTML(response))

}

function nextTeamMember() {
  console.log('Next Question');
  // prompt that asks to run addEngineer() addIntern() or finishTeam()
  inquirer
  .prompt(nextQuestion)
  .then((response) => {

    if (response.role == "Engineer") {
      addEngineer();
    } else if (response.role == "Intern") {
      addIntern();
    } else {
      finishTeam();
    }
});
}

// Function call to initialize app
init();
