// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// const https = require('node:https');

// var requestUrl = 'https://api.github.com/licenses/apache-2.0';

// https.get('https://api.github.com/licenses/', (resp)=>{

//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(data);
//   });
  
// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });

// TODO: Create an array of questions for user input
const questions = [
	"Project Title: ",
	"Project Description: ",
	"How to install: ",
	"How to use: ",
	"License: ", 
	"How to Contribute: ",
	"How to Test: ",
	"Questions: "
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err ? console.error(err) : console.log("\nREADME successfully created! Find the readme in the 'utils' folder.")
	})
 }

// TODO: Create a function to initialize app
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
					type: "list",
					name: "license",
					message: questions[4],
					choices: ["none", "Apache_2.0", "GNU_General_Public_License_v3.0", "MIT_License", "Boost_Software_License_1.0", "Mozilla_Public_License_2.0"]
			},
			{
				name: "contributing",
				message: questions[5]
			},
			{
				name: "tests",
				message: questions[6]
			},
			{
				name: "questions",
				message: questions[7]
			},
		]).then(function(response){
			// (response) => {}
			const templatePage = generateMarkdown(response);
			writeToFile("./utils/README.md", templatePage)
		})
}

// Function call to initialize app
init();
