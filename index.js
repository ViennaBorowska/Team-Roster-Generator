// Packages
const fs = require('fs');
const inquirer = require('inquirer');

//File imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateRoster = require('./utils/generateHTML');

//Global variables
const myTeam = [];

//Questions for each role
////Manager Qs
const managerQs = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the team manager's name?`,
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the team manager's id?`,
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the team manager's email?`,
      },
      {
        type: 'input',
        name: 'officeNum',
        message: `What is the team manager's office number?`,
      },
      {
        type: 'list',
        name: 'newMember',
        message: `What type of team member would you like to add?`,
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((managerAns) => {
      const manager = new Manager(
        managerAns.id,
        managerAns.name,
        managerAns.email,
        managerAns.officeNum
      );
      myTeam.push(manager);
      switch (managerAns.newMember) {
        case 'Engineer':
          engineerQs();
          break;
        case 'Intern':
          internQs();
          break;
        default:
          writeToFile('Team-Roster/myTeam.html', generateRoster(myTeam));
      }
    });
};

const engineerQs = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
      },
      {
        type: 'list',
        name: 'newMember',
        message: 'What type of team member would you like to add next?',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((engineerAns) => {
      const engineer = new Engineer(
        engineerAns.id,
        engineerAns.name,
        engineerAns.email,
        engineerAns.github
      );
      myTeam.push(engineer);
      switch (engineerAns.newMember) {
        case 'Engineer':
          engineerQs();
          break;
        case 'Intern':
          internQs();
          break;
        default:
          writeToFile('/myTeam.html', generateRoster(myTeam));
      }
    });
};

const internQs = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
      },
      {
        type: 'list',
        name: 'newMember',
        message: 'What type of team member would you like to add next?',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((internAns) => {
      const intern = new Intern(
        internAns.id,
        internAns.name,
        internAns.email,
        internAns.school
      );
      myTeam.push(intern);
      switch (internAns.newMember) {
        case 'Engineer':
          engineerQs();
          break;
        case 'Intern':
          internQs();
          break;
        default:
          writeToFile('Team-Roster/myTeam.html', generateRoster(myTeam));
      }
    });
};

managerQs();

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('file saved');
  });
}
