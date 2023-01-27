const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHtml = require("./util/generateHtml.js");
const inquirer = require("inquirer");
const fs = require("fs");

const team = [];

function start() {
  inquirer
    .prompt([
      {
        name: "question",
        type: "list",
        choices: ["Add a new Employee", "Print HTML", "Exit"],
      },
    ])
    .then((answers) => {
      switch (answers.question) {
        case "Add a new Employee":
          console.log("add new Employee");
          newEmployee();
          break;

        case "Print HTML":
          const html = generateHtml(team);
          console.log("print HTML");
          fs.writeFile("./gen/index.html", html, (err) => {
            if (err) {
              throw err;
            }
          });
          break;

        case "Exit":
          console.log("GoodBye!");
          break;
      }
    });
}

function newEmployee() {
  inquirer
    .prompt({
      name: "empType",
      type: "list",
      message: "What type of Employee are you adding?",
      choices: ["Intern", "Engineer", "Manager"],
    })
    .then((ans) => {
      switch (ans.empType) {
        case "Intern":
          console.log("making an Intern");
          makeIntern();
          break;

        case "Engineer":
          console.log("Making an Engineer");
          makeEngineer();
          break;

        case "Manager":
          console.log("Making a Manager");
          makeManager();
          break;
      }
    });
}

function makeIntern() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the employees name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the employees id number?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the employees email address?",
      },
      {
        name: "school",
        type: "input",
        message: "Where does this employee go to school?",
      },
    ])
    .then((ans) => {
      const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
      team.push(intern);
      console.log(team);
      start();
    });
}

function makeEngineer() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the employees name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the employees id number?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the employees email address?",
      },
      {
        name: "gitHubUser",
        type: "input",
        message: "What is this employees GitHub username?",
      },
    ])
    .then((ans) => {
      const engineer = new Engineer(
        ans.name,
        ans.id,
        ans.email,
        ans.gitHubUser
      );
      team.push(engineer);
      console.log(team);
      start();
    });
}

function makeManager() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the employees name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the employees id number?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the employees email address?",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is this employees office number?",
      },
    ])
    .then((ans) => {
      const manager = new Manager(
        ans.name,
        ans.id,
        ans.email,
        ans.officeNumber
      );
      team.push(manager);
      console.log(team);
      start();
    });
}

start();
