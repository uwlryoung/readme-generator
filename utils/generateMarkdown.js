// A function that returns answers for further questions about the projects description
function renderFurtherQuestions(furtherDescription, motivation, why, problem, learn, standout){
  if (furtherDescription === true){
    return `\n${motivation} ${why} ${problem} ${learn} ${standout}`
  } else {
    return;
  }
}

// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "none"){
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// A function that returns the license section of README
function renderLicenseSection(license, title) {
  let newLicense = license.replace(/[_&\/\\#,+()$~%'":*?<>{}]/g, ' ');
  if (!newLicense.includes('license') && !newLicense.includes('License') && newLicense !== "The Unlicense"){
    newLicense = newLicense + " License";
  }
  if (license === "none"){
    return ``
  } else {
    return `## License 
  ${title} is covered under the ${newLicense}.`
  }
}

// A function that renders the user's email
function renderEmail(email) {
  if (email === ""){
    return ``
  } else {
    return `If you have any questions, feel free to email ${email}`
  }
}

// A function that renders any future challenges / improvements to the project that the 
// user can input.
function renderChallenges(future, challenges){
  if (future === false){
    return ``;
  } else {
    return `## Challenges and Future Improvements 
  ${challenges}`;
  }
}

// A function that generates markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  ${renderFurtherQuestions(data.furtherDescription, data.motivation, data.why, data.problem, data.learn, data.standout)}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#how-to-contribute)
  ${data.license === "none" ? ``: `- [License](#license)`}
  - [How to Test](#how-to-test)
  - [Questions](#questions)
  ${data.future === false ? ``: `- [Challenges and Future Improvements](#challenges-and-future-improvements)`}


  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## How to Contribute
  ${data.contributing}

  ${renderLicenseSection(data.license, data.title)}

  ## How to Test
  ${data.tests}

  ## Questions
  [GitHub Profile](https://github.com/${data.github})

  ${renderEmail(data.email)}

  ${renderChallenges(data.future, data.addChallenge)}
  `
}

module.exports = generateMarkdown;
