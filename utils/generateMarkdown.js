// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none"){
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none"){
    return ``
  } else {
    return `This README Generator is covered under the ${license} License.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [How to Test](#how-to-test)
  - [Questions](#questions)
  ${data.license === "none" ? ``: `- [License](#license)`}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## How to Contribute
  ${data.contributing}

  ## License
  ${renderLicenseSection(data.license)}

  ## How to Test
  ${data.tests}

  ## Questions
  ${data.questions}`
}

module.exports = generateMarkdown;
