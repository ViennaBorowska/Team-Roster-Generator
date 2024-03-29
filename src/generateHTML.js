//File imports
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function getCards(team) {
  let cardArr = [];
  for (let i = 0; i < team.length; i++) {
    const teamArr = team[i];
    switch (teamArr.getRole()) {
      case 'Manager':
        const manager = new Manager(
          teamArr.id,
          teamArr.name,
          teamArr.email,
          teamArr.officeNumber
        );
        cardArr.push(getManagerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(
          teamArr.id,
          teamArr.name,
          teamArr.email,
          teamArr.github
        );
        cardArr.push(getEngineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(
          teamArr.id,
          teamArr.name,
          teamArr.email,
          teamArr.school
        );
        cardArr.push(getInternCard(intern));
        break;
    }
  }
  return cardArr.join(``);
}

let getManagerCard = (Manager) => {
  return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-danger'>
        <h3 class="card-title">${Manager.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Manager.getId()}</li>
          <li class="list-group-item">Email:<a href="mailto:${
            Manager.getEmail
          }"> ${Manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `;
};

let getEngineerCard = (Engineer) => {
  return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-success'>
        <h3 class="card-title">${Engineer.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-laptop"></i> ${Engineer.getRole()}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${
            Engineer.getEmail
          }">${Engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub:<a href="https://github.com/${Engineer.getGithub()}/" target="_blank"> ${Engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `;
};

let getInternCard = (Intern) => {
  return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-warning'>
        <h3 class="card-title">${Intern.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-graduation-cap"></i> ${Intern.getRole()}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Intern.getId()}</li>
          <li class="list-group-item">Email:<a href="mailto:${
            Intern.getEmail
          }"> ${Intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${Intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;
};

function getTeam(team) {
  console.log(team);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>My Team</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid bg-info">
    <div class="container">
      <h1 class="display-4 text-center">My Team</h1>
    </div>
  </div>
  <div class="d-flex flex-row flex-wrap justify-content-center">
  ${getCards(team)}
  </div>
  </body>
  </html>
      `;
}
//Export for index.js
module.exports = getTeam;
