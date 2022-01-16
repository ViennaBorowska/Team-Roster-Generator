// Packages
const fs = require('fs');
const inquirer = require('inquirer');

//File imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateRoster = require('./src/generateHTML');

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
        validate: (userInput) => {
          if (userInput.length >= 2) {
            return true;
          } else {
            console.log(`Please enter the manager's name!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the team manager's id?`,
        validate: (userInput) => {
          if (userInput.length >= 1) {
            return true;
          } else {
            console.log(`Please enter the manager's ID!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the team manager's email?`,
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter a valid e-mail address!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNum',
        message: `What is the team manager's office number?`,
        validate: (userInput) => {
          if (userInput.length >= 11) {
            return true;
          } else {
            console.log(
              `Please enter a valid telephone number!(11 digits minimum, area code required)`
            );
            return false;
          }
        },
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
          writeToFile('dist/myTeam.html', generateRoster(myTeam));
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
        validate: (userInput) => {
          if (userInput.length >= 2) {
            return true;
          } else {
            console.log(`Please enter a name for the engineer!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
        validate: (userInput) => {
          if (userInput.length >= 1) {
            return true;
          } else {
            console.log(`Please enter an ID for the engineer!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter a valid e-mail address!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: (userInput) => {
          if (userInput.length >= 1) {
            return true;
          } else {
            console.log(`Please enter a GitHub username for the engineer!`);
            return false;
          }
        },
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
          writeToFile('/dist.html', generateRoster(myTeam));
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
        validate: (userInput) => {
          if (userInput.length >= 2) {
            return true;
          } else {
            console.log(`Please enter a name for the intern!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
        validate: (userInput) => {
          if (userInput.length >= 1) {
            return true;
          } else {
            console.log(`Please enter an ID for the intern!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log(`Please enter a valid e-mail address for the intern!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        validate: (userInput) => {
          if (userInput.length >= 2) {
            return true;
          } else {
            console.log(
              `Please enter a school/college/university for this intern!`
            );
            return false;
          }
        },
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
          writeToFile('dist/myTeam.html', generateRoster(myTeam));
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
