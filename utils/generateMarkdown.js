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
    return `${title} is covered under the ${newLicense}.`
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

// A function that generates markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#how-to-contribute)
  ${data.license === "none" ? ``: `- [License](#license)`}
  - [How to Test](#how-to-test)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## How to Contribute
  ${data.contributing}

  ## License
  ${renderLicenseSection(data.license, data.title)}

  ## How to Test
  ${data.tests}

  ## Questions
  [GitHub Profile](https://github.com/${data.github})

  ${renderEmail(data.email)}`
}

module.exports = generateMarkdown;
