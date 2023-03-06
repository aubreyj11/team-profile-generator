const inquirer = require('Inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

const html = ({name}) => {
   return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=auto, initial-scale=1.0">
    <link rel="stylesheet" href="./Develop/style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="nav-bg">
        <h1>My Team's Profile</h1>
    </nav>
    

</body>
</html>`
}


inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then((data) => {
fs.writeFile('index.html', html(data), (err) => 
    err ? console.log(err) : console.log("Success!") )});



const givePrompt = () => {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter employee name.'
        }
    ])
}