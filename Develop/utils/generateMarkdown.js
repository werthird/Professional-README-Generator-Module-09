// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // this will use data passed in from generateMarkdown function. have a logic gate to make sure a license was chosen.
  return `https://img.shields.io/badge/license-${license}-blue`
}

// TODO: Create a function that returns the license link - this is internally in the .md file...a link to the license section
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // this will use data passed in from generateMarkdown function. have a logic gate to make sure a license was chosen.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // this will use data passed in from generateMarkdown function.  have a logic gate to make sure a license was chosen.
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `<header style="height: 80px; background: linear-gradient(to right, #6268f2, #23d0ee);"><h1 style="font-size: 60px; text-align: center; color: black"><strong>${data.title}</strong></h1></header>

<br />
<br />

> # [Description](#description)
${data.description}

<br />
<br />

---

> # Table of Contents
- [Description](#description)
- [Getting Started](#getting-started)
  - [Project Status](#project-status)
  - [Installation](#installation)
  - [Useage](#useage)
  - [License](#license)
  - [Contributing Guidelines](#contributing)
  - [Test Instructions](#test)
- [Credits](#credits)
  - [Contributors](#contributors)
  - [Acknowledgements](#acknowledgements)
- [Questions](#questions)

<br />
<br />

---

> # [Getting Started](#getting-started)

<br />

## [Project Status](#project-status)
    ${data.status}

Checkout our <a href="${data.github}">GitHub Repo.</a> 

Link to <a href="${data.webpage}">Deployed Site.</a>

<br />

## [Installation](#installation)
${data.installation}

<br />

## [Useage](#useage)
${data.usage}

<br />

## [License](#license)
${data.license}

<br />

## [Contributing Guidelines](#contributing)
${data.contributing}

<br />

## [Test Instructions](#test)
${data.test}

<br />
<br />

---

> # [Credits](#credits)

<br />

## [Contributors](#contributors)
${data.contributors}

<br />

## [Acknowledgements](#acknowledgements)
${data.acknowledgements}

<br />
<br />

---

> # [Questions](#questions)

Here is a link to our <a href="https://github.com/${data.username}">GitHub profile page!</a>

Or send us an <a href="mailto: ${data.email}?subject=Feedback">Email!</a>

---

# Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
`;
  // you will need to use the license functions in here ^, passing data to the functions you call -- licenseFunction(data.license)
}

module.exports = generateMarkdown;