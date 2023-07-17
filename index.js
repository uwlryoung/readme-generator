const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [
	"Project Title: ",
	"Project Description: ",
	"How to install: ",
	"How to use: ",
	"License: ", 
	"How to Contribute: ",
	"How to Test: ",
	"GitHub Username: ",
	"Email: "
];

// A function to write the README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err ? console.error(err) : console.log("\nREADME successfully created! Find the readme in the 'utils' folder.")
	})
 }

// A function that initializes app and asks for user input
function init() {
	console.log(`												 
╦═╗┌─┐┌─┐┌┬┐┌┬┐┌─┐  ╔═╗┌─┐┌┐┌┌─┐┬─┐┌─┐┌┬┐┌─┐┬─┐
╠╦╝├┤ ├─┤ │││││├┤   ║ ╦├┤ │││├┤ ├┬┘├─┤ │ │ │├┬┘
╩╚═└─┘┴ ┴─┴┘┴ ┴└─┘  ╚═╝└─┘┘└┘└─┘┴└─┴ ┴ ┴ └─┘┴└─`
  )
	console.log("Thank you for using the README Generator! \nPlease fill in the following prompts to make your professional readme.\n")
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
					choices: ["none", 
					"Apache_2.0_License", 
					"GNU_General_Public_License_v3.0", 
					"MIT_License", 
					"BSD_2_Clause_Simplified_License", 
					"BSD_3_Clause_New_or_Revised_License", 
					"Boost_Software_License_1.0", 
					"Creative_Commons_Zero_v1.0_Universal", 
					"Eclipse_Public_License_2.0", 
					"GNU_Affero_General_Public_License_v3.0",
					"GNU_General_Public_License_v2.0",
					"GNU_Lesser_General_Public_License_v2.1",
					"Mozilla_Public_License_2.0",
					"The_Unlicense"]
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
				name: "github",
				message: questions[7]
			},
			{
				name: "email",
				message: questions[8]
			},
		]).then(function(response){
			const templatePage = generateMarkdown(response);
			writeToFile("./utils/README.md", templatePage)
		})
}

// A function call to initialize the readme generator
init();
