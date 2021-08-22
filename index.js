const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateTeamProfile = require('./src/template.js');
const teamArray = [];
// const htmlTemplate = require('./template');


function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What the manager\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What the manager\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What the manager\'s email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What the manager\'s office number?'
            },
        ])
        .then(res => {
            console.log(res);
            const {name, id, email, officeNumber} = res
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
            addTeamMember();
        })
}

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'Which type of team member would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'All done, build team!'
                ]
            }
        ])
        .then(res => {
            switch(res.selection) {
                case 'Engineer': 
                    return addEngineer();
                case 'Intern':
                    return addIntern();
                default:
                    return completeTeam();
            }
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What the engineer\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What the engineers\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What the engineers\'s email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What the engineers\'s github username?'
            },
        ])
        .then(res => {
            console.log(res);
            const {name, id, email, github} = res;
            const engineer = new Engineer(name, id, email, github);
            teamArray.push(engineer);
            addTeamMember();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What the intern\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What the intern\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What the intern\'s email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What the intern\'s school?'
            },
        ])
        .then(res => {
            console.log(res);
            const {name, id, email, school} = res;
            const intern = new Intern(name, id, email, school);
            teamArray.push(intern);
            addTeamMember();
        });
}

function completeTeam() {
    fs.writeFileSync('team-profile.html', generateTeamProfile(teamArray), 'utf-8');
    };
    
    // const writeFile = fileContent => {
    //     return new Promise((resolve, reject) => {
    //         fs.writeFile('./dist/team-profile.html', fileContent, err => {
    //             if (err) {
    //                 reject(err);
    //                 return;
    //             }

    //             resolve({
    //                 ok: true,
    //                 message: 'File created!'
    //             }
    //             )
    //         })
    //     })
    // }
    // writeToFile('team-profile.html', generateTeamProfile(res));
// take team array & find a way to render into html with fs


// const writeFile = fileContent => {
//     return new Promise 
// }

addManager();
