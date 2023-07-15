// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "Project Title: ",
    "Project Description: ",
    "How to install: ",
    "Usage: ",
    "Credits: ",
    "Future Challenges: ",
    "License: "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// Add in a welcome page and instructions
function init() {
    console.log("\nThank you for using the README Generator! \nPlease fill in the following prompts to make your professional readme.\n")
    inquirer
        .prompt([
            {
                name: "title",
                message: questions[0]
            },
            {
                name: "description",
                message: questions[1]
            },
            {
                name: "install",
                message: questions[2]
            },
            {
                name: "usage",
                message: questions[3]
            },
            {
                name: "credits",
                message: questions[4]
            },
            {
                name: "challenges",
                message: questions[5]
            },
            {
                type: "list",
                name: "license",
                message: questions[6],
                choices: ["none", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "Boost Software License 1.0", "Mozilla Public License 2.0"]
            },
        ])
}

// Function call to initialize app
init();
