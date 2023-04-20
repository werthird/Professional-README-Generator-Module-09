//Included packages needed for this application
const questions = require('./questions.js');


// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBandge = license == 'None' ? '' : `[![${license}](https://img.shields.io/badge/license-${license}-blue)](#license)`;
  return licenseBandge;
}


// Function that returns the license link into table of contents
function renderLicenseLink(license) {
  let licenseLink = license == 'None' ? '' : '- [License](#license)';
  return licenseLink;
}


// Function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSectionMarkdown = 
  `## [License](#license)
  Distributed under the ${license} License. See LICENSE.txt for more information.
  `;
  let licenseSection = license == 'None' ? '' : licenseSectionMarkdown;
  return licenseSection;
}




// Function to generate markdown for README
function generateMarkdown(data) {
return `<header style="height: 100px; background: linear-gradient(to right, #6268f2, #23d0ee);"><h1 style="font-size: 65px; text-align: center"><strong>${data.title}</strong></h1></header>

<br />

${renderLicenseBadge(data.license)}


<br />

> # [Description](#description)
${data.description}

<br />
<br />

---
<details>
<summary style="font-size: 25px">Table of Contents</summary> 

- [Description](#description)
- [Getting Started](#getting-started)
  - [Project Status](#project-status)
  - [Installation](#installation)
  - [Useage](#useage)
  - [Contributing Guidelines](#contributing)
  - [Test Instructions](#test) 
  ${renderLicenseLink(data.license)}
- [Credits](#credits)
  - [Contributors](#contributors)
  - [Acknowledgements](#acknowledgements)
- [Questions](#questions)
</details>

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

## [Contributing Guidelines](#contributing)
${data.contributing}

For any suggestions or comments, please see [Questions](#questions) section below.

<br />

## [Test Instructions](#test)
${data.test}

<br />

${renderLicenseSection(data.license)}

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
`;
}

module.exports = generateMarkdown;