const generateTeamCards = (team) => {
    const generateManagerCard = manager => {
        return `
        <div class="card col-md-4">
            <div class="card-header">
                <h2>${manager.getName()}</h2>
                <h3> <i class="fas fa-coffee"></i> ${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: ${manager.getEmail()}</li>
                    <li>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>  
            </div>
        </div>
    `
    }

    const generateEngineerCard = engineer => {
        return `
        <div class="card col-md-4">
            <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3> <i class="fas fa-glasses"></i> ${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: ${engineer.getEmail()}</li>
                    <li>Github: ${engineer.getGithub()}</li>
                </ul>  
            </div>
        </div>
    `
    }

    const generateInternCard = intern => {
        return `
        <div class="card col-md-4">
            <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3> <i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li>ID: ${intern.getId()}</li>
                    <li>Email: ${intern.getEmail()}</li>
                    <li>School: ${intern.getSchool()}</li>
                </ul>  
            </div>
        </div>
    `
    }


    const html = [];
    for (const employee of team) {
        let role = employee.getRole();
        switch(role) {
            case "Manager":
            html.push(generateManagerCard(employee))
            break;
            case "Engineer":
            html.push(generateEngineerCard(employee))
            break;
            case "Intern":
            html.push(generateInternCard(employee))
            break;
        }
        
    }
    return html.join("");
};

module.exports = res => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./src/style.css">
        <title>Team Profile</title>
        </head>

        
        <body>
        <header>
            <div class="header-container">
                <h1 id="title">My Team</h1>
            </div>
        </header>
        <div class="container">
            <div class="col-md-12 d-flex justify-content-center">${generateTeamCards(res)}</div>
        </div>
        </body>
    </html>
    `;
};