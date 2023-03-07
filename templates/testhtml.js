const htmlTemplate = function (cardInfo) {
    return `<!DOCTYPE html>
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
        <div class="cardContainer">
            ${cardInfo}
        </div>
        
    </body>
    </html>`
};

const createCard = function(emp) {
    var titleInfo;

    if (emp.role === 'Manager') {
        titleInfo = `Office Number: ${Manager.officeNum}`
    } else if (emp.role === 'Intern') {
        titleInfo = `School: ${Intern.school}`
    } else if (emp.role === 'Engineer') {
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

exports.htmlTemplate = htmlTemplate;
exports.createCard = createCard;