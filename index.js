// Library
let inquirerLib = require('inquirer')
let fileSystem = require('fs')
let collectReadme = require('./collectReadme.js')
//Collecting the questions  
inquirerLib
    .prompt([
        {
            type: 'input',
            message: 'What is the project name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Describe your project!',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How to setup the project?:',
            name: 'setup',
        },
        {
            type: 'list',
            message: 'What is your preference license?',
            choices: ['Apache 2.0 License', 'BSD 2-Clause License', 'The MIT License', "The Unilicense"],
            name: 'license',
        },

        {type: 'input',
        message: 'Input your github ID',
        name: 'Github',
            
        },

        {
            type: 'input',
            message: 'What is your name and Email address?',
            name: 'email',
        },
    ])
    
    .then((responses) => 
        {console.log(responses)
        fileSystem.writeFile('README.md', collectReadme(responses), (err) =>
        err ? console.log(err) : console.log("done")
        )
});