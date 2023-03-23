
function renderLicenseBadge(license) {
  if (license === "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 2-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "The MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "The Unilicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else if (license === "") {
    return "";
  }
}
function renderLicenseLink(license) {
  if (license === "Apache 2.0 License") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 2-Clause License") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "The MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "The Unilicense") {
    return "(http://unlicense.org/)";
  } else if (license === "") {
    return "";
  }
}
function renderLicenseSection(license) {}
// Final function
function collectReadme(data) {
  return `# ${data.name}
  ## Table of Contents
  *[Final function](#final-function)
  *[setup Instructions](#setup)
  *[${renderLicenseLink(data.License)}](#License)
  *[Questions](#questions)
  ## Description
  ${data.description}
  ## setup
  ${data.setup}
  ## License 
  ${data.license}
  ## Questions
  - Github: ${data.Github}
  - Email: ${data.email}
  `;
}
module.exports = collectReadme;
