const inquirer = require('Inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');


let cardInfo = ``;
let team = [];

const html = function(cardInfo) {
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
    
    ${cardInfo}

</body>
</html>`
};

const createCard = function(Employee) {
    var titleInfo;

    if (Employee.role === 'Manager') {
        titleInfo = `Office Number: ${Manager.officeNum}`
    } else if (Employee.role === 'Intern') {
        titleInfo = `School: ${Intern.school}`
    } else if (Employee.role === 'Engineer') {
        titleInfo = `Github: ${Engineer.github}`;
    }

    return `<div class="card">
    <div class="card-header">
        <h2>${Employee.name}</h2>  
        <h2>${Employee.title}</h2>
        <hr>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${Employee.id}</li>
            <li>Email: ${Employee.email}</li>
            <li>${titleInfo} </li>
        </ul>
    </div>
    </div>`
};

async function generate() {
    try {
        await givePrompt()

        for (let i = 0; i < team.length; i++) {
            cardInfo = cardInfo + html.createCard(team[i]);
        }
    } catch (err) {
        console.log(err);
    }

    fs.writeFile('index.html', html(cardInfo), (err) =>
    err ? console.log(err) : console.log("Success!"));
};




async function givePrompt() {
    let finishedResponse = '';

    do {
        try{
            response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter employee name:'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter employee's ID:"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter employee's email:"
                },
                {
                    type: 'list',
                    name: 'title',
                    message: "What is this employee's role?",
                    choices: ["Engineer", "Intern", "Manager"]
                }
            ]);

            let finishedResponse2 = "";

            if (response.title === "Manager") {
                finishedResponse2 = await inquirer.prompt([{
                    type: 'input',
                    name: 'addedInfo',
                    message: "What is the employee's GitHub username?",
                }, ]);

                const manager = new Manager(response.name, response.id, response.email, finishedResponse2.addedInfo);
                team.push(manager);
            } else if (response.title === "Engineer") {
                finishedResponse2 = await inquirer.prompt([{
                    type: 'input',
                    name: 'addedInfo',
                    message: "What is the employee's Github username?"
                }])
                const engineer = new Engineer(response.name, response.id, response.email, finishedResponse2.addedInfo);
                team.push(engineer);
            } else if (response.title === "Intern") {
                finishedResponse2 = await inquirer.prompt([{
                    type: "input",
                    name: 'addedInfo',
                    message: "Where does this employee go to school?"
                }])
                const intern = new Intern(response.name, response.id, response.email, finishedResponse2.addedInfo);
                team.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }   
        
        finishedResponse = await inquirer.prompt([{
            type: 'list',
            name: 'done',
            message: 'Do you want to add another employee to the team?',
            choices: ["Yes", "No"]
        }, ]);

        console.log(team);
    } while (finishedResponse.done === "Yes");
}

generate();