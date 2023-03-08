const inquirer = require('Inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const html = require('./templates/testhtml.js')




let cardInfo = ``;
let team = [];

async function generate() {
    try {
        await givePrompt()

        for (let i = 0; i < team.length; i++) {
            cardInfo = cardInfo + html.createCard(team[i]);
        }

        let htmlOutput = html.htmlTemplate(cardInfo);

        fs.writeFile('index.html', htmlOutput, (err) =>
    err ? console.log(err) : console.log("Success!"));
    } catch (err) {
        console.log(err);
    }

    

    
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
                    message: "What is the employee's office number?",
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