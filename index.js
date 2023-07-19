const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

const output = [];
// An array of questions for user input
const questions = [
	{
		name: "title",
		message: "Project Title: "
	},
	{
		name: "description",
		message: "Project Description: "
	},
	{
		name: "install",
		message: "How to Install: "
	},
	{
		name: "usage",
		message: "How to use: "
	},
	{
		type: "list",
		name: "license",
		message: "Choose a License: ",
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
		"The_Unlicense"],
		loop: false,
	},
	{
	name: "credits",
	message: "List Collaborators: "
	},
	{
	name: "contributing",
	message: "How others can contribute: "
	},
	{
	name: "tests",
	message: "How to test the program: "
	},
	{
	name: "github",
	message: "Your GitHub Username: "
	},
	{
	name: "email",
	message: "Your email: "
	}
];

// const furtherQuestions = [
// 	"What was your motivation? ",
// 	"Why did you build this project? ",
// 	"What problem does it solve? ",
// 	"What did you learn? ",
// 	"What makes your project stand out? "
// ]

// A function to write the README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err ? console.error(err) : console.log("\nYour README was successfully created in a folder titled 'readmeFolder'!\nThis folder is in the file directory where you ran the Readme Generator.\n")
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
		.prompt(questions).then(function(response){
			const templatePage = generateMarkdown(response);
			const folderName = './readmeFolder';

			// Creates a folder to put the readme file into
			if (!fs.existsSync(folderName)) {
				fs.mkdirSync(folderName);
			} 
			
			writeToFile("./readmeFolder/README.md", templatePage)
		})
}

// A function call to initialize the readme generator
init();
